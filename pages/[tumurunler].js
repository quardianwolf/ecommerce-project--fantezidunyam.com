import React, {useState, Fragment} from 'react';
import { urlFor, client } from '../lib/client';
import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';

const filters = [
    {
    id: 'category',
    name: 'Kategoriler',
    options: [
      { value: 'Kadın', label: 'Kadın Urunleri' },
      
    ],
  },
  
]

const Tumurunler = ({urunlers}) => {

  
  const [index, setIndex] = useState(0);
  
  return (
    <div> <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
    <div className="border-b border-gray-200 pt-24 pb-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900"><br/>Ürünlerimiz</h1>
      <p className="mt-4 text-base text-gray-500">
        Birbirinden Ateşli ve Güzel Ürünlerimize Hemen Göz Atın!
      </p>
    </div>

    <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      <aside>
        <h2 className="sr-only">Filters</h2>

        <button
          type="button"
          className="inline-flex items-center lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="text-sm font-medium text-gray-700">Filters</span>
          <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        </button>

        <div className="hidden lg:block">
          <form className="space-y-10 divide-y divide-gray-200">
            {filters.map((section, sectionIdx) => (
              <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                  <div className="space-y-3 pt-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
          </form>
        </div>
      </aside>

      <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">      
        <h2 id="product-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
          {urunlers.map((urunler) => (
            <div
              key={urunler._id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <Image
                  src={urlFor(urunler.image[0])}
                  alt='aa'
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`urunler/${urunler.slug.current}`}>

                  
                    <span aria-hidden="true" className="absolute inset-0" />
                    {urunler.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{urunler.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">{urunler.options}</p>
                  <p className="text-base font-medium text-gray-900">{urunler.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main></div>
  )
}


export const getServerSideProps = async () => {

  const query = '*[_type == "urunler"]';
  const urunlers = await client.fetch(query);

  return {
    props: { urunlers }
  }

}
export default Tumurunler;