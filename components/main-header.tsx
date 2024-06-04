import NavLink from "./nav-link";
import { LoginButton } from "./login-button";

export default function MainHeader() {
  return (
    <>
      <header className="sticky top-0 flex flex-row justify-between items-center py-8 px-4 w-full bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 font-bold sm:justify-around p-2 border-b-2 bg-gray-100">
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
              <NavLink href={"/music"}>Music</NavLink>
            </li>

            <LoginButton />
          </ul>
        </nav>
      </header>
    </>
  );
}
