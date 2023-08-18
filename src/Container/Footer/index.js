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
  ReadMore,
} from "./styled";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const FooterComponent = forwardRef((props, ref) => {
  const defaultCenter = { lat: 51.26718, lng: 22.562455 };

  const handleEmailClick = () => {
    window.location.href = "mailto:kontakt@safekohouse.com";
  };

  const redirectToCookies = () => {
    window.location.href = 'https://github.com/JakubJachacz/landing-page';
  };

  const redirectToPrivacyPolitics = () => {
    window.location.href = 'https://github.com/JakubJachacz/landing-page';
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Contact ref={ref}>Kontakt</Contact>
        <QuestionsContainer>
          <QuestionsTitle>Masz pytania?</QuestionsTitle>
          <Info>Safeko house sp. z o.o.</Info>
          <Info>ul. Mackiewicza 21/31, 20-865 Lublin</Info>
          <Info isMiddle onClick={handleEmailClick}>
            kontakt@safekohouse.com
          </Info>
          <Info>+48 609 505 111</Info>
          <Info isLast>NIP: 712 338 48 46</Info>
          <Info>KRS: 0000779078</Info>
        </QuestionsContainer>
        <Maps>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={defaultCenter}
              zoom={13}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </Maps>
        <FooterText>© Safeko house</FooterText>
        <FooterText isClickable onClick={redirectToPrivacyPolitics}>Polityka prywatności</FooterText>
        <FooterText isLast>
          Stosujemy pliki cookies. Korzystanie ze strony bez zmiany ustawień
          przeglądarki oznacza, że pliki cookies będą zamieszczane w Twoim
          urządzeniu. 
        <ReadMore onClick={redirectToCookies}>Czytaj więcej</ReadMore>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
});

export default FooterComponent;
