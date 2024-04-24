import axios from "axios";

const axiosWithCredentials = axios.create({
    withCredentials: true,
  });

export const ACCOUNTS_API = `${process.env.REACT_APP_BASE_API_URL}/api/accounts`
export interface Account {
    id: Number;
    username: string;
    email: string;
    password: string;
    repeat: string;
    accountType: string;
};

export const register = async (account: Account) => {
    const response = await axiosWithCredentials.post(`${ACCOUNTS_API}/register`, account);
    return response.data;
};

export const login = async (credentials: Account) => {
    const response = await axiosWithCredentials.post(`${ACCOUNTS_API}/login`, credentials);
    return response.data;
};

export const logout = async () => {
    const response = await axiosWithCredentials.post(`${ACCOUNTS_API}/logout`);
    return response.data;
}

export const home = async () => {
    const response = await axiosWithCredentials.post(`${ACCOUNTS_API}/home`);
    console.log(response.data)
    return response.data;
};

export const findAllAccounts = async () => {
    const response = await axiosWithCredentials.get(`${ACCOUNTS_API}`);
    return response.data;
}

export const findUserById = async (userId: String) => {
    const response = await axiosWithCredentials.get(`${ACCOUNTS_API}/${userId}`);
    return response.data;
}
export const findUserByName = async (userName: String) => {
    const response = await axiosWithCredentials.get(`${ACCOUNTS_API}/name/${userName}`);
    return response.data;
}

export const addProduct = async (product: any) => {
    const user = await home();
    const response = await axiosWithCredentials.put(`${ACCOUNTS_API}/addProduct/${user._id}`, product);
    return response.data
};