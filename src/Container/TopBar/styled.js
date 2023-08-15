import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../../images/logo_safeko.svg";
import NavIcon from "../../images/navigation.svg";

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #FCFCFC;

  @media (max-width: 750px) {
    height: 70px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 60px;

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
  background-image: url(${NavIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-color: inherit;
  border: none;

  @media (min-width: 751px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  position: absolute;
  top: 70px;
  right: 0;
  background-color: #FCFCFC;
  width: 290px;
  height: 560px;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1; 
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
      padding: 360px 69px 23px 24px; 
    `} 
`;
 