import axios from '@/utils/axios';
export const getUser = () => {
    return axios.get('/user');
}