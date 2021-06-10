import { useState } from "react";
import CommentsList from "./CommentsList";

function CommentsSection({comments}) {
    const [toggleState, setToggle] = useState(false)

    
    function handleClick(){
        setToggle(!toggleState)
    }

    return (
        <div>
        <button onClick={handleClick} >{toggleState ? 'Show' : 'Hide'} Comments</button>
            <hr></hr>
        {toggleState ? null : <CommentsList comments={comments} />}
        </div>
    )
}

export default CommentsSection