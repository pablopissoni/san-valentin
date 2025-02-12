interface Props {
  searchParams: Promise<{
    mail: string;
    from: string;
    to: string;
    text?: string;
  }>;
}

export default async function HomePage({ searchParams }: Props) {
  const sParams = await searchParams;
  console.log("🚀 ~ HomePage ~ searchParams:", sParams);
  return (
    <div>
      <main className="relative h-screen w-screen bg-cover bg-center bg-no-repeat bg-san-valentin">
        <div className="flex flex-col items-center h-full text-white border border-blue-500">
          <h1 className="text-4xl mt-10 mb-8">¡Feliz San Valentín! ❤️</h1>

          {/* Contenedor con mensaje personalizado con opciones de SI/NO */}
          <section className="bg-slate-50 text-black text-center rounded-lg shadow-2xl p-4">
            <h2 className="text-4xl">{sParams.text}</h2>

            {/* Botones SI/NO para enviar mensaje personalizado */}
            <div className="flex space-x-4 mt-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl">
                SI
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg hover:shadow-xl">
                NO
              </button>
            </div>
          </section>

          <h2></h2>
        </div>
      </main>
    </div>
  );
}
