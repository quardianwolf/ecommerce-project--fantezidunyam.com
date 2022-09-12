import React from 'react'
import { urlFor } from '../lib/client';


const Product = ({urunler: { image, name, slug }}) => {
  return (
    <div className='products-container'>
      <a href={`/urunler/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && image[0])}
            alt='aa'
            width={250}
            height={300}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
        </div>
        </a>
    </div>
  )
}

export default Product