import React from 'react';
import VideoItem from '../video-item/video-item';
import styles from './video-list.module.css';

const VideoList = ({ videos }) => {
  return (
    <ul className={styles.videos}>
      {videos &&
        videos.map(video => <VideoItem key={video.id} video={video} />)}
    </ul>
  );
};
export default VideoList;
