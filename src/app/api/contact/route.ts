import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, reason, message } = await req.json();

  //  Validar campos obligatorios
  if (!name || !email || !message || !reason) {
    return NextResponse.json(
      { error: "Todos los campos obligatorios deben completarse." },
      { status: 400 },
    );
  }

  //  Validar formato de email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "El correo ingresado no es válido." },
      { status: 400 },
    );
  }

  // Bloquear emails sospechosos
  const forbiddenPatterns = /(asd|test|example|fake)/i;
  if (forbiddenPatterns.test(email)) {
    return NextResponse.json(
      { error: "El correo parece inválido o de prueba." },
      { status: 400 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contacto Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,

      // Versión texto plano
      text: `
Nuevo mensaje desde el formulario web

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "No proporcionado"}
Motivo: ${reason}
Mensaje:
${message}
      `,

      // Versión HTML (más prolija)
      html: `
        <h2>Nuevo mensaje desde el formulario web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Motivo:</strong> ${reason}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message.replaceAll("\n", "<br/>")}</p>
      `,
    });

    return NextResponse.json({ message: "Correo enviado con éxito ✅" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 },
    );
  }
}
