import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

// If you give me a 'default search term'
// I will give you 'a way to search for videos'
// and 'a list of videos'

const App = () => {
  // videos is an output
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // destructured the output from useVideo
  const [videos, search] = useVideos('buildings');
  // equivalent to componentDidMount
  // useEffect(() => {
  //   // 'buildings' is the "input" for when we are trying to build a custom hook
  //   onTermSubmit('buildings');
  // }, []);
  
  // onTermSubmit is an output

  // setSelectedVideo(response.data.items[0]);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onTermSubmit = async term => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term
  //     }
  //   });
  //   
  //   setVideos(response.data.items);
  // };
 
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
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