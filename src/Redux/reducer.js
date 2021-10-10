import {
  FETCHDATA_REQUEST,
  FETCHDATA_SUCCESS,
  FETCHDATA_FAILURE,
} from "./actionTypes";

const init = {
  highlights: [],
};

export const highLightsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCHDATA_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCHDATA_SUCCESS: {
      return {
        ...state,
        highlights: payload,
      };
    }
    case FETCHDATA_FAILURE: {
      return {
        ...state,

        payload,
      };
    }
    default:
      return state;
  }
};
