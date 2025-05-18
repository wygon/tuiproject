import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { Card, Col, Container, Dropdown, DropdownButton, FormCheck, FormLabel, FormSelect, ListGroup, ListGroupItem, Row, Form, FloatingLabel, Button, Popover, OverlayTrigger, Spinner, Toast, Modal } from "react-bootstrap";
import { BiDiamond } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { PiLessThanLight } from "react-icons/pi";
import { useNavigate, useParams } from "react-router";
import { attractions } from "~/categories/attractions";
import type { AttractionCardType } from "~/types/attractiontype";
import { LoginContext } from "~/root";

export default function () {
    const { id, guests } = useParams();
    if (id != null) { var numberId = +id; }
    if (guests != null) { var numberGuests = +guests; }
    const [selectedPayment, setSelectedPayment] = useState('now');
    const [loading, setLoading] = useState(true);
    const [listing, setListing] = useState(0);
    const [cAttr, setCurrentAttraction] = useState<AttractionCardType | null>(null);
    const [showConfirmToast, setShowConfirmToast] = useState(false);
    const [showPayModal, setShowPayModal] = useState(false);
    const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedPayment(event.target.value);
    };

    const login = useContext(LoginContext);

    const navigate = useNavigate();
    const navigateToAttraction = () => {
        navigate(`/attraction/${cAttr?.id}`);
    }
    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true);
                const foundAttraction = attractions.find((attraction) => attraction.id === numberId);
                setCurrentAttraction(foundAttraction !== undefined ? foundAttraction : null);
                if (foundAttraction != null) { setListing(foundAttraction.id); }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchListing()
    }, [id]);
    const popoverCleaning = (
        <Popover>
            <Popover.Body>
                Jednorazowa opłata pobierana przez gospodarza w celu pokrycia kosztów sprzątania wynajmowanego miejsca.
            </Popover.Body>
        </Popover>
    );
    const popoverService = (
        <Popover>
            <Popover.Body>
                Z tej opłaty finansujemy działalność portalu i świadczone usługi, np. pomoc 24/7 w trakcie Twojej podróży.
                Cena zawiera podatek VAT.
            </Popover.Body>
        </Popover>
    );
    const popoverPrice = (
        <Popover>
            <Popover.Body>
                Tu powinien byc modal z wyborem waluty
            </Popover.Body>
        </Popover>
    );
    const paymentSuccesfull = () => {
        setShowPayModal(false);
        setShowConfirmToast(true);
    }
    const now = new Date(Date.now());

    if (loading)
        return <div className='d-flex justify-content-center p-5 m-5'>
            <Spinner animation="border" variant='danger'> </Spinner>
        </div>
    else if (!listing) { return <div> Nie ma takiej oferty</div> }
    else return (
        <div>
            <hr className="m-0" />
            <Container className="book-container position-relative">
                <Row>
                    <div className="d-flex justify-content-left align-items-center">
                        <span className={`p-2 btn rounded-circle position-absolute left-2 translate-middle-x`} onClick={navigateToAttraction}><PiLessThanLight /></span>
                        <h2>Prośba o rezerwację</h2>
                        <Button
                            variant={`${!login.userLogin ? "success" : "danger"}`}
                            onClick={() => login.setUserLogin(!login.userLogin)}
                            className="ms-5"
                        >
                            {!login.userLogin ? "Wyloguj" : "Zaloguj"}
                        </Button>
                    </div>
                    <Col xs="6" className="">
                        {cAttr?.rating > 4.8 ?
                            <Card className="p-4 position-relative mb-3">
                                <Card.Title className="fs-14 m-0">To wyjątkowe znalezisko</Card.Title>
                                <small>Oferowany dom jest zazwyczaj zarezerwowany.</small>
                                <BiDiamond className="position-absolute end-4 h1 text-danger" />
                            </Card>
                            : <hr className="mt-0 " />
                        }
                        <h4>Twoja podróż</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>
                                <span className="fw-500">Daty</span>
                                <p>{now.getDate()}-{now.getDate() + 5} maj</p>
                            </span>
                            <span className="text-decoration-underline fw-500">Edytuj</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>
                                <span className="fw-500">Goście</span>
                                <p>{guests} {numberGuests < 2 ? "gość" : "goście"}</p>
                            </span>
                            <span className="text-decoration-underline fw-500">Edytuj</span>
                        </div>
                        <hr />
                        <h4>Wybierz formę płatności</h4>
                        <div>
                            <Form>
                                <ListGroup as={FormLabel}>
                                    <ListGroupItem className={`d-flex justify-content-between align-items-center ${selectedPayment === 'now' && "border-black border-1"}`}>
                                        Zapłać {((cAttr?.price * 5) + (cAttr?.price * 0.5) + (cAttr?.price * 0.8)).toFixed(2)} zł teraz
                                        <FormCheck
                                            type="radio"
                                            name="paymentType"
                                            value="now"
                                            checked={selectedPayment === 'now'}
                                            onChange={handlePaymentChange}
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem as={FormLabel} className={`${selectedPayment === 'half' && "border-black border-1"} mb-0`}>
                                        <span className="d-flex justify-content-between align-items-center">
                                            Zapłać część teraz, a pozostałą kwotę później
                                            <FormCheck
                                                type="radio"
                                                name="paymentType"
                                                value="half"
                                                checked={selectedPayment === 'half'}
                                                onChange={handlePaymentChange}
                                            />
                                        </span>
                                        <span className="fs-small">{(cAttr?.price * 3.5).toFixed(2)} zł płatne dzisiaj, {(cAttr?.price * 2.8).toFixed(2)} zł płatne 23 sie 2025. Bez dodatkowych opłat. Więcej informacji</span>
                                    </ListGroupItem>
                                    <ListGroupItem as={FormLabel} className={`${selectedPayment === 'klarna' && "border-black border-1"}`}>
                                        <span className="d-flex justify-content-between align-items-center">
                                            Zapłać później z Klarną
                                            <FormCheck
                                                type="radio"
                                                name="paymentType"
                                                value="klarna"
                                                checked={selectedPayment === 'klarna'}
                                                onChange={handlePaymentChange}
                                            />
                                        </span>
                                        <span className="fs-small">Wybierz elastyczną opcję płatności, która będzie odpowiednia dla Ciebie. Więcej informacji</span>
                                    </ListGroupItem>
                                </ListGroup>
                            </Form>
                        </div>
                        <hr />
                        <div className={`${!login.userLogin && "d-none"}`}>
                            <h4>Zaloguj się lub zarejestruj, aby zarezerwować ofertę</h4>
                            <ListGroup>
                                {/* <ListGroupItem as={Form.Select}>
                                    <option>Polska (+48)</option>
                                </ListGroupItem> */}
                                <ListGroupItem className="p-0">
                                    <FloatingLabel
                                        label="Kraj/region"
                                    >
                                        <Form.Select className="border-0">
                                            <option value="+48">Polska (+48)</option>
                                            <option value="+977">Nepal (+977)</option>
                                            <option value="+49">Niemcy (+49)</option>
                                            <option value="+227">Niger (+227)</option>
                                            <option value="+234">Nigeria (+234)</option>
                                            <option value="+505">Nikaragua (+505)</option>
                                            <option value="+683">Niue (+683)</option>
                                            <option value="+672">Norfolk (+672)</option>
                                            <option value="+47">Norwegia (+47)</option>
                                            <option value="+687">Nowa Kaledonia (+687)</option>
                                            <option value="+64">Nowa Zelandia (+64)</option>
                                            <option value="+968">Oman (+968)</option>
                                            <option value="+92">Pakistan (+92)</option>
                                            <option value="+680">Palau (+680)</option>
                                            <option value="+507">Panama (+507)</option>
                                            <option value="+675">Papua-Nowa Gwinea (+675)</option>
                                            <option value="+595">Paragwaj (+595)</option>
                                            <option value="+51">Peru (+51)</option>
                                            <option value="+64">Pitcairn (+64)</option>
                                            <option value="+689">Polinezja Francuska (+689)</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </ListGroupItem>
                                <ListGroupItem className="p-0">
                                    <FloatingLabel
                                        controlId="phoneNumber"
                                        label="Numer telefonu"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            className="border-0"
                                        ></Form.Control>
                                    </FloatingLabel>
                                </ListGroupItem>
                            </ListGroup>
                            <div className="fs-small"><small>Zadzwonimy lub wyślemy SMS-a, aby potwierdzić Twój numer. Obowiązują standardowe opłaty za wysyłanie wiadomości i transmisję danych. Polityka Prywatności</small></div>
                            <Button variant="danger" className="w-100 mt-3 fw-500" onClick={() => login.setUserLogin(!login.userLogin)}>Dalej</Button>
                            <div className="position-relative mt-4">
                                <hr />
                                <span className="position-absolute start-50 top-0 translate-middle bg-white rounded-circle p-2 fs-small">lub</span>
                            </div>
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <div className="border-1 rounded p-2 ms-0 m-2 mt-0 w-100 d-flex justify-content-center filter-option-button">
                                    <FaFacebook className="text-primary h5 m-0" />
                                </div>
                                <div className="border-1 rounded p-2 m-2 mt-0 w-100 d-flex justify-content-center filter-option-button">
                                    <GrGoogle className="text-danger h5 m-0" />
                                </div>
                                <div className="border-1 rounded p-2 me-0 m-2 mt-0 w-100 d-flex justify-content-center filter-option-button">
                                    <BsApple className="text-black h5 m-0" />
                                </div>
                            </div>
                            <div className="border-1 rounded p-2 ps-5 pe-5 mt-2 mb-5 d-flex align-items-center justify-content-center position-relative filter-option-button">
                                <MdOutlineEmail className="h5 m-0 position-absolute start-4" /> <small className="fw-500">Użyj adresu e-mail</small>
                            </div>
                        </div>
                        <div className={`${login.userLogin && "d-none"}`}>
                            <Button
                                variant="danger"
                                // onClick={() => setShowConfirmToast(true)}
                                onClick={() => setShowPayModal(true)}
                                className="fw-500 ps-4 pe-4"
                            >Potwierdź i zapłać</Button>
                            <div style={{height: '500px'}} />
                            to zrobione tylko po to aby stopka wygladala spoko
                        </div>
                    </Col>
                    <Col xs="6" className="ps-5 pe-5">
                        <Card className="p-2 book-card position-sticky top-15">
                            <Card.Body>
                                <Card.Title className="d-flex">
                                    <Card.Img src={`https://picsum.photos/id/${cAttr?.picture}/200`} className="w33" />
                                    <span className="p-3 fs-14">
                                        <p className="mb-1">{cAttr?.title} {cAttr?.country}</p>
                                        <p className="mb-1">{cAttr?.description}</p>
                                        <p className="mb-0 d-flex"><FaStar className="me-1" />{cAttr?.rating} ({cAttr?.reviews})</p>
                                    </span>
                                </Card.Title>
                                <hr />
                                <Card.Text>
                                    <h4 className="mb-3"> Co się składa na cenę</h4>
                                    <span className='d-flex justify-content-center'>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <p> {cAttr?.price} zł x 5 dni</p> <span> {cAttr?.price * 5} zł</span>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <OverlayTrigger trigger="click" placement="left" overlay={popoverCleaning}>
                                            <p className='text-decoration-underline'>Opłata za sprzątanie</p>
                                        </OverlayTrigger>
                                        <span> {cAttr?.price * 0.5} zł</span>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <OverlayTrigger trigger="click" placement="left" overlay={popoverService}>
                                            <p className='text-decoration-underline'>Opłata serwisowa Airbnb</p>
                                        </OverlayTrigger>
                                        <span> {(cAttr?.price * 0.8).toFixed()} zł</span>
                                    </span>
                                    <hr className="mt-1" />
                                    <span className='d-flex justify-content-between fw-500'>
                                        <span>Łącznie
                                            <OverlayTrigger trigger="click" placement="left" overlay={popoverPrice}>
                                                <span className='text-decoration-underline'>(PLN)</span>
                                            </OverlayTrigger>
                                        </span> <span> {((cAttr?.price * 5) + (cAttr?.price * 0.5) + (cAttr?.price * 0.8)).toFixed(2)}zł</span>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Toast
                onClose={() => setShowConfirmToast(false)}
                show={showConfirmToast}
                delay={10000}
                autohide
                className="position-absolute top-10 start-50 translate-middle-x"
            >
                <Toast.Header>
                    <strong className="me-auto">Dziękujemy za zakup!</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>Zamówienie zostało potwierdzone pomyślnie.
                <p className="mb-0 mt-1">Miłego pobytu w: </p>
                <p className="mb-0">{cAttr?.title} {cAttr?.country} {cAttr?.province}</p>
                <small>Więcej informacji znajdziesz na e-mail.</small>
                </Toast.Body>
            </Toast>
            <Modal show={showPayModal} onHide={() => setShowPayModal(false)}>
        <Modal.Header>
          <Modal.Title>Zapłać aby przejść dalej</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span className={`${selectedPayment === 'now' ? "" : "d-none"}`}>
                Koszt całkowity {(cAttr?.price * 6.3).toFixed(2)} zł
            </span>
            <span className={`${selectedPayment === 'half' ? "" : "d-none"}`}>
                Teraz płacisz {(cAttr?.price * 3.5).toFixed(2)} zł, a później {(cAttr?.price * 2.8).toFixed(2)} zł.
            </span>
            <span className={`${selectedPayment === 'klarna' ? "" : "d-none"}`}>
                Teraz nie płacisz! A później {(cAttr?.price * 6.4).toFixed(2)} zł.
            </span>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={paymentSuccesfull}>
            Zapłać
          </Button>
          <Button variant="danger" onClick={() => setShowPayModal(false)}>
            Anuluj
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}