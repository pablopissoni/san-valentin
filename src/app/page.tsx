import { YesNoButton } from "@/components/ui/YesNoButton";

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
  sParams.text = sParams.text || "Que extraño, deberia haber una pregunta aqui...";

  console.log("🚀 ~ HomePage ~ searchParams:", sParams);
  return (
    <div>
      <main className="relative h-screen w-screen bg-cover bg-center bg-no-repeat bg-san-valentin">
        <div className="flex flex-col items-center h-full text-white border border-blue-500">
          <h1 className="text-4xl mt-10 mb-8">¡Feliz San Valentín! ❤️</h1>

          {/* Contenedor con mensaje personalizado con opciones de SI/NO */}
          <section className="bg-slate-50 text-black text-center rounded-xl shadow-2xl p-4">
            <h2 className="text-4xl">{sParams.text}</h2>

            {/* Botones SI/NO para enviar mensaje personalizado */}
            <YesNoButton />
          </section>

          <h2></h2>
        </div>
      </main>
    </div>
  );
}
