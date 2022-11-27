import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
const Slug = ({ product, addToCart }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4.5/5 mx-auto flex flex-wrap'>
            <img
              className='lg:w-1/2 w-full lg:h-auto h-34  rounded-3xl'
              src={
                product.attributes.image.data &&
                `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.attributes.image.data.attributes.url}`
              }
              alt={product.attributes.title}
            />
            <div className='lg:w-1/2 w-full lg:pl-20 lg:py-6 mt-10 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                Saanjh Candles
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {product.attributes.title}
              </h1>
              <div className='flex mb-4'>
                <span className='flex items-center'>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <span className='text-gray-600 ml-3'>4 Reviews</span>
                </span>
                <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s'>
                  <Link href={'/'} className='text-gray-500'>
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'>
                      <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                    </svg>
                  </Link>
                  <Link href={'/'} className='text-gray-500'>
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'>
                      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                    </svg>
                  </Link>
                  <Link href={'/'} className='text-gray-500'>
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'>
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                  </Link>
                </span>
              </div>
              <p className='leading-relaxed'>
                {product.attributes.description}
              </p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <div className='flex'>
                  <span className='mr-3'>Color</span>
                  <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button className='border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none'></button>
                </div>
                <div className='flex ml-6 items-center'>
                  <span className='mr-3'>Size</span>
                  <div className='relative'>
                    <select className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'>
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4'
                        viewBox='0 0 24 24'>
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  ₹{product.attributes.price}
                </span>

                <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'>
                    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                  </svg>
                </button>
              </div>
              <div className='flex my-4'>
                <button
                  onClick={() => {
                    addToCart(slug, 1, product.attributes.price);
                  }}
                  className='inline-block px-6 py-3 mr-4 border-2 border-blue-500 text-blue-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-2'>
                  Add to cart{' '}
                </button>
                <button
                  onClick={() => {
                    router.push('/checkout');
                  }}
                  className='inline-block px-6 py-3 border-2 mx-4 border-blue-500 text-blue-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-2'>
                  Checkout{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  //   console.log(context.query);
  let headers = {
    Authorization:
      'Bearer e29791c82c4cefb0a3a35aff2ed3fc5f86b86785e3ccd8d9cfcd615fd621f5fa62b00299422e7898b9e70aaf1e9ec9ec4f37df75bd084461ccbf1683c86e787790b876bbc0f27717a121c17f2099a663f13b780763dc16587ed8d364951b8813df4662e73a929c6aa2fa274e0aeb7063f461524e1d4dc118b1a76ff9ab985295',
  };
  let a = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug]=` +
      context.query.slug +
      '&populate=*',
    {
      headers,
    }
  );
  let product = await a.json();

  return {
    props: { product: product.data[0] },
  };
}

export default Slug;