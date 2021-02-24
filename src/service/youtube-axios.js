import axios from 'axios';

export class YoutubeAxios {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: `https://www.googleapis.com/youtube/v3`,
      params: {
        key,
      },
    });
  }

  async mostPopular() {
    const {
      data: { items },
    } = await this.youtube.get('/videos', {
      params: {
        part: `snippet`,
        chart: `mostPopular`,
        maxResults: 25,
      },
    });
    return items;
  }

  async search(query) {
    const {
      data: { items },
    } = await this.youtube.get('/search', {
      params: {
        part: `snippet`,
        q: query,
        maxResults: 25,
        type: `video`,
      },
    });
    return items.map(item => ({ ...item, id: item.id.videoId }));
  }
}
