"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface FormData {
  message: string;
  fromUser: string;
  toUser: string;
  email: string;
}

interface Props {
  formData: FormData;
}

export const GenerateUrl = ({ formData }: Props) => {
  console.log("🚀 ~ GenerateUrl ~ formData:", formData);
  const pathname = usePathname();
  console.log("🚀 ~ GenerateUrl ~ pathname:", pathname);
  const urlBase = window.location.origin;

  const [searchParams, setSearchParams] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const generateUrl = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const search = new URLSearchParams({
      mail: formData.message,
      from: formData.fromUser,
      to: formData.toUser,
      text: formData.email,
    });
    const url = urlBase + "?" + search.toString();
    navigator.clipboard.writeText(url);
    setSearchParams(url);
    setCopied(true);
  };

  if (copied) {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }
  return (
    <>
      <p className="block text-sm/6 font-semibold text-gray-900 text-center">
        <i>Compartele este enlace a esa persona</i>
      </p>
      <div className="mt-1 flex">
        <label
          id="urlBase-to-share"
          className="block w-full min-h-10 rounded-s-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          {searchParams}
        </label>
      </div>

      {/* Boton para crear enlace */}
      <div className="sm:col-span-full flex flex-col items-center space-y-4">
        <div className="my-6">
          <button
            onClick={generateUrl}
            className={`${
              copied ? "bg-green-400 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-700"
            }   text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            <span className={`transition-opacity duration-500`}>
              {copied ? "Copiado al portapapeles" : "Crear enlace y copiar"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
