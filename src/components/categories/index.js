import React from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import {
  Container,
  CategoriesList,
  Content,
  ItemName,
  ContentSelect,
  ItemNameSelect,
} from './styles';

// import { Container } from './styles';

const Categories = ({ categories, productsLoadCategory, products }) => (
  <Container>
    <CategoriesList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (products.data.id === item.id ? (
        <ContentSelect onPress={() => productsLoadCategory(item.id)}>
          <ItemNameSelect>{item.title}</ItemNameSelect>
        </ContentSelect>
      ) : (
        <Content onPress={() => productsLoadCategory(item.id)}>
          <ItemName>{item.title}</ItemName>
        </Content>
      ))
      }
    />
  </Container>
);

Categories.propTypes = {
  productsLoadCategory: PropTypes.func.isRequired,
  categories: PropTypes.shape.isRequired,
  products: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Categories);
