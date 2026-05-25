"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        mb-6 flex items-center gap-2
        rounded-xl border border-gray-300
        bg-white px-4 py-2
        font-medium text-gray-700
        shadow-sm transition
        hover:bg-gray-100 hover:shadow-md
      "
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
}