import React, { useState, useEffect } from 'react';
import VideoList from './components/video-list/video-list';
import styles from './app.module.css';
import SearchHeader from './components/search-header/search-header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = query => {
    youtube
      .search(query)
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
