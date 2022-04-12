import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-radial from-red-200 to-gray-50">
      <Head>
        <title>Hot Spud N</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥔</text></svg>"
        />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center font-funky">
          <h1 id="title" className="text-6xl font-bold font-monoton">
            Hot Spud N
          </h1>
          <p id="subtitle" className="text-l text-myred mb-6">
            The N that rewards doing stuff with it
          </p>
        
        <h1 className="text-4xl text-mustard bg-black rounded-xl px-4">
            Mechanics
        </h1>

        <div className="flex flex-col items-center border-8 border-mustard rounded-xl px-32 py-4 text-black text-xl">
          
          Every time you pass your potato, a % of the selling fee gets put into a pot
          <div className="h-64 w-96 relative mb-4">
            <Image src="/../public/hot-potato-normal.gif" height={306} width={323} layout="fill"/>
          </div>
          So, the more your potato has gotten passed around, the larger the holder's pot is! This encourages trading. If you take in the likely possibility that the price will increase as the pot gets larger, (something about gainz here)
          <div className="h-64 w-96 relative mb-4">
            <Image src="/../public/hot-potato-fast.gif" height={306} width={323} layout="fill"/>
          </div>
          <p>But here's where it gets <span className="text-myred inline">hot</span>. From their creation, these hot potatoes have a timer which is anywhere from 1 - 7 days. When the timer hits zero, the current holders receive the pot for their given potato! Afterwards, the clock resets and a new epoch begins.</p>
          <div className="h-64 w-96 relative">
            <Image src="/../public/hot-potato-keeper.gif" height={306} width={323} layout="fill"/>
          </div>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-myred focus:text-myred"
          >
            <h3 className="text-2xl font-bold">Mint</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-myred focus:text-myred"
          >
            <h3 className="text-2xl font-bold">View collection &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-myred focus:text-myred">
            <h3 className="text-2xl font-bold">Record moves potato</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </div>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-myred focus:text-myred"
          >
            <h3 className="text-2xl font-bold">Record pot</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <a className="mt-4 cursor-default" href="https://github.com/delafields">
          Made by <span className="hover:text-myred cursor-pointer">delafields</span>
        </a>
      </main>
    </div>
  )
}

export default Home
