import Profile_Icon from "../../header/components/profile_icon"
export default function Comment({comment}){

    console.log(comment.user)
    return (
        <div className="comment">
            <Profile_Icon user={comment.user}/>
            &nbsp; {comment.message}

        </div>
        
        
    )
}