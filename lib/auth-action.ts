"use server";
import { signIn } from "@/auth";
import { signOut } from "@/auth";
import { prisma } from "./prisma";
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

  return await signOut();
}

export async function getAccessToken() {
  const email = await getUserEmail();

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
