import React from 'react'
import PhotoGallery from "react-photo-gallery";
import { kitchenphotos } from './photos';

const Kitchens = () => {
  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12  hero relative mb-20">
  <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#D2B48C] md:text-5xl lg:text-6xl "> Our Kitchen Designs</h1>
  
  <div className='flex p-5 justify-between'>
   <a href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop" class="inline-flex justify-between items-center py-1 px- pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5">Ready? </span> <span class="text-sm font-medium"> Get A Quote Now</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
   
            </div>
        <PhotoGallery photos={kitchenphotos} />
    </div>
  )
}

export default Kitchens