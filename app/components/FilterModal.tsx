import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { IoLanguage } from "react-icons/io5";
import { Form } from 'react-bootstrap';
import { PiMinus, PiPlus, PiWashingMachine } from 'react-icons/pi';
import { TiThermometer, TiWiFi } from 'react-icons/ti';
import { BsArrowDown, BsKey, BsLightning } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { CiForkAndKnife } from 'react-icons/ci';
import { TbWashMachine } from 'react-icons/tb';
import { GiIceCube } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa6';
import { BiHomeAlt, BiHotel } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { ImHome } from 'react-icons/im';
import { RiHomeOfficeLine } from 'react-icons/ri';
import ImgTextPill from './ImgTextPill';

export default function FilterModal(props: any) {
    const [sleepingRoom, setSleepingRoom] = useState(0);
    const [beds, setBeds] = useState(0);
    const [bathRoom, setBathRoom] = useState(0);
    const languages = [
        "chiński",
        "angielski",
        "francuski",
        "niemiecki",
        "włoski",
        "japoński",
        "portugalski",
        "rosyjski",
        "hiszpański",
        "arabski",
        "kataloński",
        "chorwacki",
        "czeski",
        "duński",
        "niderlandzki",
        "fiński",
        "grecki",
        "hebrajski",
        "węgierski",
        "indonezyjski",
        "norweski",
        "polski",
        "szwedzki",
        "turecki",
        "afrykanerski",
        "albański",
        "ormiański",
        "azerski",
        "bośniacki",
        "bułgarski",
        "litewski",
        "rumuński",
        "serbski",
        "słowacki",
        "słoweński",
        "ukraiński",
        "język migowy"
    ];
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            scrollable
            className='filter-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className='fw-bold fs-14' style={{ paddingLeft: "215px" }}>Filtry</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <span className='fw-500'>Rodzaj Miejsca</span>
                    <div className='border border-1 rounded p-1 d-flex justify-content-between mt-3'>
                        <div className='filter-modal-option border border-1 rounded p-2'>Dowolny rodzaj</div>
                        <div className='filter-modal-option border border-1 rounded p-2'>Pokój</div>
                        <div className='filter-modal-option border border-1 rounded p-2'>Cały dom</div>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <span className='fw-500'>Pokoje i łóżka</span>
                    <div className='mt-3'>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <span>Sypialnie</span>
                            <div className='d-flex align-items-center'>
                                <span className={`p-2 border rounded-circle ${sleepingRoom < 1 && "opacity-50 pointer-events-none"}`} onClick={() => setSleepingRoom(sleepingRoom - 1)}><PiMinus /></span>
                                <span className={`ms-1 me-1 ${sleepingRoom > 0 && "ps-4 pe-4"}`}>{sleepingRoom < 1 ? "Dowolnie" : sleepingRoom + "+"}</span>
                                <span className={`p-2 border rounded-circle ${sleepingRoom > 8 && "opacity-50 pointer-events-none"}`} onClick={() => setSleepingRoom(sleepingRoom + 1)}><PiPlus /></span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <span>Łóżka</span>
                            <div className='d-flex align-items-center'>
                                <span className={`p-2 border rounded-circle ${beds < 1 && "opacity-50 pointer-events-none"}`} onClick={() => setBeds(beds - 1)}><PiMinus /></span>
                                <span className={`ms-1 me-1 ${beds > 0 && "ps-4 pe-4"}`}>{beds < 1 ? "Dowolnie" : beds + "+"}</span>
                                <span className={`p-2 border rounded-circle ${beds > 8 && "opacity-50 pointer-events-none"}`} onClick={() => setBeds(beds + 1)}><PiPlus /></span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <span>Sypialnie</span>
                            <div className='d-flex align-items-center'>
                                <span className={`p-2 border rounded-circle ${bathRoom < 1 && "opacity-50 pointer-events-none"}`} onClick={() => setBathRoom(bathRoom - 1)}><PiMinus /></span>
                                <span className={`ms-1 me-1 ${bathRoom > 0 && "ps-4 pe-4"}`}>{bathRoom < 1 ? "Dowolnie" : bathRoom + "+"}</span>
                                <span className={`p-2 border rounded-circle ${bathRoom > 8 && "opacity-50 pointer-events-none"}`} onClick={() => setBathRoom(bathRoom + 1)}><PiPlus /></span>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <span className='fw-500'>Udogodnienia</span>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-between'>
                            <ImgTextPill imgtextpill={{ icon: <TiWiFi size={24} />, content: "Wi-Fi" }} />
                            <ImgTextPill imgtextpill={{ icon: <CiForkAndKnife size={24} />, content: "Kuchnia" }} />
                            <ImgTextPill imgtextpill={{ icon: <TbWashMachine size={24} />, content: "Pralka" }} />
                            <ImgTextPill imgtextpill={{ icon: <PiWashingMachine size={24} />, content: "Suszarka" }} />
                        </div>
                        <div className='d-flex'>
                            <ImgTextPill imgtextpill={{ icon: <GiIceCube size={24} />, content: "Klimatyzacja" }} />
                            <ImgTextPill imgtextpill={{ icon: <TiThermometer size={24} />, content: "Ogrzewanie" }} />
                        </div>
                        <p className='mt-2 fw-500 text-decoration-underline d-flex align-items-center'>Pokaż więcej <IoIosArrowDown className='ms-2' /></p>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <span className='fw-500'>Opcje Rezerwacji</span>
                    <div className='m-2 ms-0 mt-3'>
                        <div className='w-50'>
                            <ImgTextPill imgtextpill={{ icon: <BsLightning size={24} />, content: "Rezerwacja natychmiastowa" }} />
                        </div>
                        <div className='d-flex'>
                            <ImgTextPill imgtextpill={{ icon: <BsKey size={24} />, content: "Samodzielne zameldowanie" }} />
                            <ImgTextPill imgtextpill={{ icon: <FaDog size={24} />, content: "Zwierzęta dozwolone" }} />
                        </div>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <span className='fw-500'>Rodzaj obiektu</span>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-start'>
                            <ImgTextPill imgtextpill={{ icon: <BiHomeAlt size={24} />, content: "Dom" }} />
                            <ImgTextPill imgtextpill={{ icon: <CiForkAndKnife size={24} />, content: "Mieszkanie" }} />
                            <ImgTextPill imgtextpill={{ icon: <RiHomeOfficeLine size={24} />, content: "Dom gościnny" }} />
                        </div>
                        <div className='d-flex w-30'>
                            <ImgTextPill imgtextpill={{ icon: <BiHotel size={24} />, content: "Hotel" }} />
                        </div>
                        <p className='mt-2 fw-500 text-decoration-underline d-flex align-items-center'>Pokaż więcej <IoIosArrowDown className='ms-2' /></p>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <span className='fw-500'>Ułatwienia dostępu</span>
                    <div className='mt-3'>
                        <Form>
                            <span className='fw-500 fs-14'>Wejście dla gości i parkingi</span>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                <span>Bezprogowe wejście</span>
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Miejsce parkingowe dla osób z niepełnosprawnościami
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Wejście dla gości ma ponad 80  cm szerokości
                            </Form.Label>
                        </Form>
                        <Form>
                            <span className='fw-500 fs-14'>Sypialnia</span>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Bezprogowe wejście do sypialni
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Wejście do sypialni ma ponad 80 cm szerokości
                            </Form.Label>
                        </Form>
                        <Form>
                            <span className='fw-500 fs-14'>Łazienka</span>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Bezprogowe wejście do łazienki
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Wejście do łazienki ma ponad 80 cm szerokości
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Uchwyt w toalecie
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Uchwyt pod prysznicem
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Prysznic bezprogowy
                            </Form.Label>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Krzesło do kąpieli w wannie lub pod prysznicem
                            </Form.Label>
                        </Form>
                        <Form>
                            <span className='fw-500 fs-14'>Ułatwienia dostępu</span>
                            <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                Podnośnik sufitowy lub przenośny
                            </Form.Label>
                        </Form>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <Form>
                        <span className='fw-500'>Język gospodarza</span>
                        <Row className='mt-3'>
                            {languages.map((lang) => (
                                <Col sm={6}>
                                    <Form.Label className='d-flex align-items-center p-1 ps-0'>
                                        <Form.Check style={{ transform: 'scale(1.5)' }} className='me-3 ms-1' />
                                        {lang}
                                    </Form.Label>
                                </Col>
                            ))}
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark'>Pokaż ponad XXX miejsc</Button>
            </Modal.Footer>
        </Modal>
    );
}