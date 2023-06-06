import axios from "axios";
import storeInfo from "../../storeData.json";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_SINGLE_PRODUCT_SUCCESS = "FETCH_SINGLE_PRODUCT_SUCCESS";
export const FETCH_SINGLE_PRODUCT_REQUEST = "FETCH_SINGLE_PRODUCT_SUCCESS";
export const FETCH_SINGLE_PRODUCT_FAILURE = "FETCH_SINGLE_PRODUCT_FAILURE";

// const fetchProductsSuccess = products => ({
//   type: FETCH_PRODUCTS_SUCCESS,
//   payload: products
// });

// // fetch products
// export const fetchProducts = products => {
//   return dispatch => {
//     dispatch(fetchProductsSuccess(products));
//   };
// };
export const fetchProducts = () => {
  return async function (dispatch, getState) {
    const response = await axios.post(
      "http://localhost:5000/api/product",
      storeInfo.store_id
    );

    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  };
};

export const fetchSingleProduct = (id) => {
  return async function (dispatch, getState) {
    const response = await axios.get(`http://localhost:5000/api/product/${id}`);
    dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: response.data });
  };
};
