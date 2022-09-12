import React from 'react'
import Head from 'next/head';
import { Header, Footer} from '../components';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>FanteziDunyam</title>
        <meta name="description" content="This e-commerce website created by Atilla Kurt | atilla.dev" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header/>
      <main>
      {children}
      </main>
      
    </div>
  )
}

export default Layout