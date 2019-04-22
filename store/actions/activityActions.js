import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

//this will fetch all activities
export const fetchCategories = () => {
  return async dispatch => {
    try {
      console.log("before the fetch");
      const res = await instance.get("/api/categories/");
      const categories = res.data;
      console.log("after the fetch");
      console.log("this is the categories", categories);
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: categories
      });
    } catch (error) {
      console.error("Somthing went wrong with ", error);
    }
  };
};

//this will fetch activities in a spicific category
export const fetchActivitiesCat = categoryID => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/categories/");
      const activities = res.data;
      dispatch({
        type: actionTypes.FETCH_CATEGORY_ACTIVITIES,
        payload: activities,
        categoryID: categoryID
      });
    } catch (error) {
      console.error("Something went wrong while fetching activities ", error);
    }
  };
};

export const activityDetails = activityID => {
  return async dispatch => {
    try {
      const res = await instance.get(`/api/${activityID}`);
      const activity = res.data;
      dispatch({
        type: actionTypes.ACTIVITY_DETAILS,
        payload: activity
      });
    } catch (error) {
      console.error("Something went wrong with ", error);
    }
  };
};

export const createActivity = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/activity/create");
      const activity = res.data;

      dispatch({
        type: actionTypes.CREATE_ACTIVITY,
        payload: activity
      });
    } catch (error) {
      console.error("Something wnet wrong", error);
    }
  };
};

export const updateActivity = (activity, activityUpdate) => {
  return async dispatch => {
    try {
      const res = await instance.put(
        `/api/activity/update/${activity}`,
        activityUpdate
      );
      const response = res.data;
      dispatch({
        type: actionTypes.UPDATE_ACTIVITY,
        payload: response
      });
    } catch (error) {
      console.error("Something wnet wrong", error);
    }
  };
};
export const deleteActivity = activityID => {
  return async dispatch => {
    try {
      const res = await instance.get(`/api/activity/delete/${activityID}`);
      const activityId = res.data;
      dispatch({
        type: actionTypes.DELETE_ACTIVITY,
        payload: activityId
      });
    } catch (error) {
      console.error("Something wnet wrong", error);
    }
  };
};
