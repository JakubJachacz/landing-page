import { styled } from "styled-components";

export const StyledSection = styled.section`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;

  @media (max-width: 750px) {
padding-top: 20px;
  }
`;

export const OfferContainer = styled.div`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 5fr 7fr;

  @media (max-width: 750px) {
 grid-template-columns: 1fr;
  }
`;

export const Offer = styled.h1`
  font-size: 18px;
  line-height: 24px;
  padding: 10px 150px;
  color: #181818;
  font-weight: 500;

  @media (max-width: 750px) {
padding: 8px 20px;
  }
`;

export const ItemFirst = styled.div`
  height: 200px;
  max-width: 539px;
  width: 100%;

  @media (max-width: 750px) {
 margin: 0 auto;
}
`;

export const TitleFirst = styled.h2`
  margin-top: 25px;
  font-size: 36px;
  line-height: 39px;
  font-weight: 500;

  @media (max-width: 750px) {
 font-size: 24px;
 line-height: 30px;
 margin-left: 20px;
}
`;

export const DescFirst = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #474945;

  @media (max-width: 750px) {
 font-size: 16px;
 line-height: 23px;
 width: 320px;
 margin-left: 20px;
}
`;
