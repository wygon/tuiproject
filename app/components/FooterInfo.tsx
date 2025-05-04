import { Col, Row } from "react-bootstrap";
import { PiFacebookLogoFill, PiGlobe, PiInstagramLogoFill, PiXLogoFill } from "react-icons/pi";

export default function FooterInfo() {
    return (
        <Row className="ps-3 d-flex justify-content-between fs-14 pb-3 me-0">
            <hr />
            <Col sm={6} lg={9}>
                &copy; 2025 <span>Airbnb, Inc.</span> - <span>Prywatność</span> - <span>Warunki</span> - <span>Mapa Witryny</span> - <span>Informacje o firmie</span>
            </Col>
            <Col sm={6} lg={3} className="d-flex gap-3 align-items-center justify-content-end">
                <PiGlobe /> Polski(PL)
                <span>zł PLN</span>
                <PiFacebookLogoFill /> <PiXLogoFill /> <PiInstagramLogoFill />
            </Col>
        </Row>
    );
}