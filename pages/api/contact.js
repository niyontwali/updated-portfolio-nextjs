/* eslint-disable import/no-anonymous-default-export */
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { fullname, phone, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: process.env.SECUREBOOL,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    const sendEmail = await transporter.sendMail({
      from: email,
      to: "nijohn0006@gmail.com",
      subject: `Contact Message from ${fullname}`,
      html: `
      <h2 style="font-weight:bold">${subject}</h2>
      <p><strong>From:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tel Number:</strong> ${phone}</p>
      <p style="width: 600px">${message}</p>
      `
    });
    res.status(200).json({
      message: "Message Successfully sent",
      messageId: `${sendEmail.messageId}`
    });
  } catch (error) {
    res.status(400).json({
      error: "Message not sent, try again"
    });
  }
};
