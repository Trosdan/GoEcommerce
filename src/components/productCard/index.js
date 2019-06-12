import React from 'react';

import { withNavigation } from 'react-navigation';

import PropTypes from 'prop-types';

import {
  Container, Image, Name, Brand, Price,
} from './styles';

const productCard = ({ product, navigation }) => (
  <Container onPress={() => navigation.navigate('ProductDetails', { itemId: product.id })}>
    <Image source={{ uri: product.image }} />
    <Name>{product.name}</Name>
    <Brand>{product.brand}</Brand>
    <Price>
      R$
      {product.price}
    </Price>
  </Container>
);

productCard.propTypes = {
  navigation: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default withNavigation(productCard);
