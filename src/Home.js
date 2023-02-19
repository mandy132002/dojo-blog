import React from 'react'

import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {

  const {  data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className='homepage font-quicksand'>
        <h2>Home Page</h2>
        {error && <div>{ error }</div>}
        {isPending && <div>Loading........</div>}
        { blogs && <BlogList blogs={blogs} /> }
    </div>
  )
}
