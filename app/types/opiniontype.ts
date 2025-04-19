import type { ReactNode } from "react";

export interface Opinion {
    photo : ReactNode;
    name : string;
    rating : number;
    content : string;
    date : string;
}