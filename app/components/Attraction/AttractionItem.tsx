import type { AttractionCardType } from "~/types/attractiontype";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiHeartBold, PiHeartFill, PiStarFill } from "react-icons/pi";
import { useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { Link, useNavigate } from "react-router";
interface AttractionItemCardProps {
    attraction: AttractionCardType;
}
export default function AtractionItemCard({ attraction }: AttractionItemCardProps) {
    const [isLike, setLike] = useState(false);
    const navigate = useNavigate();

    const navigateToAttraction = () => {
        navigate(`/attraction/${attraction.id}`);
    }
    return (
        <div className="atraction-item-card mb-3" onClick={navigateToAttraction}>
            <div className="position-relative">
            <img src={`https://picsum.photos/id/${attraction.picture}/200`} className="img-fluid w-100" alt="image" />
                <button className="btn position-absolute top-0 end-0 p-2 heart-btn" onClick={() => setLike(!isLike)}>
                    {!isLike ? 
                    (
                        <PiHeartBold className="h3 text-white rounded-circle" /> 
                    ) :
                    (
                        <PiHeartFill className="h3 text-danger rounded-circle" /> 
                    )} 
                </button>
                {attraction.rating > 4.3 && 
                (attraction.rating > 4.8 ? 
                    (<p className="position-absolute top-4 left-3 p-1 client-choice-badge bg-white fw-bold d-flex align-items-center"><GiTrophyCup className="text-warning"/> Wybór gości</p>) : 
                    (<p className="position-absolute top-4 left-3 p-1 client-choice-badge bg-white fw-bold">Wybór gości</p> ))}
            </div>
            <span className="fw-bold d-flex justify-content-between">
                <p className="atraction-item-card-title">{attraction.title}, {attraction.country}</p>
                <p className="d-flex align-items-center"><PiStarFill />{attraction.rating} </p>
            </span>
            <div className=" atraction-item-card-description">
                <p className="">{attraction.description}</p>
                <p className="">{attraction.owner}</p>
                <p className="fw-bold">{attraction.price} zł noc</p>
            </div>
        </div>
    );
}