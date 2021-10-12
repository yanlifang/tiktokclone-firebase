import React, { useEffect, useState } from "react";
import db from "./firebase";
import Video from "./Video";
import './App.css';

function App() {
  
  const [vidoos, setVideos ] = useState([]);

  useEffect(() =>{
    db.collection("videos").onSnapShot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app_vidoes">
        <p>check</p>
        {
          vidoos.map
          (({
            url, channel, description, song, likes, messages, shares 
          }) =>(
            <Video 
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
