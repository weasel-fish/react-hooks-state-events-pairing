function Comment({user, comment}) {
    return (
        <li>
            <p><strong>{user}</strong></p>
            <p>{comment}</p>
        </li>
    )
}

export default Comment