import { css, styled } from "styled-components";
import GoogleMaps from "../../images/Maps.png";

export const FooterContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  max-height: 509px;
  height: 100%;
  background-color: #d9d9d9;
  margin: 20px auto 0; 
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 9fr;

  @media (max-width: 750px) {
    grid-template-columns: 1fr; 
  }
`;

export const Contact = styled.div`
  color: #181818;
  font-size: 18px;
  line-height: 24px;
  padding: 84px 60px 315px;

  @media (max-width: 750px) {
    padding: 43px 0 30px 20px;
    font-size: 16px;
    line-height: 23px;
  }
`;

export const QuestionsContainer = styled.div`
  color: #474945;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 750px) {
    align-items: flex-start;
    padding-left: 20px;
  }
`;

export const QuestionsTitle = styled.h1`
  font-weight: 500;
  color: #181818;
  font-size: 36px;
  line-height: 39px;
  margin: 84px 233px 36px 179px;
  width: 233px;

  @media (max-width: 750px) {
    margin: 0;
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 24px;
  }
`;

export const Info = styled.p`
  max-width: 284px;
  width: 100%;
  color: #474945;
  font-size: 18px;
  line-height: 24px;
  margin: 0;

  ${({ isMiddle }) =>
    isMiddle &&
    css`
      padding-top: 12px;
    `}

  ${({ isLast }) =>
    isLast &&
    css`
      padding-top: 20px;
    `}

    @media (max-width: 750px) {
    font-size: 16px;
    line-height: 23px;
  }
`;

export const Maps = styled.div`
  background: url(${GoogleMaps}) no-repeat center / cover;

  @media (max-width: 750px) {
    width: 360px;
    height: 400px;
    margin-top: 36px;
  }
`;

export const FooterText = styled.p`
  display: flex;
  justify-content: center;
  height: 86px;
  color: #71746e;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.084px;
  margin: 0;
  padding-top: 20px;
  border-top: 1px solid #71746e;

  @media (max-width: 750px) {
    border: none;
    justify-content: flex-start;
    padding: 6px 0 0 20px;
    max-height: 21px;
  }

  ${({ isLast }) =>
    isLast &&
    css`
      max-width: 536px;
      padding-right: 80px;

      @media (max-width: 750px) {
        padding: 24px 0 0 20px; 
        width: 300px; 
        margin-bottom: 85px;
      }
    `}
`;
