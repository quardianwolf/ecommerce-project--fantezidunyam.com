import Head from 'next/head';
import Image from 'next/image'
import { urlFor, client } from '../lib/client';
import './_document';

import { Header, PageIntro, Peek, Product, Footer, Urunlercaro } from '../components';


const  Home = ({ urunlers, sliderData, avantajlarData, peekData, footerData }) => (
  
    <div>    
      <Head>
        <title>FanteziDunyam</title>
        <meta name="description" content="This e-commerce website created by Atilla Kurt | atilla.dev" />
        <link rel="icon" href="/images/logo.png" />
        
      </Head>    
      <Header/>
      
      <PageIntro
       slider={sliderData.length && sliderData[0]}
       avantajlar={avantajlarData.length && avantajlarData[0]}            
      />
      <main className='container'>
      <Peek peek={peekData.length && peekData[0]} />  
      <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-gray-50">
      <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900 ">Sizin İçin Seçtiklerimiz</h2>     
      <div className="products-container ">    
      {urunlers?.slice(0,4).map((urunler) => <Product key={urunler.id} urunler={urunler} />)}
      </div>
      </div>
      </main> 
      <footer className='container'>
        <Footer footer={footerData.length && footerData[0]}/>
      </footer>
    </div>
 ); 

 export const getServerSideProps = async () => {

  const query = '*[_type == "urunler"]';
  const urunlers = await client.fetch(query);

  const sliderQuery = '*[_type == "slider"]';
  const  sliderData= await client.fetch(sliderQuery);

  const avantajlarQuery = '*[_type == "avantajlar"]';
  const  avantajlarData= await client.fetch(avantajlarQuery);
  
  const peekQuery = '*[_type == "peek"]';
  const  peekData = await client.fetch(peekQuery);

  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery); 

  return {
    props: { urunlers, sliderData, avantajlarData, peekData, footerData }
  }
}

 export default Home;

