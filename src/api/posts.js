import axios from 'axios'

console.log(process.env)
const API_KEY = process.env.REACT_APP_NASA_API_KEY
const instance = axios.create({
    baseURL: 'https://api.nasa.gov/neo/rest/v1/',
    params:{API_KEY}
});

export default instance;