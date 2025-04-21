import 'bootstrap/dist/css/bootstrap.min.css';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Alert, AlertLink, Button, Card, CardBody, CardGroup, CardImg, Col, Dropdown, DropdownButton, DropdownToggle, Row, Spinner } from 'react-bootstrap';
import { FiShare } from "react-icons/fi";
import { PiBuildingApartment, PiFlag, PiHeartBold, PiIslandBold, PiMinus, PiPlus, PiSecurityCameraBold, PiSecurityCameraDuotone, PiWifiHigh } from 'react-icons/pi';
import { GiFeather, GiFeatherWound, GiLaurelCrown, GiNecklace } from "react-icons/gi";
import { IoIosArrowDropdown, IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useEffect, useState } from 'react';
import { BiShield, BiTrophy } from 'react-icons/bi';
import { MdCleaningServices, MdMap, MdOutlineFamilyRestroom, MdSecurityUpdateGood } from 'react-icons/md';
import { IoLocationSharp } from "react-icons/io5";
import AttractionPhotoCarousel from '~/components/Attraction/AttractionSingle/AttractionPhotoCarousel';
import { TbLuggage, TbToolsKitchen } from 'react-icons/tb';
import RatingComponentSingle from '~/components/Attraction/AttractionSingle/AttractionRatingComponentSingle';
import { BsChatDots, BsKey, BsTag } from 'react-icons/bs';
import OpinionComponent from '~/components/Attraction/AttractionSingle/AttractionOpinionComponent';
import { CgProfile } from 'react-icons/cg';
import { GoVerified } from 'react-icons/go';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router';
import { attractions } from '~/categories/attractions';
import type { AttractionCardType } from '~/types/attractiontype';
import RatingStars from '~/components/RatingStars';
import { ownersList } from '~/categories/owners';
import type { OwnerType } from '~/types/ownertype';

export default function () {
    const { id } = useParams();
    if(id != null) {var numberId = +id;}
    const [listing, setListing] = useState(0);
    const [loading, setLoading] = useState(true);
    const [cAttr, setCurrentAttraction] = useState<AttractionCardType | null>(null);
    const [guestNumber, increaseGNumber] = useState(1);
    const [kidsNumber, increaseKNumber] = useState(0);
    const [childrenNumber, increaseCNumber] = useState(0);
    const [petNumber, increasePNumber] = useState(0);
    const [refPictureVisible, pictureVisible] = useInView({ threshold: 0 })
    const [refReservation, reservationVisible] = useInView({ threshold: 0 })
    
    const [owner, setOwner] = useState<OwnerType | null>(null);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                // setLoading(true);
                const foundAttraction = attractions.find((attraction) => attraction.id === numberId);
                setCurrentAttraction(foundAttraction !== undefined ? foundAttraction : null);
                const foundOwner = ownersList.find((owner) => owner.id === foundAttraction?.ownerId);
                if(foundAttraction != null) {setListing(foundAttraction.id);}
                if(foundOwner != null) {setOwner(foundOwner);}
            }
            catch (error)
            {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchListing()
    }, [id]);

    const now = new Date(Date.now());
    const dateNow = now.toLocaleDateString();
    const date5 = new Date(now.getTime() + (5 * 24 * 60 * 60 * 1000));
    const date5Now = date5.toLocaleDateString();

    const cleaningFee = 300;

    if(loading) return <Spinner animation="border" variant='danger'> </Spinner>
    if(!listing) {return <div> Nie ma takiej oferty</div>}
    else return (
        <div className='attraction-container'>
            <div className="d-flex justify-content-between mb-3">
                <h3>{cAttr?.description}</h3>
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
            <div ref={refPictureVisible} className="attraction-photos d-flex gap-2 mb-4" id='photos'>
                <div className='photo-left'>
                    <img src={`https://picsum.photos/id/${cAttr?.picture}/800`} className='img-fluid w-100 blc tlc' />
                </div>
                <div className='photo-right'>
                    <div className='d-none d-lg-flex gap-2 mb-2 '>
                        <img src={`https://picsum.photos/id/${cAttr?.picture + 1}/200`} />
                        <img src={`https://picsum.photos/id/${cAttr?.picture + 2}/200`} className='trc' />
                    </div>
                    <div className='gap-2 d-none d-lg-flex'>
                        <img src={`https://picsum.photos/id/${cAttr?.picture - 1}/200`} />
                        <img src={`https://picsum.photos/id/${cAttr?.picture - 2}/200`} className='brc' />
                    </div>
                    <div className='d-flex d-lg-none gap-2 mb-2 h-100 w-50'>
                        <img src={`https://picsum.photos/id/${cAttr?.picture + 1}/400`} />
                        <img src={`https://picsum.photos/id/${cAttr?.picture + 2}/400`} className='trc brc' />
                    </div>
                </div>
            </div>

            <div className={`attraction-photo-nav position-sticky top-0 ${pictureVisible && 'd-none'}`}>
                <div className='fs-14 fw-500 d-flex align-items-center justify-content-between p-3'>
                    <div>
                        <a href='#photos'><span className='p-2'>Zdjęcia</span></a>
                        <a href='#facilities'><span className='p-2'>Udogodnienia</span></a>
                        <a href='#reviews'><span className='p-2'>Recenzje</span></a>
                        <a href='#location'><span className='p-2'>Lokalizacja</span></a>
                    </div>
                    <Row className={`${reservationVisible && 'd-none'} d-flex align-items-center`}>
                        <Col>
                            <span>{cAttr?.price} zł noc</span>
                            <p className='m-0 d-flex align-items-center' style={{ fontSize: "11px" }}><span className='d-flex align-items-center me-1'><IoIosStar style={{ fontSize: "10px" }} />{cAttr?.rating.toFixed(2)}</span> - <span className='option-description ms-1'>{cAttr?.reviews} recenzji</span></p>
                        </Col>
                        <Col>
                            <Button className={`bg-danger border border-0 fw-500 ps-4 pe-4 p-2`}>
                                <span>Rezerwuj</span>
                            </Button>
                        </Col>
                    </Row>
                </div>
                <hr className='mt-0' />
            </div>

            <Row>
                <Col md={7}>
                    <h4 className='mb-0'>Cały obiekt w: {cAttr?.title}, {cAttr?.country}</h4>
                    <p className='mb-4'>6 gości - 2 sypialnie - 3 łóżka - 1 łazienka</p>
                    <div className="opinion-bar bg-white border border-1 trc tlc brc blc mb-4">
                        <span className="rounded-pill p-2 w33"><GiLaurelCrown className='h1' /></span>
                        <div className="divider" />
                        <span className="rounded-pill p-2 w33">
                            <div>
                                <div className='d-flex align-items-center justify-content-center fs-14 fw-500'>{cAttr?.rating.toFixed(2)}</div>
                                <RatingStars rating={ cAttr?.rating } />
                            </div>
                        </span>
                        <div className="divider" />
                        <span className="rounded-pill p-2 w33">
                            <div>
                                <div className='d-flex align-items-center justify-content-center fs-14 fw-500'>{cAttr?.reviews}</div>
                                <div className='fs-small'>
                                    recenzje
                                </div>
                            </div>
                        </span>
                    </div>
                    <span className='d-flex align-items-center'>
                        <CgProfile className='h1' />
                        <span className='ps-3'>
                            <span className='fw-500'>Gospodarzem jest {owner?.name} </span>
                            <p className='option-description fs-small'>Superhost - Przyjmuje gości od {owner?.years} lat</p>
                        </span>
                    </span>
                    <hr />
                    <span className='d-flex align-items-center'>
                        <MdOutlineFamilyRestroom className='h3' />
                        <span className='ps-3'>
                            <span className='gw-500'>Doskonałe oceny od rodzin</span>
                            <p className='option-description fs-small'>100% rodzin, które zatrzymały się tu w ciągu ubiegłego roku, oceniło swój pobyt na 5 gwiazdek.</p>
                        </span>
                    </span>
                    <span className='d-flex align-items-center'>
                        <PiIslandBold className='h3' />
                        <span className='ps-3'>
                            <span className='gw-500'>1 min spacerem od jeziora</span>
                            <p className='option-description fs-small'>Ten dom jest w pobliżu jeziora Jezioro Zamkowe.</p>
                        </span>
                    </span>
                    <span className='d-flex align-items-center'>
                        <IoLocationSharp className="h3" />
                        <span className='ps-3'>
                            <span className='gw-500'>Cicha i spokojna okolica</span>
                            <p className='option-description fs-small'>Ten dom znajduje się w spokojnej okolicy.</p>
                        </span>
                    </span>
                    <hr />
                    <Alert variant='light' className='p-1 ps-3 pt-2 fs-14'>
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
                    {/* <AttractionPhotoCarousel /> */}
                    <p className='h4'>Gdzie będziesz spać</p>
                    <CardGroup className='d-flex justify-content-between mb-0'>
                        <Card className='attraction-card border border-0 mt-3 mb-0'>
                            <CardImg src={`https://picsum.photos/id/${cAttr?.picture + 1}/200`} alt="elo" />
                            <CardBody className='ps-0 pb-0'>
                                <span className='fw-500 mt-2'>Salon</span>
                                <p className='m-0 fs-small'>1 sofa</p>
                            </CardBody>
                        </Card>
                        <Card className='attraction-card border border-0 mt-3 mb-0'>
                            <CardImg src={`https://picsum.photos/id/${cAttr?.picture + 2}/200`} alt='elo' />
                            <CardBody className='ps-0 pb-0'>
                                <span className='fw-500 mt-2'>Sypialnia 1</span>
                                <p className='m-0 fs-small'>1 podwójne łóżko</p>
                            </CardBody>
                        </Card>
                    </CardGroup>
                    <hr className='mt-0 mb-4' />
                    <div id='facilities'>
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
                            style={{ border: "1px solid black" }}
                        >
                            Pokaż wszystkie udogodnienia ({Math.floor(Math.random() * 100)})
                        </Button>
                    </div>
                </Col>
                <Col md={5} className='pe-1'>
                    <div className='position-sticky top-10 pt-10'>
                        <div className=''>
                            <Card style={{ width: '100%', padding: "10px", maxWidth: "300px", marginLeft: "auto" }} className='bg-shadow'>
                                <Card.Title className='ps-3 pt-2'>
                                    {cAttr?.price} zł noc
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
                                        <Dropdown autoClose="outside" drop='down-centered' id='priceCard'>
                                            <DropdownToggle variant={"white"} className='w-100 border border-0 p-2 position-relative'>
                                                <span className='d-flex fs-small fw-500'>Goście</span>
                                                <p className='m-0 d-flex fs-small'>{guestNumber + kidsNumber} gość{childrenNumber > 0 && ", " + childrenNumber + " małe dzieci"}{petNumber > 0 && ", " + petNumber + " zwierzęta"}</p>
                                            </DropdownToggle>
                                            <Dropdown.Menu className='p-1 pt-2'>
                                                <Dropdown.Item className='d-flex justify-content-between'>
                                                    <span>
                                                        <p className='m-0 fw-500'>Dorośli</p>
                                                        <small>Od 13 lat</small>
                                                    </span>
                                                    <div className='d-flex align-items-center'>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${guestNumber < 2 && "disabled"}`} onClick={() => increaseGNumber(guestNumber - 1)}><PiMinus size={13} /></Button>
                                                        <span className='p-2 fw-500'>{guestNumber}</span>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${guestNumber + kidsNumber > 5 && "disabled"}`} onClick={() => increaseGNumber(guestNumber + 1)}><PiPlus size={13} /></Button>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='d-flex justify-content-between'>
                                                    <span>
                                                        <p className='m-0 fw-500'>Dzieci</p>
                                                        <small>Od 2 do 12 lat</small>
                                                    </span>
                                                    <div className='d-flex align-items-center'>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${kidsNumber < 1 && "disabled"}`} onClick={() => increaseKNumber(kidsNumber - 1)}><PiMinus size={13} /></Button>
                                                        <span className='p-2 fw-500'>{kidsNumber}</span>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${guestNumber + kidsNumber > 5 && "disabled"}`} onClick={() => increaseKNumber(kidsNumber + 1)}><PiPlus size={13} /></Button>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='d-flex justify-content-between'>
                                                    <span>
                                                        <p className='m-0 fw-500'>Małe dzieci</p>
                                                        <small>Poniżej 2 lat</small>
                                                    </span>
                                                    <div className='d-flex align-items-center'>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${childrenNumber < 1 && "disabled"}`} onClick={() => increaseCNumber(childrenNumber - 1)}><PiMinus size={13} /></Button>
                                                        <span className='p-2 fw-500'>{childrenNumber}</span>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${childrenNumber > 5 && "disabled"}`} onClick={() => increaseCNumber(childrenNumber + 1)}><PiPlus size={13} /></Button>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='d-flex justify-content-between'>
                                                    <span>
                                                        <p className='m-0 fw-500'>Zwierzęta</p>
                                                        <small className='text-wrap text-decoration-underline fw-500'>Przyjeżdżasz ze zwierzęciem przewodnikiem?</small>
                                                    </span>
                                                    <div className='d-flex align-items-center'>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${petNumber < 1 && "disabled"}`} onClick={() => increasePNumber(petNumber - 1)}><PiMinus size={13} /></Button>
                                                        <span className='p-2 fw-500'>{petNumber}</span>
                                                        <Button variant='white' className={`p-2 border rounded-circle ${petNumber > 3 && "disabled"}`} onClick={() => increasePNumber(petNumber + 1)}><PiPlus size={13} /></Button>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='lh-1'>
                                                    <small className='text-wrap option-description'>W tym miejscu przebywać może maksymalnie 6 gości, nie wliczając małych dzieci. Jeśli przyjeżdżasz z więcej niż 2 zwierzętami, poinformuj o tym gospodarza.</small>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Button className='close-btn border-0 text-decoration-underline fw-500' variant='white'>
                                                        <small>Zamknij</small>
                                                    </Button>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <Button ref={refReservation} className='w-100 bg-danger border border-0 p-2 fw-500'>
                                        <span>Rezerwuj</span>
                                    </Button>
                                    <span className='d-flex justify-content-center'>
                                        <p className='fs-small mt-2'>Płatność nie zostanie jeszcze naliczona</p>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <p className='text-decoration-underline'>{cAttr?.price} zł x 5 dni</p> <span>{cAttr?.price * 5} zł</span>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <p className='text-decoration-underline'>Opłata za sprzątanie</p> <span>{cleaningFee} zł</span>
                                    </span>
                                    <span className='d-flex justify-content-between fs-14'>
                                        <p className='text-decoration-underline'>Opłata serwisowa Airbnb</p> <span>{(cAttr?.price * 0.8).toFixed()} zł</span>
                                    </span>
                                    <hr />
                                    <span className='d-flex justify-content-between fw-500'>
                                        <span>Łącznie</span> <span>{((cAttr?.price * 5) + cleaningFee + (cAttr?.price * 0.8)).toFixed()} zł</span>
                                    </span>
                                </Card.Body>
                            </Card>
                            <div style={{ width: '100%', padding: "10px", maxWidth: "300px", marginLeft: "auto" }} className='d-flex justify-content-center align-items-center'><PiFlag /> <span className='text-decoration-underline ms-1'>Zgłoś tą ofertę</span></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <div id='reviews'>
                {/* <h1>Opinie</h1> */}
                <div className='d-flex align-items-center justify-content-center rating-big fw-500'>
                    <GiFeatherWound />{cAttr?.rating.toFixed(2)}<GiFeather />
                </div>
                <div className='d-flex justify-content-center'>
                    <span className='fw-500 fs-4'>Wybór gości</span>
                </div>
                <p className='fs-14 option-description'>
                    <p className='d-flex justify-content-center m-0 mt-1'>Ten dom jest często wybierany przez gości</p>
                    <p className='d-flex justify-content-center m-0'> ze względu na dobre oceny, recenzje</p>
                    <p className='d-flex justify-content-center m-0 mb-4'>i wiarygodność gospodarza</p>
                </p>
                {/* <Row> */}
                <Row className="d-flex justify-content-center p-2">
                    <RatingComponentSingle rating={{ name: "Czystość", rate: (cAttr?.rating - 0.4).toFixed(2), icon: <MdCleaningServices /> }} />
                    {/* <div className="divider-big"></div> */}
                    <RatingComponentSingle rating={{ name: "Zgodność z Opisem", rate: (cAttr?.rating - 0.2).toFixed(2), icon: <IoIosArrowDropdown /> }} />
                    {/* <div className="divider-big"></div> */}
                    <RatingComponentSingle rating={{ name: "Zameldowanie", rate: (cAttr?.rating + 0.9).toFixed(2), icon: <BsKey /> }} />
                    {/* <div className="divider-big"></div> */}
                    <RatingComponentSingle rating={{ name: "Komunikacja", rate: (cAttr?.rating - 0.7).toFixed(2), icon: <BsChatDots /> }} />
                    {/* <div className="divider-big"></div> */}
                    <RatingComponentSingle rating={{ name: "Lokalizacja", rate: (cAttr?.rating - 1.3).toFixed(2), icon: <MdMap /> }} />
                    {/* <div className="divider-big"></div> */}
                    <RatingComponentSingle rating={{ name: "Wartość/Cena", rate: (cAttr?.rating + 1.1).toFixed(2), icon: <BsTag /> }} />
                </Row>
            </div>
            <hr />
            <Row className="d-flex g-4 mb-5">
                <Col sm={12} md={6} lg={6}>
                    <OpinionComponent opinion={{ photo: <CgProfile className="bg-warning border rounded-circle" />, name: "Ewelina", rating: (cAttr?.rating), content: "Bardzo polecam, piekne miejsce, idealne na spokojny wypoczynek. Pan Marcin fantastycznie zajmuje się swoimi gośćmi", date: "sierpien 2024", exp: Math.random() * (4 - 1) + 1 }} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <OpinionComponent opinion={{ photo: <CgProfile className="bg-success border rounded-circle" />, name: "Marcin", rating: (cAttr?.rating + 1.7), content: "Byłem całkowicie zadowolony z zakwaterowania, było tam wszystko, czego możesz potrzebować. Miłe miejsce na relaks i zejście na dół.", date: "lipiec 2024", exp: Math.random() * (4 - 1) + 1 }} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <OpinionComponent opinion={{ photo: <CgProfile className="bg-primary border rounded-circle" />, name: "Sven", rating: (cAttr?.rating + 2.1), content: "Bardzo przyjazny i pomocny gospodarz, zajął się i natychmiast usunął pytania lub problemy.Dom jest idealny na kilka dni do odłączenia.", date: "grudzien 2024", exp: Math.random() * (4 - 1) + 1 }} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <OpinionComponent opinion={{ photo: <CgProfile className="bg-secondary border rounded-circle" />, name: "Grzegorz", rating: (cAttr?.rating - 0.4), content: "Bardzo przyjemne miejsce, zapewniające intymność, miły i kooperujący gospodarz. Idealne miejsce, gdy ktoś potrzebuje ciszy i relaksu", date: "luty 2025", exp: Math.random() * (4 - 1) + 1 }} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <OpinionComponent opinion={{ photo: <CgProfile className="bg-light border rounded-circle" />, name: "Dustin", rating: (cAttr?.rating - 1.1), content: "Przepiękne i warte polecenia miejsce. Marcin jest fantastycznym gospodarzem, sam domek jest nowoczesny i bardzo funkcjonalny.", date: "lipiec 2023", exp: Math.random() * (4 - 1) + 1 }} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <OpinionComponent opinion={{ photo: <CgProfile className="bg-info border rounded-circle" />, name: "Krzysztof", rating: (cAttr?.rating - 1.9), content: "Mieliśmy najlepszy tydzień w pięknej lokalizacji. Wszystko jest dostępne na łodzi mieszkalnej. Marcin jest dobrym gospodarzem, bardzo pomocnym. ", date: "czerwiec 2024", exp: Math.random() * (4 - 1) + 1 }} />
                </Col>
                <Col sm={4}>
                    <Button
                        variant={'light'}
                        className='p-2 fw-500 fs-14 mt-3'
                        style={{ border: "1px solid black" }}
                    >
                        Pokaż wszystkie udogodnienia ({Math.floor(Math.random() * 100)})
                    </Button>
                </Col>
            </Row>
            <hr />
            <div id="location">
                <h4 className='mt-5 mb-4'>Gdzie się zatrzymasz</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.7599215165983!2d20.686847976899063!3d49.60032934820832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de527c4c967d1%3A0x4656f90ca24683d9!2sWy%C5%BCsza%20Szko%C5%82a%20Biznesu%20-%20National%20Louis%20University!5e1!3m2!1spl!2spl!4v1745092944967!5m2!1spl!2spl"
                    style={{ border: "0", width: "100%", height: "450px" }} className='border curved-mid' loading="lazy">
                </iframe>
                <span>
                    <p className='mt-4 mb-2 fs-14 fw-500'>{cAttr?.title}, {cAttr?.province}, {cAttr?.country}</p>
                    <span className='fs-14'>
                        Luksusowy dom na wodzie nad jeziorem zamkowym w sąsiedztwie lasu i prywatnym terenem zamkniętym o powierzchni 0,5 ha we wsi Cymbark. Nowy dom o powierzchni 28 m2 urządzony w stylu nowoczesnym. Oferuję salon z aneksem kuchennym i jadalnią, 2 sypialnie , 1 łazienkę, 2 tarasy, plażę, pomost 40 m2, rowery,supy, kajaki. Na terenie posesji przepiękna grillownia załączona na...
                    </span>
                    <p className='mt-2 fw-500 text-decoration-underline'>Pokaż więcej &gt;</p>
                </span>
            </div>
            <hr className='mt-5 mb-5' />
            <Row>
                <h4>Poznaj swojego gospodarza</h4>
                <Col sm={5}>
                    <Row className='mt-3 curved-small g-0 bg-shadow p-3'>
                        <Col sm={7} className='d-flex justify-content-center align-items-center'>
                            <div>
                                <div className='position-relative'>
                                    <CgProfile style={{ fontSize: "100px" }} className='bg-light border rounded-circle' />
                                    <GoVerified className='position-absolute right-0 bottom-0 border rounded-circle bg-danger h3 text-white bg-shadow p-1' />
                                </div>
                                <p className='d-flex justify-content-center m-0 h3'>{owner?.name}</p>
                                <p className='d-flex justify-content-center align-items-center m-0 fs-small fw-500'><BiTrophy className='me-1' /> Superhost</p>
                            </div>
                        </Col>
                        <Col sm={5} className='fw-500 h5 m-0'>
                            <div className='p-2'>
                                <span>
                                    {(owner?.years*3.4).toFixed()}
                                    <p style={{ fontSize: "10px" }}>Recenzje</p>
                                </span>
                                <hr className='m-0' />
                                <span>
                                    <span className='d-flex align-items-center'>
                                        {owner?.rating}
                                        <IoIosStar className='fs-14' />
                                    </span>
                                    <p style={{ fontSize: "10px" }}>Ocena</p>
                                </span>
                                <hr className='m-0' />
                                <span>
                                    {owner?.years}
                                    <p style={{ fontSize: "10px" }}>Lata na rynku</p>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-4'>
                        <span className='d-flex align-items-center pb-2'>
                            <GiNecklace style={{ fontSize: "30px" }} />
                            <span className='ps-2'>Data Urodzenia: lata 80.</span>
                        </span>
                        <span className='d-flex align-items-center pb-2'>
                            <TbLuggage style={{ fontSize: "30px" }} />
                            <span className='ps-2'>Moja praca: Firma własna</span>
                        </span>
                        <span className='d-flex align-items-center'>
                            <PiBuildingApartment style={{ fontSize: "30px" }} />
                            <span className='ps-2'>Firma</span>
                        </span>
                        <p className='mt-2 fw-500 text-decoration-underline'>Pokaż więcej &gt;</p>
                    </div>
                </Col>
                <Col sm={7}>
                    <div className='p-2'>
                        <span>
                            <span className='fw-500'>{owner?.name} to Superhost</span>
                            <p className='fs-14 mt-1 mb-4'>Gospodarze Superhost to wysoko oceniani gospodarze, którzy dokładają wszelkich starań, by zapewnić gościom niezapomniane wrażenia.</p>
                        </span>
                        <span>
                            <span className='fw-500'>Informacje o gospodarzu</span>
                            <p className='fs-14 mt-1 mb-0'>Wskaźnik aktywności: 100%</p>
                            <p className='fs-14'>Odpowiada w ciągu godziny</p>
                        </span>
                        <Button
                            variant={'dark'}
                            className='fw-500 fs-14 mt-3 mb-4'
                            style={{ padding: "10px" }}
                        >
                            Napisz do gospodarza
                        </Button>
                        <p className='text-decoration-underline fs-14 mb-4'>Ta oferta została wystawiona przez firmę. Dowiedz się więcej</p>
                        <hr />
                        <div className='d-flex align-items-center'>
                            <BiShield style={{ fontSize: "40px" }} />
                            <span style={{ fontSize: "11px", paddingLeft: "7px" }}>Aby Twoje płatności były bezpieczne, zawsze do wysyłania pieniędzy i komunikacji z gospodarzami korzystaj z platformy Airbnb.</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
