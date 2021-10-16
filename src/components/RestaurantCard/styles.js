import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between:
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background: #FFF;
  cursor: pointer;
  border-left: 5px solid transparent;

  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ResturantInfo = styled.div`
  display: flex,
  flex-direction: column,
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  font-weigth: bold;
  color: ${(props) => props.theme.colors.text};
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  font-weigth: bold;
  color: ${(props) => props.theme.colors.text};
  line-height: 19px;
  margin: 10px 0;
`;

export const RestaurantPhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;
