import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShopCartActions from '~/store/ducks/shopCart';

import {
  Container,
  Image,
  InfoView,
  Name,
  Brand,
  Price,
  QuantityInput,
  RemoveItem,
} from './styles';

const productCardCart = ({ product, removeShopCartRequest, setQuantityRequest }) => (
  <Container>
    <Image source={{ uri: product.image }} />
    <InfoView>
      <Name>{product.name}</Name>
      <Brand>{product.brand}</Brand>
      <Price>
        R$
        {product.price}
      </Price>
    </InfoView>
    <QuantityInput
      value={product.quantity}
      onChangeText={text => setQuantityRequest({ ...product, quantity: text })}
    />
    <RemoveItem onPress={() => removeShopCartRequest(product)}>
      <Icon name="close" size={14} />
    </RemoveItem>
  </Container>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(ShopCartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(productCardCart);
