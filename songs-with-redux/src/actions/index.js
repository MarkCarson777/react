// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    // type is always necessary
    type: 'SONG_SELECTED',
    // payload is not always necessary
    payload: song
  };
};
