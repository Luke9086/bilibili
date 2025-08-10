export interface User {
    username: string;
    password: string;
}
export interface LoginData {
    username: string;
    password: string;
}
export interface LoginResponse {
    token: string;
    _id: string;
    username: string;
    code: number;
    message: string;
}
export interface RegisterResponse {
    message: string;
}