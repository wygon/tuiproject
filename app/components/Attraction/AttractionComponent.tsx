import { attractions } from "~/categories/attractions";
import AttractionItemCard from "./AttractionItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";
export default function AtractionComponent() {
    var counter = 0;
    return (
        <div className="container-custom">
            <Row className="atraction-component justify-content-center">
                {attractions.map((attraction) => {
                    let firstOrLast = false;
                    if ((counter % 5 == 0))
                        firstOrLast = true;
                     counter++;
                     console.log("Counter ", counter);
                     
                 return (<Col xs={6} sm={4} md={3} lg={3} xl={{ span: 2, offset: firstOrLast ? 1 : 0 }}>
                        <AttractionItemCard
                            key={attraction.id}
                            attraction={attraction}
                            />
                    </Col>
                    );
                })}
            </Row>
        </div>
    );
}