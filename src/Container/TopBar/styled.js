import styled, { css, keyframes } from "styled-components"; 
import { ReactComponent as Logo } from "../../images/logo_safeko.svg";
import ButtonOpen from "../../images/navigation.svg";
import ButtonClose from "../../images/ButtonClose.svg"

export const StyledTopBar = styled.div`
  position: fixed; 
  top: 0; 
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #FCFCFC;
  z-index: 4; 

  @media (max-width: 750px) {
    height: 70px;
  }
`;


export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 60px;
  z-index: 4;

  @media (max-width: 750px) {
    padding: 15px 30px;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 410px;
  width: 100%;
  margin-right: 40px;
  z-index: 4; 
  
  @media (max-width: 750px) {
    margin: 0;
  }
`;

export const NavItem = styled.button`
  padding: 0 25px;
  color: #71746e;
  font-size: 17px;
  background-color: inherit;
  border: none;
  z-index: 4;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 750px) {
    padding: 0 24px;
    color: #71746e;
  font-size: 18px;
  line-height: 21px;

    ${({ isDesktop }) =>
    isDesktop &&
    css`
      display: none;  
    `} 
  }
`;

export const StyledLogo = styled(Logo)`
  width: 210px;
  height: 50px;

  @media (max-width: 750px) {
    width: 160px;
    height: 25px;
  }
`;

export const NavButton = styled.button`
  width: 70px;
  height: 70px;
  background-image: ${(props) =>
    `url(${props.showList ? ButtonClose : ButtonOpen})`};
  background-repeat: no-repeat;
  background-position: center;
  background-color: inherit;
  border: none;
  transition: background-image 0.2s ease;

  @media (min-width: 751px) {
    display: none;
  }
`;

const expandWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 290px;
  }
`; 

export const NavList = styled.ul`
  position: absolute;
  top: 70px;
  right: 0;
  background-color: #FCFCFC;
  width: 0; 
  height: 560px;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1;

  ${({ showAnimation }) =>
    showAnimation &&
    css`
      animation: ${expandWidth} 0.2s ease-in-out forwards; 
    `}
`;

export const ListContainer = styled.div`
    margin: 0;
      padding: 330px 69px 23px 24px; 
`;

export const StyledList = styled.li` 
  margin-top: 36px; 
  color: #474945;
  font-size: 16px;
  line-height: 23px;

  ${({ isFirst }) =>
    isFirst &&
    css`
      margin-top: 51px; 
    `}  

    ${({ isLast }) =>
    isLast &&
    css`
    margin: 0;
    `} 
`;
 
export const DarkOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(24, 24, 24, 0.6); 
z-index: 3;  
display: block;
margin-top: 70px;
`; 