import {
  getMyPlayListInfo,
  getMyPlayLists,
  getMyPlayListsId,
} from "@/lib/spotify";
import styles from "./myMusic.module.css";
import Image from "next/image";
import { getAccessToken } from "@/lib/auth-action";
import formatDuration from "@/lib/format";
import PlayListPlayer from "@/components/music-player";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playlist",
  description:
    "Your personalized music haven. Access, manage, and enjoy your playlists with ease.",
};

export default async function PlaylistPage() {
  // const session = await auth();

  // if (!session) {
  //   return redirect("/login");
  // }

  const playLists = await getMyPlayLists();
  const token = (await getAccessToken()) as string;

  const playListId = await getMyPlayListsId();

  const totalDuration = playLists.reduce(
    (accumulator: number, currentSong: { duration: number }) => {
      return accumulator + currentSong.duration;
    },
    0
  );

  const playListInfo = await getMyPlayListInfo();
  const totalSongs = playLists.length;
  return (
    <div className="flex flex-col justify-between text-white max-w-6xl mx-auto h-[calc(100vh-96px)] relative">
      <header className="md:flex">
        <Image
          src={playListInfo?.playListThumnail}
          alt="PlayList Thumnail"
          width={320}
          height={320}
          className="mr-6 rounded-md hidden md:block"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex flex-col items-center md:flex-col justify-between gap-10 pt-14">
          <span>플레이리스트</span>
          <h1 className="text-3xl lg:text-6xl">{playListInfo?.playListName}</h1>

          <div>
            <span>{playListInfo?.displayName}</span>
            <span className="before:content-['•']">
              {totalSongs}곡, {`총 소요시간  ${formatDuration(totalDuration)}`}{" "}
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className="flex ">
          <div className={styles.flex4}>앨범</div>
          <div className={styles.flex3}>제목</div>
          <div className={`${styles.flex3} hidden md:block`}>추가한 날짜</div>
          <div className={styles.flex1}>타이머</div>
        </div>
        <div>
          <PlayListPlayer
            playListId={playListId}
            playLists={playLists}
            token={token}
          />
        </div>
      </main>
    </div>
  );
}
