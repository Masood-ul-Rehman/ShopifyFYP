// import { FETCH_PRODUCTS_SUCCESS } from "../actions/productActions";

// const initState = {
//   products: []
// };

// const productReducer = (state = initState, action) => {
//   if (action.type === FETCH_PRODUCTS_SUCCESS) {
//     return {
//       ...state,
//       products: action.payload
//     };
//   }

//   return state;
// };

// export default productReducer;

import { FETCH_PRODUCTS_SUCCESS } from "../actions/productActions";

const initState = {
  products: [],
  isLoading: false,
  error: null
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
