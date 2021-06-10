import video from "../data/video.js";
import Video from "./Video"
import ButtonSection from "./ButtonSection";
import CommentsSection from "./CommentsSection"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video videoObj={video} />
      <ButtonSection downvotes={video.downvotes} upvotes={video.upvotes}/>
      <br />
      <CommentsSection comments={video.comments} />
    </div>
  );
}

export default App;
