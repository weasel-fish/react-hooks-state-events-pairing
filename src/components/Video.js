import CommentsList from "./CommentsList"

function Video({videoObj}) {
    return(
        <div>
            <iframe
            width="919"
            height="525"
            src={videoObj.embedUrl}
            frameborder="0"
            allowfullscreen
            title={videoObj.title}
            />
            <h1>{videoObj.title}</h1>
            <small>{videoObj.views} views | Uploaded {videoObj.createdAt}</small><br />
            <button>{videoObj.upvotes} 👍</button>
            <button>{videoObj.downvotes} 👎</button> <br />
            <button>Comments</button>
            <CommentsList comments={videoObj.comments} />
        </div>
    )
}

export default Video;