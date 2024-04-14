import axios from "axios";


export const ACCOUNTS_API = `${process.env.REACT_APP_BASE_API_URL}/api/accounts`
export interface Account {
    _id: string;
    username: string;
    email: string;
    password: string;
    repeat: string;
    accountType: string;
};

export const register = async (account: any) => {
    const response = await axios.post(`${ACCOUNTS_API}}/register`, account);
    return response.data;
};

export const login = async (credentials: Account) => {
    const response = await axios.post(`${ACCOUNTS_API}/login`, credentials);
    return response.data;
};