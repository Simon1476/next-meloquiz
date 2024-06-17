"use client";

import Image from "next/image";
import SpotifyPlayer from "react-spotify-web-playback";

import styles from "../app/playlists/myMusic.module.css";
import formatDuration from "@/lib/format";
import { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import Modal from "./modal";

type Props = {
  token: string;
  playLists: {
    songName: string;
    uri: string;
    artistName: string;
    albumName: string;
    imageUrl: string;
    duration: number;
  }[];
  playListId: string;
};

export default function PlayListPlayer({
  token,
  playLists,
  playListId,
}: Props) {
  const [songUri, setSongUri] = useState("");
  const [showDodal, setShowDodal] = useState(false);
  const [deleteUri, setDeleteUri] = useState("");

  const handleClose = () => {
    setShowDodal(false);
  };

  const handleClickDelete = (uri: string) => {
    setDeleteUri(uri);
    setShowDodal(true);
  };

  const handleDeletItem = () => {
    fetch(`https://api.spotify.com/v1/playlists/${playListId}/tracks`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tracks: [{ uri: deleteUri }],
      }),
    });
  };
  return (
    <>
      {showDodal && <Modal onClose={handleClose} onDelete={handleDeletItem} />}
      <div className="flex flex-col gap-4 h-96 overflow-y-auto">
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
                className="flex flex-row items-center hover:bg-sky-700"
              >
                <div className="flex justify-center items-center mr-3">
                  {index + 1}
                </div>
                <div
                  className={`flex ${styles.flex4}`}
                  onClick={() => setSongUri(song.uri)}
                >
                  <Image
                    src={song.imageUrl}
                    alt="album Image"
                    width={40}
                    height={40}
                    className="mr-3"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="flex flex-col">
                    <span>{song.songName}</span>
                    <span>{song.artistName}</span>
                  </div>
                </div>
                <div className={`${styles.flex3}`}>
                  <span>{song.albumName}</span>
                </div>
                <div className={`text-white hidden md:block ${styles.flex3}`}>
                  7시간전
                </div>
                <div className={`flex items-center ${styles.flex1}`}>
                  {formatDuration(song.duration)}
                </div>
                <MdDeleteForever
                  className="cursor-pointer"
                  onClick={() => handleClickDelete(song.uri)}
                />
              </div>
            )
          )}
        <div className="sticky bottom-0">
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
      </div>
    </>
  );
}
