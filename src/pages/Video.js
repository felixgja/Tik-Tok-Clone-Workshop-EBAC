import React, { useRef, useState } from "react";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import VideoFooter from "./components/footer/VideoFooter";
import { Waypoint } from "react-waypoint";
import "./video.css";

let videoState;

function Video({
  videoUrl,
  name,
  description,
  music,
  likes,
  messages,
  shares,
}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play || videoState) {
      videoRef.current.pause();
      setPlay(false);
      videoState = false;
    } else {
      videoRef.current.play();
      setPlay(true);
      videoState = true;
    }
  }

  function videoEntering() {
    if (videoState) {
      videoRef.current.play();
    }
  }

  function videoLeaving() {
    if (videoState) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; /* Volta o video para o inicio */
    } else{
      videoRef.current.currentTime = 0; /* Volta o video para o inicio */
    }
  }

  return (
    <div className="video">
      <Waypoint
        onEnter={videoEntering}
        onLeave={videoLeaving}
        topOffset={"20%"}
        bottomOffset={"20%"}
      >
        <video
          className="video__player"
          ref={videoRef}
          onClick={handdleStart}
          on
          loop
          src={videoUrl}
        ></video>
      </Waypoint>
      {/* Side bar */}

      <VideoSidebar likes={likes} messages={messages} shares={shares} />

      {/* Footer */}

      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
