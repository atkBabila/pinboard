import React from 'react'

import { Outlet } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

export default function Root() {

  return (
    
    <>
        <header>
            <Nav/>
        </header>
        <main className='container mx-auto pt-20 '>
            <Outlet/>
            <Footer/>
        </main>
    </>
  )
}
