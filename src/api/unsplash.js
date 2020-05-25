import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 50MSoMQzGCVPplEyI1hiWy93BBalMOOMED4uPyvGS4U',
  },
});
