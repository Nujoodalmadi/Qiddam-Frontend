// API Requests
import axios from "axios";
// Decrypt Token
import jwt_decode from "jwt-decode";
import { Alert } from "react-native";
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
    const token = AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      const user = jwt_decode(token);

      if (user.exp >= currentTime) {
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

      await dispatch(fetchMyProfile());

      navigation.replace("MyProfile");
    } catch (error) {
      Alert.alert(
        "حدث خطأ ما",
        "أعد إدخال البيانات",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };
}; //CHANGE THIS > HANLE AUTH ERROR

export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      await axios.post("http://127.0.0.1:8000/api/signup/", userData);

      dispatch(login(userData, navigation));
    } catch (error) {
      Alert.alert(
        "حدث خطأ ما",
        "أعد إدخال البيانات",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };
}; //CHANGE THIS > HANLE AUTH ERROR

export const logout = navigation => {
  setAuthToken();
  navigation.replace("Login");
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const fetchMyProfile = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/profile/");
      const profile = res.data;
      dispatch({
        type: actionTypes.FETCH_MY_PROFILE,
        payload: profile
      });
    } catch (error) {
      console.error("Someting what wrong", error);
    }
  };
};

export const fetchProfile = (profileID, navigation) => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/profile/${profileID}/`
      );
      const profile = res.data;
      dispatch({
        type: actionTypes.FETCH_PROFILE,
        payload: profile
      });
      navigation.navigate("Profile");
    } catch (error) {
      console.error("Someting what wrong", error);
    }
  };
};

// export const error = error => ({
//   type: actionTypes.ERROR,
//   payload: error
// });
