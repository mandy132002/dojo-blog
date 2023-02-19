import React from "react";

const BlogList = ({blogs}) => {
    
    return(
        <div className="bloglist">
            {blogs.map((blog)=>(
            <div className="preview pt-3 pb-3 pl-4 pr-4 m-5 border border-solid hover:shadow-md" key={blog.id}>
              <h2 className='text-2xl mb-2'>{blog.title}</h2>
              <p> {blog.body}</p>
              <p>Written by {blog.author}</p>
            </div>
          ))}
        </div> 
        
     );
}
 
export default BlogList;