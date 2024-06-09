import { getAccessToken } from "@/lib/auth-action";

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
    console.log(playlistId);
    return playlistId;
  } catch (error) {
    console.error(error);
  }
}

export async function getMyPlayLists() {
  const token = await getAccessToken();
  const playlistId = await getMyPlayListsId();

  console.log(playlistId);
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
    // console.log(tracks);
    return tracks.map(
      (item: {
        track: {
          name: string;
          uri: string;
          artists: [{ name: string }];
          // album: [{ name: string }];
          duration_ms: number;
        };
      }) => {
        return {
          songName: item.track.name,
          uri: item.track.uri,
          artistName: item.track.artists[0].name,
          // albumName: item.track.album[0].name,
          duration: item.track.duration_ms,
        };
      }
    );
  } catch (error) {
    console.error(error);
  }
}
