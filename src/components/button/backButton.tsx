"use client"

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/wines");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:scale-105 transition"
    >
      ← Back to Collection
    </button>
  );
}