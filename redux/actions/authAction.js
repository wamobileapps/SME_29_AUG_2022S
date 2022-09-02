export const GET_MEDICINE_SUCCESS = 'GET_MEDICINE_SUCCESS';
export const GET_MEDICINE_FAIL = 'GET_MEDICINE_FAIL';


export const BASE_URL = 'http://ec2-44-211-73-168.compute-1.amazonaws.com:8080/api/v1/medicine';

export const getMedicineData = (token,data) => {
  var raw = "";

  var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
  };
  var result = [];
  return async dispatch => {
    try {
      const data = await fetch(BASE_URL, requestOptions)
        .then(response => response.json())
      if (data.length != 0) {
        dispatch({
          type: GET_MEDICINE_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type:  GET_MEDICINE_FAIL,
          payload: data,
        });
      }
      return data;
    } catch (error) {
      console.log(error);
      return {success: false};
    }
  };
};

