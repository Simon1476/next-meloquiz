"use client";

import { SignIn } from "@/lib/auth-action";

export const SignInButton = () => {
  return (
    <>
      <form
        action={() => {
          SignIn();
        }}
      >
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};
