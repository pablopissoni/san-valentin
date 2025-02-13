"use client";
import { useState } from "react";
import styleButton from "@/utils/styleButton";
import Link from "next/link";

export const YesNoButton = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    if (count >= styleButton.length - 1) return;
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex space-x-6 mt-4 justify-center">
        <button className="bg-green-500 hover:bg-green-600 transition-all transform duration-300 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl">
          {styleButton[count].yes.text}
        </button>
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-600 transition-all transform duration-300 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl"
        >
          {styleButton[count].no.text}
        </button>
      </div>
      {/* Link a page '/forward' para compartir */}
      {count === styleButton.length - 1 && (
        <Link href="/forward">
          <p className="group inline-flex min-w-0 items-center gap-2 rounded bg-[#e91e63] px-6 py-2 mt-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/40 active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Quieres intentar con otra persona?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 w-0 transition-all group-hover:w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </p>
        </Link>
      )}
      {/* solo informativo */}
      <div className="flex justify-center gap-3">
        <p>Clicks: {count}</p>
        <p>styleButton.length: {styleButton.length}</p>
      </div>
    </>
  );
};
