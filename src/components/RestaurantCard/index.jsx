import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, ResturantInfo, Title, Address, RestaurantPhoto } from './styles';

import restaurantPhoto from '../../assets/restaurante-fake.png';
import Skeleton from '../Loader';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <ResturantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          edit={false}
          value={restaurant.rating}
          size={25}
          isHalf
          activeColor="#E7711C"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </ResturantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantPhoto}
        onLoad={() => setImageLoaded(true)}
        alt="restaurant"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
