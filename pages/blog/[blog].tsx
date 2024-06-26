//@ts-nocheck
import react from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { NextPageContext } from "next";
import Head from "next/head";
import { ImCalendar } from "react-icons/im";
import DisqusComments from "../../components/DisqusComments";
import gfm from 'remark-gfm'
import emoji from 'emoji-dictionary'
import Link from "next/link";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

const emojiSupport = (text: any) => text.value.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name))

const linkRenderer = ({ children, href }: {children: react.ReactElement, href: string}) => {
  return <Link href={href}><a>{children}</a></Link>
}

const BlogImage = (props: any) => { return <img {...props} style={{maxWidth: '100%'}} /> }

const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxHighlighter style={nord} PreTag="div" customStyle={{ fontSize: "14px"}} language={match[1]} {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

interface BlogProps {
  content: string,
  data: {
    title: string,
    date: string,
    description: string,
    tags: string[],
    slug: string
  }
}

const Blog = ({ content, data }: BlogProps) => {
  const frontmatter = data;

  return (
    <>
      <Head>
        <title>{'Thomas Laforge - ' + frontmatter.title}</title>
      </Head>
      <div className="blog-article">
        <div className='blog-summary'>
          <div className='blog-title'>{frontmatter.title}</div>
          <div className="blog-meta">
            {frontmatter.tags && 
              <div className="blog-tags">
                {frontmatter.tags.map((t, k) => (
                  <div className="blog-tag-elt" key={k}>{t}</div>
                ))}
              </div>
            }
            <div className="blog-date">
              <ImCalendar className='date-icon'/> 
              <div className="date-value">{frontmatter.date}</div>
            </div>
          </div>
        </div>
        
        <ReactMarkdown
          skipHtml={false}
          source={content}
          components={{ 
            code: CodeBlock,
            text: emojiSupport,
            link: linkRenderer,
            image: BlogImage,
          }}
          remarkPlugins={[ gfm ]}
        >{content}</ReactMarkdown>
      </div>

      <DisqusComments 
        post={frontmatter}
      />
    </>
  );
};

export default Blog;

Blog.getInitialProps = async (context: NextPageContext) => {
  const { blog } = context.query;
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${blog}.md`);
  const data = matter(content.default);

  return { ...data };
}