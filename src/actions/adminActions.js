import axios from "axios";
import { GET_ERRORS, GET_VISITORS } from "./types";

export const loginAdmin = (adminCredentials, history) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/admin/login`, adminCredentials);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const registerAdmin = (adminCredentials, history) => async (
  dispatch
) => {
  try {
    axios.post(`/api/v1/admin/register`, adminCredentials);
    history.push("/login");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const registerVisitor = (visitorDetails, history) => async (
  dispatch
) => {
  try {
    const tag = await axios.post(
      `/api/v1/visitor/register-visitor`,
      visitorDetails
    );
    console.log(tag);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const fetchVisitors = () => async (dispatch) => {
  try {
    const res = await axios.post(`/api/v1/visitors`);
    dispatch({
      type: GET_VISITORS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
