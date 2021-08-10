import axios from 'axios';

// const KEY = 'AIzaSyCj2c6yHhwzGRR-r9NcjxP9r5NJH_Yu44c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});