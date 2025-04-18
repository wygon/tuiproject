import 'bootstrap/dist/css/bootstrap.min.css';
import "app/routes/airbnbcss/stylesheet.css";
import { Outlet } from 'react-router';
import Navbar from '~/components/Navbar/Navbar';

export default function () {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <h1>STOPKA</h1>
        </div>
    );
}