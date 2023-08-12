import TopBar from "../TopBar"; 
// import FooterComponent from "./Footer";
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
    {/* <FooterComponent /> */}
    </>
  );
};

export default Container;

 