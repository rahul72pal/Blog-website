import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import { buildQueries } from '@testing-library/react';

const Pagination = () => {
    const {page , handlepagechange , totalpages} = useContext(Appcontext);
  return (
    <div className=' flex justify-between font-bold text-center  shadow-sm  border-t-4  drop-shadow-3xl py-4 px-4 w-full '>
        <div className='flex  mx-5'>
            { page > 1 &&
                <button onClick={()=>handlepagechange(page-1)} 
                className='border border-black py-3 px-5 rounded-md mr-3'>
                    previous
                </button>
            }

            { page< totalpages &&
                <button onClick={()=>handlepagechange(page+1)} 
                className='border border-black py-3 px-5 rounded-md ml-3'>
                     Next
                </button>
            }

            {/* <p>
                Page {page} of {totalpages}
            </p> */}
        </div>

        <div className='flex justify-between mx-5 mt-3'>
           <p>
                Page {page} of {totalpages}
            </p>
        </div>
      
    </div>
  )
}

export default Pagination
