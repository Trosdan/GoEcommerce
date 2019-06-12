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
  yield put(
    ShopCartActions.setQuantitySuccess({
      product: { ...product, quantity: product.quantity },
      index: updatedItems,
    }),
  );
}

export function* setValue() {
  let value = 0;
  const { data } = yield select(state => state.shopCart);
  data.map((a) => {
    const qty = parseInt(a.quantity, 10);
    if (qty) {
      value += a.price * qty;
    }
    value += 0;
    return a;
  });
  yield put(ShopCartActions.valueShopCart(value));
}
