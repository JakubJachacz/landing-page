import {
  BorderWrap,
  ColumnFirst,
  ColumnSecond,
  Counter,
  Description,
  Details,
  DetailsContainer,
  DetailsTitle,
  DetailsWrapper,
  LocalButton,
  LocalWrap,
  PictureFive,
  PictureFour,
  PictureThree,
  PictureTwo,
  PictureWrapper,
  StyledP,
  StyledVectorRight,
  Wrapper,
} from "./styled"; 

const OfferDetails = () => {
  return (
    <DetailsWrapper> 
         <PictureTwo />
      <DetailsContainer>
        <ColumnFirst>
          <BorderWrap>
            <DetailsTitle>Nowoczesne domy</DetailsTitle>
            <Wrapper isFirst={true}>
              <Counter>01</Counter>
              <Details>200 m2 powierzchni użytkowej</Details>
            </Wrapper>
            <Wrapper>
              <Counter>02</Counter>
              <Details>500 m2 działka</Details>
            </Wrapper>
            <PictureThree />
            <StyledP>200 m²</StyledP>
            <LocalWrap>
              <DetailsTitle isSecond>Lokalizacja</DetailsTitle>
              <Wrapper isFirst={true}>
                <Counter>01</Counter>
                <Details>Dojazd do centrum miasta nawet w 10 minut</Details>
              </Wrapper>
              <Wrapper>
                <Counter>02</Counter>
                <Details>Perspektywiczna i zielona okolica</Details>
              </Wrapper>
              <Wrapper>
                <Counter>03</Counter>
                <Details>Asfaltowa nawierzchnia</Details>
              </Wrapper>
              <Wrapper>
                <Counter>04</Counter>
                <Details>Bliskość komunikacji miejskiej</Details>
              </Wrapper>
              <Wrapper>
                <Counter>05</Counter>
                <Details>
                  Atrakcyjnie położony dom względem stron świata
                </Details>
              </Wrapper>
              <LocalButton>
                Zobacz lokalizację <StyledVectorRight />
              </LocalButton>
            </LocalWrap>
          </BorderWrap>
        </ColumnFirst>
        <ColumnSecond>
          <BorderWrap>
            <Description>
              Budujemy według najwyższych standardów, korzystając z wiedzy,
              doświadczenia i wizji sprawdzonych architektów oraz niezawodnego
              działu realizacji inwestycji.
            </Description>
            <Wrapper isFirst>
              <Counter>01</Counter>
              <Details>
                Technologie OZE optymalizujące koszty użytkowania 
              </Details>
            </Wrapper>
            <Wrapper>
              <Counter>02</Counter>
              <Details>Elegancki, ponadczasowy design</Details>
            </Wrapper>
            <Wrapper>
              <Counter>03</Counter>
              <Details>Solidna konstrukcja</Details>
            </Wrapper>
            <PictureFour />
          </BorderWrap>
        </ColumnSecond>
      </DetailsContainer>
      <PictureFive />
    </DetailsWrapper>
  );
};

export default OfferDetails;
