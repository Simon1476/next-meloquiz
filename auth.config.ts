import Spotify from "next-auth/providers/spotify";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,streaming,user-modify-playback-state,user-read-currently-playing,user-read-playback-state,user-library-read,user-library-modify,playlist-read-collaborative,playlist-read-private, playlist-modify-public",
    }),
  ],
} satisfies NextAuthConfig;
