import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    // baseURL: process.env.NODE_ENV === '' ? 'ssss' : 'ssss'
    timeout: 5000
})

export default {
    ...service,
    get (url, data = {}) {
        return service.get(url, {
            params: data
        })
    }
}