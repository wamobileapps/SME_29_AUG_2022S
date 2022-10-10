export const ADD_CART_SUCCESS= 'ADD_CART_SUCCESS';
export const ADD_CART_FAIL = 'ADD_CART_FAIL';

export const addCartPrescription = (data) => {
    console.log(data);
  return async dispatch => {
        dispatch({
          type: ADD_CART_SUCCESS,
          payload: data,
        });
        return data
  };
};

