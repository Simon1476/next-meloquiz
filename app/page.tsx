import Player from "@/components/player";

export default async function Home() {
  return (
    <main className="h-screen pt-24">
      <section className="flex flex-col gap-4 items-center gap-max-w-screen-xl mx-auto font-bold my-5 text-white">
        <h2 className="text-4xl"></h2>
        <p className="text-2xl">
          Melo Quiz is a quiz game where you guess the song title after
          listening to the beginning of the song for a certain amount of time.
        </p>
        <p className="text-2xl">
          Match song titles to set records and learn more about K-pop music
        </p>
      </section>
      <Player />
    </main>
  );
}
