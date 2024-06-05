import { auth } from "@/auth";
import { getAccessToken } from "@/lib/auth-action";

export default async function Home() {
  return (
    <main>
      <section className="flex flex-col gap-4 items-center gap-max-w-screen-xl mx-auto font-bold my-5">
        <h2 className="text-4xl">What is Melo Quiz?</h2>
        <p className="text-2xl">
          Melo Quiz is a quiz game where you guess the song title after
          listening to the beginning of the song for a certain amount of time.
        </p>
        <p className="text-2xl">
          Match song titles to set records and learn more about K-pop music
        </p>
      </section>
      <section className="flex flex-col gap-4 items-center gap-max-w-screen-xl mx-auto font-bold my-5">
        <h2 className="text-4xl">What is Melo Quiz?</h2>
        <p className="text-2xl">
          Melo Quiz is a quiz game where you guess the song title after
          listening to the beginning of the song for a certain amount of time.
        </p>
        <p className="text-2xl">
          Match song titles to set records and learn more about K-pop music
        </p>
      </section>
    </main>
  );
}
