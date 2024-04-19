import Product from "./Product";

export default interface profile {
  name: String,
  bio: String,
  products: Product[],
  profilePicture: any,
  profileType: 'Buyer' | 'Seller',
}