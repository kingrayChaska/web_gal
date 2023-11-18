import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AboutUsPage } from './components/Pages/AboutUsPage.jsx'
// import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ContactPage } from './components/Pages/ContactPage.jsx'
import { GalleryPage } from './components/Pages/GalleryPage.jsx'
import { ServicePage } from './components/Pages/ServicePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <AboutUsPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/gallery",
    element: <GalleryPage />
  },
  {
    path: "/service",
    element: <ServicePage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  // </BrowserRouter>
)  

