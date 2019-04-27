import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

//this will fetch all activities
export const fetchCategories = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/categories/");
      const categories = res.data;

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

export const createActivity = (activityOBJ, navigation) => {
  return async () => {
    console.log(activityOBJ);
    try {
      await instance.post("/api/activity/create/", activityOBJ);
      navigation.replace("Categories");
    } catch (error) {
      console.error("Something went wrong (creating)", error);
    }
  };
};

export const catchCategoryID = categoryID => ({
  type: actionTypes.CATCH_CATEGORY_ID,
  payload: categoryID
});

export const updateActivity = (activityID, activityUpdate, navigation) => {
  console.log(activityUpdate);
  return async dispatch => {
    try {
      const res = await instance.put(
        `/api/${activityID}/update/`,
        activityUpdate
      );

      const activity = res.data;
      await dispatch({
        type: actionTypes.UPDATE_ACTIVITY,
        payload: activity
      });
      navigation.replace("MyProfile");
    } catch (error) {
      console.error("Something went wrong (updating)", error);
    }
  };
};

export const deleteActivity = activityID => {
  return async () => {
    try {
      await instance.delete(`/api/${activityID}/delete/`);
    } catch (error) {
      console.error("Something wnet wrong (deleting)", error);
    }
  };
};
