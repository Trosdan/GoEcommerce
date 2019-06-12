import React, { Component } from 'react';

import { ActivityIndicator } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoriesActions from '~/store/ducks/categories';
import ProductsActions from '~/store/ducks/products';

import TabCategories from '~/components/categories';
import ProductCard from '~/components/productCard';

import PropTypes from 'prop-types';

import { Container, ProductsList } from './styles';

class Category extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
  };

  propTypes = {
    categoriesLoadRequest: PropTypes.func.isRequired,
    productsLoadRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.any,
    }).isRequired,
    products: PropTypes.shape({
      data: PropTypes.any,
    }).isRequired,
  };

  componentDidMount() {
    const { categoriesLoadRequest } = this.props;

    categoriesLoadRequest();
    this.productsLoadCategory(1);
  }

  productsLoadCategory = (id) => {
    const { productsLoadRequest } = this.props;
    productsLoadRequest(id);
  };

  render() {
    const { categories, products } = this.props;
    return (
      <Container>
        <TabCategories
          categories={categories.data}
          productsLoadCategory={this.productsLoadCategory}
        />
        {products.loading ? (
          <ActivityIndicator size="large" style={{ flex: 1 }} />
        ) : (
          <ProductsList
            numColumns={2}
            data={products.data.products}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <ProductCard product={item} />}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...CategoriesActions,
    ...ProductsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
