import video from "../data/video.js";
import Video from "./Video"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video videoObj={video} />
    </div>
  );
}

export default App;
