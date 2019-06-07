import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  productsLoadRequest: ['id'],
  productsLoadSuccess: ['data'],
  productsLoadFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: '',
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_LOAD_REQUEST]: state => state.merge({ data: [], loading: true }),
  [Types.PRODUCTS_LOAD_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.PRODUCTS_LOAD_FAILURE]: state => state.merge({ loading: false }),
});
