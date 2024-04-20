import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
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
  
  // sort by date formated as 'DD/MM/YYYY'
  blogDatas.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map( n => parseInt(n))
    const [dayB, monthB, yearB] = b.date.split('/').map( n => parseInt(n))
    if (yearA !== yearB) return yearB - yearA
    if (monthA !== monthB) return monthB - monthA
    return dayB - dayA
  })

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
                  ? < 
                      src={miniature} 
                      className='miniature-'
                      width='150px'
                      height='50px'
                  />
                  : 'empty'
                }
              </div> */}

              <div className="blog-text-data">

                <Link className='blog-title' href={`/blog/${blog.slug}`}>
                  {blog.title}
                </Link>
                <div className="blog-meta">
                  {blog.tags && 
                    <div className="blog-tags">
                      {blog.tags.map((t, k) => (
                        <div className="blog-tag-elt" key={k}>{t}</div>
                      ))}
                    </div>
                  }
                  <div className="blog-date">
                    <ImCalendar className='date-icon'/> 
                    <div className="date-value">{blog.date}</div>
                  </div>
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
        const path = `${process.cwd()}/public/blog_s/${slug}/_miniature.png`;
        return fs.existsSync(path) ? `/blog_s/${slug}/_miniature.png` : null 
      })
    } } as IndexProps,
  };
}