import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import Pin from './pages/Pin.jsx'
import Root from './Root.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:'home',
        element: <Home />
      },
      {
        path:'login',
        element: <Login />
      },
      {
        path:'register',
        element: <Register />
      },
      {
        path:'profile',
        element: <Profile />
      },
      {
        path:'pin',
        element: <Pin/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
