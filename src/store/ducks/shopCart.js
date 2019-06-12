import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addShopCartRequest: ['product'],
  addShopCartSuccess: ['product'],
  removeShopCartRequest: ['product'],
  removeShopCartSuccess: ['data'],
  valueShopCart: ['value'],
  setQuantityRequest: ['product'],
  setQuantitySuccess: ['data'],
});

export const ShopCartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  value: 0,
});

/* Reducers */

export const removeShopCart = state => state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_SHOP_CART_SUCCESS]: (state, { product }) => state.merge({ data: [...state.data, product] }),
  [Types.REMOVE_SHOP_CART_SUCCESS]: (state, { data }) => state.merge({ data }),
  [Types.SET_QUANTITY_SUCCESS]: (state, { data }) => state.setIn(['data', data.index], data.product),
  [Types.VALUE_SHOP_CART]: (state, { value }) => state.merge({ value }),
});
