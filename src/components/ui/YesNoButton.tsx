"use client";
import { useState } from "react";
import useClickCounter from "@/hook/useClickCounter";
import { sendEmail } from "../../utils/sendEmail";
import Link from "next/link";
import styleButton from "@/utils/styleButton";

interface Props {
  recipientEmail: string;
  fromName: string;
  toName: string;
}

export const YesNoButton = ({ recipientEmail, fromName, toName }: Props) => {
  const [showShare, setShowShare] = useState<boolean>(false);

  const maxClicks = styleButton.length - 1; // 4 clics en total
  const { count, increment } = useClickCounter({ maxClicks, to_email: recipientEmail, fromName, toName, setShowShare });

  const handleYesClick = () => {
    sendEmail(recipientEmail, "Dijo que SÍ 🎉", fromName, toName);
    setShowShare(true);
  };

  return (
    <>
      {/* Muestro boton SI/NO o el botón de compartir */}
      {!showShare ? (
        <div className="flex space-x-6 mt-4 justify-center">
          <button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-600 transition-all transform duration-300 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl"
          >
            {styleButton[count].yes.text}
          </button>
          <button
            onClick={increment}
            className="bg-red-500 hover:bg-red-600 transition-all transform duration-300 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl"
          >
            {styleButton[count].no.text}
          </button>
        </div>
      ) : (
        // Muestro botón de compartir
        <Link href="/forward">
          <p className="group inline-flex min-w-0 items-center gap-2 rounded bg-[#e91e63] px-6 py-2 mt-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/40 active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <span>Genial, ya enviamos tu respuesta.</span>
            ¿Quieres intentar con otra persona?
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
    </>
  );
};
