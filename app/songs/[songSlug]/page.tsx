import { getPost } from "@/lib/posts";
import Image from "next/image";

export default async function SongsSlugPage({
  params,
}: {
  params: { songSlug: string };
}) {
  const song = await getPost(params.songSlug);

  song.instructions = song.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className="flex px-4 py-8 gap-12 m-auto max-w-7xl">
        <div className="relative w-[30rem] h-80">
          <Image
            src={`https://${process.env.AWS_HOST_NAME}/${song.image}`}
            alt={song.song}
            fill
            className="object-cover rounded-lg "
          />
        </div>
        <div className="space-y-8 max-[40rem] p-4 text-[#ddd6cd]">
          <h1 className="m-0 text-6xl uppercase">{song.song}</h1>
          <p className="text-2xl">{song.genre}</p>
          <p>{song.createdAt.toString()}</p>
        </div>
      </header>
      <main>
        <p
          className="text-xl bg-[#6e6464] text-[#13120f] rounded-lg p-8 max-w-4xl my-8 mx-auto"
          dangerouslySetInnerHTML={{
            __html: song.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
