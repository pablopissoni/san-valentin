import emailjs from "@emailjs/browser";

export const sendEmail = async (to_email: string, message: string, from_name: string, to_name: string) => {
  console.log("🚀 ~ sendEmail ~ templateParams.to_email", {
    to_email: to_email,
    message: message,
    from_name: from_name,
    to_name: to_name,
  });
  try {
    const templateParams = {
      to_email,
      message,
      from_name,
      to_name,
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Reemplazar con tu Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Reemplazar con tu Template ID
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Reemplazar con tu Public Key
    );

    console.log("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};
