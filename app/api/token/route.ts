import { auth } from "@/auth";
import { getAccessToken } from "@/lib/auth-action";

export async function GET() {
  const session = await auth();
  let accessToken;
  if (session) {
    accessToken = (await getAccessToken()) as string;
  }
  return Response.json(accessToken || "");
}
