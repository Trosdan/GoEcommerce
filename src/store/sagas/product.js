import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/product';

export function* getProduct({ id }) {
  try {
    const { data } = yield call(api.get, `products/${id}`);
    yield put(ProductActions.ProductLoadSuccess(data));
  } catch (err) {
    yield put(ProductActions.ProductLoadFailure());
  }
}
