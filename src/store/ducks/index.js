import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as product } from './product';
import { reducer as products } from './products';
import { reducer as shopCart } from './shopCart';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  categories,
  product,
  products,
  shopCart,
});

export default reducers;
