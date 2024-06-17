"use server";
import { prisma, signIn } from "@/auth";
import { signOut } from "@/auth";
import { getUserEmail } from "./session";

export async function SignIn() {
  return await signIn("spotify");
}

export async function SignOut() {
  const deleteUser = await prisma.user.delete({
    where: {
      email: "rlatlahswkd@gmail.com",
    },
  });

  return await signOut({ redirect: true, redirectTo: "/login" });
}

export async function getAccessToken() {
  const email = await getUserEmail();

  if (!email) return;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });

  const userId = user?.id;

  const account = await prisma.account.findUnique({
    where: { userId }, // Use userId for filtering
  });

  return account?.access_token;
}
