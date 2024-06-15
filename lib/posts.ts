import { S3 } from "@aws-sdk/client-s3";
import { Post } from "./songs-action";
import slugify from "slugify";
import xss from "xss";
import { prisma } from "@/auth";
import { getUserEmail } from "./session";

const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function getPosts() {
  const posts = await prisma.post.findMany();

  return posts;
}

export async function savePost(post: Post) {
  post.slug = slugify(post.song, { lower: true });
  post.instructions = xss(post.instructions);

  const extension = post.image.name.split(".").pop();

  const fileName = `${post.slug}.${extension}`;

  const bufferedImage = await post.image.arrayBuffer();

  s3.putObject({
    Bucket: process.env.S3_BUCKET_NAME,
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
  await prisma.post.create({
    data: {
      song: post.song,
      singer: post.singer,
      releaseDate: post.releaseDate,
      genre: post.genre,
      instructions: post.instructions,
      image: post.image,
      slug: post.slug,
      userId: user?.id as string,
    },
  });
}
