import React from 'react'
import { AuthCard, PageTitle } from '../importer'
import { Link } from 'react-router'

function Register() {
  return (
    <div className=' h-screen gap-4 w-full flex-col bg-linear-to-br from-blue-900 to-purple-600 flex justify-center items-center'>
      <img src="/assets/NEOCON-Logo-1.png" alt="Neo Con logo" className='h-16 md:h-20 '/>
      <div className='px-4'>
        <AuthCard/>
      </div>
      <Link to={`/`} title='Back to Home' className='md:absolute flex justify-center items-center rounded-full h-10 w-10 md:top-4 md:left-4 backdrop-blur-xl border border-[#8a8a8a] bg-[#ffffff28]'>
      <i className='fas fa-chevron-left text-xxl text-white'></i>
      </Link>
    </div>
  )
}

export default Register