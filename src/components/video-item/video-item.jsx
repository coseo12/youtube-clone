import React, { memo } from 'react';
import styles from './video-item.module.css';

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const videoClick = () => onVideoClick(video);
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${displayType}`} onClick={videoClick}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt={snippet.title}
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};
export default memo(VideoItem);
