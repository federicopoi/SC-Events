import { GET_EVENTS, LOADING_EVENTS, ADD_EVENT } from "../actions/types";
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
      return {
        ...state,
        events: [action.payload, ...state.events],
        addSuccess: true,
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
