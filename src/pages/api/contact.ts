// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore - nodemailer types
const nodemailer = require("nodemailer");

// Handles POST requests to /api

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Verifica se é POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  // Valida se as variáveis de ambiente estão configuradas
  if (!gmailUser) {
    console.error("GMAIL_USER não está configurada");
    return res.status(500).json({
      message:
        "Erro de configuração do servidor. Entre em contato com o administrador.",
    });
  }

  if (!gmailAppPassword) {
    console.error("GMAIL_APP_PASSWORD não está configurada");
    return res.status(500).json({
      message:
        "Erro de configuração do servidor. Entre em contato com o administrador.",
    });
  }

  if (!myEmail) {
    console.error("NEXT_PUBLIC_PERSONAL_EMAIL não está configurada");
    return res.status(500).json({
      message:
        "Erro de configuração do servidor. Entre em contato com o administrador.",
    });
  }

  const formData = req.body as {
    name: string;
    email: string;
    message: string;
  };

  // Valida os dados do formulário
  if (!formData.name || !formData.email || !formData.message) {
    return res.status(400).json({
      message: "Por favor, preencha todos os campos.",
    });
  }

  // Configuração do transporter do Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: gmailUser,
      pass: gmailAppPassword, // App Password do Gmail
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: `"Portfolio" <${gmailUser}>`,
      to: myEmail,
      replyTo: formData.email,
      subject: `Portfolio - Contato de ${formData.name}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>E-mail:</strong> ${formData.email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Email enviado com sucesso:", mail.messageId);

    return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({
      message: "Erro ao enviar mensagem. Tente novamente mais tarde.",
    });
  }
}
