import 'bootstrap/dist/css/bootstrap.min.css';
import "app/routes/airbnbcss/stylesheet.css";
import { Outlet } from 'react-router';
import NavbarSmall from '~/components/Navbar/NavbarSmall';
import Footer from '~/components/Footer';

export default function () {
    return (
        <div>
            <NavbarSmall/>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
}