import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  const [videos, setVideos] = useState([]);
  async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videoCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);


  return (
    <div className="App">
      <div className="app__videos">
        {videos.map((item) => {
          return (
            
            <Video
              videoUrl={item.videoUrl}
              name={item.name}
              description={item.description}
              music={item.music}
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
