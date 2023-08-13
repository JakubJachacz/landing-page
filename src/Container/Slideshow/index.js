import {
  ButtonsContainer,
  MainPictureContainer,
  Pagination,
  PaginationButton,
  PaginationCounter,
  StyledArrowLeft,
  StyledArrowRight,
  StyledSlideshow,
} from "./styled";

const Slideshow = () => {
  return (
    <StyledSlideshow>
      <MainPictureContainer>
        <Pagination>
          <ButtonsContainer>
            <PaginationButton>
              <StyledArrowLeft />
            </PaginationButton>
            <PaginationButton>
              <StyledArrowRight />
            </PaginationButton>
          </ButtonsContainer>
          <PaginationCounter>01/02</PaginationCounter>
        </Pagination>
      </MainPictureContainer>
    </StyledSlideshow>
  );
};

export default Slideshow;
