import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import NavbarSearchbar from "~/components/Navbar/NavbarSearchbar";
import NavbarSearchbarSmall from "~/components/Navbar/NavbarSearchbarSmall";
import Footer from "~/components/Footer";
import RatingComponentSingle from "~/components/Attraction/AttractionSingle/AttractionRatingComponentSingle";
import { PiFlag } from "react-icons/pi";
import { MdCleaningServices, MdMap } from "react-icons/md";
import { FcApprove } from "react-icons/fc";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsChatDots, BsKey, BsTag } from "react-icons/bs";
import OpinionComponent from "~/components/Attraction/AttractionSingle/AttractionOpinionComponent";
import { Col, Row } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import MapButton from "~/components/MapButton";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
  skeebeedee
  </>  
  )
}
