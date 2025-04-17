import { categories } from "~/categories/categories";
import CategoryItem from "./CategoryItem";

export default function CategoryNav() {
    categories
    return (
    <div className="category-nav col-10">
        {categories.map((category) =>
            <CategoryItem
            key={category.id}
            category={category}
            />
        )}
    </div>
    ); 
}