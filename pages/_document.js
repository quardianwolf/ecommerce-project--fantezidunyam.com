import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>   
      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" defer/>
      <script src="https://kit.fontawesome.com/8d50ef5662.js" crossorigin="anonymous" defer/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}