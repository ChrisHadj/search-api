import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AhnFCqgY4cxTsfKRedkfehr25-3Fci8HcyRX1Ga8s4s'
    }
});


