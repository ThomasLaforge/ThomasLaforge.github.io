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
        <title>Thomas Laforge - Mon CV</title>
      </Head>
      
      <h1>Voici mon CV</h1>
      <div>Et oui ...</div>
    </>
  );
};

export default Index;