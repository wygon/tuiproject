import { Col } from "react-bootstrap";
import type { Rating } from "~/types/ratingtype";

interface RatingComponentSingleProps {
    rating: Rating
}
export default function RatingComponentSingle({ rating }: RatingComponentSingleProps) {
    return (
    <Col className="rating-single p-2 pt-1">
        <span className="fs-small fw-500">
                {rating.name}
            <p>
                {rating.rate}
            </p>
        </span>
        <span className="h4 m-0">
            {rating.icon}
        </span>
    </Col>
    );
}