import { useState } from "react";


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
            
        </div>
    )
}

export default Video;