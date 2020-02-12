import axios from 'axios';

export default axios.create({
  baseURL: 'http://4fefda42.ngrok.io' // need to change every 8 hours
});
