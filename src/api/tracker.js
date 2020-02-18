import axios from 'axios';

export default axios.create({
  baseURL: 'http://ee303285.ngrok.io' // need to change every 8 hours
});
