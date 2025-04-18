import { atractions } from "~/categories/atractions";
import AtractionItemCard from "./AtractionItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";
export default function AtractionComponent() {
    var counter = 0;
    return (
        <div className="container-custom">
            <Row className="atraction-component justify-content-center">
                {atractions.map((atraction) => {
                    let firstOrLast = false;
                    if ((counter % 5 == 0))
                        firstOrLast = true;
                     counter++;
                     console.log("Counter ", counter);
                     
                 return (<Col xs={6} sm={4} md={3} lg={3} xl={{ span: 2, offset: firstOrLast ? 1 : 0 }}>
                        <AtractionItemCard
                            key={atraction.id}
                            atraction={atraction}
                            />
                    </Col>
                    );
                })}
            </Row>
        </div>
    );
}