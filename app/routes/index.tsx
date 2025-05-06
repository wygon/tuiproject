import 'bootstrap/dist/css/bootstrap.min.css';
import "app/routes/airbnbcss/stylesheet.css";
import AttractionComponent from "~/components/Attraction/AttractionComponent";
import Footer from '~/components/Footer';
import MapButton from '~/components/MapButton';
import Navbar from '~/components/Navbar/Navbar';
import { useState } from 'react';

export default function () {

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <>
      <div className='navi'>
        <Navbar search={search} setSearch={setSearch} activeCategory={activeCategory} setActiveCategory={setActiveCategory}  />
      </div>
      {/* {search !== undefined && search} */}
      {/* {activeCategory !== undefined && activeCategory} */}
      <AttractionComponent search={search} activeCategory={activeCategory} />
      <MapButton isMapModal={false} />
      <Footer />
    </>
  );
}
