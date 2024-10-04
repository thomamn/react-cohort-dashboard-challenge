import { useState } from "react"
import { useContext } from "react" 
import { userContext } from "../../App"
import Post from "./post"
export default function Poster({posts, setPosts}){


    const user=useContext(userContext).user
    const [newPost, setNewPost]=useState({
        user: user,
        title: '',
        message: ''
    })


    const updatePosts = (event, newPost) => {
        event.preventDefault()
        console.log(newPost)
        setPosts([newPost,...posts ])

    }
    

    return (
        <div className="poster">
            <form className="post_text">

                <label>
                    Title:
                    <input
                        type="text"
                        name="newPost_title"
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    />
                    
                </label>
                <br/>
          
                <label>
                    Message:
                    <input
                        type="text"
                        name="newPost_message"
                        value={newPost.message}
                        onChange={(e) => setNewPost({...newPost, message: e.target.value})}
                    />
                    
                </label>

                <br/>
                <input className="post__submit" type="submit" value="Post" onClick={(event) => updatePosts(event, newPost)}/>
            </form>

        </div>
        
        
    )
}