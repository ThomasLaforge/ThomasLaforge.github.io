import React from "react";
import Head from "next/head";
import matter from "gray-matter";

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
    title: 'FORMATION UNIVERSITAIRE LICENCE PROFESSIONNELLE SYSTÈMES INFORMATIQUES ET LOGICIELS OPTION SYSTÈMES D\'INFORMATION, MÉTHODES ET OUTILS',
    years: '20133 – 2014',
    address: 'Université Pierre Mendès France – Grenoble'
  },
  {
    title: 'FORMATION UNIVEZzeRSITAIRE LICENCE PROFESSIONNELLE SYSTÈMES INFORMATIQUES ET LOGICIELS OPTION SYSTÈMES D\'INFORMATION, MÉTHODES ET OUTILS',
    years: '2013 – 201rez4',
    address: 'Université Pierre Mendès France – Grenoble'
  }
]

const Index = ({ data, title, description }: IndexProps) => {
  return (
    <>
      <Head>
        <title>Thomas Laforge - Mon CV</title>
      </Head>
      
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
    </>
  );
};

export default Index;