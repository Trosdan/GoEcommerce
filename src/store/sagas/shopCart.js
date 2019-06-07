import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';

export function* getCategories() {
  try {
    const { data } = yield call(api.get, 'categories');
    yield put(CategoriesActions.categoriesLoadSuccess(data));
  } catch (err) {
    yield put(CategoriesActions.categoriesLoadFailure());
  }
}
