import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { Timeline } from 'react-twitter-widgets'

import NewsletterForm from '@/components/NewsletterForm'
import BlogPostCard from '@/components/PostCards'
import About from '@/components/About'

const MAX_DISPLAY = 3
const gradient = [
  'from-[#D8B4FE] via-[#94bbe9] to-[#818CF8]',
  'from-[#6EE7B7] via-[#3B82F6] to-[#9456EA]',
  'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
]
const screenNames = ['reactjs', 'nextjs', 'chakraui', 'tailwindcss']

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return {
    props: { posts },
  }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <About />
      <h3 className="mb-6 bg-gradient-to-r from-purple-800 via-sky-50 to-pink-900 bg-clip-text text-3xl font-extrabold text-transparent">
        Featured Posts
      </h3>
      {/* <div className="container mx-auto px-5 py-2"> */}
      <div className="flex flex-col gap-6 md:flex-row">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((frontMatter, i) => {
          const { slug, date, title, summary } = frontMatter
          console.log(summary)
          return (
            <BlogPostCard
              title={title}
              slug={slug}
              date={date}
              summary={summary}
              gradient={gradient[i]}
              key={slug}
            />
          )
        })}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="mt-6 flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="rounded-md border bg-gradient-to-r from-green-400 to-blue-500 p-2 hover:from-pink-500 hover:to-yellow-500"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {screenNames.length &&
        screenNames.map((screenName) => {
          return (
            <div className="flex items-center justify-center pt-4" key={screenName}>
              {/* <h3 className="text-center">tweet feed</h3> */}
              <div className="justify-between self-center">
                <Timeline
                  dataSource={{ sourceType: 'profile', screenName: { screenName } }}
                  options={{ width: '400', height: '400' }}
                />
              </div>
            </div>
          )
        })}

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
