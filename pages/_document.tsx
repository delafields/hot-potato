import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link 
            href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" 
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" 
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css?family=Monoton" 
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument