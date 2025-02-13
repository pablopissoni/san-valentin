import { YesNoButton } from "@/components/ui/YesNoButton";
import Link from "next/link";
interface Props {
  searchParams: Promise<{
    mail?: string;
    from: string;
    to: string;
    text?: string;
  }>;
}

export default async function HomePage({ searchParams }: Props) {
  let sParams = await searchParams;
  sParams = {
    mail: sParams.mail || "",
    from: sParams.from || "pepito",
    to: sParams.to || "mengana",
    text: sParams.text || "Que extraño, deberia haber una pregunta aqui...",
  };
  sParams.text = sParams.text || "Que extraño, deberia haber una pregunta aqui...";

  return (
    <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat bg-san-valentin">
      <section className="flex flex-col items-center h-full text-white ">
        <h1 className="text-4xl mt-10 mb-8">¡Feliz San Valentín! ❤️</h1>

        {/* Contenedor */}
        <section className="bg-slate-50 text-black text-center rounded-xl shadow-2xl p-4 max-w-6xl">
          {/* Mensaje personalizado con nombres y pregunta */}
          <h2 className="text-4xl">
            {`Hola ${sParams.to},parece que ${sParams.from} quiere preguntarte. ${sParams.text}.`}
          </h2>

          {/* Botones SI/NO con estilos personalizados */}
          {sParams.mail ? (
            <YesNoButton
              recipientEmail={sParams.mail}
              // message={sParams.text}
              fromName={sParams.from}
              toName={sParams.to}
            />
          ) : (
            <Link href="/forward">
              <p className="group inline-flex min-w-0 items-center gap-2 rounded bg-[#e91e63] px-6 py-2 mt-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/40 active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <span>Necesito el mail para enviar el correo</span>
                ¿Quieres crear una pregunta para compartir?
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
              <i></i>
            </Link>
          )}
        </section>
      </section>
    </div>
  );
}
