import React from "react";
import Head from "next/head";

interface IndexProps {
  data: any,
  title: string,
  description: string
}

const Index = ({ data, title, description }: IndexProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>Thomas Laforge - Contactez moi</title>
      </Head>
      
      <main id="main" className="site-main">
        <h2>Contact</h2>
        <section id="contact-form" className="block-form">
          <div className="block-content">
            <p>Pour me contacter, merci de remplir le formulaire.</p>
            <form name='contactForm' id='contactForm' action='/thank-you' method='POST'>
              <div className="screen-reader-text">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </div>
              <input type="hidden" name="form-name" value="contactForm" />
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" placeholder="Votre nom et prénom" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Votre adresse mail" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={7} placeholder="Votre message"></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="button">Envoyer</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;