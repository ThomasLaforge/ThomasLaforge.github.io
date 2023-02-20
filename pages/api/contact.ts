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
      subject: `Hello ${name},
        We receive too much email from you ^^
        I'm glad you wish to contact and I can confirm I have your message !
        Please be kind with the send button and let me a day maximum to contact you in return.

        Have a nice day !

        Thomas

        Bonjour ${name},
        J'ai reçu beaucoup de message de ta part ^^
        Je suis honoré de ton envie de me contact et je peux confirmer que j'ai bien reçu le message !
        Merci de bien vouloir rester calme avec le bouton d'envoie et si tu me laisses une demi journée, soit sûr que je répondrai à ta demande.

        Bonne journée à toi !
        
        Thomas
      `,
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