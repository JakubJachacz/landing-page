 import { forwardRef } from "react";
import {
  DescFirst,
  ItemFirst,
  Offer,
  OfferContainer, 
  StyledSection,
  TitleFirst,
} from "./styled";

const OfferSection = forwardRef((props, ref) => { 

  return (
    <StyledSection ref={ref}>
      <OfferContainer>
        <Offer>Oferta</Offer>
        <ItemFirst>
          <TitleFirst>Rezydencja Poligonowa</TitleFirst>
          <DescFirst>
            Domy Safeko house to inwestycja na pokolenia. Przemyślany projekt wykorzystuje do maksimum możliwości związane z nieruchomością. Solidne budownictwo wsparte nowymi i ekologicznymi technologiami spełni wymogi wymagających inwestorów. Twoja rodzina zasługuje na to co najlepsze.
          </DescFirst>
        </ItemFirst> 
      </OfferContainer> 
    </StyledSection> 
  );
});

export default OfferSection;
