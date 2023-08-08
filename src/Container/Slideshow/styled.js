import styled from "styled-components";
import MainPicture from "../../images/Photo_01.png";
import { ReactComponent as ArrowLeft } from "../../images/VectorLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/VectorRight.svg";

export const StyledSlideshow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
  background-color: lightgray;
  margin: 0 10px;
  position: relative;
`;

export const MainPictureContainer = styled.div`
  width: 1400px;
  height: 700px;
  background-image: url(${MainPicture});
  position: relative;
`;

export const Pagination = styled.span`
  width: 355px;
  height: 80px;
  background-color: #181818;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 30px;
`;

export const ButtonsContainer = styled.div`
width: 203px;
height: 80px;
`;

export const PaginationButton = styled.button` 
  width: 80px;
  height: 80px;
  display: flex;
  background-color: inherit; 
  border: none;
`;

export const PaginationCounter = styled.p` 
color: #FAFAFA;
font-size: 18px; 
line-height: 24px; 
display: flex;
align-items: center;
padding: 10px 30px 10px 45px;
`;


export const StyledArrowLeft = styled(ArrowLeft)`
margin: auto;
`;

export const StyledArrowRight = styled(ArrowRight)`
margin: auto;
`;