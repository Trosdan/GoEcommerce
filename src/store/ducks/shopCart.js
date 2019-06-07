import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addShopCart: ['data'],
  removeShopCart: ['data'],
});

export const CategoriesTypes = Types;
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
  [Types.CATEGORIES_LOAD_REQUEST]: state => state.merge({ loading: true }),
  [Types.CATEGORIES_LOAD_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.CATEGORIES_LOAD_FAILURE]: state => state.merge({ loading: false }),
});
