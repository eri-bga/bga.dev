import Link from 'next/link'
import useSWR from 'swr'
import cn from 'classnames'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'

import fetcher from 'lib/fetcher'

export default function BlogPostCard({ title, slug, gradient, summary, tags, date }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          'transform transition-all hover:scale-[1.01]',
          'w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3',
          gradient
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900">
          <div className="space-y-6">
            <div>
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">
                  {title}
                </h4>
              </div>
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                </dd>
              </dl>
              <div className="flex flex-wrap justify-center">
                {tags?.map((tag) => (
                  <div className="mt-2" key={tag.id}>
                    <Tag key={tag} text={tag} />
                  </div>
                ))}
              </div>
            </div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              {summary?.slice(0, 100)}
            </div>
          </div>
          <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="capsize ml-2 align-baseline">
              {views ? new Number(views).toLocaleString() : '–––'}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}
