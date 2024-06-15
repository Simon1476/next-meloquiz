"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { savePost } from "./posts";

const postSchema = z.object({
  song: z.string().min(1, { message: "최소 1자리를 입력해야 합니다." }),
  singer: z.string().min(1, { message: "최소 1자리를 입력해야 합니다." }),
  releaseDate: z.string({ message: "너 뭐니?" }),
  genre: z.string().min(1, { message: "최소 1자리를 입력해야 합니다." }),
  instructions: z
    .string()
    .min(8, { message: "설명글은 최소 20자 이상 입니다." }),
  image: z.any(),
  slug: z.string(),
});

export type Post = z.infer<typeof postSchema>;

export default async function shareSong(
  prevState: { message: string },
  formData: FormData
) {
  // let file = formData.get("image");
  // if (file instanceof File) {
  //   file = file.name;
  // }

  const post = {
    song: formData.get("songName"),
    singer: formData.get("singer"),
    releaseDate: formData.get("releaseDate"),
    genre: formData.get("genre"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    slug: "",
  };

  const validation = postSchema.safeParse(post);

  // console.log("validation.error=", validation.error?.issues[0].message);
  if (validation.success) {
    savePost(validation.data);
    redirect("/songs");
  } else {
    const message = validation.error?.issues[0].message;

    return {
      message: message,
    };
  }
}
