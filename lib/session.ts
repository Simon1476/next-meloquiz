import { auth } from "@/auth";

export const getUserEmail = async () => {
  const session = await auth();
  const email = session?.user?.email as string;
  return email;
};
