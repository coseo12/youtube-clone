import React from 'react';
import styles from './video-detail.module.css';

const VideoDetail = ({
  video,
  video: {
    id,
    snippet: { title, channelTitle, description },
  },
}) => {
  return (
    <section className={styles.detail}>
      <iframe
        title="youtube"
        className={styles.video}
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        type="text/html"
        width="100%"
        height="500px"
        allowFullScreen
      ></iframe>
      <h2>{title}</h2>
      <h3>{channelTitle}</h3>
      <pre className={styles.description}>{description}</pre>
    </section>
  );
};
export default VideoDetail;
