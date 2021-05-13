import React from "react";
import updateLibrary from './utils'


const LibrarySong = ({
  isPlaying,
  audioref,
  song,
  songs,
  audio,
  setCurrentSong,
  id,
  setSongs,
  setIsPlaying
}) => {
  const songSelectHandler = async () => {
    // const selectedSong=songs.filter((state)=> state.id===id)
    await setCurrentSong(song);
    //add active state 
    updateLibrary(song,setSongs,songs)
    if(!isPlaying){
    setIsPlaying(!isPlaying)
    }
    

    audioref.current.play();

    
    //check if song is playing

    if(isPlaying) audioref.current.play()
  
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
