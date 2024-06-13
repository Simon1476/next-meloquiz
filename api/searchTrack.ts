export async function searchTrack(searchQuery: string, token: string) {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=20`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
