import React, { Component } from 'react';

import { ActivityIndicator } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductActions from '~/store/ducks/product';
import ShopCartActions from '~/store/ducks/shopCart';

import {
  Container,
  Content,
  Image,
  InfoView,
  Name,
  Brand,
  PriveView,
  Price,
  ButtonBuy,
  ButtonBuyText,
} from './styles';

class ProductDetails extends Component {
  static navigationOptions = {
    title: 'Detalhe do produto',
  };

  componentDidMount() {
    const { navigation, productLoadRequest } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    productLoadRequest(itemId);
  }

  render() {
    const { product, addShopCartRequest } = this.props;
    return (
      <Container>
        {product.loading ? (
          <ActivityIndicator size={24} />
        ) : (
          <Content>
            <Image source={{ uri: product.data.image }} />
            <InfoView>
              <PriveView>
                <Name>{product.data.name}</Name>
                <Brand>{product.data.brand}</Brand>
              </PriveView>
              <Price>
                R$
                {product.data.price}
              </Price>
            </InfoView>
            <ButtonBuy onPress={() => addShopCartRequest(product.data)}>
              <ButtonBuyText>Adicionar ao carrinho</ButtonBuyText>
            </ButtonBuy>
          </Content>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductActions, ...ShopCartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetails);
