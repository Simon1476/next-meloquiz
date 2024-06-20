"use client";
import { useCallback, useEffect, useState } from "react";

import { searchTrack } from "@/api/searchTrack";
import Image from "next/image";

import SpotifyPlayer from "react-spotify-web-playback";
import useToken from "@/hooks/useToken";

import { FaRegBookmark } from "react-icons/fa6";
import LoadingIndicator from "../ui/loading";

export default function Player({ playlistId }: { playlistId: string }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrack, setcurrentTrack] = useState("");

  const { token, isLoading, isError } = useToken();

  const getCurrentTrack = (currentTrackUri: string) => {
    if (currentTrackUri) setcurrentTrack(currentTrackUri);
  };

  const addItemToPlaylist = async (uri: string) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uris: [uri],
            position: 0,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("adding item to Playlist failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
  if (isLoading) return <LoadingIndicator />;
  return (
    <div className="flex flex-col items-center pt-6">
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-80 p-4 ps-10 text-sm text-white border rounded-lg bg-transparent focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            value={searchInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInput(event.target.value);
            }}
          />
        </div>
      </form>

      <div className="pb-24 mt-5 grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
              <div key={index} className="relative p-5 text-left">
                <div className="relative flex flex-col justify-center items-center overflow-hidden h-64">
                  <Image
                    src={track.images}
                    alt={track.albumName}
                    fill={true}
                    className="object-cover rounded-md cursor-pointer xl:object-contain"
                    onClick={() => getCurrentTrack(track.uri)}
                  />
                </div>

                <div>
                  <div className="flex gap-4 justify-start items-center mt-5 lg:justify-between">
                    <p className="text-xl text-white truncate">
                      {track.albumName}
                    </p>
                    <div>
                      <FaRegBookmark
                        className="text-white cursor-pointer"
                        onClick={async () => addItemToPlaylist(track.uri)}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-white">{track.name}</p>{" "}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="fixed bottom-0 w-full">
        {token && searchInput !== "" ? (
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
            showSaveIcon
          />
        ) : (
          <>
            <p className="text-center">
              If you Login or Search something you want to listen to and the
              Music Player will be available
            </p>
          </>
        )}
      </div>
    </div>
  );
}
