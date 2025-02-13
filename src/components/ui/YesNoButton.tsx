"use client";
import { useState } from "react";
import styleButton from "@/utils/styleButton";

export const YesNoButton = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    if (count >= styleButton.length - 1) return;
    setCount(count + 1);
  };

  return (
    <div className="flex space-x-6 mt-4 justify-center">
      <button className={styleButton[count].yes.style}>{styleButton[count].yes.text}</button>
      <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl"
      >
        {styleButton[count].no.text}
      </button>
      {/* solo informativo */}
      <p>Clicks: {count}</p>
      <p>styleButton.length: {styleButton.length}</p>
    </div>
  );
};
