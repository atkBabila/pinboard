import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../components/Nav'

const Layout = () => {
  return (
    <>
        <header className='bg-slate-400 top-0 z-50 fixed w-full '>
            <Nav />
        </header>
        <main className='max-w-screen-lg mx-auto mt-32 mb-10'>
            <Outlet />
        </main>
    </>
  )
}

export default Layout