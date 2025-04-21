import { useMemo } from "react";
import CategoryNav from "~/components/CategoryNav";
import MapButton from "~/components/MapButton";
import NavbarSmall from "~/components/Navbar/NavbarSmall";

export default function Map() {
//   const displayMap = useMemo(() => {
//     return <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6205399.681489248!2d20.213976187499988!3d52.26537721793081!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1745246007848!5m2!1spl!2spl"
//     style={{minWidth: "100%", minHeight: "92vh"}}/>
// },[]);
  return (
    <>
    {/* <CategoryNav /> */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6205399.681489248!2d20.213976187499988!3d52.26537721793081!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1745246007848!5m2!1spl!2spl"
    style={{minWidth: "100%", minHeight: "calc(100vh - 73px)"}}/>
    {/* {displayMap} */}
    <MapButton isMapModal={true} />
    </>
    );
}
