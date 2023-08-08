import { styled } from "styled-components";

export const StyledSection = styled.section`
  height: 500px;
  width: 100%;
  margin: 0 10px;
  background-color: blue;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

export const OfferContainer = styled.div`
  width: 1400px;
  height: 200px;
  background-color: red; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Offer = styled.h1`
  font-size: 18px;
  line-height: 24px;
  padding: 10px 150px;
  color: #181818;
  font-weight: 500;
`;

export const ItemFirst = styled.div`
  background-color: cyan;
  height: 200px;
  width: 539px;
`;

export const TitleFirst = styled.h2`
margin-top: 25px;
font-size: 36px;
line-height: 39px;
font-weight: 500;
`;

export const DescFirst = styled.p`
font-size: 18px;
line-height: 24px;
`;
