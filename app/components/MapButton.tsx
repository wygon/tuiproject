import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { MdMap } from "react-icons/md";
import { Link } from "react-router";

interface MapButtonProps {
    isMapModal : boolean;
}
export default function MapButton( {isMapModal} : MapButtonProps) {
    const [mapModal, setMapModal] = useState(isMapModal);
    return(
        <Button variant="dark" className="show-map-button rounded-pill fs-14" onClick={() => setMapModal(!mapModal)}>
            {!mapModal ? (<Link to="/map" className="d-flex align-items-end">Pokaż mapę <MdMap className="ms-2" size={18}/></Link>) :
                         (<Link to="/" className="d-flex align-items-end" >Pokaż listę <BsList className="ms-2"size={18} /></Link>) }
        </Button>
    );
}