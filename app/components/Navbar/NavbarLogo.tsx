import { TbBrandAirbnb } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function NavbarLogo() {
    return (
        <div>
            <nav className="bg-light">
                <div className='row d-none d-sm-flex mainpage-container pb-0 pt-0'>
                    <div className="col-sm-2 col-md-4 d-flex align-items-center">
                        <a href="/" className="p-3 logo d-flex align-items-center" style={{ textDecoration: "none" }}>
                            <TbBrandAirbnb />
                            <span>airbnb</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}