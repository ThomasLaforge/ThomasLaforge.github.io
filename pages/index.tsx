import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";

interface IndexProps {
  data: any,
  title: string,
  description: string
}

interface BlogData {
  slug: string,
  title: string,
  description: string
}

interface BlogMatter {
  data: BlogData
}

const Index = ({ data, title, description }: IndexProps) => {
  const RealData = data.map((blog: any) => matter(blog)) as BlogMatter[]
  const ListItems = RealData.map((listItem) => listItem.data);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
      
      <h1>Bienvenue sur le blog de Thomas Laforge</h1>
      
      <div>
        <ul>
          {ListItems.map((blog, i) => (
            <li key={i}>
              <Link href={`/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const siteData = await import(`../config.json`);
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter((fn: string) => fn.endsWith(".md"));

  const data = blogs.map((blog: string) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}