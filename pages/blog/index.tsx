import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";
import {ImCalendar} from 'react-icons/im'

interface IndexProps {
  data: any,
  title: string,
  description: string
}

interface BlogData {
  slug: string,
  title: string,
  description: string,
  date: string,
  tags: string[]
}

interface BlogMatter {
  data: BlogData
}

const Index = ({ data }: IndexProps) => {
  const RealData = data.map((blog: string) => matter(blog)) as BlogMatter[]
  const ListItems = RealData.map((listItem) => listItem.data);

  return (
    <>
      <Head>
        <title>Thomas Laforge - Blog</title>
      </Head>
      <div className="blog">
        <h1>Bienvenue sur mon blog</h1>
        
        <div className='blog-collection'>
          {ListItems.map((blog, i) => (
            <div className='blog-summary' key={i}>
              <Link href={`/blog/${blog.slug}`}>
                <a className='blog-title'>{blog.title}</a>
              </Link>
              <div className="blog-meta">
                <div className="blog-date">
                  <ImCalendar className='date-icon'/> 
                  <div className="date-value">{blog.date}</div>
                </div>
                {blog.tags && 
                  <div className="blog-tags">
                    {blog.tags.map((t, k) => (
                      <div className="blog-tag-elt" key={k}>{t}</div>
                    ))}
                  </div>
                }
              </div>
              <div className='blog-description'>{blog.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const siteData = await import(`../../config.json`);
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