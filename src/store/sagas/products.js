import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* getProducts({ id }) {
  try {
    const { data } = yield call(api.get, `category_products/${id}`);
    yield put(ProductsActions.productsLoadSuccess(data));
  } catch (err) {
    yield put(ProductsActions.productsLoadFailure());
  }
}
