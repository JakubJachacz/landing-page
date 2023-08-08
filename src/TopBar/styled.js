import styled from "styled-components";
import { ReactComponent as Aura_Favicon } from "../images/Aura_Favicon.svg"

export const StyledTopBar = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 80px;
`;

export const Title = styled.div`
display: flex;
align-items: center;
padding: 15px 45px;
width: 210px;
`;

export const SafekoHouse = styled.span`
font-weight: ${({ isSafeko }) => (isSafeko ? '600' : '500')};
font-size: ${({ isHouse }) => (isHouse ? '20px' : '26px')};
`;

export const StyledIcon = styled(Aura_Favicon)`
width: 50px;
height: 50px;
`;

export const StyledNavigation = styled.nav`
display: flex;
align-items: center;
justify-content: flex-end;
width: 410px;
margin-right: 40px;
`;

export const NavItem = styled.button`
padding: 0 25px;
color: #71746E;
font-size: 17px;
background-color: inherit;
border: none;
`;