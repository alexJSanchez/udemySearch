import axios from 'axios'

const KEY = 'AIzaSyBO0ArTUdnd8mhv2aAJACS2X-P-bsp3p-w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    params: {
        part: 'snippet',
        maxResults: 5,
    }
});