"use client";

import { GenerateUrl } from "@/components/GenerateUrl";
import { useFormResend } from "@/hook/useFormResend";

export default function ForwardPage() {
  const { formResend, handleChangeInput } = useFormResend();

  return (
    <div className="bg-san-valentin w-screen h-screen bg-cover bg-center">
      <section className="flex flex-col items-center justify-center h-full">
        {/* Contenedor */}
        <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl shadow-xl ">
          <h1 className="text-4xl">¿Lo rechazaste?</h1>
          <h3 className="text-2xl">
            No hay problema,<i> almenos no para ti</i>, intenta enviarlo a otra persona...
          </h3>
          {/* Fomrulario para reenviar la pregunta */}
          <form className="my-6 py-2 px-4 shadow-xl rounded-lg bg-slate-100 border border-slate-200">
            {/* <h2 className="text-base/7 font-semibold text-center text-gray-900">Nombre de las personas</h2> */}

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-10">
              {/* Pregunta a enviar */}
              <div className="col-span-full">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 text-center">
                  Coloca tu pregunta aquí
                </label>
                <div className="mt-1">
                  <input
                    id="message"
                    name="message"
                    value={formResend.message}
                    onChange={(e) => handleChangeInput(e)}
                    type="text"
                    placeholder="¿Te gustaría pasar San Valentín juntos?... o algo asi"
                    maxLength={80}
                    minLength={8}
                    required
                    title="La pregunta debe tener entre 8 y 80 caracteres."
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    // onInvalid={(e) => e.target.setCustomValidity("La pregunta debe tener entre 8 y 80 caracteres.")}
                    // onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
              </div>

              {/* Nombre del remitente */}
              <div className="sm:col-span-3">
                <label htmlFor="fromUser" className="block text-sm/6 font-semibold text-gray-900">
                  Mi nombre
                </label>
                <div className="mt-1">
                  <input
                    id="fromUser"
                    name="fromUser"
                    value={formResend.fromUser}
                    onChange={(e) => handleChangeInput(e)}
                    type="text"
                    placeholder="No eres tú, soy yo"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Nombre del destinatario */}
              <div className="sm:col-span-3 ">
                <label htmlFor="toUser" className="block text-sm/6 font-semibold text-gray-900">
                  Destinatario
                </label>
                <div className="mt-1">
                  <input
                    id="toUser"
                    name="toUser"
                    value={formResend.toUser}
                    onChange={(e) => handleChangeInput(e)}
                    placeholder="sera... Ryan Gosling?"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Email para recibir la respuesta */}
              <div className="col-span-full sm:col-span-4">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Tu Email para recibir su respuesta 🤞🤞
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={formResend.email}
                    onChange={(e) => handleChangeInput(e)}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* URL para compartir */}
              <div className="col-span-full">
                <GenerateUrl formData={formResend} />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
