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
    <StyledSection>
      <OfferContainer>
        <Offer ref={ref}>Oferta</Offer>
        <ItemFirst>
          <TitleFirst>Rezydencja Poligonowa</TitleFirst>
          <DescFirst>
            Domy projektujemy z myślą o sobie i naszych rodzinach. To inwestycje
            nowoczesne i funkcjonalne, a przede wszystkim przyjazne mieszkańcom.
            Nasze lokale cenią wszyscy, którzy nie chcą żyć w wielkomiejskim
            tłoku.
          </DescFirst>
        </ItemFirst> 
      </OfferContainer> 
    </StyledSection> 
  );
});

export default OfferSection;
