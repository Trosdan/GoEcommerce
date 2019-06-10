import { all, takeLatest } from 'redux-saga/effects';

import { getCategories } from './categories';
import { getProduct } from './product';
import { getProducts } from './products';
import { addProduct, setValue, removeProduct, changeQuantity } from './shopCart';

import { CategoriesTypes } from '~/store/ducks/categories';
import { ProductTypes } from '~/store/ducks/product';
import { ProductsTypes } from '~/store/ducks/products';
import { ShopCartTypes } from '~/store/ducks/shopCart';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.CATEGORIES_LOAD_REQUEST, getCategories),
    takeLatest(ProductsTypes.PRODUCTS_LOAD_REQUEST, getProducts),
    takeLatest(ProductTypes.PRODUCT_LOAD_REQUEST, getProduct),

    takeLatest(ShopCartTypes.ADD_SHOP_CART_REQUEST, addProduct),
    takeLatest(ShopCartTypes.ADD_SHOP_CART_SUCCESS, setValue),

    takeLatest(ShopCartTypes.REMOVE_SHOP_CART_REQUEST, removeProduct),
    takeLatest(ShopCartTypes.REMOVE_SHOP_CART_SUCCESS, setValue),

    takeLatest(ShopCartTypes.SET_QUANTITY_REQUEST, changeQuantity),
  ]);
}
