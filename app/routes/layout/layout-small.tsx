import 'bootstrap/dist/css/bootstrap.min.css';
import "app/routes/airbnbcss/stylesheet.css";
import { Outlet } from 'react-router-dom';
import NavbarLogo from '~/components/Navbar/NavbarLogo';
import FooterInfo from '~/components/FooterInfo';

export default function () {
    return (
        <div>
            <NavbarLogo/>
            <Outlet></Outlet>
            <FooterInfo />
        </div>
    );
}