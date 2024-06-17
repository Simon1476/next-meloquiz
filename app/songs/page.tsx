import LoadingIndicator from "@/components/loading";
import { getPosts } from "@/lib/posts";
import { Suspense } from "react";

// async function Songs() {
//   const songs = await getPosts();

//   return
// }

export default function SongsPage() {
  return (
    <>
      <header>
        <h1>
          Discover New Music: Share Your <span>Favorite</span> Songs
        </h1>
        <p>Music by the People, for the People: Share Your Recommendations</p>
      </header>
      <main>
        <Suspense fallback={<LoadingIndicator />}></Suspense>
      </main>
    </>
  );
}
