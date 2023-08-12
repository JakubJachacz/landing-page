import styled from "styled-components";
import { ReactComponent as Aura_Favicon } from "../images/Aura_Favicon.svg"
import { ReactComponent as Logo } from "../images/logo_safeko.svg"
import NavIcon from "../images/navigation.svg"

export const StyledTopBar = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 80px;

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
color: #71746E;
font-size: 17px;
background-color: inherit;
border: none;

@media (max-width: 750px) {
    display: none;
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

export const NavButton = styled.div`
width: 70px;
height: 70px; 
background-image: url(${NavIcon});
background-repeat: no-repeat;
background-position: center;

@media (min-width: 751px) {
    display: none;
  }
`;