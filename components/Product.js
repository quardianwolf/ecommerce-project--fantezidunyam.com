import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';


const Product = ({urunler: { image, name, slug }}) => {
  return (
    <div className='products-container'>
      <Link href={`/urunler/${slug.current}`}>
        <div className='product-card'>
          <Image
            src={urlFor(image && image[0])}
            alt='aa'
            width={250}
            height={300}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product