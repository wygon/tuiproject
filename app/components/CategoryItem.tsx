import { useContext } from "react";
import type { Category } from "~/types/categorytype";
import { ActiveCategoryContext } from "../routes/index";

interface CategoryItemProps {
    category: Category;
    isActive : boolean; 
}


export default function CategoryItem({ category, isActive }: CategoryItemProps) {
    const Icon = category.icon;
    const ac = useContext(ActiveCategoryContext);

    const handleClick = () => {
        if(ac.activeCategory === category.id)
            ac.setActiveCategory("")    
        else
            ac.setActiveCategory(category.id);

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