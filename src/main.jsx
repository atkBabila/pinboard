import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import Register from './pages/Register.jsx'
import Contact from './pages/Contact.jsx'
import { Pin } from './pages/Pin.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Home />
      },
      {
        path : '/contact',
        element : <Contact />
      },
      {
        path : '/login',
        element : <Login />
      },
      {
        path : '/register',
        element : <Register />
      },
      {
        path : '/profile',
        element : <Profile />
      },
      {
        path : '/pin',
        element : <Pin />
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
