
function updateLibrary(currentSong,setSongs,songs) {

    const newSongs = songs.map((song) => {
        if (song.id ===currentSong.id) {
          //console.log('if',song.id,id)
          return {
            ...song,
            active: true,
          };
        } else {
          // console.log('else',song.id,id)
          return {
            ...song,
            active: false,
          };
        }
      });
      setSongs(newSongs)
}

export default updateLibrary