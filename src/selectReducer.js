const initialState = {
  selectedProduct: {}
};

export default function selectReducer(state = initialState, action) {

  switch(action.type) {
    case 'SELECT_PRODUCT':
      console.log(action);
      return {
        ...state,
        selectedProduct: action.selectedProduct
      };

    default:
      return state;
  }

}