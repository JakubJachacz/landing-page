import { css, styled } from "styled-components";
import SecondaryPicture from "../../images/Photo_02.png";

export const DetailsWrapper = styled.section`
  display: grid;
  place-items: center;
  padding-top: 75px;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  background-color: cyan;
`;

export const PictureTwo = styled.div`
  background-image: url(${SecondaryPicture});
  width: 1092px;
  height: 615px;
`;

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: red;
  max-width: 1090px;
  height: 100%;
`;

export const DetailsTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 39px;
  color: #181818;
  margin: 84px 0 10px;
`;

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid #181818;
  height: 48px;
  grid-column: 1;
  ${({ isFirst }) =>
    isFirst &&
    css`
      border-top: 1px solid #181818;
    `}

    ${({ isSecond }) =>
    isSecond &&
    css`
      grid-column: 2;
    `}
`;

export const Counter = styled.p`
  padding: 12px 0;
`;

export const Details = styled.div`
  color: #474945;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px
    ${({ isDescription }) =>
      isDescription &&
      css`
        font-size: 18px;
        line-height: 24px;
      `};
`;
