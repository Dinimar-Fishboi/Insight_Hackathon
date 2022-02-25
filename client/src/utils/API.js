import axios from 'axios';
const apiURL = "http://localhost:3000/server"

// Getting the API information to the front end
const apiSearch = async (query) =>
    axios.get(`${apiURL}`)

    export default { apiSearch}
