import axios from 'axios';

export default axios.create({
  baseURL: 'http://e24fea1c.ngrok.io' // need to change every 8 hours
});
