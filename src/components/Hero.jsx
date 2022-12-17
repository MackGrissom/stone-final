import React from 'react'
import Logo from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/logo.png'
import { ContactsFilled } from '@ant-design/icons'
import Carousel1 from './Carousel1'
const Hero = () => {
  return (
           
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12  hero relative">


      
        <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        {/* <img src={Logo} className='banner-logo' /> */}
                        {/* <video src={HeroVid} autoPlay loop muted className='herovid' /> */}
    
                    </h1>
                    
    <Carousel1 />
    
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#D2B48C] md:text-5xl lg:text-6xl ">Where Quality Matters</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Precision Stoneworks our mission is simple: we’re committed to exceptional quality, competitive prices, and, above all, customer satisfaction..</p>
        
 
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Try Our Design Tool
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <ContactsFilled /> &nbsp;
                Contact Us
            </a>
            <br/>  
        </div>
            <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5">Ready? </span> <span class="text-sm font-medium"> Get A Quote Now</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <br/>
        </div>
  )
}

export default Hero;