import React from "react";

const LibrarySong = ({
  isPlaying,
  audioRef,
  song,
  songs,
  audio,
  setCurrentSong,
  id,
}) => {
  const songSelectHandler = () => {
    // const selectedSong=songs.filter((state)=> state.id===id)
    setCurrentSong(song);
    audioRef.current.play();
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;