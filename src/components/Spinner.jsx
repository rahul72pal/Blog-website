import React from 'react'
// import './spinner.css'
import '../App.css'

const Spinner = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col '>
      <div className="spinner"></div>
     <div>
      Loading
     </div>
    </div>
  )
}

export default Spinner
