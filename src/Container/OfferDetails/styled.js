import { css, styled } from "styled-components";
import SecondaryPicture from "../../images/Photo_02.png";
import ThirdPicture from "../../images/Photo_03.png";
import FourthPicture from "../../images/Photo_04.png";
import { ReactComponent as VectorRight } from "../../images/VectorRight2.svg";
import FifthPicture from "../../images/Photo_05.png";

export const DetailsWrapper = styled.section`
  display: grid;
  place-items: center;
  padding-top: 75px;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  background-color: cyan;
  margin: 0 auto;
`;

export const PictureWrapper = styled.div`
  max-width: 1092px;
  max-height: 615px;
`;

export const PictureTwo = styled.div`
  background: url(${SecondaryPicture}) no-repeat center / cover;
  max-width: 1092px;
  width: 100%;
  max-height: 615px;
  height: 100%;
  aspect-ratio: 2 / 1;
`;

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: red;
  max-width: 1092px;
  width: 100%;
  height: 100%;
`;

export const ColumnFirst = styled.div`
  margin: 34px 0 10px;
`;

export const ColumnSecond = styled.div`
  margin: 211px 0 10px;
  display: flex;
`;

export const BorderWrap = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100%;
`;

export const DetailsTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 39px;
  color: #181818;

  ${({ isSecond }) =>
    isSecond &&
    css`
      margin-top: 179px;
    `}
`;

export const Description = styled.p`
  max-width: 539px;
  width: 100%;
  font-size: 18px;
  font-style: normal;
  color: #474945;
  line-height: 24px;
  padding: 12px 0 12px;
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
`;

export const Counter = styled.p`
  padding: 12px 0;
  color: #474945;
`;

export const Details = styled.div`
  color: #474945;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

export const PictureThree = styled.div`
  background-image: url(${ThirdPicture});
  max-width: 425px;
  width: 100%;
  height: 238px;
  padding-top: 110px;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const StyledP = styled.p`
  font-size: 124px;
  line-height: 113px;
  color: #181818;
  margin: 44px 0;
`;

export const PictureFour = styled.div`
  background-image: url(${FourthPicture});
  background-repeat: no-repeat;
  max-width: 427px;
  width: 100%;
  height: 569px;
  margin-left: 120px;
  margin-top: calc(170px + 48px);
`;

export const LocalWrap = styled.div`
  margin-left: 103px;
  max-width: 430px;
  width: 100%;
`;

export const LocalButton = styled.button`
  padding: 17px 25px 18px;
  max-width: 218px;
  width: 100%;
  height: 60px;
  margin-top: 60px;
  border-radius: 43px;
  background-color: #181818;
  color: #fafafa;
  border: 1px solid #181818;
  gap: 8px;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
`;

export const StyledVectorRight = styled(VectorRight)`
  padding-left: 12px;
`;

export const PictureFive = styled.div`
  background-image: url(${FifthPicture});
  background-repeat: no-repeat;
  max-width: 1400px;
  width: 100%;
  max-height: 524px;
  height: 100%;
  margin-top: 105px;
`;
