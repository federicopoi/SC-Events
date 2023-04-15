import {
  GET_EVENTS,
  LOADING_EVENTS,
  ADD_EVENT,
  ADD_PERSON,
  DELETE_PERSON,
} from "../actions/types";
const initState = {
  events: [],
  loading: false,
  addSuccess: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        addSuccess: false,
      };
    case ADD_EVENT:
    case ADD_PERSON:
      return {
        ...state,
        events: [action.payload, ...state.events],
        addSuccess: true,
      };
    case DELETE_PERSON:
      return {
        ...state,
        events: [
          action.payload,
          ...state.events.filter((event) => event._id !== action.payload._id),
        ],
      };
    case LOADING_EVENTS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
