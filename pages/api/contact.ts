require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require("nodemailer");

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${text}
    `,
  };

  transporter.sendMail(mailOption, (err: any, data: any) => {
    if (err) {
      console.log(err);
      res.status(500).send("error" + JSON.stringify(err));
    } else {
      res.send("success");
    }
  });
};