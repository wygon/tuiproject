import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import type { Category } from "~/types/categorytype";

interface CategoryItemProps {
    category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
    return (
    <div className="btn category-item pr-4 p-2">
        <div className="category-icon">
        {category.icon != null ? (<PiAirplaneInFlightDuotone />) : (<img src={category.icon} alt="" />)}
        </div>
        <span className="category-name">{category.name}</span>
    </div>
    );
  }