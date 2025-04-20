import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { IoLanguage } from "react-icons/io5";
import { Form } from 'react-bootstrap';

export default function LanguageModal(props: any) {
    const [isLangOn, setIsLangOn] = useState(true);
    const languages = [
        { language: 'Polski', country: 'Polska' },
        { language: 'English', country: 'United States' },
        { language: 'Deutsch', country: 'Deutschland' },
        { language: 'Español', country: 'España' },
        { language: 'Français', country: 'France' },
        { language: 'Italiano', country: 'Italia' },
        { language: 'Português', country: 'Portugal' },
        { language: 'Nederlands', country: 'Nederland' },
        { language: 'Svenska', country: 'Sverige' },
        { language: 'Dansk', country: 'Danmark' },
        { language: 'Norsk', country: 'Norge' },
        { language: 'Suomi', country: 'Suomi' },
        { language: 'Русский', country: 'Россия' },
        { language: '中文', country: '中国' },
        { language: '日本語', country: '日本' },
        { language: '한국어', country: '대한민국' },
        { language: 'العربية', country: 'المملكة العربية السعودية' },
        { language: 'Türkçe', country: 'Türkiye' },
        { language: 'Ελληνικά', country: 'Ελλάδα' },
        { language: 'Čeština', country: 'Česká republika' },
        { language: 'Magyar', country: 'Magyarország' },
        { language: 'Română', country: 'România' },
        { language: 'Hrvatski', country: 'Hrvatska' },
        { language: 'Slovenčina', country: 'Slovensko' },
        { language: 'Български', country: 'България' },
        { language: 'Українська', country: 'Україна' },
        { language: 'עברית', country: 'ישראל' },
        { language: 'Hindi', country: 'भारत' },
        { language: 'Bahasa Indonesia', country: 'Indonesia' },
        { language: 'Tiếng Việt', country: 'Việt Nam' }
    ];
    const currencies = [
        { name: "Dolar amerykański", code: "USD-$" },
        { name: "Euro", code: "EUR-€" },
        { name: "Funt brytyjski", code: "GBP-£" },
        { name: "Jen japoński", code: "JPY-¥" },
        { name: "Frank szwajcarski", code: "CHF-₣" },
        { name: "Dolar kanadyjski", code: "CAD-$" },
        { name: "Dolar australijski", code: "AUD-$" },
        { name: "Złoty polski", code: "PLN-zł" },
        { name: "Korona czeska", code: "CZK-Kč" },
        { name: "Korona norweska", code: "NOK-kr" },
        { name: "Korona duńska", code: "DKK-kr" },
        { name: "Korona szwedzka", code: "SEK-kr" },
        { name: "Yuan chiński", code: "CNY-¥" },
        { name: "Rupia indyjska", code: "INR-₹" },
        { name: "Real brazylijski", code: "BRL-R$" },
        { name: "Rubel rosyjski", code: "RUB-₽" },
        { name: "Hrywna ukraińska", code: "UAH-₴" },
        { name: "Lira turecka", code: "TRY-₺" },
        { name: "Peso meksykańskie", code: "MXN-$" }
    ];
    const suggestedLanguages = languages.slice(1, 6);
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable
            className='lang-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex'>
                    <span className={`lang-modal-option p-2 active-item round-10 ${isLangOn ? "active" : ""}`}
                        onClick={() => setIsLangOn(true)}
                    >
                        Język i region</span>
                    <span className={`lang-modal-option p-2 active-item round-10 ${!isLangOn ? "active" : ""}`}
                        onClick={() => setIsLangOn(false)}
                        style={{ fontWeight: !isLangOn ? '600' : 'normal', borderBottom: '3px black' }}>
                        Waluta</span>
                </div>
                <hr />
                {isLangOn ? (
                    <div>
                        <div className='p-3'>
                            <div className='language-pill p-3 rounded-lg bg-light position-relative'>
                                <span className='d-flex align-items-center'>
                                    <p className='m-0'>Tłumaczenie </p><IoLanguage />
                                </span>
                                <p className='m-0 option-description translate-description'>Automatycznie tłumacz opisy i recenzje na język Polski.</p>
                                <Form.Switch className="position-absolute top-8 end-2" />
                            </div>
                        </div>
                        <h5>Sugerowane języki i regiony</h5>
                        <Container>
                            <Row>
                                {suggestedLanguages.map((item, index) => {
                                    let firstOrLast = false;
                                    if ((index % 5 == 0))
                                        firstOrLast = true;
                                    return (
                                        <>
                                            <Col xs={6} md={3} lg={{ span: 2, offset: firstOrLast ? 1 : 0 }} className="d-flex justify-content-center align-items-left mb-2">
                                                <span className="language-item round-10 ps-2">
                                                    <p className='m-0'>{item.language}</p>
                                                    <p className='m-0 option-description'>{item.country}</p>
                                                </span>
                                            </Col>
                                        </>);
                                })}
                            </Row>
                        </Container>
                        <h5>Wybierz język i region</h5>
                        <Container>
                            <Row className=''>
                                {languages.map((item, index) => {
                                    let firstOrLast = false;
                                    if ((index % 5 == 0))
                                        firstOrLast = true;
                                    return (
                                        <>
                                            <Col xs={6} md={3} lg={{ span: 2, offset: firstOrLast ? 1 : 0 }} className="d-flex justify-content-center align-items-left mb-2">
                                                <span className="language-item round-10 ps-2">
                                                    <p className='m-0'>{item.language}</p>
                                                    <p className='m-0 option-description'>{item.country}</p>
                                                </span>
                                            </Col>
                                        </>);
                                })}
                            </Row>
                        </Container>
                    </div>
                ) : (
                    <div>
                        <Container>
                            <Row>
                                <h5>Wybierz walutę</h5>
                                {currencies.map((item, index) => {
                                    let firstOrLast = false;
                                    if ((index % 5 == 0))
                                        firstOrLast = true;
                                    return (
                                        <>
                                            <Col xs={6} md={3} lg={{ span: 2, offset: firstOrLast ? 1 : 0 }} className="d-flex justify-content-center align-items-left mb-2">
                                                <span className="language-item round-10 ps-2">
                                                    <p className='m-0'>{item.name}</p>
                                                    <p className='m-0 option-description'>{item.code}</p>
                                                </span>
                                            </Col>
                                        </>);
                                })}
                            </Row>
                        </Container>
                    </div>)}
            </Modal.Body>
        </Modal>
    );
}