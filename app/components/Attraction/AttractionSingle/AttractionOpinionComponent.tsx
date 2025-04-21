import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import RatingStars from "~/components/RatingStars";
import type { Opinion } from "~/types/opiniontype";

interface OpinionProps {
    opinion: Opinion;
}
export default function OpinionComponent({ opinion }: OpinionProps) {
    return (
        <Card className="border border-0">
            <CardTitle className="d-flex align-items-center m-0">
                <span className="h1">{opinion.photo}</span>
                <div className="ms-2">
                    <span className="fs-14">{opinion.name}</span>
                    <p className="fs-small option-description">{opinion.exp.toFixed()} {opinion.exp > (2-0.000000001) ? "lata" : "rok"} na Airbnb</p>
                </div>
            </CardTitle>
            <CardText className="d-flex m-0">
                <div className='d-flex align-items-center'>
                    <RatingStars rating={ opinion.rating } />
                    <span className="fs-small fw-500 ms-1"> - {opinion.date}</span>
                </div>
            </CardText>
            <CardText>
                {opinion.content}
            </CardText>
        </Card>
    );
}