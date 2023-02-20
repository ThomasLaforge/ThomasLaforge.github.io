import {DiscussionEmbed} from "disqus-react"

interface DisqusCommentsProps {
    post: {
        slug: string,
        title: string
    }
}

const DisqusComments = ({ post }: DisqusCommentsProps) => {
  const disqusShortname = "thomas-laforge-blog"
  const disqusConfig = {
    url: process.env.NODE_ENV 
      ? `http://localhost:3000/${post.slug}`
      : `https://thomas-laforge.com/${post.slug}`,
    identifier: post.slug, // Single post id
    title: post.title // Single post title
  }
  return (
    <div className="disqus-block">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;