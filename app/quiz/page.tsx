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
    <main className="flex flex-col justify-between text-white max-w-6xl h-[calc(100vh-96px)] mx-auto pt-8">
      <section className="flex flex-col gap-4 items-center gap-max-w-screen-xl mx-auto font-bold  text-white">
        <h2 className="text-4xl">멜로퀴즈</h2>
        <p className="text-center text-lg  md:text-2xl">
          노래를 원하는 만큼 일정시간 동안 듣고 노래를 멈춘후 정답을
          확인해보세요!
        </p>
      </section>
      <SongPreview />
    </main>
  );
}
