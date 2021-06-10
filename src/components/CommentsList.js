import Comment from './Comment'

function CommentsList({comments}) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <ul>
                {comments.map(comment => <Comment user={comment.user} comment={comment.comment} key={comment.id}/>)}
            </ul>
        </div>
    )
}

export default CommentsList;