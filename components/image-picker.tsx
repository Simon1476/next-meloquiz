"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  label: string;
  name: string;
};
export default function ImagePicker({ label, name }: Props) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    if (imageInput.current) imageInput.current.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <div>
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <div className="flex items-start gap-6 mb-4">
        <div className="relative w-40 h-40 flex justify-center items-center border-2 border-solid">
          {!pickedImage && <p className="m-0 p-4">No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="the picked Image by the user."
              fill
              className="object-cover"
            />
          )}
        </div>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          className="hidden"
        />
        <button
          className="py-2 px-6 border-0 cursor-pointer rounded-sm bg-slate-400"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
