import Comment_List from "./comment_list"
import { useState } from "react"
export default function Post({post}){

    const [comments, setComments]=useState([1,2,3])

    return (
        <div className="post">
            Hey! I&apos;m posting here! {post}

            <div className="commentSection">
                <Comment_List comments={comments}/>
            </div>
        </div>
        
        
        
    )
}