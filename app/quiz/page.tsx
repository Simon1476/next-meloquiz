import SongPreview from "@/components/song-preview";

export default function QuizPage() {
  return (
    <main className="flex justify-between flex-col text-white max-w-6xl mx-auto">
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
