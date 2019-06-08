import { put, select } from 'redux-saga/effects';

import ShopCartActions from '~/store/ducks/shopCart';

export function* setValue() {
  let value = 0;
  const { data } = yield select(state => state.shopCart);
  data.map(a => (value += a.price));
  yield put(ShopCartActions.valueShopCart(value));
}
