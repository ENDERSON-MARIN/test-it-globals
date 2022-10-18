import axios from "axios";

import {GET_ALL_PRODUCTS} from "./types";

/* GET ALL PRODUCTS */
export function getAllProducts() {
    return async function (dispatch) {
      try {
        const products = await axios.get("/products");
        return dispatch({
          type: GET_ALL_PRODUCTS,
          payload: products.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
