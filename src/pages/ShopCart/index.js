import React, { Component } from 'react';

import { View } from 'react-native';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

class ShopCart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  render() {
    return <View />;
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(ShopCart);
