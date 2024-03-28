import { ProductType } from "./ProductType";

export default interface Product {
    image: any;
    description_short: string;
    description_long?: string;
    title: string;
    price: string;
    type: ProductType;
}