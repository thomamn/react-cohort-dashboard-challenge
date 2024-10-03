import Post from "./post"
export default function Post_List(){

    const posts=[1,2,3]
    return (
        <div className="post_list">
            {posts.map((post, index) => <Post post={post} key={index} />)}

        </div>
        
        
    )
}