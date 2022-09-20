import axios from '@/utils/axios'

const api = {
    home: {
        base: () => axios.get('/home')
    }
}

export default (Vue) => {
    Vue.prototype.$api = api
}
