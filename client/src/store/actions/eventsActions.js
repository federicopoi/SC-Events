import {
  GET_EVENTS,
  LOADING_EVENTS,
  ADD_EVENT,
  ADD_PERSON,
  DELETE_PERSON,
} from "./types";

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

export const addPerson = (person) => (dispatch) => {
  axios.post("/api/events/addPerson", person).then((res) =>
    dispatch({
      type: ADD_PERSON,
      payload: res.data,
    })
  );
};

export const deletePerson = (person) => (dispatch) => {
  axios.post("/api/events/deletePerson", person).then((res) =>
    dispatch({
      type: DELETE_PERSON,
      payload: res.data,
    })
  );
};

export const loadingEvents = () => {
  return {
    type: LOADING_EVENTS,
  };
};
