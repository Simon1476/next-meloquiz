import { auth } from "@/auth";
import { getAccessToken } from "@/lib/auth-action";

export async function GET() {
  const session = await auth();

  let accessToken;
  const userEmail = session?.user?.email as string;
  if (session) {
    accessToken = (await getAccessToken(userEmail)) as string;
  }
  return Response.json(accessToken);
}
