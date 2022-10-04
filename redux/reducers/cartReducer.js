import {
  // LOGIN_USER_AUTH_SUCCESS,
  ADD_CART_SUCCESS
} from '../actions/cartAction';

const initialState = {
  cart: [],
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
  }

  return state;
}
