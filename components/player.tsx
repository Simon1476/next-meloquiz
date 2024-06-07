"use client";
import { useCallback, useEffect, useState } from "react";
import useToken from "@/lib/useToken";

import { searchTrack } from "@/api/searchTrack";
import Image from "next/image";

import SpotifyPlayer from "react-spotify-web-playback";

export default function Player() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrack, setcurrentTrack] = useState("");

  const { token, isLoading, isError } = useToken();

  const getCurrentTrack = (currentTrackUri: string) => {
    setcurrentTrack(currentTrackUri);
  };

  const fetchTracks = useCallback(async () => {
    if (searchInput) {
      const response = await searchTrack(searchInput, token);

      setSearchResults(
        response.tracks.items.map(
          (track: {
            name: "";
            uri: "";
            album: {
              name: "";
              images: [
                {
                  url: "";
                }
              ];
            };
          }) => {
            return {
              name: track.name,
              uri: track.uri,
              images: track.album.images[0].url,
              albumName: track.album.name,
            };
          }
        ) || {}
      );
    }
  }, [searchInput, token]);

  useEffect(() => {
    let debounced = setTimeout(() => {
      fetchTracks();
    }, 2000);

    return () => clearTimeout(debounced);
  }, [fetchTracks]);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Type here"
        value={searchInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInput(event.target.value);
        }}
        className="rounded-2xl w-full max-w-xs"
      />
      <div className="pb-24 mt-5 overflow-hidden grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {searchResults.map(
          (
            track: {
              albumName: string;
              images: "";
              name: string;
              uri: string;
            },
            index
          ) => {
            return (
              <div
                key={index}
                className="relative p-5 text-left cursor-pointer "
                onClick={() => getCurrentTrack(track.uri)}
              >
                <Image
                  src={track.images}
                  alt={track.albumName}
                  width={300}
                  height={200}
                />
                <div>
                  <p className="mt-5 text-2xl text-white">{track.albumName}</p>
                  <p className="text-xs text-white">{track.name}</p>{" "}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="fixed bottom-0 w-full">
        {/* <WebPlayback  /> */}
        {token ? (
          <SpotifyPlayer
            token={token}
            // uris={searchResults.map((item: { uri: string }) => item.uri)}
            uris={[currentTrack]}
            styles={{
              bgColor: "#333",
              color: "#fff",
              sliderColor: "#1cb954",
              sliderHandleColor: "#fff",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
            play
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
