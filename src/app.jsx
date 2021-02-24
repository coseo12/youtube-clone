import React, { useState, useEffect, useCallback } from 'react';
import VideoList from './components/video-list/video-list';
import styles from './app.module.css';
import SearchHeader from './components/search-header/search-header';
import VideoDetail from './components/video-detail/video-detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    query => {
      youtube
        .search(query)
        .then(items => {
          setVideos(items);
          setSelectedVideo(null);
        })
        .catch(error => console.log('error', error));
    },
    [youtube]
  );

  const popular = useCallback(() => {
    setSelectedVideo(null);
    youtube
      .mostPopular()
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }, [youtube]);

  useEffect(() => {
    popular();
  }, [popular]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onPopular={popular} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            display={selectedVideo ? 'grid' : 'list'}
            videos={videos}
            onVideoClick={selectVideo}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
