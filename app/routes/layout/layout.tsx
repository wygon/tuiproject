import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "app/routes/airbnbcss/stylesheet.css";
import { PiAppStoreLogoBold, PiArticleThin, PiGlobe, PiHeartStraightBold, PiPersonSimpleCircleDuotone } from "react-icons/pi";
import { Outlet } from 'react-router';
import CategoryNav from '~/components/CategoryNav';
import { useEffect, useState } from 'react';

function getWindowSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() { 
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resiuze', handleResize);
    }, []);
    return windowSize;
}

export default function (){
    const [activeSearchHome, setActiveSearchHome] =  useState(true);
    const [searchBarActive, setSearchBarActive] =  useState(false);
    const currentWidth = getWindowSize();
    return (
        <div>
        <nav className="bg-light">
            <div className="row">
                <div className="col-4 d-flex align-items-center">
                    <span className="p-3 ps-5 logo d-flex align-items-center"><PiAppStoreLogoBold />{currentWidth > 1000 ? "Airbnb" : ""}</span>
                </div>
                <div className="col-4 text-center p-3">
                    <button className="btn" style={{fontWeight: activeSearchHome ? '600' : 'normal'}} onClick={() => setActiveSearchHome(true)}>Domy</button>
                    <button className="btn" style={{fontWeight: !activeSearchHome ? '600' : 'normal'}}onClick={() => setActiveSearchHome(false)}>Atrakcje</button>
                </div>
                <div className="col-4 text-right p-2  d-flex align-items-center justify-content-end">
                    <button className="btn">Wynajmij swoj dom na Aribnb</button> 
                    <button className="btn"><PiGlobe /></button>
                    <button className="btn btn-profile border border-3 rounded-pill d-flex align-items-center p-3"> 
                        <PiArticleThin className="me-2"/> 
                        <PiPersonSimpleCircleDuotone />
                    </button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="search-bar bg-white rounded-pill" onFocus={() => setSearchBarActive(true)} onBlur={() => setSearchBarActive(false)}>
                        <form className="d-flex align-items-center w-100" >
                            <label htmlFor="kierunki" className="rounded-pill search-bar-item p-2 w33">
                                <span className="">Gdzie</span>
                                <input id="kierunki" className=""  placeholder="Wyszukaj kierunki" />
                            </label>
                            <div className="divider"></div>
                            {activeSearchHome ? (
                            <>
                            <div className="w33 d-flex align-items-center">
                                <label htmlFor="przyjazd" className="rounded-pill search-bar-item p-2 w-50">
                                    <span>Przyjazd</span>
                                    <input id="przyjazd" className="" placeholder="Dodaj daty" />
                                </label>
                                <div className="divider"></div>
                                <label htmlFor="wyjazd" className="rounded-pill search-bar-item p-2 w-50">
                                    <span >Wyjazd</span>
                                    <input id="wyjazd" className="" placeholder="Dodaj daty" />
                                </label>
                            </div>
                            </>
                            ) : (
                            <>
                                <label htmlFor="przyjazd" className="rounded-pill search-bar-item p-2 w33">
                                    <span >Data</span>
                                    <input id="przyjazd" className="" placeholder="Dodaj daty" />
                                </label>
                            </>
                            )}
                            <div className="divider" />
                            <label htmlFor="kto" className="rounded-pill search-bar-item p-2 d-flex flex-row justify-content-between align-items-center w33">
                                <div className="d-flex flex-column">
                                    <span className="me-2">Kto</span>
                                    <input id="kto" className="me-2" placeholder="Dodaj gości" />
                                </div>
                                {!searchBarActive ? 
                                (<button className="btn rounded-pill bg-danger p-2 text-center h-100"><PiHeartStraightBold/></button>)
                                : 
                                (<button className="btn rounded-pill bg-danger p-2 text-center h-100 d-flex align-items-center"><PiHeartStraightBold/><span>Szukaj</span></button>)}
                                {/* <button className="btn rounded-pill bg-danger p-2 text-center h-100"><PiHeartStraightBold/></button> */}
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        <hr/>
        <div className="d-flex align-items-center justify-content-center">
            <CategoryNav />
        </div>
        <hr/>
        </nav>
        <Outlet></Outlet>
        <h1>STOPKA</h1>
        </div>
    );
}