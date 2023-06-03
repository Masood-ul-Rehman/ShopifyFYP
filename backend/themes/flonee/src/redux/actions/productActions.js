import axiosInstance from "../axios"

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

// fetch products
// export const fetchProducts = products => {
//   return dispatch => {
//     dispatch(fetchProductsSuccess(products));
//   };
// };


export const fetchProducts = () => {
  return dispatch => {
    // Dispatch an action to indicate that fetching has started (optional)
    dispatch({ type: "FETCH_PRODUCTS_START" });

    // Make the API call using Axios
    axiosInstance
      .get("http://localhost:5000/api/product")
      .then(response => {
        // Dispatch the success action with the received products
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        // Handle any errors and dispatch an error action (optional)
        dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error.message });
      });
  };
};






