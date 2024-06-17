import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Player from "@/components/player";
import { getMyPlayListsId } from "@/lib/spotify";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Search and Listening Platform: Explore Millions of Songs",
  description:
    "Create personalized playlists, discover new favorites, and curate your own unique listening experience. It's your music, your way.",
};

export default async function Home() {
  const sesstion = await auth();

  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  let playlistId = "";
  if (sesstion) {
    playlistId = await getMyPlayListsId();
  }
  return (
    <main className="max-w-6xl mx-auto h-[calc(100vh-96px)] py-4 px-2">
      <section className="flex flex-col gap-4 items-center gap-max-w-screen-xl mx-auto font-bold text-white">
        <h1 className="text-lg lg:text-4xl">
          Music at Your Fingertips: Explore and Immerse Yourself
        </h1>
        <p className="hidden sm:block text-base lg:text-2xl">
          노래 제목이나 가수 이름을 입력하여 원하는 노래를 마음껏 청취하세요.
        </p>
      </section>
      <Player playlistId={playlistId} />
    </main>
  );
}
