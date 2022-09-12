import React from 'react'
import { urlFor, client } from '../lib/client';
import Image from 'next/image'
import Link from 'next/link';

const peek = ({ peek}) => {
  const bg1 = {
    backgroundImage: urlFor(peek.image)
  }
  const {link} = peek;
  return (
    <section aria-labelledby="category-heading" className="bg-gray-50">
    <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
          Günün Seçimi
        </h2>
        <Link href="/tumurunler" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Tüm Ürünlerimize Bakın
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <Link href={link}>
          <Image
            src={urlFor(peek.image[0])}
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            className="object-cover object-center group-hover:opacity-75 a"
          />
          </Link>
          <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
          <div className="flex items-end p-6">
            <div>
              <h3 className="font-semibold text-white">
                <Link href={link}>
                  <span className="absolute inset-0" />
                </Link>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
              </p>
            </div>
          </div>
        </div>
        <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <Image
            src={urlFor(peek.image[1])}
            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 className="font-semibold text-white">
                <Link href={link}>
                  <span className="absolute inset-0" />
                  
                </Link>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
              </p>
            </div>
          </div>
        </div>
        <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <Image
            src={urlFor(peek.image[2])}
            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 className="font-semibold text-white">
                <Link href={link}>
                  <span className="absolute inset-0" />
                
                </Link>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:hidden">
        <Link href={link} className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Hemen Al
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>
  </section>
  )
}



export default peek