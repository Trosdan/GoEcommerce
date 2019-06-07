import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as product } from './product';
import { reducer as products } from './products';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  categories,
  product,
  products,
});

export default reducers;
