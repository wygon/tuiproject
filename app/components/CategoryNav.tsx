import { categories } from "~/categories/categories";
import CategoryItem from "./CategoryItem";

export default function CategoryNav() {
    return (
    <div className="category-nav container">
        {categories.map((category) =>
            <CategoryItem
            key={category.id}
            category={category}
            />
        )}
    </div>
    ); 
}