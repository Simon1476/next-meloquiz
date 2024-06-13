import ImagePicker from "@/components/image-picker";
import SongsFormSubmit from "@/components/songs-form-submit";

export default function ShareSongPage() {
  return (
    <>
      <header className="pt-8">
        <h1 className="text-white text-center text-4xl">
          Share your favorite song!
        </h1>
      </header>
      <main className="p-8">
        <form className="flex flex-col gap-8 max-w-3xl mx-auto text-inputColor">
          <p>
            <label className="block mb-2 font-bold" htmlFor="songName">
              Song Name
            </label>
            <input
              className="w-full bg-inputBg py-2 px-4"
              type="text"
              id="songName"
              name="songName"
              required
            />
          </p>
          <div className="flex gap-4 w-full">
            <p className="w-full">
              <label className="block mb-2 font-bold" htmlFor="singer">
                Singer Name
              </label>
              <input
                className="w-full bg-inputBg  py-2 px-4"
                type="text"
                id="singer"
                name="singer"
                required
              />
            </p>
            <p className="w-full">
              <label className="block mb-2 font-bold" htmlFor="genre">
                Genre
              </label>
              <input
                className="w-full bg-inputBg  py-2 px-4"
                type="text"
                id="genre"
                name="genre"
                required
              />
            </p>
          </div>

          <p>
            <label className="block mb-2 font-bold" htmlFor="instructions">
              Instructions
            </label>
            <textarea
              className="bg-inputBg w-full py-2 px-4"
              id="instructions"
              name="instrucations"
              rows={10}
              required
            ></textarea>
          </p>
          <div className="flex flex-row justify-between">
            <ImagePicker label="Your image" name="image" />
            <p></p>
            <p className="self-end">
              <SongsFormSubmit />
            </p>
          </div>
        </form>
      </main>
    </>
  );
}
