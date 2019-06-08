import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  productLoadRequest: ['id'],
  productLoadSuccess: ['data'],
  productLoadFailure: null,
});

export const ProductTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: {
    id: 0,
    name: 'None',
    brand: 'none',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 0.0,
  },
  loading: false,
  error: '',
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_LOAD_REQUEST]: state => state.merge({ loading: true }),
  [Types.PRODUCT_LOAD_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.PRODUCT_LOAD_FAILURE]: state => state.merge({ loading: false }),
});
