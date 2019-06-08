import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ShopCartActions from '~/store/ducks/shopCart';

import {
  Container, ValueView, ValueTitle, ValueText, ShopCartList,
} from './styles';

class ShopCart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  subtotal = () => {
    const { shopCart, valueShopCart } = this.props;
    let { value } = shopCart;

    shopCart.data.map((a) => {
      value += a.price;
    });
    valueShopCart(value);
  };

  render() {
    const { shopCart } = this.props;
    return (
      <>
        <Container>
          <ShopCartList
            data={shopCart.data}
            keyExtractor={() => String(Math.random() * 1000)}
            renderItem={({ item }) => <ValueText>{item.name}</ValueText>}
          />
        </Container>
        <ValueView>
          <ValueTitle>Subtotal</ValueTitle>
          <ValueText>
            R$
            {shopCart.value}
          </ValueText>
        </ValueView>
      </>
    );
  }
}

const mapStateToProps = state => ({
  shopCart: state.shopCart,
});

const mapDispatchToProps = dispatch => bindActionCreators(ShopCartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopCart);
