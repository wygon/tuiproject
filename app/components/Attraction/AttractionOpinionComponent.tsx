import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import type { Opinion } from "~/types/opiniontype";

interface OpinionProps {
    opinion: Opinion;
}
export default function OpinionComponent({ opinion }: OpinionProps) {
    return (
        <Card>
            <CardTitle className="d-flex align-items-center">
                <span className="h1">{opinion.photo}</span>
                <span className="fs-14">{opinion.name}</span>
            </CardTitle>
            <CardText className="d-flex">
                <div className='d-flex align-items-center'>
                    {opinion.rating > 0.5 ? (opinion.rating > 1 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                    {opinion.rating > 1.5 ? (opinion.rating > 2 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                    {opinion.rating > 2.5 ? (opinion.rating > 3 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                    {opinion.rating > 3.5 ? (opinion.rating > 4 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                    {opinion.rating > 4.5 ? (opinion.rating > 5 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                <span className="fs-small fw-500"> - {opinion.date}</span>
                </div>
            </CardText>
            <CardText>
                {opinion.content}
            </CardText>
        </Card>
    );
}