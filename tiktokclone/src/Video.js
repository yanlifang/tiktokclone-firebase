import React, { useRef, useState } from "react";
import "./Video.css";


function Video({url, channel, description, song, likes, messages, shares }) {

    const [playing, setPlaying ] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing)
        {
            videoRef.current.pause();
            setPlaying(false);
        }
        else
        {
            videoRef.current.play();
            setPlaying(true);
        }
    };


    return (
      <div className="Video">
        <video 
            className="video_player"
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src={url}
        ></video>
      </div>
    );
  }



export default Video;
