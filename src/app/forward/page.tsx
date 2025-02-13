export default function ForwardPage() {
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
                <label htmlFor="country" className="block text-sm/6 font-semibold text-gray-900 text-center">
                  Coloca tu pregunta aquí
                </label>
                <div className="mt-1">
                  <input
                    id="text-question"
                    name="text-question"
                    type="text"
                    placeholder="¿Te gustaría pasar San Valentín juntos?... o algo asi"
                    maxLength={80}
                    // minLength={8}
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
                <label htmlFor="from-user" className="block text-sm/6 font-semibold text-gray-900">
                  Mi nombre
                </label>
                <div className="mt-1">
                  <input
                    id="from-user"
                    name="from-user"
                    type="text"
                    placeholder="No eres tú, soy yo"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Nombre del destinatario */}
              <div className="sm:col-span-3 ">
                <label htmlFor="to-user" className="block text-sm/6 font-semibold text-gray-900">
                  Nombre del destinatario
                </label>
                <div className="mt-1">
                  <input
                    id="to-user"
                    name="to-user"
                    placeholder="sera... Ryan Gosling?"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Email para recibir la respuesta */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Tu Email para recibir su respuesta 🤞🤞
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* URL para compartir */}
              <div className="col-span-full">
                <p className="block text-sm/6 font-semibold text-gray-900 text-center">
                  <i>Compartele este enlace a esa persona</i>
                </p>
                <div className="mt-1 flex">
                  <p
                    id="url-to-share"
                    className="block w-full rounded-s-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    valor de la url
                  </p>
                  {/* Boton para copiar */}
                  <button
                    type="button"
                    className=" bg-gray-200  font-bold p-1 rounded-e-md border  hover:bg-slate-200 hover:shadow-xl"
                    // onClick={copyToClipboard}
                  >
                    📋
                  </button>
                </div>
              </div>

              {/* Boton para crear enlace */}
              <div className="sm:col-span-full flex justify-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl">
                  Crear enlace
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
