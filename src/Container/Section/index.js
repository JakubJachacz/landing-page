import {
  DescFirst,
  ItemFirst,
  Offer,
  OfferContainer,
  StyledSection,
  TitleFirst,
} from "./styled";

const Section = () => {
  return (
    <StyledSection>
      <OfferContainer>
        <Offer>Oferta</Offer>
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
};

export default Section;
