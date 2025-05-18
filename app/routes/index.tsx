import AttractionComponent from "~/components/Attraction/AttractionComponent";
import Footer from '~/components/Footer';
import MapButton from '~/components/MapButton';
import Navbar from '~/components/Navbar/Navbar';
import { useState, createContext, type Dispatch, type SetStateAction } from 'react';

interface SearchContextType {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({
  search: '',
  setSearch: () => { },
});

interface ActiveCategoryContextType {
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
}

export const ActiveCategoryContext = createContext<ActiveCategoryContextType>({
  activeCategory: '',
  setActiveCategory: () => { },
});

export default function () {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <ActiveCategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
          <div className='navi'>
            <Navbar />
          </div>
          <AttractionComponent search={search} activeCategory={activeCategory} />
        </ActiveCategoryContext.Provider>
      </SearchContext.Provider>
      <MapButton isMapModal={false} />
      <Footer />
    </>
  );
}
