import { Card, CardBody, CardGroup, CardImg } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function AttractionPhotoCarousel() {
    return (
        <>
            <p className='h4'>Gdzie będziesz spać</p>
            {/* <Carousel
                interval={null}
                prevIcon={null}
                nextIcon={null}
                indicators={false}
            >
                <Carousel.Item className='d-flex justify-content-between mb-0'>
                    <Card className='attraction-card border border-0 mt-3 mb-0'>
                        <CardImg src="https://picsum.photos/id/115/200" alt="elo" />
                        <CardBody className='ps-0 pb-0'>
                            <span className='fw-500 mt-2'>Salon</span>
                            <p className='m-0 fs-small'>1 sofa</p>
                        </CardBody>
                    </Card>
                    <Card className='attraction-card border border-0 mt-3 mb-0'>
                        <CardImg src='https://picsum.photos/id/225/200' alt='elo' />
                        <CardBody className='ps-0 pb-0'>
                            <span className='fw-500 mt-2'>Sypialnia 1</span>
                            <p className='m-0 fs-small'>1 podwójne łóżko</p>
                        </CardBody>
                    </Card>
                </Carousel.Item>
            </Carousel> */}
            <CardGroup className='d-flex justify-content-between mb-0'>
                <Card className='attraction-card border border-0 mt-3 mb-0'>
                    <CardImg src="https://picsum.photos/id/115/200" alt="elo" />
                    <CardBody className='ps-0 pb-0'>
                        <span className='fw-500 mt-2'>Salon</span>
                        <p className='m-0 fs-small'>1 sofa</p>
                    </CardBody>
                </Card>
                <Card className='attraction-card border border-0 mt-3 mb-0'>
                    <CardImg src='https://picsum.photos/id/225/200' alt='elo' />
                    <CardBody className='ps-0 pb-0'>
                        <span className='fw-500 mt-2'>Sypialnia 1</span>
                        <p className='m-0 fs-small'>1 podwójne łóżko</p>
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    );
}