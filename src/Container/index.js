import TopBar from "../TopBar";  
import OfferDetails from "./OfferDetails";
import OfferSection from "./Section";
import Slideshow from "./Slideshow";

const Container = () => {
  return (
    <> 
    <TopBar />
      <Slideshow />
      <OfferSection /> 
      <OfferDetails />
    </>
  );
};

export default Container;
