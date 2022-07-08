import axios from 'axios'

const instance=axios.create({
    baseURL:'https://www.mxnzp.com',
    timeout:1000
})


export default instance;