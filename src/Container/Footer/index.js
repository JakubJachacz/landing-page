import { forwardRef } from "react";
import {
  Contact,
  FooterContainer,
  FooterWrapper,
  Maps,
  QuestionsContainer,
  Info,
  QuestionsTitle,
  FooterText, 
} from "./styled";

const FooterComponent = forwardRef((props, ref) => {
  // AIzaSyBkEnTvNr9ZedisHw5K8NcDHJqPOdARyos

  return (
    <FooterContainer>
      <FooterWrapper>
        <Contact ref={ref}>Kontakt</Contact>
        <QuestionsContainer>
          <QuestionsTitle>Masz pytania?</QuestionsTitle>
          <Info>Safeko house sp. z o.o.</Info>
          <Info>ul. Mackiewicza 21/31, 20-865 Lublin</Info>
          <Info isMiddle>kontakt@safekohouse.com</Info>
          <Info>+48 609 505 111</Info>
          <Info isLast>NIP: 712 338 48 46</Info>
          <Info>KRS: 0000779078</Info>
        </QuestionsContainer>
        <Maps /> 
          <FooterText>© Safeko house</FooterText>
          <FooterText>Polityka prywatności</FooterText>
          <FooterText isLast>
            Stosujemy pliki cookies. Korzystanie ze strony bez zmiany ustawień
            przeglądarki oznacza, że pliki cookies będą zamieszczane w Twoim
            urządzeniu. Czytaj więcej
          </FooterText> 
      </FooterWrapper>
    </FooterContainer>
  );
});

export default FooterComponent;
