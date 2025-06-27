import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router'
import { Contact, Home, About, Venue, HostCity, Travel, Accomodation, Trade, Committee, Register, NotFound } from './importer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about-nnf' element={<About/>} />
        <Route path='/about-venue' element={<Venue/>} />
        <Route path='/host-city' element={<HostCity/>} />
        <Route path='/travel-vizag' element={<Travel/>}/>
        <Route path='/accomodation' element={<Accomodation/>}/>
        <Route path='/download' element={<Committee/>}/>
        <Route path='/trade' element={<Trade/>}/>
        
      </Route>
      <Route path='/login' element={<Register/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
