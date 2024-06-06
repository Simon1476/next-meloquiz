"use client";

import { SignOut } from "@/lib/auth-action";

const SignOutButton = () => {
  return <button onClick={() => SignOut()}>Sign Out</button>;
};

export default SignOutButton;
