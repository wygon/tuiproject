import { Col, Row } from "react-bootstrap";
import { PiFacebookLogo, PiFacebookLogoFill, PiGlobe, PiInstagramLogoFill, PiTwitchLogoFill, PiTwitterLogoFill, PiXLogoFill } from "react-icons/pi";
import FooterInfo from "./FooterInfo";

export default function Footer() {
    return (
        <div className="bg-light position-relative bottom-0">
            <hr />
            {/* <span className="fs-small ps-4">Airbnb &gt; Kraj &gt; Województwo &gt; Powiat &gt; Miasto </span>
            <hr /> */}
            <div className="ps-4 attraction-container">
                {/* <h4>Sprawdź inne miejsca w Miasto i okolicach</h4> */}
                {/* <span className="language-item round-10 ps-2">
                            <p className='m-0'>Centrum Pomocy</p>
                            <p className='m-0 option-description'>AirCover</p>
                        </span> */}
                <Row className="me-0">
                    <Col xs={4} md={4} lg={4} className="p-0">
                        <p className="fw-500">Obsługa klienta</p>
                        <p className='mb-1 fs-small'>Centrum Pomocy</p>
                        <p className='mb-1 fs-small'>AirCover</p>
                        <p className='mb-1 fs-small'>Przeciwdziałanie dyskryminacji</p>
                        <p className='mb-1 fs-small'>Ułatwienia dostępu</p>
                        <p className='mb-1 fs-small'>Opcje anulowania</p>
                        <p className='mb-1 fs-small'>Zgłoś problem w twojej okolicy</p>
                    </Col>
                    <Col xs={4} md={4} lg={4}>
                        <p className="fw-500">Przyjmowanie gości</p>
                        <p className='mb-1 fs-small'>Wynajmij swój dom na Airbnb</p>
                        <p className='mb-1 fs-small'>AirCover dla gospodarzy</p>
                        <p className='mb-1 fs-small'>Materiały dla gospodarzy</p>
                        <p className='mb-1 fs-small'>Forum społeczności</p>
                        <p className='mb-1 fs-small'>Odpowiedzialne wynajmowanie</p>
                        <p className='mb-1 fs-small'>Dołącz do bezpłatnych zajęć na temat przyjmowania gości</p>
                        <p className='mb-1 fs-small'>Znajdź współgospodarza</p>
                    </Col>
                    <Col xs={4} md={4} lg={4}>
                        <p className="fw-500">Airbnb</p>
                        <p className='mb-1 fs-small'>Wiadomości</p>
                        <p className='mb-1 fs-small'>Nowe funkcje</p>
                        <p className='mb-1 fs-small'>Praca</p>
                        <p className='mb-1 fs-small'>Dla inwestorów</p>
                        <p className='mb-1 fs-small'>Pobyty na Airbnb.org</p>
                    </Col>
                </Row>
            </div>
            <FooterInfo />
        </div>
    );
}