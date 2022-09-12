import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import { urlFor } from '../lib/client';
import { SliderTooltip } from 'rc-slider';
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = ({slider : {image, manset_1, manset_2, manset_3, buton_adi1, buton_link1, buton_adi2, buton_link2, buton_adi3, buton_link3,}, avantajlar}) => {

  return (
   
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide mx-auto flex">
            <div className='container'>
              <Image src={urlFor(image && image[0])} alt='aa' className='w-auto h-full  object-cover  ml-auto'/>
            </div>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>{manset_1}</h2>
                <Link href={buton_link1} className="btn-shop"><i className="fa-solid fa-arrow-right"></i>{buton_adi1}</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide flex">
            <div className='container'>
            <Image src={urlFor(image && image[1])} alt='aa' className='w-auto h-full  object-cover  ml-auto'/>
            </div>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>{manset_2}</h2>
                <Link href={buton_link2} className="btn-shop"><i className="fa-solid fa-arrow-right"></i>{buton_adi2}</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide flex">
            <div className='container flex-1'>
            <Image src={urlFor(image && image[2])} alt='aa' className='w-auto h-full  object-cover  ml-auto'/>
            </div>
            <div className="container flex-1">
              <div className="page-intro__slide__content">
                <h2>{manset_3}</h2>
                <Link href={buton_link3} className="btn-shop"><i className="fa-solid fa-arrow-right"></i>{buton_adi3}</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="fa-solid fa-truck-fast"></i>
              <div className="data-item__content">
                <h4>{avantajlar.baslik_1}</h4>
                <p>{avantajlar.metin_1}</p>
              </div>
            </li>
            
            <li>
              <i className="fa-solid fa-truck-fast"></i>
              <div className="data-item__content">
                <h4>{avantajlar.baslik_2}</h4>
                <p>{avantajlar.metin_2}</p>
              </div>
            </li>
            
            <li>
            <i className="fa-solid fa-money-bill-1-wave"></i>              
            <div className="data-item__content">
                <h4>{avantajlar.baslik_3}</h4>
                <p>{avantajlar.baslik_3}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro