import 'bootstrap/dist/css/bootstrap.min.css';
import "app/routes/airbnbcss/stylesheet.css";
import { PiAppStoreLogoBold, PiArticleThin, PiGlobe, PiHeartStraightBold, PiPersonSimpleCircleDuotone } from "react-icons/pi";
import { Outlet } from 'react-router';

export default function (){
    return (
        <div>
        <nav className="bg-light">
            <div className="row">
                <div className="col-4">
                    <button className="btn p-3"><PiAppStoreLogoBold /></button>
                </div>
                <div className="col-4 text-center p-3">
                    <button className="btn">Domy</button>
                    <button className="btn">Atrakcje</button>
                </div>
                <div className="col-4 text-right p-2  d-flex align-items-center justify-content-end">
                    <button className="btn">Wynajmij swoj dom na Aribnb</button> 
                    <button className="btn"><PiGlobe /></button>
                    <button className="btn btn-profile border border-3 rounded-pill d-flex align-items-center p-3"> 
                        <PiArticleThin className="me-2"/> 
                        <PiPersonSimpleCircleDuotone />
                    </button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="search-bar col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center bg-white rounded-pill p-2">
                        <form className="d-flex align-items-center w-100" >
                            <span className="rounded-pill search-bar-item p-2 m-1 pe-5">
                                <label htmlFor="kierunki" className="pe-5">Gdzie</label>
                                <input id="kierunki" className="pe-5"  placeholder="Wyszukaj kierunki" />
                            </span>

                            <div className="divider"></div>

                            <span className="rounded-pill search-bar-item p-2 m-1">
                                <label htmlFor="przyjazd" >Przyjazd</label>
                                <input id="przyjazd" className="" placeholder="Dodaj daty" />
                            </span>

                            <div className="divider"></div>
                            
                            <span className="rounded-pill search-bar-item p-2 m-1">
                                <label htmlFor="wyjazd">Wyjazd</label>
                                <input id="wyjazd" className="" placeholder="Dodaj daty" />
                            </span>
                            
                            <div className="divider" />
                            
                            <span className="rounded-pill search-bar-item p-2 m-1">
                                <label  htmlFor="kto" className="me-2">Kto</label>
                                <input id="kto" className="me-2" placeholder="Dodaj gości" />
                            </span>
                            <button className="btn rounded-pill bg-danger p-3 ms-auto text-center"><PiHeartStraightBold/></button>
                        </form>
                    </div>
                </div>
            </div>
        <hr/>
        </nav>
        <Outlet></Outlet>
        <h1>STOPKA</h1>
        <script src="bootstrap\dist\js\bootstrap.bundle.min.js" />
        </div>
    );
}