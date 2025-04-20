import { useState } from "react";
import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import type { Category } from "~/types/categorytype";

interface CategoryItemProps {
    category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
    const Icon = category.icon;
    const [isActive, setIsActive] = useState(false);
    return (
    <div className={`category-item category-active-item text-center text-wrap ${isActive ? "active" : ""}`} 
    // onClick={() => setIsActive(true)}
    // onBlur={() => setIsActive(false)}
    // onMouseOver={() => setIsActive(true)}
    // onMouseOut={() => setIsActive(false)}
    >
        <span className="span1 d-flex justify-content-center m-3 mb-0"><Icon size={22}/></span>
        <span className="span2 d-flex justify-content-center p-0 m-3 mt-0" style={{fontSize: "10px"}}>{category.name}</span>
    </div>
    );
  }