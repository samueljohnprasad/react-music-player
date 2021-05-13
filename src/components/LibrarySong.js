import React from "react";

const LibrarySong = ({
  isPlaying,
  audioref,
  song,
  songs,
  audio,
  setCurrentSong,
  id,
  setSongs
}) => {


  const songSelectHandler = () => {
    // const selectedSong=songs.filter((state)=> state.id===id)
    setCurrentSong(song);
    //add active state
    const newSongs= songs.map((song)=>{
      if (song.id === id) {
        //console.log('if',song.id,id)
        return {
          ...song,
          active: true,
        };
      } else {
       // console.log('else',song.id,id)
        return {
          ...song,
          active:false,

        };
      }

    })
    console.log(newSongs)
    setSongs(newSongs)
   
    audioref.current.play();
    //check if song is playing
    if (isPlaying) {
      const playPromise = audioref.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioref.current.play();
        });
      }
    }
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
