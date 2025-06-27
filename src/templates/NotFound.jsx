import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className='text-white h-screen w-full flex flex-col justify-center items-center font-bold font-mono text-2xl md:text-4xl bg-linear-to-br from-gray-800 to-gray-800'>
      <p>404</p>
      <p>Not Found</p>
      <p className='md:text-xl text-base mt-2'>
        Back to
        <Link to={`/`} className='text-red-400'> Home</Link>
      </p>
    </div>
  )
}

export default NotFound