import Image from "next/image";
import Link from "next/link";

type Song = {
  id: string;
  song: string;
  singer: string;
  releaseDate: string;
  genre: string;
  instructions: string;
  image: string;
  slug: string;
  createdAt: Date;
  userId: string | null;
};

export default function SongItem({ song }: { song: Song }) {
  return (
    <article className="flex flex-col justify-between h-full bg-[#6b7280] rounded overflow-hidden">
      <header>
        <div className="relative h-60">
          <Image
            src={`https://${process.env.AWS_HOST_NAME}/${song.image}`}
            alt={song.song}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-4 px-4 text-[#B0B1AC]">
          <h2 className="text-2xl">{song.song}</h2>
          <p className="text-sm">{song.singer}</p>
        </div>
      </header>
      <div>
        <p className="truncate pt-4 px-4">{song.instructions}</p>
        <div className="text-right p-4">
          <Link href={`/songs/${song.slug}`}>Read More</Link>
        </div>
      </div>
    </article>
  );
}
