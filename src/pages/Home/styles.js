import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #FFF;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background: red;
  width: 500px;
`;

export const Carousel = styled(Slider)`
  background: #FFF;
  padding: 0 20px 20px;

  .slick-slide {
    margin-right: 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 24px 0 8px;
  align-self: flex-start;
`;

export const ModalTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 5px 0 10px;
`;

export const ModalContent = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  margin: 5px 0 10px;
`;
