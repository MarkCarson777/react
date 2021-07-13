import axios from 'axios';

// creates a customised copy of axios
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID M2phVvugzK7w8lYYULt_pvrJirKfXzDpSF2T3thRRJk'
  }
});