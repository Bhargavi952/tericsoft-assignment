import {
  FETCHDATA_REQUEST,
  FETCHDATA_SUCCESS,
  FETCHDATA_FAILURE,
} from "./actionTypes";

const init = {
  highlights: [],
  isloading: false,
};

export const highLightsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCHDATA_REQUEST: {
      return {
        ...state,
        isloading: true,
      };
    }
    case FETCHDATA_SUCCESS: {
      return {
        ...state,
        highlights: payload,
        isloading: false,
      };
    }
    case FETCHDATA_FAILURE: {
      return {
        ...state,
        payload,
        isloading: false,
      };
    }
    default:
      return state;
  }
};
