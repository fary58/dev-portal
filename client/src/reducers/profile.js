import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
      case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
          loading: false,
        };
    default:
      return state;
  }
}

export default profileReducer;