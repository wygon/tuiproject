import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

interface RatingStarsProps {
    rating: number;
}
export default function RatingStars({ rating }: RatingStarsProps) {
    const starsBar = () => {
        const stars= [];
        for (let i = 1; i <= 5; i++) {
            rating > (i - 0.5)
                ? (rating > i ? stars.push(<IoIosStar style={{ fontSize: "10px" }} />)
                    : stars.push(<IoIosStarHalf style={{ fontSize: "10px" }} />))
                : stars.push(<IoIosStarOutline style={{ fontSize: "10px" }} />)
        }
        return stars;
    }
    return (
        <div className='d-flex align-items-center'>
            {starsBar()}
        </div>
    );
}