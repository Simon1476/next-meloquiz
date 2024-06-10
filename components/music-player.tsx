"use client";

import Image from "next/image";
import SpotifyPlayer from "react-spotify-web-playback";

import styles from "../app/myMusic/myMusic.module.css";
import formatDuration from "@/lib/format";
import { useState } from "react";

type Props = {
  token: string;
  uris: string[];
  playLists: {
    songName: string;
    uri: string;
    artistName: string;
    albumName: string;
    imageUrl: string;
    duration: number;
  }[];
};

export default function PlayListPlayer({ token, uris, playLists }: Props) {
  const [songUri, setSongUri] = useState("");

  return (
    <div className="flex flex-col gap-4">
      {playLists &&
        playLists.map(
          (
            song: {
              songName: string;
              uri: string;
              artistName: string;
              duration: number;
              imageUrl: string;
              albumName: string;
            },
            index: number
          ) => (
            <div
              key={song.uri}
              className="flex felx-row hover:bg-sky-700"
              onClick={() => setSongUri(song.uri)}
            >
              <div className="flex justify-center items-center mr-3">
                {index + 1}
              </div>
              <div className={`flex ${styles.flex4}`}>
                <Image
                  src={song.imageUrl}
                  alt="album Image"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <div className="flex flex-col">
                  <span>{song.songName}</span>
                  <span>{song.artistName}</span>
                </div>
              </div>
              <div className={`${styles.flex3}`}>
                <span>{song.albumName}</span>
              </div>
              <div className={`text-white ${styles.flex3}`}>7시간전</div>
              <div className={`${styles.flex1}`}>
                {formatDuration(song.duration)}
              </div>
            </div>
          )
        )}
      <SpotifyPlayer
        token={token}
        // uris={searchResults.map((item: { uri: string }) => item.uri)}
        uris={[songUri]}
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
    </div>
  );
}
