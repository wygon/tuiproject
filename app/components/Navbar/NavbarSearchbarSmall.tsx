import { IoIosSearch } from "react-icons/io";

export default function NavbarSearchbarSmall() {
    return (
        <div className="search-bar-small bg-white rounded-pill">
            <span className="rounded-pill p-2 w33">Gdziekolwiek</span>
            <div className="divider" />
            <span className="rounded-pill p-2 w33">Dowolny tydzień</span>
            <div className="divider" />
            <span className="rounded-pill p-2 w33">Dodaj gości</span>
            <button className="rounded-pill bg-danger p-2 text-center text-white h-100"><IoIosSearch /></button>
        </div>
    );
}