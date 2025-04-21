import { Button } from "react-bootstrap";
import type { ImgText } from "~/types/imgTexttype";

interface ImgTextProps {
    imgtextpill : ImgText
}
export default function ImgTextPill({ imgtextpill } : ImgTextProps) {
    return(
        // <div className='border border-1 rounded-pill d-flex align-items-center justify-content-center p-2 w-100 m-1 ms-0'>
        //     {imgtextpill.icon}
        //     <span className='ps-1 fs-14'>{imgtextpill.content}</span>
        // </div>
        <Button variant="white" className='filter-option-button rounded-pill active d-flex align-items-center justify-content-center p-2 w-100 m-1 ms-0'>
            {imgtextpill.icon}
            <span className='ps-1 fs-14'>{imgtextpill.content}</span>
        </Button>
    );
}