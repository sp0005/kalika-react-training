
import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero
 from './Hero'
 import About from './About'
function App() {


  return (
    <>
    <div className='text-blue-500'>
    <Navbar/>

    </div>
     <div>
      <Hero/>
     </div>
     <div><About/></div>
    </>
  )
}

export default App
