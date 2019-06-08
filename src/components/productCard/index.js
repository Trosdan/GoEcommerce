import React from 'react';

import { withNavigation } from 'react-navigation';

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

export default withNavigation(productCard);
