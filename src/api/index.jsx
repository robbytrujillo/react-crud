// import axios
import axios from 'axios';

const Api = axios.create({
    // set default endpoint API
    baseURL: 'https://localhost:8000',
})

export default Api