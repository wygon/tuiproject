import { PiArticleThin, PiGlobe} from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import CategoryNav from '~/components/CategoryNav';
import { useState } from 'react';
import LanguageModal from '~/components/LanguageModal';
import NavbarSearchbar from "./NavbarSearchbar";
import NavbarSearchbarSmall from "./NavbarSearchbarSmall";
import { TbBrandAirbnb } from "react-icons/tb";

export default function Navbar({ search, setSearch, activeCategory, setActiveCategory }) {
    const [activeSearchHome, setActiveSearchHome] = useState(true);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLanguageModalShow, setIsLanguageModalShow] = useState(false);

    return (
        <div>
            <div className=''>
                
                <nav className="bg-light">
                    <div className='row d-none d-sm-flex mainpage-container pb-0 pt-0'>
                        <div className="col-sm-2 col-md-4 d-flex align-items-center">
                            <a href="/" className="p-3 logo d-flex align-items-center" style={{ textDecoration: "none" }}>
                                <TbBrandAirbnb />
                                <span>airbnb</span>
                            </a>
                        </div>
                        <div className="col-md-4 text-center p-3 d-sm-none d-md-inline">
                            <button className="btn" style={{ fontWeight: activeSearchHome ? '500' : 'normal' }} onClick={() => setActiveSearchHome(true)}>Domy</button>
                            <button className="btn" style={{ fontWeight: !activeSearchHome ? '500' : 'normal' }} onClick={() => setActiveSearchHome(false)}>Atrakcje</button>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-4 p-3 d-sm-flex d-md-none align-items-center justify-content-center">
                            <NavbarSearchbarSmall />
                        </div>
                        <div className="col-sm-5 col-md-4 text-right p-2 d-flex align-items-center justify-content-end position-relative">
                            <button className="btn" id="rent-text">Wynajmij swoj dom na Aribnb</button>

                            <button className="btn"
                                onClick={() => setIsLanguageModalShow(true)}>
                                <PiGlobe />
                            </button>

                            <button className="btn-profile border border-1 rounded-pill d-flex align-items-center p-2"
                                onClick={() => setIsLoginOpen(true)}
                                onBlur={() => setIsLoginOpen(false)}
                            >
                                <PiArticleThin className="me-2" />
                                <CgProfile />
                            </button>
                            {isLoginOpen && (
                                <div className={`dropdown-menu position-absolute top-16 ${isLoginOpen && "show"}`}>
                                    <p className="dropdown-item fw-bold">Zarejestruj się</p>
                                    <p className="dropdown-item">Zaloguj się</p>
                                    <hr />
                                    <p className="dropdown-item">Karty podarunkowe</p>
                                    <p className="dropdown-item">Wynajmij swój dom na Airbnb</p>
                                    <p className="dropdown-item">Zostań gospodarzem atrakcji</p>
                                    <p className="dropdown-item">Centrum pomocy</p>
                                </div>
                            )}
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <NavbarSearchbar activeSearchHome={activeSearchHome} setSearch={setSearch} />
                        </div>
                    </div>
                    <div className="col-xs-12 pt-3 d-flex d-sm-none align-items-center justify-content-center">
                        <NavbarSearchbarSmall />
                    </div>
                    <hr className="mb-0"/>
                    <div className="d-flex align-items-center justify-content-center  ms-3 me-3">
                        <CategoryNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    </div>
                    <hr className="mt-0" />
                </nav>
            </div>
            <div className='modal-language'>
                <LanguageModal
                    show={isLanguageModalShow}
                    onHide={() => setIsLanguageModalShow(false)} />
            </div>
        </div>
    );
}