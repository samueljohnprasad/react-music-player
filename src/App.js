import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Songs";
import data from "./util";
import React, { useState, useRef } from "react";
import Library from "./components/Library";
import Nav from './components/Nav'
import updateLibrary from './components/utils'

function App() {
  //use ref
  const audioref = useRef(null);
  //state
  const [libraryStatus,setLibraryStatus]=useState(true)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // {console.log(songs[0].id)}

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage:0
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //console.log(current);
      //calculate percentage
    const roundedCurrent=Math.round(current)
    const roundedDuration=Math.round(duration)
    const animation=Math.round((roundedCurrent/roundedDuration)*100)
    setSongInfo({ ...songInfo, currentTime: current, duration: duration ,animationPercentage:animation});
  };

 const songEndHandler=async ()=>{

    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
     let newSong=songs[(currentIndex + 1) % songs.length]
     await setCurrentSong(newSong);
     updateLibrary(newSong,setSongs,songs)

     
     if(PluginArray) audioref.current.play()
   

  }

  return (
    <div className={`App ${libraryStatus? 'library-active':''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        audioref={audioref}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        audioref={audioref}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        audioref={audioref}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioref}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
