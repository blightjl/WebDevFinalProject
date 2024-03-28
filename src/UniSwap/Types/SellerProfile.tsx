import Product from "./Product";

export interface SellerProfile {
    name: string;
    product_listings?: Product[]| [];
    profile_img?: any; // need default profile pic |
    description?: string | "";
}