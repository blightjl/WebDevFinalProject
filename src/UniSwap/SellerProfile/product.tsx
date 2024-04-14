

export interface Product {
    image: string; // Assuming image is a URL
    title: string;
    price: string; // Example price as a string
    description: string;
    type: ProductType;
}

export type ProductType = "T-Shirts & Long Sleeves" | "Shoes" | "Sweaters";