import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog ,  error ,isPending} = useFetch('http://localhost:8000/blogs/'+id); 

    return (

        <div className="blog-details">
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="text-5xl font-bold">{blog.title}</h2>
                    <p className="mt-4 italic">Written by <span className="font-bold">{blog.author}</span></p>
                    <div className="border-2 p-5 text-xl mt-10">{blog.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;