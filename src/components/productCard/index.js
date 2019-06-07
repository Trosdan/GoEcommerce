import React from 'react';

import {
  Container, Image, Name, Brand, Price,
} from './styles';

const productCard = ({ product }) => (
  <Container>
    <Image source={{ uri: product.image }} />
    <Name>{product.name}</Name>
    <Brand>{product.brand}</Brand>
    <Price>{product.price}</Price>
  </Container>
);

export default productCard;
