import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

interface IndexProps {
  data: any,
  title: string,
  description: string
}

const Index = ({ data, title, description }: IndexProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleFormSubmit = (e: any) => {
    console.log('handle form submit', e, name, email, message);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        text: message,
      }),
    }).then((res) => {
      console.log("Fetch: ", res);
      if(res.status === 200){
        router.push("/")
      }
      else {
        console.error('error sending email', e);
      }
    })
  }

  return (
    <>
      <Head>
        <title>Thomas Laforge - Contactez moi</title>
      </Head>
      
      <main id="main" className="contact-page">
        <h2>Contact</h2>
        <section className="block-form">
          <div className="block-content">
            <p>Pour me contacter, merci de remplir le formulaire.</p>
            <div className="screen-reader-text">
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>
            <input type="hidden" name="form-name" value="contactForm" />
            <div className="form-group">
              <label htmlFor="name">Nom et Prénom</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Bigoud Etienne" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="e.bigoud@bleu.fr" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={7} 
                className="textarea-message"
                placeholder="Je vous contacte pour ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="form-submit">
              <button onClick={handleFormSubmit} className="button">Envoyer</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;