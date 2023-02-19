import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar p-4 flex justify-between lg:w-2/3 mx-auto ">
        <h1 className='text-rose-500 hover:text-rose-800 hover:cursor-pointer text-3xl font-bold'>Dojo Blog</h1>
        <div className="links my-auto">
            <Link to="/" className=' ml-5 lg:ml-5 '>Home</Link>
            <Link to="/create" className='ml-5 lg:ml-16 bg-rose-400 rounded-2xl p-2 hover:shadow-lg'>New Blog</Link>
        </div>
    </nav>
  )
}
