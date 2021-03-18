import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";

interface IndexProps {
  data: any,
  title: string,
  description: string
}

interface Formation {
  title: string,
  years: string,
  address: string 
}

const formations: Formation[] = [
  {
    title: 'FORMATION UNIVERSITAIRE LICENCE PROFESSIONNELLE SYSTÈMES INFORMATIQUES ET LOGICIELS OPTION SYSTÈMES D\'INFORMATION, MÉTHODES ET OUTILS',
    years: '2013 – 2014',
    address: 'Université Pierre Mendès France – Grenoble'
  },
  {
    title: 'DUT INFORMATIQUE EN ANNÉE SPÉCIALE',
    years: '2012 – 2013',
    address: 'Université Pierre Mendès France – Grenoble'
  },
  {
    title: 'DUT STATISTIQUE ET INFORMATIQUE DÉCISIONNELLE',
    years: '2010 – 2012',
    address: 'Université Pierre Mendès France – Grenoble'
  }
]

const Index = ({ data, title, description }: IndexProps) => {
  return (
    <>
      <Head>
        <title>Thomas Laforge - Mon CV</title>
      </Head>
      <div className="cv">
        <h1 className="cv-title">CV de Thomas Laforge</h1>
        <div className="cv-function">Développeur Web Full Stack JS</div>

        <div className="cv-download">
          <a className="cv-download-btn" 
            href="/Laforge_Thomas_CV.pdf" 
            target="_blank" 
            download
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="cv-presentation">
          <h2 className="cv-presentation-title">Profil personnel</h2>
          <div className="cv-presentation-content">
            Je suis un développeur professionnel et motivé, doté de
            nombreuses années d'expérience dans la création
            d'applications et services web. Je me spécialise dans
            l'environnement Javascript, me permettant de réaliser tous
            types de projets, allant d'une application web à une
            application mobile, en passant par des applications Mac /
            Windows ou même de l'électronique / IOT.
            Je suis très curieux et pratique une veille technologique très
            fréquente. Tout me passionne et j'aime apprendre en continu.
          </div>
        </div>

        <div className="cv-formations">
          <h2>Formations</h2>
          {
            formations.map( (formation, index) => (
              <div className="formation" key={index}>
                <div className="formation-title">{formation.title}</div>
                <div className="formation-info">
                  <div className="formation-years">{formation.years}</div>
                  <div className="formation-address">{formation.address}</div>
                </div>
              </div>
            )) 
          }
        </div>
      </div>
    </>
  );
};

export default Index;