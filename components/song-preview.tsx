"use client";
import { useEffect, useRef, useState } from "react";
import useSongsBySinger from "@/hooks/useSongsBySinger";
import useToken from "@/hooks/useToken";

import { FaCheck } from "react-icons/fa";

import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
} from "react-icons/tb";
import Image from "next/image";
export default function SongPreview() {
  const { token } = useToken();
  const { songs, isLoading, isError } = useSongsBySinger("Iu", token);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSongIndex, setActiveSongIndex] = useState(0);

  const [currentProgress, setcurrentProgress] = useState(0);
  const initalAnswer = {
    imageSrc: "/question-mark.png",
    songName: "???",
  };
  const [showAnswer, setShowAnswer] = useState(initalAnswer);

  const audioRef = useRef<HTMLAudioElement>(null);
  const durationRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current !== null) audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleCheckAnswer = () => {
    setShowAnswer({
      imageSrc: songs[activeSongIndex].imageUrl,
      songName: songs[activeSongIndex].songName,
    });
  };

  const handleCheckDuration = (e: React.MouseEvent<HTMLDivElement>) => {
    if (durationRef.current !== null && audioRef.current !== null) {
      let width = durationRef.current.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const progress = (offset / width) * 100; // 전체 진척도
      audioRef.current.currentTime =
        (progress / 100) * audioRef.current.duration;
    }
  };

  const onPlaying = () => {
    if (audioRef.current !== null) {
      const duration = audioRef.current.duration;
      // console.log(duration);
      const currentTime = audioRef.current.currentTime;

      // console.log(currentTime);
      const progress = (currentTime / duration) * 100;
      setcurrentProgress(progress);
    }
  };

  const handleSkipBack = () => {
    console.log(activeSongIndex);
    if (activeSongIndex === 0) {
      setActiveSongIndex(songs.length - 1);
    } else {
      setActiveSongIndex((prevIndex) => prevIndex - 1);
    }

    if (audioRef.current !== null) {
      audioRef.current.currentTime = 0;
    }
    setcurrentProgress(0);
    setShowAnswer(initalAnswer);
  };

  const handleSkipNext = () => {
    if (songs.length - 1 === 0) {
      setActiveSongIndex(0);
    } else {
      setActiveSongIndex((prevIndex) => prevIndex + 1);
    }

    if (audioRef.current !== null) {
      audioRef.current.currentTime = 0;
    }
    setcurrentProgress(0);
    setShowAnswer(initalAnswer);
  };

  useEffect(() => {
    if (audioRef.current !== null) {
      if (isPlaying) {
        audioRef.current
          .play()
          .then((_) => {})
          .catch((error) => {
            setIsPlaying(false);
          });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (isError) return "An error has occurred.";

  if (isLoading) return <span className="text-white">Loading...</span>;

  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-8 mb-60 overflow-hidden ">
        <div>
          <Image
            src={showAnswer.imageSrc}
            width={300}
            height={300}
            alt="Album image"
          />
          <button
            className="flex items-center gap-4 text-white mt-4"
            onClick={handleCheckAnswer}
          >
            <span>정답 확인</span>
            <FaCheck />
          </button>
        </div>
        <div className="text-4xl">{showAnswer.songName}</div>
      </div>

      {songs[activeSongIndex].previewUrl && (
        <audio
          ref={audioRef}
          src={songs[activeSongIndex].previewUrl}
          onTimeUpdate={onPlaying}
        />
      )}

      <div className="flex flex-col justify-between items-center p-4 bg-slate-500 text-white w-full">
        <div className="flex items-center gap-8">
          <TbPlayerSkipBackFilled
            className="cursor-pointer text-3xl"
            onClick={handleSkipBack}
          />
          {isPlaying ? (
            <TbPlayerPauseFilled
              className="cursor-pointer text-4xl rounded-full"
              onClick={handlePlayPause}
            />
          ) : (
            <TbPlayerPlayFilled
              className="cursor-pointer text-4xl rounded-full"
              onClick={handlePlayPause}
            />
          )}
          <TbPlayerSkipForwardFilled
            className="cursor-pointer text-3xl"
            onClick={handleSkipNext}
          />
        </div>
        <div
          className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
          onClick={handleCheckDuration}
          ref={durationRef}
        >
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${currentProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
