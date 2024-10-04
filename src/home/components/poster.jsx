import { useState } from "react"
export default function Poster({posts, setPosts}){

    const [newPost, setNewPost]=('')
    

    return (
        <div className="poster">
            <form className="form">
          
          
                <label
                    >Logo:<input
                    type="text"
                    name="newPost"
                    value={newPost}
                    onChange={(e) => setNewPost( e.target.value )}
                    />
                    
                </label>

                
                <input className="post__submit" type="submit" value="Post" onClick={() => setPosts({...posts, newPost})}/>
            </form>

        </div>
        
        
    )
}