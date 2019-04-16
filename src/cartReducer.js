const initialState = {
    cartProducts: []
};

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartProducts: state.cartProducts.concat(action.product),
            };

        case 'CHECK_OUT_CART':
            return{
                ...state,
                cartProducts: [],
            };

        case 'REMOVE_ITEM':
            const index = action.id;
            const length = state.cartProducts.length;
            return{
                ...state,
                cartProducts: state.cartProducts.slice(0, index).concat(state.cartProducts.slice(index+1, length))
            };

        default:
            return state;
    }
}