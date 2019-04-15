// API Requests
import axios from "axios";
// Decrypt Token
import jwt_decode from "jwt-decode";
// ActionTypes
import * as actionTypes from "./actionTypes";
import { AsyncStorage } from "react-native";

const setAuthToken = token => {
  if (token) {
    AsyncStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return async dispatch => {
    // Get token
    const token = AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);
      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        dispatch(setCurrentUser(user));
        setAuthToken(token);
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        userData
      );
      let user = await response.data;
      let decodeUser = jwt_decode(user.token);
      setAuthToken(user.token);
      await dispatch(setCurrentUser(decodeUser));
      dispatch(fetchProfile());
      //   navigation.navigate("Profile");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      await axios.post("http://127.0.0.1:8000/api/signup/", userData);

      dispatch(login(userData, navigation));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = navigation => {
  setAuthToken();
  navigation.navigate("Login");
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
