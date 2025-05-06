import type { Category } from "./categorytype";

export interface AttractionCardType {
    id: number;
    picture: string;
    title: string;
    country: string;
    province: string;
    description: string;
    owner: string;
    rating: number;
    price: string;
    reviews: number;
    ownerId: number;
    categories : string[];
}