import Image from 'next/image'

export const About = () => {
  return (
    <>
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 bg-gradient-to-r from-purple-800 via-sky-50 to-pink-900 bg-clip-text text-3xl font-extrabold text-transparent">
            Brhane A.
          </h1>
          <h2 className="mb-4 text-gray-700 dark:text-gray-200">
            PHP Developer at <span className="font-semibold">Sectigo</span>
          </h2>
          <p className="mb-16 text-gray-600 dark:text-gray-400">
            A Fullstack developer in PHP, Python, and reactjs. And tries some frameworks like,
            Reactjs, Sveltejs, Symfony and Laravel.
          </p>
        </div>
        <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
          <Image
            alt="Brhane A."
            height={400}
            width={400}
            src="/../public/static/images/profile.jpg"
            sizes="300vw"
            priority
            className="rounded-full bg-gradient-to-l from-rose-400 via-fuchsia-500 to-pink-400 grayscale filter"
          />
        </div>
      </div>
    </>
  )
}

export default About
