import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface NavbarSearchbarProps {
    activeSearchHome: boolean;
}
export default function NavbarSearchbar ({ activeSearchHome } : NavbarSearchbarProps) {
    const [searchBarActive, setSearchBarActive] = useState(false);
    return (
        <div className="search-bar bg-white rounded-pill"
            onFocus={() => setSearchBarActive(true)}
            onBlur={() => setSearchBarActive(false)}>
            <form className="d-flex align-items-center w-100" >
                <label htmlFor="kierunki" className="rounded-pill search-bar-item p-2 w33">
                    <span className="">Gdzie</span>
                    <input id="kierunki" className="" placeholder="Wyszukaj kierunki" />
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
                    <button className={`btn rounded-pill bg-danger p-2 text-center h-100 ${searchBarActive && "d-flex align-items-center justify-content-center pe-4"}`}><IoIosSearch />{searchBarActive && (<span>Szukaj</span>)}</button>
                </label>
            </form>
        </div>
    );
}