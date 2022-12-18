import React from 'react'
import Gallery from "react-photo-gallery";
import { kitchenphotos } from './photos';

const Kitchens = () => {
  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12  hero relative mb-20">

        <Gallery photos={kitchenphotos} />
    </div>
  )
}

export default Kitchens