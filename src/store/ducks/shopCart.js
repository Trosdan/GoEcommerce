import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addShopCart: ['product'],
  removeShopCart: ['product'],
  valueShopCart: ['value'],
});

export const ShopCartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  value: 0,
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_SHOP_CART]: (state, { product }) => state.merge({ data: [...state.data, product] }),
  [Types.REMOVE_SHOP_CART]: (state, { product }) => {},
  [Types.VALUE_SHOP_CART]: (state, { value }) => state.merge({ value }),
});
