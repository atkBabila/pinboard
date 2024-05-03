import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<div>Home</div>
  },
  {
    path:'/login',
    element: <div>Login</div>
  },
  {
    path:'/register',
    element: <div>Login</div>
  },
  {
    path:'/profile',
    element: <div>Login</div>
  },
  {
    path:'/pin',
    element: <div>Login</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
