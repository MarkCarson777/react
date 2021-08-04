import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// If you give me a 'default search term'
// I will give you 'a way to search for videos'
// and 'a list of videos'

const App = () => {
  // videos is an output
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // equivalent to componentDidMount
  // useEffect(() => {
  //   // 'buildings' is the "input" for when we are trying to build a custom hook
  //   onTermSubmit('buildings');
  // }, []);
  
  // onTermSubmit is an output

  // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column"> 
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList 
              onVideoSelect={setSelectedVideo} 
              videos={videos} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;