import TopBar from "../TopBar";  
import Footer from "./Footer";
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
      <Footer />
    </>
  );
};

export default Container;
