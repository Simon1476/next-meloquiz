import NavLink from "./nav-link";

import { auth } from "@/auth";

import { SignInButton } from "./signIn-button";
import SignOutButton from "./signOut-button";

export default async function MainHeader() {
  const session = await auth();
  return (
    <>
      <header className="fixed top-0 z-50 flex flex-row justify-between border-none items-center py-8 px-4 w-full bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 font-bold sm:justify-around p-2 border-b-2 bg-gray-100 ">
        <NavLink href="/">MeloQuiz</NavLink>
        <nav>
          <ul className="flex gap-4 items-center font-semibold">
            <li>
              <NavLink href={"/quiz"}>Quiz</NavLink>
            </li>
            <li>
              <NavLink href={"/rankings"}>Ranking</NavLink>
            </li>
            <li>
              <NavLink href={"/myMusic"}>My music</NavLink>
            </li>
            {session?.user ? (
              <>
                <SignOutButton /> <span>{session.user?.name}</span>
              </>
            ) : (
              <SignInButton />
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
