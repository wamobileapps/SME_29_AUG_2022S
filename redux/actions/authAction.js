export const GET_MEDICINE_SUCCESS = 'GET_MEDICINE_SUCCESS';
export const GET_MEDICINE_FAIL = 'GET_MEDICINE_FAIL';
export const GET_MEDICINE_DETAILS_SUCCESS = 'GET_MEDICINE_DETAILS_SUCCESS';
export const GET_MEDICINE_DETAILS_FAIL = 'GET_MEDICINE_DETAILS_FAIL';


export const BASE_URL = 'http://ec2-44-211-73-168.compute-1.amazonaws.com:8080/api/v1/';

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
      const data = await fetch(BASE_URL + 'medicine', requestOptions)
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


export const getMedicineById = (id) => {
  console.log('sdfdskfl-->', id)
  var raw = "";

  var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
  };
  var result = [];
  return async dispatch => {
    try {
      const data = await fetch(BASE_URL + 'medicine/' + id, requestOptions)
        .then(response => response.json())
      if (data.length != 0) {
        dispatch({
          type: GET_MEDICINE_DETAILS_SUCCESS,
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

