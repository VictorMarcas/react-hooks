import Axios from 'axios';

const config = {
    baseURL: 'https://reqres.in/api'
}

const services = Axios.create(config)

export default services;