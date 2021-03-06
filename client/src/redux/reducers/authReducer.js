import * as types from "../constants/authConstants";
import { ACCOUNT_DELETED } from "../constants/profileConstants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);

      return { ...state, ...payload, isAuthenticated: true, loading: false };

    case types.USER_LOADED:
      return { ...state, isAuthenticated: true, loading: false, user: payload };

    case types.REGISTER_FAIL:
    case types.AUTH_ERROR:
    case types.LOGIN_FAIL:
    case types.LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem("token");

      return { ...state, token: null, isAuthenticated: false, loading: false };

    default:
      return state;
  }
};

export default authReducer;
