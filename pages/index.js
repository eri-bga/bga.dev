import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import NewsletterForm from '@/components/NewsletterForm'
import BlogPostCard from '@/components/PostCards'
import About from '@/components/About'

const MAX_DISPLAY = 3

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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <About />
        <div className="mb-4 space-y-2 pt-6 md:space-y-5">
          <h5 className="text-xl font-bold leading-9 tracking-tight text-cyan-900 dark:text-blue-300 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Featured posts
          </h5>
        </div>
        <div className="container mx-auto px-5 py-20">
          <div className="-m-4 flex flex-wrap">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <div key={slug} className="flex flex-col gap-6 p-4 md:w-1/3 md:flex-row">
                  <div
                    className="mb-4 block max-w-3xl 
                      border-spacing-6 overflow-hidden rounded-lg border p-1 text-center
                      hover:bg-cyan-100 dark:hover:bg-gray-700"
                  >
                    <BlogPostCard
                      title={title}
                      slug={slug}
                      tags={tags}
                      date={date}
                      summary={summary}
                      gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
