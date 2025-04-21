// import { attractions } from "~/categories/attractions";
// import AttractionItemCard from "./AttractionItem";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router";
// export default function AtractionComponent() {
//     var counter = 0;
//     return (
//         <div className="container-custom">
//             <Row className="atraction-component justify-content-center">
//                 {attractions.map((attraction) => {
//                     let firstOrLast = false;
//                     if ((counter % 5 == 0))
//                         firstOrLast = true;
//                      counter++;

//                  return (<Col xs={6} sm={4} md={3} lg={3} xl={{ span: 2, offset: firstOrLast ? 1 : 0 }} >
//                         {/* <Link to="/attraction"> */}
//                         <AttractionItemCard
//                             key={attraction.id}
//                             attraction={attraction}
//                             />
//                         {/* </Link> */}
//                     </Col>
//                     );
//                 })}
//             </Row>
//         </div>
//     );
// }
import { attractions } from "~/categories/attractions";
import AttractionItemCard from "./AttractionItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";
import { useMemo } from "react";
import attraction from "~/routes/attraction";
import { useNavigate } from "react-router";
export default function AtractionComponent() {
    var counter = 0;
    const attractionList = useMemo(() => {
        return attractions.map((attraction) => (
            <Col xs={6} sm={4} md={3} lg={3} xl={2}>
                <AttractionItemCard
                    key={attraction.id}
                    attraction={attraction}
                />
            </Col>
            ));
    }, [attraction]);

    return (
        <div className="mainpage-container">
            <Row>
                {/* {attractions.map((attraction) => {
                 return (<Col xs={6} sm={4} md={3} lg={3} xl={2}>
                        <AttractionItemCard
                            key={attraction.id}
                            attraction={attraction}
                            />
                    </Col>
                    );
                })} */}
                {attractionList}
            </Row>
        </div>
    );
}