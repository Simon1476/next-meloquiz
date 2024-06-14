"use client";

import ImagePicker from "@/components/image-picker";
import SongsFormSubmit from "@/components/songs-form-submit";
import shareSong from "@/lib/songs-action";
import { useFormState } from "react-dom";

export default function ShareSongPage() {
  const [state, formAction] = useFormState(shareSong, { message: "" });
  return (
    <>
      <header className="pt-8">
        <h1 className="text-white text-center text-4xl">
          Share your favorite song!
        </h1>
      </header>
      <main>
        <form
          className="flex flex-col gap-8 max-w-3xl mx-auto text-inputColor p-4"
          action={formAction}
        >
          <p>
            <label
              className="block mb-2 font-bold text-amber-500"
              htmlFor="songName"
            >
              Song Name
            </label>
            <input
              className="w-full bg-slate-900 py-2 px-4 text-amber-500"
              type="text"
              id="songName"
              name="songName"
              required
            />
          </p>
          <p className="w-full">
            <label
              className="block mb-2 font-bold text-amber-500"
              htmlFor="singer"
            >
              Singer Name
            </label>
            <input
              className="w-full bg-inputBg  py-2 px-4 bg-slate-900 text-amber-500"
              type="text"
              id="singer"
              name="singer"
              required
            />
          </p>
          <div className="flex gap-4 w-full">
            <p className="w-full">
              <label
                className="block mb-2 font-bold text-amber-500"
                htmlFor="releaseDate"
              >
                Release Date
              </label>
              <select
                className="w-full bg-inputBg  py-2 px-4 bg-slate-900 text-amber-500"
                id="releaseDate"
                name="releaseDate"
                required
              >
                <option value="2020">2020</option>
                <option value="2010">2010</option>
                <option value="2000">2000</option>
                <option value="1990">1990</option>
                <option value="1980">1980</option>
                <option value="1970">1970</option>
                <option value="1960">1960</option>
              </select>
            </p>

            <p className="w-full">
              <label
                className="block mb-2 font-bold text-amber-500"
                htmlFor="genre"
              >
                Genre
              </label>
              <input
                className="w-full bg-inputBg py-2 px-4 bg-slate-900 text-amber-500"
                type="text"
                id="genre"
                name="genre"
                required
              />
            </p>
          </div>

          <p>
            <label
              className="block mb-2 font-bold text-amber-500 "
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="bg-inputBg w-full py-2 px-4 bg-slate-900 text-amber-500"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          {state.message && <p className="text-white">{state.message}</p>}

          <div className="flex flex-row justify-between">
            <ImagePicker label="Your image" name="image" />
            <p className="self-end">
              <SongsFormSubmit />
            </p>
          </div>
        </form>
      </main>
    </>
  );
}
