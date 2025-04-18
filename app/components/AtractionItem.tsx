import type { AtractionCardType } from "~/types/atractiontype";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiHeartBold, PiHeartFill, PiStarFill } from "react-icons/pi";
import { useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
interface AtractionItemCardProps {
    atraction: AtractionCardType;
}
export default function AtractionItemCard({ atraction }: AtractionItemCardProps) {
    const [isLike, setLike] = useState(false);
    return (
        <div className="atraction-item-card">
            <div className="position-relative">
                <img src={`https://picsum.photos/id/${atraction.picture}/200`} className="img-fluid w-100" alt="image" />
                <button className="btn position-absolute top-0 end-0 p-2 heart-btn" onClick={() => setLike(!isLike)}>
                    {!isLike ? 
                    (
                        <PiHeartBold className="h3 text-white rounded-circle" /> 
                    ) :
                    (
                        <PiHeartFill className="h3 text-danger rounded-circle" /> 
                    )} 
                </button>
                {atraction.rating > 4.3 && 
                (atraction.rating > 4.8 ? 
                    (<p className="position-absolute top-4 left-3 p-1 client-choice-badge bg-white fw-bold d-flex align-items-center"><GiTrophyCup className="text-warning"/> Wybór gości</p>) : 
                    (<p className="position-absolute top-4 left-3 p-1 client-choice-badge bg-white fw-bold">Wybór gości</p> ))}
            </div>
            <span className="fw-bold d-flex justify-content-between">
                <p className="atraction-item-card-title">{atraction.title}, {atraction.country}</p>
                <p className="d-flex align-items-center"><PiStarFill />{atraction.rating} </p>
            </span>
            <div className=" atraction-item-card-description">
                <p className="">{atraction.description}</p>
                <p className="">{atraction.owner}</p>
                <p className="fw-bold">{atraction.price} zł noc</p>
            </div>
        </div>
    );
}