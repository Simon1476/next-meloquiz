import LoadingIndicator from "@/components/ui/loading";
import SongsGrid from "@/components/songs/song-grid";

import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { Suspense } from "react";
import { auth } from "@/auth";

async function Songs() {
  const songs = await getPosts();

  return <SongsGrid songs={songs} />;
}

export default async function SongsPage() {
  const session = await auth();

  return (
    <>
      <header className="w-[90%] mt-12 mb-20 mx-auto max-w-6xl text-white text-2xl">
        <h1 className="text-2xl md:text-4xl mb-8">
          Discover New Music: Share Your <span>Favorite</span> Songs
        </h1>
        <p>Music by the People, for the People: Share Your Recommendations</p>
        {session && (
          <p className="inline-block mt-4 py-4 px-2 rounded-lg font-bold text-[#fffff] bg-[#6b7280]">
            <Link href="/songs/share">Share Your favorite Songs</Link>
          </p>
        )}
      </header>
      <main>
        <Suspense fallback={<LoadingIndicator />}>
          <Songs />
        </Suspense>
      </main>
    </>
  );
}
