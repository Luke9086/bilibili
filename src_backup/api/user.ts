import axios from '@/utils/axios';
interface User {
    code: number;
    message: string;
    data: {
        name: string;
        age: number;
    }
}
export const getUser = (): Promise<User> => {
    return axios.get('/hello');
}