import React from 'react'
import { Link } from 'react-router'
const UnderConstructionPage = () => {
  return (
    <div className='w-[803px]'>
        <section className="mt-[10vh] flex flex-col items-center">
          <img src="/construction.png" alt="UNDER CONSTRUCTION" className="w-150"/>
          <Link to="/" className="text-xl py-2 px-5 bg-blue-500 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-blue-600 rounded-xl mt-10"> Back To Homepage</Link>

        </section>
    </div>
  )
}

export default UnderConstructionPage
