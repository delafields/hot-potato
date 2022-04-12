import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gradient-radial from-zinc-700 via-zinc-800 to-zinc-900">
      {/*title style: https://codepen.io/delafields/pen/qLEqNJ*/}
      <Head>
        <title>Hot Spud NFT</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥔</text></svg>"
        />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center font-funky">
        <h1 id="title" className="text-6xl font-bold font-monoton">
          Hot Spud N
        </h1>

        <p className="mt-3 text-xl text-myred">
          The N that rewards doing stuff with it
        </p>

        <div className="text-white text-xl">
          <h1 className="text-4xl text-mustard underline">
            Mechanics
          </h1>
          <div className="flex flex-col">
          Every time you pass your potato, a % of the selling fee gets put into a pot
            <Image src="/../public/hot-potato-normal.gif" height={306} width={323}/>
          </div>
          <div className="flex flex-col">
          So, the more your potato has gotten passed around, the larger the holder's pot is! This encourages trading. If you take in the likely possibility that the price will increase as the pot gets larger, (something about gainz here)
          <Image src="/../public/hot-potato-fast.gif" height={306} width={323}/>
          </div>
          <div className="flex flex-col">
          <p>But here's where it gets <span className="text-myred inline">hot</span>. From their creation, these hot potatoes have a timer which is anywhere from 1 - 7 days. When the timer hits zero, the current holders receive the pot for their given potato! Afterwards, the clock resets and a new epoch begins.</p>
          <Image src="/../public/hot-potato-keeper.gif" height={306} width={323}/>
          </div>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
