import { signIn } from "@/auth";
import { SignIn } from "@/lib/auth-action";

export const SignInButton = () => {
  return (
    <>
      <form action={SignIn}>
        <button
          type="submit"
          className="flex justify-center items-center text-2xl border-solid2 min-w-48 bg-slate-600 py-8 px-4 rounded-md "
        >
          Login
        </button>
      </form>
    </>
  );
};
