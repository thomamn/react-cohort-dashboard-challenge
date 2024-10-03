import Comment_List from "./comment_list"
export default function Post({post}){

    return (
        <div className="post">
            Hey! I&apos;m posting here! {post}

            <div className="commentSection">
                <Comment_List/>
            </div>
        </div>
        
        
        
    )
}