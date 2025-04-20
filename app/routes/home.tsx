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
import { CgProfile } from "react-icons/cg";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return 
  // <Row className="d-flex p-3 g-5">
  //   <Col sm={12} md={6} lg={6}>
  //     <OpinionComponent opinion={{ photo: <CgProfile className="bg-warning border rounded-circle" />, name: "Ewelina", rating: (Math.random() * (5 - 1) + 1), content: "Bardzo polecam, piekne miejsce, idealne na spokojny wypoczynek. Pan Marcin fantastycznie zajmuje się swoimi gośćmi", date: "sierpien 2024" }} />
  //   </Col>
  //   <Col sm={12} md={6} lg={6}>
  //     <OpinionComponent opinion={{ photo: <CgProfile className="bg-success border rounded-circle" />, name: "Marcin", rating: (Math.random() * (5 - 1) + 1), content: "Byłem całkowicie zadowolony z zakwaterowania, było tam wszystko, czego możesz potrzebować. Miłe miejsce na relaks i zejście na dół.", date: "lipiec 2024" }} />
  //   </Col>
  //   <Col sm={12} md={6} lg={6}>
  //     <OpinionComponent opinion={{ photo: <CgProfile className="bg-primary border rounded-circle" />, name: "Sven", rating: (Math.random() * (5 - 1) + 1), content: "Bardzo przyjazny i pomocny gospodarz, zajął się i natychmiast usunął pytania lub problemy.Dom jest idealny na kilka dni do odłączenia.", date: "grudzien 2024" }} />
  //   </Col>
  //   <Col sm={12} md={6} lg={6}>
  //     <OpinionComponent opinion={{ photo: <CgProfile className="bg-secondary border rounded-circle" />, name: "Grzegorz", rating: (Math.random() * (5 - 1) + 1), content: "Bardzo przyjemne miejsce, zapewniające intymność, miły i kooperujący gospodarz. Idealne miejsce, gdy ktoś potrzebuje ciszy i relaksu", date: "luty 2025" }} />
  //   </Col>
  //   <Col sm={12} md={6} lg={6}>
  //     <OpinionComponent opinion={{ photo: <CgProfile className="bg-light border rounded-circle" />, name: "Dustin", rating: (Math.random() * (5 - 1) + 1), content: "Przepiękne i warte polecenia miejsce. Marcin jest fantastycznym gospodarzem, sam domek jest nowoczesny i bardzo funkcjonalny.", date: "lipiec 2023" }} />
  //   </Col>
  //   <Col sm={12} md={6} lg={6}>
  //     <OpinionComponent opinion={{ photo: <CgProfile className="bg-info border rounded-circle" />, name: "Krzysztof", rating: (Math.random() * (5 - 1) + 1), content: "Mieliśmy najlepszy tydzień w pięknej lokalizacji. Wszystko jest dostępne na łodzi mieszkalnej. Marcin jest dobrym gospodarzem, bardzo pomocnym. ", date: "czerwiec 2024" }} />
  //   </Col>
    {/* <NavbarSearchbarSmall/> */}
    {/* <Footer />     */}
  // </Row>
}
