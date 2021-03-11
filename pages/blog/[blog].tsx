import react from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { NextPageContext } from "next";
import Head from "next/head";

const CodeBlock = ({ language, value }: { language: string, value: string}) => {
  return (
    <SyntaxHighlighter language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

interface BlogProps {
  content: string,
  data: {
    title: string,
    description: string,
    tags: string[]
  }
}

const Blog = ({ content, data }: BlogProps) => {
  const frontmatter = data;

  return (
    <>
      <Head>
        <title>{'Thomas Laforge - ' + frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
      <div className="tags">
        {frontmatter.tags && frontmatter.tags.map((t, i) => (
          <div className="tag" key={i}>{t}</div>
        ))}
      </div>
      <ReactMarkdown
        escapeHtml={true}
        source={content}
        renderers={{ code: CodeBlock }}
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