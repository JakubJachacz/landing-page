import TopBar from "./TopBar"; 
// import FooterComponent from "./Footer";
import OfferDetails from "./OfferDetails";
import OfferSection from "./Section";
import Slideshow from "./Slideshow";
import { useRef } from "react";

const Container = () => { 
  const offerRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (refName) => {
    if (refName === 'offer') {
      offerRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (refName === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  } 

  return (
    <> 
    <TopBar scrollToRef={scrollToRef}/> 
    <Slideshow /> 
    <OfferSection ref={offerRef} />
    <OfferDetails /> 
    {/* <FooterComponent /> */}
    </>
  );
};

export default Container;

 