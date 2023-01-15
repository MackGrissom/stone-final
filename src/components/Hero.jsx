import React from 'react'
import Logo from '/src/assets/logo.png'
import { ContactsFilled } from '@ant-design/icons'
import 'animate.css'
import HeroVid from '../assets/marble.mp4'
import Typed from 'react-typed'
import {Canvas} from '@react-three/fiber'
import RotatingRectangle from './RotatingRectangle'


const Hero = () => {
  return (
    <div className="hero relative mx-auto mb-10 max-w-screen-xl py-8  px-4 text-center lg:py-16 lg:px-12">
       <Canvas>
        <RotatingRectangle />
      </Canvas>
      <img src={Logo} className="hero-logo animate_animated w-[40%] " />

      <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
        {/* <img src={Logo} className='banner-logo' /> */}
      </h1>

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#D2B48C] md:text-5xl lg:text-6xl ">
        <Typed
          className="loader-text, text-[#D2B48C]"
          strings={['Where Quality Matters']}
          typeSpeed={80}
          backSpeed={0}
          showCursor={false}
        />
      </h1>
      <p className="mb-8 text-sm font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-sm xl:px-48">
        <span className="smaller text-xs text-[white]">
          We offer affordable & competitive prices on Granite, Marble,
          Quartzite, Quartz, and Soapstone.
        </span>
      </p>

      <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
        <a
          href="#"
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg py-3 px-5 text-center text-base font-medium text-white focus:ring-4"
        >
          Try Our Design Tool
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 py-3 px-5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <ContactsFilled /> &nbsp; Contact Us
        </a>
        <br />
      </div>
      <a
        href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop"
        className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 p-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        role="alert"
      >
        <span className="bg-primary-600 rounded-full px-4 py-1.5 text-xs text-white">
          Ready?{' '}
        </span>{' '}
        <span className="text-sm font-medium"> Get A Quote Now</span>
        <svg
          className="ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      <br />
    </div>
  )
}

export default Hero
