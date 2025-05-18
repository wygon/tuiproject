import { PiAppStoreLogoBold, PiArticleThin, PiGlobe, PiHeartStraightBold, PiPersonSimpleCircleDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import LanguageModal from '~/components/LanguageModal';
import NavbarSearchbarSmall from "./NavbarSearchbarSmall";
import { TbBrandAirbnb } from "react-icons/tb";
import { Link } from "react-router";
import UserMenuDropdown from "../UserMenuDropdown";
export default function NavbarSmall() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLanguageModalShow, setIsLanguageModalShow] = useState(false);
    return (
        <div>
            <div className=''>
                <nav className="bg-light">
                    <div className='row d-none d-sm-flex attraction-container p-0'>
                        <div className="col-2 d-flex align-items-center">
                            <a href="/" className="p-3 ps-2 logo-small d-flex align-items-center" style={{ textDecoration: "none" }}>
                                <TbBrandAirbnb />
                                <span>airbnb</span>
                            </a>
                        </div>
                        <div className="col-7 p-3 d-flex align-items-center justify-content-center">
                            <NavbarSearchbarSmall />
                        </div>
                        <div className="col-3 text-right p-2 d-flex align-items-center justify-content-end position-relative pe-2">
                            <button className="btn" id="rent-text">Wynajmij swoj dom na Aribnb</button>

                            <button className="btn"
                                onClick={() => setIsLanguageModalShow(true)}>
                                <PiGlobe />
                            </button>
                            <UserMenuDropdown />
                        </div>
                    </div>
                    <div className="col-xs-12 pt-3 d-flex d-sm-none align-items-center justify-content-center">
                        <NavbarSearchbarSmall />
                    </div>
                    <hr className="m-0" />
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