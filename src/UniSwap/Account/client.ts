import axios from "axios";
const api = axios.create({
    withCredentials: true
 });
 
const API_URL = 'http://localhost:4000';
export const ACCOUNTS_API = `${API_URL}/api/accounts`
export interface Account {
    _id: string;
    username: string;
    email: string;
    password: string;
    repeat: string;
    accountType: string;
};

export const register = async (account: Account) => {
    const response = await api.post(`${ACCOUNTS_API}/register`, account);
    return response.data;
};

export const login = async (credentials: Account) => {
    const response = await api.post(`${ACCOUNTS_API}/login`, credentials);
    return response.data;
};

export const logout = async () => {
    const response = await api.post(`${ACCOUNTS_API}/login`);
    return response.data;
}

export const home = async () => {
    const response = await api.post(`${ACCOUNTS_API}/home`);
    return response.data;
};

export const findAllAccounts = async () => {
    const response = await api.get(`${ACCOUNTS_API}`);
    return response.data;
}

export const findUserById = async (userId: String) => {
    const response = await api.get(`${ACCOUNTS_API}/${userId}`);
    return response.data;
}
export const findUserByName = async (userName: String) => {
    const response = await api.get(`${ACCOUNTS_API}/name/${userName}`);
    return response.data;
}

export const addProduct = async (product: any) => {
    const user = await home();
    const response = await api.put(`${ACCOUNTS_API}/addProduct/${user._id}`, product);
    return response.data
};