import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Spinner from './Spinner';

const Blogs = () => {
    //consuming
    const {posts ,loading} = useContext(Appcontext);

  return (
    <div className='w-5/12 mt-16'>
       {
        loading ? (<Spinner/>):
        (
            posts.length === 0 ? 
            (
                <div>
                    <p>No POsts found</p>
                </div>
            ):
            (
               posts.map ( (post) => (
           
                <div className=' my-4 '>
                    <p className='font-bold text-xl'>{post.title}</p>
                    <p className='mt-1'>
                        By <i>{post.author}</i> On <span className='font-bold'>{post.category}</span>
                    </p>
                    <p className='mb-4' >Posted on {post.date} </p>
                    <p>{post.content}</p>
                    <div className='mt-3 text-blue-600  '>
                        {post.tags.map((tag)=>{
                            return <span className='mx-1 underline'>{`#${tag}`}</span>
                        })}
                    </div>
                </div>

               ))
            )
        )
       }
    </div>
  )
}

export default Blogs
