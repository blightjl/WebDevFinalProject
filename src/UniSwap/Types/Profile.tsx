import Product from "./Product";

export default interface profile {
  username: String,
  password: String,
  name: String,
  bio: String,
  products: Product[],
  profilePicture: any,
  profileType: 'BUYER' | 'SELLER' | 'ADMIN' | 'USER',
  _id: Number,
}