import { put, select } from 'redux-saga/effects';

import ShopCartActions from '~/store/ducks/shopCart';

export function* addProduct({ product }) {
  yield put(
    ShopCartActions.addShopCartSuccess({
      ...product,
      quantity: '1',
      id: parseInt(Math.random() * 1000, 10),
    }),
  );
}

export function* removeProduct({ product }) {
  const { data } = yield select(state => state.shopCart);
  const updatedItems = data.filter(item => item.id !== product.id);
  yield put(ShopCartActions.removeShopCartSuccess(updatedItems));
}

export function* changeQuantity({ product }) {
  const { data } = yield select(state => state.shopCart);
  const updatedItems = data.findIndex(item => item.id === product.id);
  data[updatedItems] = { ...product, quantity: product.quantity };
  yield put(ShopCartActions.setQuantitySuccess(data));
}

export function* setValue() {
  let value = 0;
  const { data } = yield select(state => state.shopCart);
  data.map(a => (value += a.price * parseInt(a.quantity)));
  yield put(ShopCartActions.valueShopCart(value));
}
