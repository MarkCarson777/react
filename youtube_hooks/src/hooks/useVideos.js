import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // 'buildings' is the "input" for when we are trying to build a custom hook
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // changed onTermSubmit to search as it no longer made much sense
  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    
    setVideos(response.data.items);
  };

  // can return object or an array
  return [ videos, search ];
};

export default useVideos;