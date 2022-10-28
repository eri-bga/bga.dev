import Image from 'next/image'

export const About = () => {
  return (
    <>
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Brhane(BR HA NE) A.
          </h1>
          <h2 className="mb-4 text-gray-700 dark:text-gray-200">
            Research analytics at <span className="font-semibold">Sectigo</span>
          </h2>
          <p className="mb-16 text-gray-600 dark:text-gray-400">
            A Fullstack developer interested in web development via Reactjs, Sveltejs, Django, and
            some other tech. In my spare time, I use this blog to share what I have discovered and
            learned about tech and sometimes life.
          </p>
        </div>
        <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
          <Image
            alt="Brhane A."
            height={400}
            width={400}
            src="/../public/static/images/profilelinkedin.jpg"
            sizes="300vw"
            priority
            className="rounded-full grayscale filter"
          />
        </div>
      </div>
    </>
  )
}

export default About
