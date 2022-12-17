import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Other from './Other'


const Router = () => {
  <BrowserRouter>
  
  <Routes>
    
<Route path='Home' element={ <Home />} />  
<Route path='About' element={ <About />} />  
<Route path='Portfolio' element={ <Portfolio />} />  
<Route path='Contact' element={ <Contact />} />  
  


  </Routes>
  
  </BrowserRouter>
}

export default Router