import React, { useState } from "react";
import Head from "next/head";
import ExternalLink from "../components/ExternalLink";

interface IndexProps {
  data: any,
  title: string,
  description: string
}

const Index = ({ data, title, description }: IndexProps) => {
  const [searchRequestBlog, setSearchRequestBlog] = useState('')
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
      
      <h1>Bienvenue sur le blog de<br/>Thomas Laforge</h1>
      
      <div className="message">
        <p className='who-am-i'>
          Je suis développeur Web de profession.<br/>
          Je donne également des cours de squash.<br/>
          Et je suis quelqu'un de très curieux.
        </p>
        <p>Vous trouverez donc sur ce site des informations sur mes activités professionnelles, 
          mes nombreux projets personnels, ainsi que des articles sur un sujet technique particulier.
        </p>
      </div>

      <div className="contact-section">
        <h2>Me contacter</h2>
        <div className="contact-message">
          <p>Vous souhaitez :</p>
          <ul>
            <li>Me faire remonter un soucis ou une coquille</li>
            <li>En savoir un peu plus sur moi</li>
            <li>Me proposer un projet professionnel</li>
            <li>Pouvoir échanger</li>
          </ul>
          <div>
            Je vous laisse me contacter avec le formulaire de contact <ExternalLink href="/contact" />
          </div>
        </div>
      </div>
      <div className="cv-section">
        <h2>Mon CV</h2>
        <p>Si vous souhaitez plutôt en savoir plus au sujet de :</p>
        <ul>
          <li>Mon cursus scolaire</li>
          <li>Mes compétences techniques</li>
          <li>Mes expèriences professionnelles</li>
        </ul>
        <div>
          Je vous laisse accèder à mon CV <ExternalLink href="/cv" />
        </div>         
      </div>
      <div className="blog-presentation">
        <h2>Mes dernier articles</h2>
        <div className="blog-presentation-message">
          <div>
            Voici les derniers articles sortis sur le site. 
            Si vous souhaitez en voir plus ou rechercher certains types
            d'articles en particulier, il y a un formulaire sur 
            la page d'accueil du blog <ExternalLink href="/blog" />
          </div>
        </div>
        <div className="blog-lists">
          <div className="blogs-latest">

          </div>
        </div>
      </div>
    </>
  );
};

export default Index;