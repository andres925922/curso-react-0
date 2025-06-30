const initialState = {
    products: [],
    total: 0.00
};

const cartActions = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
};

const addToCart = (state, action) => {
    return {
        products: [...state.products, action.product],
        total: state.total + action.product.price
    };
};

const removeFromCart = (state, action) => {
    const indexToRemove = state.products.findLastIndex(product => product.id === action.product.id);

    if (indexToRemove === -1) {
        return state; // Product not found, return state unchanged
    }

    const updatedProducts = [
        ...state.products.slice(0, indexToRemove),
        ...state.products.slice(indexToRemove + 1)
    ];

    return {
        products: updatedProducts,
        total: state.total - action.product.price
    };
};
const clearCart = () => {
    return initialState;
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case cartActions.ADD_TO_CART:
            return addToCart(state, action);
        case cartActions.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        case cartActions.CLEAR_CART:
            return clearCart();
        default:
            return state;
    }
};

export { initialState, cartActions, cartReducer };