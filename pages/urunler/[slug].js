import React, {useState} from 'react'
import { client, urlFor} from '../../lib/client';
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Header, Footer } from '../../components';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const PruductDetails = ({urunler, urunlers}) => {
   const { image, name, details, price, rating, ozellikler, link} = urunler;
   const [index, setIndex] =useState(0);
  return (
    
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {image?.map((item, i) => (
                <Tab
                  key={i}
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  {({ selected }) => (
                    <a>
                      <span className="sr-only"> {image.name} </span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img src={urlFor(item)} alt="aa" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        className={classNames(
                          selected ? 'ring-indigo-500' : 'ring-transparent',
                          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                        )}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
            {image?.map((image) => (
              <Tab.Panel key={image.id}>
                <img
                  src={urlFor(image)}
                  alt='aa'
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{name}</h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{price}₺</p>
          </div>
          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              className="space-y-6 text-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: details }}
            />
          </div>

          <form className="mt-6">
            {/* Colors */}

            <div className="sm:flex-col1 mt-10 flex">
              <a href={link}>
              <button
                type="submit"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
                Hemen Satın Al
              </button>
              </a>
            </div>
          </form>
          <section aria-labelledby="details-heading" className="mt-12">
            <h2 id="details-heading" className="sr-only">
              Additional details
            </h2>
          </section>
        </div>
      </div>
    </div>
  </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "urunler"]{
    slug {
      current
    }
  }
  `;

  const urunler = await client.fetch(query);

 const paths = urunler.map((urunler)=>({
  params: {
    slug: urunler.slug.current
  }
 }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: { slug }}) => {

  const query = `*[_type == "urunler" && slug.current == '${slug}'][0]`;
  const urunlersQuery = '*[_type == "urunler"]';

  const urunler = await client.fetch(query);
  const urunlers = await client.fetch(urunlersQuery);
   
  return {
    props: { urunler, urunlers }
  }
}


export default PruductDetails