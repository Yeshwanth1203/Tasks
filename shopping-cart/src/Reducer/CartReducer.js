const initialState = {
  items: [],
  isCartVisible: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_VISIBILITY':
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
