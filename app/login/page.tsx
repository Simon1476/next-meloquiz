import { SignInButton } from "@/components/signIn-button";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-16 items-center justify-center h-[calc(100vh-96px)]">
      <header>
        <h1 className="text-3xl text-white">
          Connect with Spotify: Access Your Music Library
        </h1>
      </header>
      <SignInButton />
    </div>
  );
}
