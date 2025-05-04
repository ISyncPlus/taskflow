import React from 'react'
import { PiWarningOctagonFill } from "react-icons/pi";
import { Link } from 'react-router';
const NotFoundPage = () => {
  return (
    <div className="flex w-[803px] my-[25vh] flex-col items-center">
      <PiWarningOctagonFill className="fill-amber-600 w-30 h-30" />
      <h2 className='text-9xl font-[600]'>404</h2>
      <p className="text-gray-400 mt-1">Page Not Found</p>
      <Link to="/" className="px-3 py-2 border rounded-lg bg-[#5577FF] transition-colors duration-300 text-white mt-3 hover:bg-[#4665e1]">
      Back to Homepage
      </Link>
      
    </div>
  )
}

export default NotFoundPage
