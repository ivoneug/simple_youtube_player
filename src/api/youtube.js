import axios from 'axios';

const KEY = 'AIzaSyAmVSOdw91dHEAk-678Zz5G8OdkSzW05DI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
