import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";
import products from "./data/products.json";
import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = document.getElementById("root");

// fetch products from json file
// store.dispatch(fetchProducts(products));
store.dispatch(fetchProducts());

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
