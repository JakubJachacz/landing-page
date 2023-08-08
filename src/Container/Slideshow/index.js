import {
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
          <PaginationButton> 
            <StyledArrowLeft /> 
          </PaginationButton>
          <PaginationButton> 
            <StyledArrowRight />
          </PaginationButton>
          <PaginationCounter>01/06</PaginationCounter>
        </Pagination>
      </MainPictureContainer>
    </StyledSlideshow>
  );
};

export default Slideshow;
