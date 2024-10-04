import Poster from "./components/poster"
import Post_List from "./components/postList"
import { useState } from "react"
import { createContext } from 'react'

const postContext = createContext()

export default function Home() {
    const [posts, setPosts]=useState([1,2,3])

    

    return (
        <div className='home'>
            <Poster posts={posts} setPosts={setPosts}/>
            <div> &nbsp;</div>
            <Post_List posts={posts}/>
            
        </div>
            
        
    )
}
