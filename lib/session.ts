import { auth } from "@/auth";

export const session = async () => {
  const session = await auth();
  return session;
};
