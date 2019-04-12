import store from './store'
export function searchProducts() {
  return dispatch => {
    dispatch(searchProductsSuccess(store.getState()))
      .catch(error => dispatch(searchProductsFailure(error)));
  };
}

export const SEARCH_PRODUCTS_BEGIN   = 'SEARCH_PRODUCTS_BEGIN';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAILURE = 'SEARCH_PRODUCTS_FAILURE';

export const searchProductsBegin = () => ({
  type: SEARCH_PRODUCTS_BEGIN
});

export const searchProductsSuccess = products => ({
  type: SEARCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const searchProductsFailure = error => ({
  type: SEARCH_PRODUCTS_FAILURE,
  payload: { error }
});