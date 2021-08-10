import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import {ImCalendar} from 'react-icons/im'
import fs from "fs";

interface BlogIndexData {
  content: string[],
  miniatures: (string | null)[]
}
interface IndexProps {
  data: BlogIndexData,
}

interface BlogData {
  slug: string,
  title: string,
  description: string,
  date: string,
  tags: string[],
}

const Index = ({ data }: IndexProps) => {
  const { miniatures, content } = data
  const blogDatas = content.map( blog => matter(blog).data as BlogData )
  return (
    <>
      <Head>
        <title>Thomas Laforge - Blog</title>
      </Head>
      <div className="blog">
        <h1>Bienvenue sur mon blog</h1>
        
        <div className='blog-collection'>
          {blogDatas.map((blog, i) => {
            const miniature = miniatures[i]
            return <div className='blog-summary' key={i}>
              {/* <div className="blog-miniature">
                {miniature 
                  ? <Image 
                      src={miniature} 
                      className='miniature-image'
                      width='150px'
                      height='50px'
                  />
                  : 'empty'
                }
              </div> */}

              <div className="blog-text-data">

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
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const blogSlugs: string[] = files.filter((fn: string) => fn.endsWith(".md"));

  const data = blogSlugs.map((blogSlug) => {
    const path = `${process.cwd()}/content/${blogSlug}`;
    const rawContent: string = fs.readFileSync(path, { encoding: "utf-8" });
    return rawContent
  });

  return {
    props: { data : {
      content: data,
      miniatures: blogSlugs.map( blogFileName => {
        const slug = blogFileName.replace('.md', '')
        const path = `${process.cwd()}/public/blog_images/${slug}/_miniature.png`;
        return fs.existsSync(path) ? `/blog_images/${slug}/_miniature.png` : null 
      })
    } } as IndexProps,
  };
}