import api from "../utils/api";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get("/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile =  (formData, history, edit = false) => async (dispatch) => {
  try {
    const res = await api.post("/profile",formData);
  } catch (error) {
    console.log(error);
  }
};
