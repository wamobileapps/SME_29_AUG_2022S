import {
  // LOGIN_USER_AUTH_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions/authAction';

const initialState = {
  user: {},
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
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
