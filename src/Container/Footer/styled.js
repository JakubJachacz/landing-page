import { css, styled } from "styled-components";
import GoogleMaps from "../../images/Maps.png";

export const FooterContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  max-height: 509px;
  height: 100%;
  background-color: #d9d9d9;
  margin-top: 20px;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 9fr;
`;

export const Contact = styled.div`
  color: #181818;
  font-size: 18px;
  line-height: 24px; 
  padding: 84px 60px 315px;
`;

export const QuestionsContainer = styled.div`
  color: #474945;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex-direction: column; 
`;

export const QuestionsTitle = styled.h1`
  font-weight: 500;
  color: #181818;
  font-size: 36px;
  line-height: 39px;
  margin: 84px 233px 36px 179px;
  width: 233px;
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
`;

export const Maps = styled.div`
  background: url(${GoogleMaps}) no-repeat center / cover;
`;


export const Footer = styled.footer`
color: #71746E;
`;

export const FooterText = styled.p`
height: 86px; 
color: #71746E;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.084px;
`;