import { YesNoButton } from "@/components/ui/YesNoButton";
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
            <p>
              <i>Necesito el mail para enviar el correo</i>
            </p>
          )}
        </section>
      </section>
    </div>
  );
}
