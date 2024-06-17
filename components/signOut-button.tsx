"use client";

import { SignOut } from "@/lib/auth-action";

const SignOutButton = () => {
  return <button onClick={() => SignOut()}>로그아웃</button>;
};

export default SignOutButton;
