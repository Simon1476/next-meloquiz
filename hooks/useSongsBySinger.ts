import useSWR from "swr";

export default function useSongsBySinger(singer: string, token: string) {
  const fetcher = async (url: string) => {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching K-pop Musics: ${response.statusText}`);
    }

    const data = await response.json();
    const previewUrls = data.tracks.items.map(
      (track: { preview_url: string }) => {
        return {
          previewUrl: track.preview_url,
        };
      }
    );
    return previewUrls || [];
  };

  const key = singer
    ? `https://api.spotify.com/v1/search?q=${singer}&type=track&limit=50`
    : null;

  const { data, error, isLoading } = useSWR(key, fetcher);
  return {
    songs: data,
    isLoading,
    isError: error,
  };
}
