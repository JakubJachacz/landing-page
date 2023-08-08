import {
  Counter,
  Details,
  DetailsContainer,
  DetailsTitle,
  DetailsWrapper,
  PictureTwo,
  Wrapper,
} from "./styled";

const OfferDetails = () => {
  return (
    <DetailsWrapper>
      <PictureTwo />
      <DetailsContainer>
        <DetailsTitle>Nowoczesne domy</DetailsTitle>
        <Wrapper isFirst={true}>
          <Counter>01</Counter>
          <Details>200 m2 powierzchni użytkowej</Details>
        </Wrapper>
        <Wrapper>
          <Counter>02</Counter>
          <Details>500 m2 działka</Details>
        </Wrapper>
        <Wrapper isSecond={true}>
          <Details isDescription={true}>
            Budujemy według najwyższych standardów, korzystając z wiedzy,
            doświadczenia i wizji sprawdzonych architektów oraz niezawodnego
            działu realizacji inwestycji.
          </Details>
        </Wrapper>
      </DetailsContainer>
    </DetailsWrapper>
  );
};

export default OfferDetails;
