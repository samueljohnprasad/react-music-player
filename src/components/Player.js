import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  setSongInfo,
  songInfo,
  audioref,
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong
}) => {
  //event handlers
  const playSongHandler = () => {
    // console.log(audioRef.current)
    if (isPlaying) {
      audioref.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioref.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    const value = e.target.value;
    audioref.current.currentTime = e.target.value;
    // console.log(value)
    setSongInfo({ ...songInfo, currentTime: value });
  };

  const skipTrackerHandler = (direction) => {
    let currentIndex= songs.findIndex((song)=>song.id===currentSong.id )
    if(direction=='skip-forward'){
      setCurrentSong(songs[(currentIndex+1)%songs.length])

    }

    if(direction=='skip-back'){
      if((currentIndex-1)%songs.length===-1){
         setCurrentSong(songs[songs.length-1])
         return;
      }
      setCurrentSong(songs[(currentIndex-1)%songs.length])
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackerHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={()=>skipTrackerHandler('skip-forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
