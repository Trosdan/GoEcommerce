import { all, takeLatest } from 'redux-saga/effects';

import { getCategories } from './categories';
import { getProduct } from './product';
import { getProducts } from './products';

import { CategoriesTypes } from '~/store/ducks/categories';
import { ProductTypes } from '~/store/ducks/product';
import { ProductsTypes } from '~/store/ducks/products';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.CATEGORIES_LOAD_REQUEST, getCategories),
    takeLatest(ProductsTypes.PRODUCTS_LOAD_REQUEST, getProducts),
  ]);
}
