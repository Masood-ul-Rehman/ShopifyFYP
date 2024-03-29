
import { FETCH_PRODUCTS_SUCCESS, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_FAILURE } from "../actions/productActions";

const initState = {
  products: [],
  isLoading: false,
  singleProduct: null,
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
