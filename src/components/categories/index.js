import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  CategoriesList,
  Content,
  ItemName,
  ContentSelect,
  ItemNameSelect,
} from './styles';

// import { Container } from './styles';

const categories = ({ categories, productsLoadCategory, products }) => (
  <Container>
    <CategoriesList
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

const mapStateToProps = state => ({
  products: state.products,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(categories);
