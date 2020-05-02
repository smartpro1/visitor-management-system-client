import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  GET_ERRORS,
  GET_VISITORS,
  LOGIN_ADMIN,
  GET_VISITORS_LOGS,
  TRACK_VISITOR,
  TRACK_VISITORS,
} from "./types";
import { setJwtToken } from "../securityUtils/SetJwtToken";

export const loginAdmin = (adminCredentials, history) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/v1/admin/login`, adminCredentials);
    console.log(res);
    //extract token from res.data
    const { token } = res.data;
    // store the token in local storage
    localStorage.setItem("jwtToken", token);
    // set the token in the header using a function defined somewhere else
    setJwtToken(token);
    // decode token on React side
    const decodedJwtToken = jwtDecode(token);
    dispatch({
      type: LOGIN_ADMIN,
      payload: decodedJwtToken,
    });
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const logoutAdmin = () => (dispatch) => {
  // When the person logs out, we remove jwt from localStorage as well as the header
  localStorage.removeItem("jwtToken");
  setJwtToken(false);
  dispatch({
    type: LOGIN_ADMIN,
    payload: {},
  });
  window.location.href = "/";
};

export const registerAdmin = (adminCredentials, history) => async (
  dispatch
) => {
  try {
    await axios.post(`/api/v1/admin/register`, adminCredentials);
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
      `/api/v1/visitors/register-visitor`,
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
    const res = await axios.get(`/api/v1/visitors/registered`);

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

export const fetchVisitorsLog = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/visitors/logs`);
    dispatch({
      type: GET_VISITORS_LOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response,
    });
  }
};

export const signoutVisitor = (tag, history) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/visitors/logout/${tag}`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
    history.push("/");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const trackVisitor = (phone, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/visitors/${phone}`);
    dispatch({
      type: TRACK_VISITOR,
      payload: res.data,
    });
    history.push("/tracked-visitor");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

export const trackVisitors = (dateRange, history) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/v1/visitors/track-visitors`, dateRange);
    dispatch({
      type: TRACK_VISITORS,
      payload: res.data,
    });
    history.push("/tracked-visitors");
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};
