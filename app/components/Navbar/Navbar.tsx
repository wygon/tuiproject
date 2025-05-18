import { PiGlobe } from "react-icons/pi";
import CategoryNav from '~/components/CategoryNav';
import { useState } from 'react';
import LanguageModal from '~/components/LanguageModal';
import NavbarSearchbar from "./NavbarSearchbar";
import NavbarSearchbarSmall from "./NavbarSearchbarSmall";
import { TbBrandAirbnb } from "react-icons/tb";
import UserMenuDropdown from "../UserMenuDropdown";

export default function Navbar() {
    const [activeSearchHome, setActiveSearchHome] = useState(true);
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
                            <button className="btn" id="rent-text"
                            >Wynajmij swoj dom na Aribnb</button>

                            <button className="btn"
                                onClick={() => setIsLanguageModalShow(true)}>
                                <PiGlobe />
                            </button>
                            <UserMenuDropdown />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <NavbarSearchbar activeSearchHome={activeSearchHome}/>
                        </div>
                    </div>
                    <div className="col-xs-12 pt-3 d-flex d-sm-none align-items-center justify-content-center">
                        <NavbarSearchbarSmall />
                    </div>
                    <hr className="mb-0" />
                    <div className="d-flex align-items-center justify-content-center  ms-3 me-3">
                        <CategoryNav />
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