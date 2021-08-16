const songReducer = () => {
  return [
    { title: 'Simple Man', duration: '4:05' },
    { title: 'Stairway To Heaven', duration: '3:50' },
    { title: 'Crossroad Blues', duration: '4:40' },
    { title: 'Freebird', duration: '7:15' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
 if (action.type === 'SONG_SELECTED') {
   return action.payload;
 }

 return selectedSong;
};