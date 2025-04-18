import { PiAppStoreLogoBold, PiArticleThin, PiGlobe, PiHeartStraightBold, PiPersonSimpleCircleDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import CategoryNav from '~/components/CategoryNav';
import { useState } from 'react';
import LanguageModal from '~/components/LanguageModal';
import NavbarSearchbar from "./NavbarSearchbar";
export default function Navbar() {
    const [activeSearchHome, setActiveSearchHome] = useState(true);
    const [searchBarActive, setSearchBarActive] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLanguageModalShow, setIsLanguageModalShow] = useState(false);
    return (
        <div>
            <div className=''>
                <nav className="bg-light">
                    <div className='row'>
                        {/* <NavbarHeader /> */}
                        <div className="col-4 d-flex align-items-center">
                            <span className="p-3 ps-5 logo d-flex align-items-center">
                                <PiAppStoreLogoBold />
                                <span>airbnb</span>
                            </span>
                        </div>
                        <div className="col-4 text-center p-3">
                            <button className="btn" style={{ fontWeight: activeSearchHome ? '500' : 'normal' }} onClick={() => setActiveSearchHome(true)}>Domy</button>
                            <button className="btn" style={{ fontWeight: !activeSearchHome ? '500' : 'normal' }} onClick={() => setActiveSearchHome(false)}>Atrakcje</button>
                        </div>
                        <div className="col-4 text-right p-2 d-flex align-items-center justify-content-end position-relative pe-5">
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
                            <NavbarSearchbar activeSearchHome={activeSearchHome}/>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-center">
                        <CategoryNav />
                    </div>
                    <hr />
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