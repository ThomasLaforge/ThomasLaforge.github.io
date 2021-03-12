import React from "react";
import Head from "next/head";
import matter from "gray-matter";

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
      
      <h1>Voici mon formulaire de contact</h1>
    </>
  );
};

export default Index;