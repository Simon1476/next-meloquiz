"use client";

import { useFormStatus } from "react-dom";

export default function SongsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="py-3 px-8 text-xl bg-slate-400 rounded-sm"
    >
      {pending ? "Submitting..." : "Share Song"}
    </button>
  );
}
