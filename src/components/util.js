export const playAudio=(isPlaying,audioref)=>{
    if (isPlaying) {
        const playPromise = audioref.current.play();
        if (playPromise !== undefined) {
          playPromise.then((audio) => {
            audioref.current.play();
          });
        }
      }
}