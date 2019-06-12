import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShopCartActions from '~/store/ducks/shopCart';

import PropTypes from 'prop-types';

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

class productCardCart extends Component {
  state = {
    input: '',
  };

  propTypes = {
    setQuantityRequest: PropTypes.func.isRequired,
    removeShopCartRequest: PropTypes.func.isRequired,
    product: PropTypes.shape({
      image: PropTypes.number,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {
    const { product } = this.props;
    this.setState({ input: product.quantity });
  }

  changeValue = () => {
    const { product, setQuantityRequest } = this.props;
    const { input } = this.state;
    setQuantityRequest({ ...product, quantity: input });
  };

  render() {
    const { product, removeShopCartRequest } = this.props;
    const { input } = this.state;
    return (
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
          value={input}
          onChangeText={text => this.setState({ input: text })}
          onSubmitEditing={this.changeValue}
          onEndEditing={this.changeValue}
        />
        <RemoveItem onPress={() => removeShopCartRequest(product)}>
          <Icon name="close" size={14} />
        </RemoveItem>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(ShopCartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(productCardCart);
