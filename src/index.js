import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import { YoutubeFetch } from './service/youtube-fetch';
import { YoutubeAxios } from './service/youtube-axios';

const youtube = new YoutubeAxios(process.env.REACT_APP_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
