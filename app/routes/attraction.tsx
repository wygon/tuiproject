import 'bootstrap/dist/css/bootstrap.min.css';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Alert, AlertLink, Button, Card, Col, Row } from 'react-bootstrap';
import { FiShare } from "react-icons/fi";
import { PiFlag, PiHeartBold, PiIslandBold, PiMinus, PiPlus, PiSecurityCameraBold, PiSecurityCameraDuotone, PiWifiHigh } from 'react-icons/pi';
import { GiFeather, GiFeatherWound, GiLaurelCrown } from "react-icons/gi";
import { IoIosArrowDropdown, IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useState } from 'react';
import { BiLogo99Designs } from 'react-icons/bi';
import { MdCleaningServices, MdMap, MdOutlineFamilyRestroom, MdSecurityUpdateGood } from 'react-icons/md';
import { IoLocationSharp } from "react-icons/io5";
import AttractionPhotoCarousel from '~/components/Attraction/AttractionPhotoCarousel';
import { TbToolsKitchen } from 'react-icons/tb';
import RatingComponentSingle from '~/components/Attraction/AttractionRatingComponentSingle';
import { BsChatDots, BsKey, BsTag } from 'react-icons/bs';

export default function () {
    const [ddGuest, setDdGuest] = useState(false);
    const [guestNumber, increaseGNumber] = useState(1);
    const [kidsNumber, increaseKNumber] = useState(0);
    const [childrenNumber, increaseCNumber] = useState(0);
    const [petNumber, increasePNumber] = useState(0);
    const price = 900;
    const cleaningFee = 300;
    const now = new Date(Date.now());
    const dateNow = now.toLocaleDateString();
    const date5 = new Date(now.getTime() + (5 * 24 * 60 * 60 * 1000));
    const date5Now = date5.toLocaleDateString();
    const rating = (Math.random() * 5);
    let rand = Math.floor(Math.random() * 600);
    const title = "Nasum";
    const country = "Szwecja";
    const province = "Małopolskie";
    return (
        <div className='attraction-container'>
            <div className="d-flex justify-content-between mb-3">
                <h3>Przytulny domek na wodzie 6 osób</h3>
                <span className="d-flex align-items-center fw-500">
                    <span className='language-item round-10 d-flex justify-content-between align-items-center p-1 me-2 text-decoration-underline'>
                        <span className='pe-2'><FiShare /></span>
                        <span>Udostepnij</span>
                    </span>
                    <span className='language-item round-10 d-flex justify-content-between align-items-center p-1 text-decoration-underline'>
                        <span className='pe-2'><PiHeartBold /></span>
                        <span>Zapisz</span>
                    </span>
                </span>
            </div>
            <div className="attraction-photos d-flex gap-2 mb-4">
                <div className='photo-left'>
                    <img src={`https://picsum.photos/id/${rand}/800`} className='img-fluid w-100 blc tlc' />
                </div>
                <div className='photo-right'>
                    <div className='d-none d-lg-flex gap-2 mb-2 '>
                        <img src={`https://picsum.photos/id/${rand + 5}/200`} />
                        <img src={`https://picsum.photos/id/${rand + 7}/200`} className='trc' />
                    </div>
                    <div className='gap-2 d-none d-lg-flex'>
                        <img src={`https://picsum.photos/id/${rand - 5}/200`} />
                        <img src={`https://picsum.photos/id/${rand - 7}/200`} className='brc' />
                    </div>
                    <div className='d-flex d-lg-none gap-2 mb-2 h-100 w-50'>
                    <img src={`https://picsum.photos/id/${rand + 5}/400`} />
                    <img src={`https://picsum.photos/id/${rand + 7}/400`} className='trc brc' />
                    </div>
                </div>
            </div>
            <Row>
                <Col md={7}>
                    <h4 className='mb-0'>Cały obiekt - dom w: {title}, {country}</h4>
                    <p className='mb-4'>6 gości - 2 sypialnie - 3 łóżka - 1 łazienka</p>
                    <div className="opinion-bar bg-white border border-1 trc tlc brc blc mb-4">
                        <span className="rounded-pill p-2 w33"><GiLaurelCrown className='h1' /></span>
                        <div className="divider" />
                        <span className="rounded-pill p-2 w33">
                            <div>
                                <div className='d-flex align-items-center justify-content-center fs-14 fw-500'>{rating.toFixed(2)}</div>
                                <div className='d-flex align-items-center'>
                                    {rating > 0.5 ? (rating > 1 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                                    {rating > 1.5 ? (rating > 2 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                                    {rating > 2.5 ? (rating > 3 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                                    {rating > 3.5 ? (rating > 4 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                                    {rating > 4.5 ? (rating > 5 ? (<IoIosStar style={{ fontSize: "10px" }} />) : (<IoIosStarHalf style={{ fontSize: "10px" }} />)) : ( <IoIosStarOutline style={{ fontSize: "10px" }}/>)}
                                </div>
                            </div>
                        </span>
                        <div className="divider" />
                        <span className="rounded-pill p-2 w33">
                            <div>
                                <div className='d-flex align-items-center justify-content-center fs-14 fw-500'>{(rating * 2).toFixed(2)}</div>
                                <div className='fs-small'>
                                    recenzje
                                </div>
                            </div>
                        </span>
                    </div>
                    <span className='d-flex align-items-center'>
                        <BiLogo99Designs className='h1' />
                        <span className='ps-3'>
                            <span className='fw-500'>Gospodarzem jest name </span>
                            <p className='option-description fs-small'>Superhost - Przyjmuje gości od X lat</p>
                        </span>
                    </span>
                    <hr />
                    <span className='d-flex align-items-center'>
                        <MdOutlineFamilyRestroom className='h3'/>
                        <span className='ps-3'>
                            <span className='gw-500'>Doskonałe oceny od rodzin</span>
                            <p className='option-description fs-small'>100% rodzin, które zatrzymały się tu w ciągu ubiegłego roku, oceniło swój pobyt na 5 gwiazdek.</p>
                        </span>
                    </span>
                    <span className='d-flex align-items-center'>
                        <PiIslandBold className='h3'/>
                        <span className='ps-3'>
                            <span className='gw-500'>1 min spacerem od jeziora</span>
                            <p className='option-description fs-small'>Ten dom jest w pobliżu jeziora Jezioro Zamkowe.</p>
                        </span>
                    </span>
                    <span className='d-flex align-items-center'>
                        <IoLocationSharp className="h"/>
                        <span className='ps-3'>
                            <span className='gw-500'>Cicha i spokojna okolica</span>
                            <p className='option-description fs-small'>Ten dom znajduje się w spokojnej okolicy.</p>
                        </span>
                    </span>
                    <hr />
                    <Alert variant='secondary' className='p-1 ps-3 pt-2 fs-14'>
                        Niektóre informacje zostały przetłumaczone automatycznie.
                        <AlertLink>
                            <p>Pokaż oryginał</p>
                        </AlertLink>
                    </Alert>
                    <div className='pb-2'>
                        <span className='fs-small'>
                        Luksusowy dom na wodzie nad jeziorem zamkowym dla 6 osob w sąsiedztwie lasu i prywatnym terenem zamkniętym o powierzchni 0,5 ha we wsi Cymbark. Nowy dom o powierzchni 28 m2 urządzony w stylu nowoczesnym. Oferuję salon z aneksem kuchennym i jadalnią, 2 sypialnie , 1 łazienkę, 2 tarasy, plażę, pomost 40 m2, rowery, supy, kajaki. Na terenie posesji przepiękna grillownia załączona na fotografiach. Teren całkowicie... 
                        </span>
                        <p className='mt-2 fw-500 text-decoration-underline'>Pokaż więcej &gt;</p>
                    </div>
                    <hr />
                    {/* <Calendar /> */}
                    <AttractionPhotoCarousel />
                    <hr className='mt-0 mb-4'/>
                    <div>
                        <h4 className='mb-3'>Co znajdziesz w tym miejscu</h4>
                        <span>
                        <p className='d-flex align items-center mb-2'><PiIslandBold /> <span className='ms-3'>Widok na jeziorko</span></p>
                        <p className='d-flex align items-center mb-2'><PiFlag /> <span className='ms-3'>Widok na Przystań</span></p>
                        <p className='d-flex align items-center mb-2'><TbToolsKitchen /> <span className='ms-3'>Kuchnia</span></p>
                        <p className='d-flex align items-center mb-2'><PiWifiHigh /> <span className='ms-3'>Wifi</span></p>
                        <p className='d-flex align items-center mb-2'><PiSecurityCameraBold /> <span className='ms-3 text-decoration-line-through'>Czujnik czadu</span></p>
                        <p className='d-flex align items-center mb-2'><MdSecurityUpdateGood /> <span className='ms-3 text-decoration-line-through'>Czujnik dymu</span></p>
                        </span>
                        <Button 
                        variant={'light'}
                        className='p-2 fw-500 fs-14 mt-3'
                        style={{border: "1px solid black"}}
                        >
                            Pokaż wszystkie udogodnienia ({Math.floor(Math.random() * 100)})
                        </Button>
                    </div>
                </Col>
                <Col md={5}>
                    <div className='position-sticky top-10'>
                        <div className='position-relative'>
                            <Card style={{ width: '100%', padding: "10px", maxWidth: "300px", margin: "auto" }} className='bg-shadow'>
                                <Card.Title className='ps-3 pt-2'>
                                    {price} zł noc
                                </Card.Title>
                                <Card.Body>
                                    <div className='border border-1 border-dark trc tlc brc blc mb-3' style={{ fontSize: "12px", fontWeight: "500" }}>
                                        <div className='d-flex justify-content-center'>
                                            <div className="p-2 w-100" style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>
                                                <span>Zameldowanie</span>
                                                <p className='m-0'>{dateNow}</p>
                                            </div>
                                            <div className="p-2 w-100" style={{ borderBottom: "1px solid black" }}>
                                                <span>Wymeldowanie</span>
                                                <p className='m-0'>{date5Now}</p>
                                            </div>
                                        </div>
                                        {/* <div className="p-2 w-100 position-relative" onClick={() => setDdGuest(!ddGuest)}> */}
                                        <div className="p-2 w-100 position-relative" onClick={() => setDdGuest(true)} onBlur={() => setDdGuest(false)}>
                                            <span>Goście</span>
                                            <p className='m-0'>{guestNumber + kidsNumber} gość{childrenNumber > 0 && ", " + childrenNumber + " małe dzieci"} {petNumber > 0 && ", " + petNumber + " zwierzęta"}</p>
                                            {!ddGuest ? (
                                                <RiArrowDropDownLine className='position-absolute top-2 end-0 h1' />
                                            ) : (
                                                <RiArrowDropUpLine className='position-absolute top-2 end-0 h1' />
                                            )}
                                            <div className={`dropdown-menu position-absolute top-15 ${ddGuest && "show"}`}>
                                                <span className="dropdown-item d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <p className='m-0 fw-500'>Dorośli</p>
                                                        Od 13 lat
                                                    </span>
                                                    <div className='d-flex'>
                                                        <span className={`p-2 border rounded-circle ${guestNumber < 2 && "opacity-20 pointer-events-none"}`} onClick={() => increaseGNumber(guestNumber - 1)}><PiMinus /></span>
                                                        <span className='p-1 fw-500'>{guestNumber}</span>
                                                        <span className={`p-2 border rounded-circle ${guestNumber + kidsNumber > 5 && "opacity-50 pointer-events-none"}`} onClick={() => increaseGNumber(guestNumber + 1)}><PiPlus /></span>
                                                    </div>
                                                </span>
                                                <span className="dropdown-item d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <p className='m-0 fw-500'>Dzieci</p>
                                                        Od 2 do 12 lat
                                                    </span>
                                                    <div className='d-flex'>
                                                        <span className={`p-2 border rounded-circle ${kidsNumber < 1 && "opacity-50 pointer-events-none"}`} onClick={() => increaseKNumber(kidsNumber - 1)}><PiMinus /></span>
                                                        <span className='p-1 fw-500'>{kidsNumber}</span>
                                                        <span className={`p-2 border rounded-circle ${kidsNumber + guestNumber > 5 && "opacity-50 pointer-events-none"}`} onClick={() => increaseKNumber(kidsNumber + 1)}><PiPlus /></span>
                                                    </div>
                                                </span>
                                                <span className="dropdown-item d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <p className='m-0 fw-500'>Małe dzieci</p>
                                                        Poniżej 2 lat
                                                    </span>
                                                    <div className='d-flex'>
                                                        <span className={`p-2 border rounded-circle ${childrenNumber < 1 && "opacity-50 pointer-events-none"}`} onClick={() => increaseCNumber(childrenNumber - 1)}><PiMinus /></span>
                                                        <span className='p-1 fw-500'>{childrenNumber}</span>
                                                        <span className={`p-2 border rounded-circle ${childrenNumber > 5 && "opacity-50 pointer-events-none"}`} onClick={() => increaseCNumber(childrenNumber + 1)}><PiPlus /></span>
                                                    </div>
                                                </span>
                                                <span className="dropdown-item d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <p className='m-0 fw-500'>Zwierzęta</p>
                                                        Przyjeżdżasz ze zwierzęciem przewodnikiem?
                                                    </span>
                                                    <div className='d-flex'>
                                                        <span className={`p-2 border rounded-circle ${petNumber < 1 && "opacity-50 pointer-events-none"}`} onClick={() => increasePNumber(petNumber - 1)}><PiMinus /></span>
                                                        <span className='p-1 fw-500'>{petNumber}</span>
                                                        <span className={`p-2 border rounded-circle ${petNumber > 3 && "opacity-50 pointer-events-none"}`} onClick={() => increasePNumber(petNumber + 1)}><PiPlus /></span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className='w-100 bg-danger border border-0 p-2 fw-500'>
                                        <span>Rezerwuj</span>
                                    </Button>
                                    <span className='d-flex justify-content-center'>
                                        <p className='fs-small'>Płatność nie zostanie jeszcze naliczona</p>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <p className='text-decoration-underline'>{price} zł x 5 dni</p> <span>{price * 5} zł</span>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <p className='text-decoration-underline'>Opłata za sprzątanie</p> <span>{cleaningFee} zł</span>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <p className='text-decoration-underline'>Opłata serwisowa Airbnb</p> <span>{price * 0.8} zł</span>
                                    </span>
                                    <hr />
                                    <span className='d-flex justify-content-between fw-500'>
                                        <span>Łącznie</span> <span>{(price * 5) + cleaningFee + (price * 0.8)} zł</span>
                                    </span>
                                </Card.Body>
                            </Card>
                            <span className='d-flex justify-content-center align-items-center gap-2'><PiFlag /> Zgłoś tą ofertę </span>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <div>
                {/* <h1>Opinie</h1> */}
                <div className='d-flex align-items-center justify-content-center rating-big fw-500'>
                    <GiFeatherWound />{rating.toFixed(2)}<GiFeather />
                </div>
                <div className='d-flex justify-content-center'>
                    <span className='fw-500 fs-4'>Wybór gości</span>
                </div>
                    <p className='fs-14 option-description'>
                        <p className='d-flex justify-content-center m-0 mt-1'>Ten dom jest często wybierany przez gości</p>
                        <p className='d-flex justify-content-center m-0'> ze względu na dobre oceny, recenzje</p>
                        <p className='d-flex justify-content-center m-0 mb-4'>i wiarygodność gospodarza</p>
                        </p>
                <div className="d-flex justify-content-center p-2">
                    <RatingComponentSingle rating={{name: "Czystość", rate: (Math.random() * (5 - 3) + 3).toFixed(2), icon: <MdCleaningServices />}}/>
                    <div className="divider-big"></div>
                    <RatingComponentSingle rating={{name: "Zgodność z Opisem", rate: (Math.random() * (5 - 3) + 3).toFixed(2), icon: <IoIosArrowDropdown />}}/>
                    <div className="divider-big"></div>
                    <RatingComponentSingle rating={{name: "Zameldowanie", rate: (Math.random() * (5 - 3) + 3).toFixed(2), icon: <BsKey />}}/>
                    <div className="divider-big"></div>
                    <RatingComponentSingle rating={{name: "Komunikacja", rate: (Math.random() * (5 - 3) + 3).toFixed(2), icon: <BsChatDots />}}/>
                    <div className="divider-big"></div>
                    <RatingComponentSingle rating={{name: "Lokalizacja", rate: (Math.random() * (5 - 3) + 3).toFixed(2), icon: <MdMap />}}/>
                    <div className="divider-big"></div>
                    <RatingComponentSingle rating={{name: "Wartość/Cena", rate: (Math.random() * (5 - 3) + 3).toFixed(2), icon: <BsTag />}}/>
                </div>
            </div>
            <hr />
            <div>
            <h4 className='mt-4 mb-4'>Gdzie się zatrzymasz</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.7599215165983!2d20.686847976899063!3d49.60032934820832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de527c4c967d1%3A0x4656f90ca24683d9!2sWy%C5%BCsza%20Szko%C5%82a%20Biznesu%20-%20National%20Louis%20University!5e1!3m2!1spl!2spl!4v1745092944967!5m2!1spl!2spl" 
             style={{border: "0", width: "100%", height: "400px"}} className='border curved-mid' loading="lazy">
             </iframe>
             <span>
                <p className='mt-4 mb-2 fs-14 fw-500'>{title}, {province}, {country}</p>
                <span className='fs-14'>
                Luksusowy dom na wodzie nad jeziorem zamkowym w sąsiedztwie lasu i prywatnym terenem zamkniętym o powierzchni 0,5 ha we wsi Cymbark. Nowy dom o powierzchni 28 m2 urządzony w stylu nowoczesnym. Oferuję salon z aneksem kuchennym i jadalnią, 2 sypialnie , 1 łazienkę, 2 tarasy, plażę, pomost 40 m2, rowery,supy, kajaki. Na terenie posesji przepiękna grillownia załączona na...
                </span>
                <p className='mt-2 fw-500 text-decoration-underline'>Pokaż więcej &gt;</p>
             </span>
            </div>
        </div>
    );
}
