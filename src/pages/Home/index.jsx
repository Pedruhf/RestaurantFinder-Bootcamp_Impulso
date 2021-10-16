/* eslint-disable camelcase */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.svg';
import restaurantPhoto from '../../assets/restaurante-fake.png';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Carousel,
  CarouselTitle,
  ModalTitle,
  ModalContent,
} from './styles';
import Card from '../../components/ImageCard';
import RestaurantCard from '../../components/RestaurantCard';
import Modal from '../../components/Modal';
import Map from '../../components/Map';
import Loader from '../../components/Loader';
import Skeleton from '../../components/Skeleton';

const Home = () => {
  const { restaurants, selectedRestaurant } = useSelector((state) => state.restaurants);
  const [inputValue, setInputValue] = useState();
  const [placeId, setPlaceId] = useState(null);
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const CarouselSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function HandleKeyPress(event) {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Restaurant Finder" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={HandleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          {restaurants.length > 0 ? (
            <>
              <Carousel {...CarouselSettings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantPhoto}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>

        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {selectedRestaurant ? (
          <>
            <ModalTitle>{selectedRestaurant?.name}</ModalTitle>
            <ModalContent>{selectedRestaurant?.formatted_phone_number}</ModalContent>
            <ModalContent>{selectedRestaurant?.formatted_address}</ModalContent>
            <ModalContent>
              {selectedRestaurant?.opening_hours?.open_now
                ? 'Aberto agora'
                : 'Fechado neste momento'}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
