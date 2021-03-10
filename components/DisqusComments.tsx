import {DiscussionEmbed} from "disqus-react"

interface DisqusCommentsProps {
    post: {
        slug: string,
        title: string
    }
}

const DisqusComments = ({ post }: DisqusCommentsProps) => {
  const disqusShortname = "thomaslaforge"
  const disqusConfig = {
    url: `https://blog.thomas-laforge.fr/${post.slug}`,
    identifier: post.slug, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;