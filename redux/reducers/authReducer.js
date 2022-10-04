import {
  // LOGIN_USER_AUTH_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  ADD_PRESCRIPTION_SUCCESS,
  ADD_PRESCRIPTION__FAIL,
} from '../actions/authAction';

const initialState = {
  user: {},
  error: {},
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_PRESCRIPTION__FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
  }

  return state;
}
