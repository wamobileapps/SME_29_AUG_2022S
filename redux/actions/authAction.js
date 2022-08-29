export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
import axios from 'axios';

export const BASE_URL = '';

export const SubmitClusterData = (token,data) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var requestOptions = {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(data),
    redirect: 'follow',
  };

  var result = [];
  return async dispatch => {
    // logic to make a post to REGISTER the user
    try {
      const data = await fetch(`${BASE_URL}/save-input1/${token}`, requestOptions).then(
        response => response.json(),
      );
      if (data.success) {
        dispatch({
          type: SAVE_CLUSTER_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type:  SAVE_CLUSTER__FAIL,
          payload: data,
        });
      }
      return data;
    } catch (error) {
      console.log(error);
      dispatch({
        type: SAVE_CLUSTER__FAIL,
        payload: false,
      });
      return {success: false};
    }
  };
};

