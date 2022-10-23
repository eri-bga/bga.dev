import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import formatDate from '@/lib/utils/formatDate'
import Tags from './tags'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')

  return {
    props: { posts, tags },
  }
}

export default function Home({ posts, tags }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mb-4 space-y-2 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-cyan-900 dark:text-blue-300 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-cyan-900 dark:text-blue-300">
            {siteMetadata.header}
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-auto pt-5">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <div
                  key={slug}
                  className="mb-4 block max-w-3xl border-spacing-6 rounded-lg border bg-gradient-to-r from-indigo-100
                  via-purple-400 to-pink-400 p-1 text-center"
                >
                  <div className="mx-auto bg-gray-300 hover:bg-cyan-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <article>
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/blog/${slug}`}
                                  className="text-cyan-900 dark:text-blue-300"
                                >
                                  {title}
                                </Link>
                              </h2>
                              <dl>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                  <time dateTime={date}>{formatDate(date)}</time>
                                </dd>
                              </dl>
                              <div className="flex flex-wrap justify-center">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </div>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                              {summary}
                            </div>
                          </div>
                          <div className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-00 pt-1 hover:text-primary-600 dark:hover:text-primary-200"
                              aria-label={`Read "${title}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mx-auto justify-center">
            <Tags tags={tags} />
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
