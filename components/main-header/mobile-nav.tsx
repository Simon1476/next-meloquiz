"use client";
import { useState } from "react";
import NavLink from "./nav-link";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoBackspace } from "react-icons/io5";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)} className="block sm:hidden">
        <GiHamburgerMenu />
      </div>
      {open && (
        <ul
          className={
            open
              ? "flex flex-col justify-center items-center gap-8 w-full h-screen absolute top-0 right-0 bg-[#282c34] text-2xl ease-out"
              : "flex flex-col justify-center items-center w-full h-screen absolute top-0 -right-1/2 bg-[#282c34] text-2xl ease-out"
          }
        >
          <li>
            <NavLink href={"/quiz"}>노래 퀴즈</NavLink>
          </li>
          <li>
            <NavLink href={"/songs"}>추천 노래 </NavLink>
          </li>
          <li>
            <NavLink href={"/playlists"}>플레이리스트</NavLink>
          </li>
          <li>
            <div
              className="flex flex-row justify-center items-center"
              onClick={() => setOpen(!open)}
            >
              <IoBackspace className="inline" />
              <span>Exit</span>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}
