import axios from "axios";
const api = axios.create({
  withCredentials: true
});

export const PRODUCT_API = `${process.env.REACT_APP_BASE_API_URL}/api/products`;


export const updateProduct = async (product: any) => {
  const response = await api.put(`${PRODUCT_API}/${product._id}`, product);
  return response.data;
};

export const findAllProducts = async () => {
  const response = await api.get(`${PRODUCT_API}`);
  return response.data;
};

export const createProduct = async (product: any) => {
  const response = await api.post(`${PRODUCT_API}`, product);
  return response.data;
}

export const deleteProduct = async (product: any) => {
  const response = await api.delete(`${PRODUCT_API}/${product._id}`);
  return response.data;
};

export const findProductByName = async (name: string) => {
  const response = await api.get(`${PRODUCT_API}/${name}`);
  return response.data;
};
