import { S3 } from "@aws-sdk/client-s3";
import { Post } from "./songs-action";
import slugify from "slugify";
import xss from "xss";
import { prisma } from "@/auth";
import { getUserEmail } from "./session";

const s3 = new S3({
  region: " ap-northeast-2",
});

export async function savePost(post: Post) {
  post.slug = slugify(post.song, { lower: true });
  post.instructions = xss(post.instructions);

  const extension = post.image.name.split(".").pop();

  const fileName = `${post.slug}.${extension}`;

  const bufferedImage = await post.image.arrayBuffer();

  s3.putObject({
    Bucket: "meloquiz-nextjs-posts-image",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: post.image.type,
  });

  post.image = fileName as string;
  const userEmail = await getUserEmail();
  const user = await prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      email: userEmail,
    },
  });
  if (user) {
    await prisma.post.create({
      data: {
        ...post,
        userId: user?.id as string,
      },
    });
  }
}
