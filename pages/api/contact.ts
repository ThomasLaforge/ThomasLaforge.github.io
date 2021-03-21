require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const SPAM_LIMIT = 3 // nb email possible to send before spamming alert is up and block next messages

let contacts = new Map<string, number>()

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, text } = req.body;
  const nbMailAlreadySent = contacts.get(email) || 0  

  if(nbMailAlreadySent < SPAM_LIMIT){
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
        contacts.set(email, nbMailAlreadySent + 1)
      }
    });
  }
  else {
    contacts.set(email, nbMailAlreadySent + 1)
    console.warn(`Spam Alert ! ${email} is spamming you (${contacts.get(email)} messages)`)
    res.status(429).send("you are spamming me ...");
  }
};