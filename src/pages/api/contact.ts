// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse } from "next";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

type ResponseData = {
  message: string;
};

export default async function handler(
  req: any,
  res: NextApiResponse<ResponseData>
) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData: any = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: formData.email,
      subject: `Portfolio - Contato`,
      html: `
        <p>Nome: ${formData.name} </p>
        <p>E-mail: ${formData.email} </p>
        <p>Mensagem: ${formData.message} </p>
        `,
    });

    return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
