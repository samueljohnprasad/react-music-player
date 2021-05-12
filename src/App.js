import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Songs";
import data from "./util";
import React, { useState, useRef } from "react";
import Library from "./components/Library";

function App() {
  //use ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  // {console.log(songs[0].id)}
  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    console.log(current);
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        audioRef={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
