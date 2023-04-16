import { createContext, useState } from "react";
// import { flushSync } from "react-dom";
import { baseUrl } from "../baseUrl";


export const Appcontext = createContext();

export default function AppcontextProvider({children}){
    const [loading , setloading] = useState(false);
    const [posts , setposts] = useState([]);
    const [page , setpage] = useState(1);
    const [totalpages , settotalpages] = useState(null);

    //data filling

    async function fetchblogposts(page = 1){
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setpage(data.page);
            setposts(data.posts);
            settotalpages(data.totalPages)
        }
        catch(e){
          console.log("ERROR");
          setpage(1);
          setposts([]);
          settotalpages(null);
        }
        setloading(false)
    }

    function handlepagechange(page){
      setpage(page);
      fetchblogposts(page);

    }


    const value = {
        posts,
        setposts,
        loading,
        setloading,
        page,
        setpage,
        totalpages,
        settotalpages,
        fetchblogposts,
        handlepagechange
    };


    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>

}

