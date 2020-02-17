import axios from 'axios';

export default axios.create({
  baseURL: 'http://779ed99c.ngrok.io' // need to change every 8 hours
});
