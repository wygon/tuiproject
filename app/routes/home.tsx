import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import NavbarSearchbar from "~/components/Navbar/NavbarSearchbar";
import NavbarSearchbarSmall from "~/components/Navbar/NavbarSearchbarSmall";
import Footer from "~/components/Footer";
import RatingComponentSingle from "~/components/Attraction/AttractionRatingComponentSingle";
import { PiFlag } from "react-icons/pi";
import { MdCleaningServices, MdMap } from "react-icons/md";
import { FcApprove } from "react-icons/fc";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsChatDots, BsKey, BsTag } from "react-icons/bs";
import OpinionComponent from "~/components/Attraction/AttractionOpinionComponent";
import { Col, Row } from "react-bootstrap";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Row className="d-flex p-3 g-3">
    <Col sm={12} md={6} lg={6}>
      <OpinionComponent opinion={{ photo: <PiFlag />, name: "Ewelina", rating: (Math.random() * (5 - 1) + 1), content: "Bardzo polecam, piekne miejsce, idealne na spokojny wypoczynek. Pan Marcin fantastycznie zajmuje się swoimi gośćmi", date: "sierpien 2024" }} />
    </Col>
    <Col sm={12} md={6} lg={6}>
      <OpinionComponent opinion={{ photo: <PiFlag />, name: "Ewelina", rating: (Math.random() * (5 - 1) + 1), content: "Bardzo polecam, piekne miejsce, idealne na spokojny wypoczynek. Pan Marcin fantastycznie zajmuje się swoimi gośćmi", date: "sierpien 2024" }} />
    </Col>
    <Col sm={12} md={6} lg={6}>
      <OpinionComponent opinion={{ photo: <PiFlag />, name: "Ewelina", rating: (Math.random() * (5 - 1) + 1), content: "Bardzo polecam, piekne miejsce, idealne na spokojny wypoczynek. Pan Marcin fantastycznie zajmuje się swoimi gośćmi", date: "sierpien 2024" }} />
    </Col>
    <Col sm={12} md={6} lg={6}>
      <OpinionComponent opinion={{ photo: <PiFlag />, name: "Ewelina", rating: (Math.random() * (5 - 1) + 1), content: "Bardzo polecam, piekne miejsce, idealne na spokojny wypoczynek. Pan Marcin fantastycznie zajmuje się swoimi gośćmi", date: "sierpien 2024" }} />
    </Col>
    {/* <NavbarSearchbarSmall/> */}
    {/* <Footer />     */}
  </Row>
}
