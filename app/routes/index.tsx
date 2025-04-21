import 'bootstrap/dist/css/bootstrap.min.css';
import AttractionComponent from "~/components/Attraction/AttractionComponent";
import MapButton from '~/components/MapButton';

export default function() {
  return (
    <>
        <AttractionComponent />
        <MapButton isMapModal={false} />
    </>
  );
}
