import { useState, type MouseEventHandler } from "react";
import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import type { Category } from "~/types/categorytype";

interface CategoryItemProps {
    category: Category;
    isActive : boolean; 
    // onClick: MouseEventHandler<HTMLAnchorElement>
}


export default function CategoryItem({ category, activeCategory, isActive, setActiveCategory }: CategoryItemProps) {
    const Icon = category.icon;
    
    const handleClick = () => {
        if(activeCategory === category.id)
            setActiveCategory("")    
        else
            setActiveCategory(category.id);

    };
    
    return (
    <div className={`category-item text-center text-wrap ${isActive && "active"}`} 
    onClick={handleClick}
    >
        <span className="span1 d-flex justify-content-center m-3 mb-0"><Icon size={22}/></span>
        <span className="span2 d-flex justify-content-center p-0 m-3 mt-0" style={{fontSize: "10px"}}>{category.name}</span>
    </div>
    );
  }