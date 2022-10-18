import { GET_ALL_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
