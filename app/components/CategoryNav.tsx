import { categories } from "~/categories/categories";
import CategoryItem from "./CategoryItem";
import { PiGreaterThanLight, PiLessThanLight } from "react-icons/pi";
import { IoOptionsOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import FilterModal from "./FilterModal";

export default function CategoryNav( { activeCategory, setActiveCategory } ) {
    const categoryNavRef = useRef<HTMLDivElement>(null);
    const [isFilterModalShow, setIsFilterModalShow] = useState(false);

    // const [activeCategory, setactiveCategory] = useState("");

    const scrollLeft = () => {
        if(categoryNavRef.current){
            categoryNavRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };
    const scrollRight = () => {
        if(categoryNavRef.current){
            categoryNavRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };
    return (
        <>
            <div ref={categoryNavRef} className="category-nav d-flex align-items-center"
            >
                {categories.map((category) =>
                    <CategoryItem
                    key={category.id}
                    category={category}
                    isActive={activeCategory === category.id}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    // onClick={() => setActiveCategory(category)}
                    />
                )}
            </div>
            <span onClick={scrollLeft} className={`category-nav-button p-2 border border-secondary rounded-circle fs-small absolute left-18 bg-light`}> <PiLessThanLight /></span>
            <span onClick={scrollRight}className={`category-nav-button p-2 border border-secondary rounded-circle fs-small absolute right-40 bg-light`}> <PiGreaterThanLight /></span>
            <span onClick={() => setIsFilterModalShow(true)} className="category-nav-filter p-2 border border-secondary rounded fs-small d-flex absolute right-20 bg-light"><IoOptionsOutline style={{ fontSize: "20px", marginRight: "5px" }} /> Filtry</span>
            <div className='modal-filter'>
                <FilterModal
                    show={isFilterModalShow}
                    onHide={() => setIsFilterModalShow(false)} />
            </div>
        </>
    );
}