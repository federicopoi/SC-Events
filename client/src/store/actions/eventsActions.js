import { GET_EVENTS, LOADING_EVENTS, ADD_EVENT } from "./types";

import { returnErrors } from "./errorActions";
import axios from "axios";

export const getEvents = () => (dispatch) => {
  dispatch(loadingEvents());
  axios
    .get("/api/events")
    .then((res) =>
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addEvent = (event) => (dispatch, getState) => {
  axios
    .post("/api/events", event)
    .then((res) =>
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(
        returnErrors(err.response.data, err.response.status, "ADD_EVENT_ERROR")
      )
    );
};

export const loadingEvents = () => {
  return {
    type: LOADING_EVENTS,
  };
};
