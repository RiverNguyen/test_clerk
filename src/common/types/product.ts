export interface IProduct {
    _id?: number | string;
    category: string;
    name: string;
    price: number;
    gallery?: string[];
    discount: number;
    image: string;
    featured: boolean;
    description: string;
    countInStock: number;
}
