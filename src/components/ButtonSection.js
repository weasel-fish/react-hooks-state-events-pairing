import { useState } from "react";

function ButtonSection({upvotes, downvotes}) {
    const [upCount, setUpCount] = useState(upvotes)
    const [downCount, setDownCount] = useState(downvotes)
    
    function handleUp() {
        setUpCount(upCount => upCount + 1)
    }

    function handleDown() {
        setDownCount(downCount => downCount + 1)
    }

    return (
        <div>
            <button onClick={handleUp}>{upCount} 👍</button>
            <button onClick={handleDown}>{downCount} 👎</button>
        </div>
    )
}

export default ButtonSection