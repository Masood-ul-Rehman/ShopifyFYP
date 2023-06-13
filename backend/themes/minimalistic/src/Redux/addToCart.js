export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_CART = "INCREMENT_CART";
export const DECREMENT_CART = "DECREMENT_CART";
export const CLEAR_PARTICUALR = "CLEAR_PARTICUALR";
export const CLEAR_CART = "CLEAR_CART";


export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const incrementCart = (productId) => ({
  type: INCREMENT_CART,
  payload: productId,
})

export const decrementCart = (productId) => ({
  type: DECREMENT_CART,
  payload: productId,
})

export const clearParticular = (product) => ({
  type: CLEAR_PARTICUALR,
  payload: product,
})

export const clearCart = () => ({
  type: CLEAR_CART,
})

// reducers

const initialState = {
  cartItems: [],
};

const addTocartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

      case DECREMENT_CART:
        let isFirstMatchRemoved = false;
        
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => {
            if (item._id === action.payload && !isFirstMatchRemoved) {
              isFirstMatchRemoved = true;
              return false; // Exclude the first matching item
            }
            return true; // Keep all other items
          }),
        };


      case INCREMENT_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };

      case CLEAR_PARTICUALR:
        return {
          ...state,
          cartItems: state.cartItems.filter((item, index) => {
            return item._id !== action.payload
          }),
        };

      case CLEAR_CART:
        return{
          cartItems: []
        }

    default:
      return state;
  }
};

export default addTocartReducer;
