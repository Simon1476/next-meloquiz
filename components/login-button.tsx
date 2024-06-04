"use client";

import { SignIn } from "@/lib/auth-action";

export const LoginButton = () => {
  return (
    <>
      <form
        action={() => {
          SignIn();
        }}
      >
        <button type="submit">Login</button>
      </form>
    </>
  );
};
