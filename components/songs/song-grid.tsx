import SongItem from "./song-item";

type Props = {
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
}[];

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

export default function SongsGrid({ songs }: { songs: Props }) {
  return (
    <ul className="grid gap-20 w-[90%] max-w-7xl mx-auto md: grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
      {songs.map((song: Song) => (
        <li key={song.id}>
          <SongItem song={song} />
        </li>
      ))}
    </ul>
  );
}
