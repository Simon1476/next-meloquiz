import { auth } from "@/auth";
import SongPreview from "@/components/song-preview";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self Song Quiz",
  description: "Listen to the song and guess the title of the song.",
};

export default async function QuizPage() {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <main className="relative text-white max-w-6xl h-[calc(100vh-96px)] mx-auto pt-8">
      <section className="flex flex-col gap-4 items-center gap-max-w-screen-xl mx-auto font-bold  text-white">
        <h2 className="text-4xl">What is Melo Quiz?</h2>
        <p className="text-2xl">
          Melo Quiz is a quiz game where you guess the song title after
          listening to the beginning of the song for a certain amount of time.
        </p>
      </section>
      <SongPreview />
    </main>
  );
}
