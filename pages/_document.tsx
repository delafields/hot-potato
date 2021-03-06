import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link 
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap"
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