import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const mechanics = [
    {
      "text": <>Every time you pass your potato, a percentage of the selling fee gets put into a pot.</>,
      "gif": "/../public/hot-potato-normal.gif"
    },
    {
      "text": <>More transfers + floor raises = a <span className="text-green-500 inline underline">juicy</span> pot.</>,
      "gif": "/../public/hot-potato-fast.gif"
    },
    {
      "text": <>But this is <span className="text-myred inline underline" id="flame_cursor">hot</span> potato. 
                This collection goes through perpetual epochs between 1 and 4 days. 
                When the epoch ends, current holders receive the pot! 
                Afterwards, the clock resets and a new epoch begins.</>,
      "gif": "/../public/hot-potato-keeper.gif"
    }
  ]


  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-to-t from-red-50 to-white"> 
      <Head>
        <title>Hot Potatoes</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥔</text></svg>"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex min-w-full flex-1 flex-col items-center justify-center text-center font-nunito font-black">
          <h1 id="title" className="text-6xl mt-6 font-bold font-monoton">
            Hot Potatoes
          </h1>
          <p id="subtitle" className="text-l text-myred mb-6">
            The NFT that rewards doing stuff with it
          </p>
        
        <h1 className="text-4xl text-mustard bg-black rounded-xl px-4 py-2">
            mechanics
        </h1>

        <div className="w-full sm:w-3/4 max-w-3xl flex flex-col gap-4">
          {mechanics.map((m) => (
            <div className="bg-white p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between border-8 border-mustard rounded-xl text-xl">
              <p className="w-full sm:w-1/3">{ m.text }</p>
              <div className="h-64 w-full sm:w-96 relative mb-4">
                <Image src={ m.gif } layout="fill"/>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          
          <div className="mt-6 w-96 rounded-xl border border-2 p-6 text-left">
            <h3 className="text-2xl font-bold mb-4">Most transacted</h3>
            <div className="flex justify-around">
              <Image src="/150.png" height={150} width={150}
                className="cursor-pointer"
              />
              <div className="flex flex-col justify-center">
                <p>txns: 400</p>
                <p>epoch: 12</p>
                <p>id: 420</p>
              </div>
            </div>
          </div>

          <div className="mt-6 w-96 rounded-xl border border-2 p-6 text-left">
            <h3 className="text-2xl font-bold mb-4">Record pot</h3>
            <div className="flex justify-around">
              <Image src="/150.png" height={150} width={150}
                className="cursor-pointer"
              />
              <div className="flex flex-col justify-center">
                <p>pot: $1,000,000</p>
                <p>epoch: 12</p>
                <p>id: 420</p>
              </div>
            </div>
          </div>
          
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border border-2 p-6 text-left hover:text-myred focus:text-myred"
          >
            <h3 className="text-2xl font-bold">Mint &rarr;</h3>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border border-2 p-6 text-left hover:text-myred focus:text-myred"
          >
            <h3 className="text-2xl font-bold">View collection &rarr;</h3>
          </a>
          
        </div>

        <a className="mt-4 cursor-default" href="https://github.com/delafields">
          Made by <span className="text-myred cursor-pointer">delafields</span>
        </a>

      </main>
    </div>
  )
}

export default Home
