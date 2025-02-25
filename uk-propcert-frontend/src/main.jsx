import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position='top-right'/>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
