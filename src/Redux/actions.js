import {
  FETCHDATA_REQUEST,
  FETCHDATA_SUCCESS,
  FETCHDATA_FAILURE,
} from "./actionTypes";
import axios from "axios";

const fetchDataRequest = () => {
  return {
    type: FETCHDATA_REQUEST,
  };
};
const fetchDataSuccess = (payload) => {
  return {
    type: FETCHDATA_SUCCESS,
    payload: payload,
  };
};

const fetchDataFailure = () => {
  return {
    type: FETCHDATA_FAILURE,
  };
};

const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    let response = await axios.get(
      "https://json-server-mocker-data.herokuapp.com/highlights"
    );
    // console.log(response);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure);
  }
};

export { fetchData };
