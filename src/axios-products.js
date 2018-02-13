import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chefd-pdp-3a9d9.firebaseio.com/',
});

export default instance;
