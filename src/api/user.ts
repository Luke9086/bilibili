import axios from '@/utils/axios';
import type { LoginData, LoginResponse, RegisterResponse } from '@/types/user';
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
export const login = (data: LoginData): Promise<LoginResponse> => {
    return axios.post('/login', data);
}
export const register = (data: LoginData): Promise<RegisterResponse> => {
    return axios.post('/register', data);
}