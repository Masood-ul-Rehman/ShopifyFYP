import { FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_FAILURE } from "../actions/productActions";

const initState = {
  isLoading: false,
  singleProduct: null,
  error: null
};

const singleProductReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    case FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default singleProductReducer;