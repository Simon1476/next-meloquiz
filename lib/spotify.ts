import { getAccessToken } from "@/lib/auth-action";

export async function getGenres() {
  const token = await getAccessToken();
  const res = await fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await res.json();
  console.log(data);
  return data;
}

export async function getUserId() {
  const token = await getAccessToken();
  try {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching profile: ${response.statusText}`);
    }

    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching profile");
  }
}

export async function getMyPlayListsId() {
  const token = await getAccessToken();

  try {
    const response = await fetch(
      `
https://api.spotify.com/v1/me/playlists`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching playlistId: ${response.statusText}`);
    }
    const data = await response.json();
    const playlistId = data?.items[0].id;
    return playlistId;
  } catch (error) {
    console.error(error);
  }
}

export async function getMyPlayLists() {
  const token = await getAccessToken();
  const playlistId = await getMyPlayListsId();

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching playlistId: ${response.statusText}`);
    }
    const data = await response.json();
    const tracks = data.tracks.items.map((track: any) => track);

    return tracks.map(
      (item: {
        track: {
          name: string;
          uri: string;
          artists: [{ name: string }];
          album: { images: [{ url: string }]; name: string };
          duration_ms: number;
        };
      }) => {
        return {
          songName: item.track.name,
          uri: item.track.uri,
          artistName: item.track.artists[0].name,
          albumName: item.track.album.name,
          imageUrl: item.track.album.images[0].url,
          duration: item.track.duration_ms,
        };
      }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function getMyPlayListInfo() {
  const token = await getAccessToken();
  const playlistId = await getMyPlayListsId();

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching playlistId: ${response.statusText}`);
    }
    const data = await response.json();
    const playListThumnail = data.images[0].url;
    const playListName = data.name;
    const displayName = data.owner.display_name;

    return {
      playListThumnail,
      playListName,
      displayName,
    };
  } catch (error) {
    console.error(error);
  }
}
