import type { ReactNode } from "react";

export interface Opinion {
    photo : ReactNode;
    name : string;
    exp : number;
    rating : number;
    content : string;
    date : string;
}