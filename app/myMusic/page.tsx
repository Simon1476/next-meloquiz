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

export default async function MyMusicPage() {
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
    <div className="text-white max-w-6xl mx-auto h-screen">
      <header className="flex mb-6">
        <Image
          src={playListInfo?.playListThumnail}
          alt="PlayList Thumnail"
          width={320}
          height={320}
          className="mr-6 rounded-md"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex flex-col justify-between gap-10 pt-14">
          <span>플레이리스트</span>
          <h1 className="text-6xl">{playListInfo?.playListName}</h1>

          <div>
            <span>{playListInfo?.displayName}</span>
            <span className="before:content-['•']">
              {totalSongs}곡, {`총 소요시간  ${formatDuration(totalDuration)}`}{" "}
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className="flex mb-6">
          <div className={styles.flex4}>앨범</div>
          <div className={styles.flex3}>제목</div>
          <div className={styles.flex3}>추가한 날짜</div>
          <div className={styles.flex1}>타이머</div>
        </div>
        <div className="w-full">
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
