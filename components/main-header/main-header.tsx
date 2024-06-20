import { auth } from "@/auth";
import NavLink from "./nav-link";

import SignOutButton from "../auth/signOut-button";
import MobileNav from "./mobile-nav";

export default async function MainHeader() {
  const session = await auth();

  return (
    <>
      <header className="sticky top-0 z-50 h-24  flex flex-row justify-between border-none items-center py-8 px-4 w-full bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 font-bold sm:justify-around p-2 border-b-2">
        <NavLink href="/">MeloQuiz</NavLink>
        <nav>
          <ul className="hidden sm:flex gap-4 items-center font-semibold">
            <li>
              <NavLink href={"/quiz"}>노래 퀴즈</NavLink>
            </li>
            <li>
              <NavLink href={"/songs"}>추천 노래 </NavLink>
            </li>
            <li>
              <NavLink href={"/playlists"}>플레이리스트</NavLink>
            </li>
            {session && (
              <>
                <SignOutButton /> <span>{session.user?.name}</span>
              </>
            )}
          </ul>

          <MobileNav />
        </nav>
      </header>
    </>
  );
}
