import Header from './components/Header'
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from 'react';
import { Appcontext } from './context/Appcontext';
import './App.css'

export default function App() {
  const {fetchblogposts} = useContext(Appcontext);

  useEffect(()=>{
    fetchblogposts();
  },[]);

  return (
    <div>
      <Header/>
      <div className='flex flex-col justify-center items-center w-full'>
      <Blogs/>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
      <Pagination/>
      </div>

    </div>
  );
}
