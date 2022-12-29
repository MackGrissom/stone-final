
import '../styles/App.css'
import Hero from './Hero'
import PhotoGallery from 'react-photo-gallery'
import { kitchenphotos } from './photos'





const Home = () => {
  return (
    <>
    <Hero/>
    <PhotoGallery photos={kitchenphotos} className='gallery'/>
    </>
  )
}

export default Home



// import Logo from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/logo.png'
// import Cards from './Cards'
// import DesignTool from '/home/mackgrissom/code/MackGrissom/ant-stoneworks/precisionstone/src/assets/DesignTool.png'

// import { FloatButton } from 'antd';
// import FloatMenu from './FloatMenu'
// import Map from './Map'
// import Hero from './Hero'

// import { Carousel, Image, Typography } from 'antd'




// const location = {
//     address: '1090 Parkway Industrial Park Dr, Buford, GA 30518',
//     lat: 34.14305763038972,
//     lng: -83.98197070000002,
// }

// const Home = () => {
//     return (

//         // <section class="pt-10 bg-white section-home">
// <section className='bg-[#161719] w-[100%] block'>
   
//             <FloatMenu />

//              <div class="px-12 mx-auto max-w-7xl opacity">
//                 <div class="w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center p-18">
                    
//                     {/* <p class="px-0 mb-8 text-2xl text-[white] md:text-3xl lg:px-24 w-[200%] text-left hero-words">
//                         Exceptional Quality || Competitive Prices || Customer Satisfaction.
//                     </p> */}
//                     <Cards />
//                     <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
//                         <a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[tan] rounded-2xl sm:w-auto sm:mb-0">
//                             Instant Quote
//                             <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                         </a>
//                         <a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">

//                             Visualize Your Design
//                             <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
//                         </a>
                        
//                         <p className='text-white text-md pt-10 border-b-orange-600'> Since 1999, Precision Stoneworks has proudly served residential builders, commercial contractors, remodelers and DIY clients throughout Atlanta and the North Georgia region. We are a full service company equipped with a knowledgeable and skilled team who will work with you through each step in the process, down to the final installation. From custom design, stone selection, fabrication down to installation, our artisans and craftsmen collectively have over 150 years of experience in the stone & quartz counter top business. Our mission is simple: we’re committed to exceptional quality, competitive prices, and, above all, customer satisfaction.</p>
                     
//                     </div>
//                     <FloatButton.BackTop />

                        
//                     </div>



            
//                 <div class="w-full mx-auto mt-20 text-center md:w-10/12">
                   
//                     <div class="w-full mx-auto mt-20 text-center md:w-10/12">


//                         <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
//                             <span class="block w-full py-2 bg-clip-text leading-12 bg-gradient-to-r text-[#D2B48C]  lg:inline"> Not All Stone Fabricators Are Equal</span>

//                         </h1>

                       


//                     </div>

//                     <Map/>


//                     <div class="relative z-0 w-full mt-8 contents justify-center align-center design-home-container">
                        
//                     <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
//                             <span class="block w-full py-2 bg-clip-text leading-12 bg-gradient-to-r text-[#D2B48C]  lg:inline"> Design Made Easy</span>

//                         </h1>
//                         <p className='text-white'> Our kitchen visualizer provides you with an interactive, easy to use kitchen remodeling design experience. Our tools are loaded with multiple room layouts to choose from and you can customize with hundreds of kitchen countertop materials so you can truly visualize your space with a new look. Save your design and share it to your email, Facebook, Twitter, or Pinterest. Don’t forget you can also try our online instant quote tool!</p>

//                     </div>


//                     <div class="relative z-0 w-full mt-8">
//                         <h1 className='text-l text-white p-4'> Click  On Our Design Tool and Visualize Your Next Project</h1>

//                         <a href='https://precision_stoneworks.quotekitchenandbath.com/kitchen#/visualizer'>
//                             <div class="relative overflow-hidden shadow-2xl">
//                                 <div class="flex items-center flex-none px-4 bg-white rounded-b-none h-11 rounded-xl">
//                                     <div class="flex space-x-1.5">
//                                         <div class="w-3 h-3 border-2 border-red rounded-full"></div>
//                                         <div class="w-3 h-3 border-2 border-blue rounded-full"></div>
//                                         <div class="w-3 h-3 border-2 border-green rounded-full"></div>
//                                     </div>
//                                 </div>

//                                 <img src={DesignTool} className='pb-40 design-tool-img' />
//                             </div>
//                         </a>
//                     </div>

//                             </div>     
//         </div>
//         </section>
//     )
// };

// export default Home