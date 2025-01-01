import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './assets/Component/Navber'
import Header from './assets/Component/Header'
import PlayKoksal from './assets/Component/PlayKoksal'
import About from './assets/Component/About'
import Roadmap from './assets/Component/Roadmap'
import Join from './assets/Component/Join'
import Footersection from './assets/Component/Footersection'




function App() {
  
  return (
    <>
      <div className='overflow-x-hidden'>
  
     <Navber></Navber>
     <Header></Header>
     <PlayKoksal></PlayKoksal>
    <About></About>
    <Roadmap></Roadmap>
    <Join></Join>
    <Footersection></Footersection>
   
      </div>
    </>
  )
}

export default App
