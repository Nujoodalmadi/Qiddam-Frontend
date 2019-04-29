import * as actionTypes from "../actions/actionTypes";
import { resetActivityAdd } from "../actions/activityActions";

const initialState = {
  categories: [],
  activity: [],
  categoryActivities: [],
  userActivities: [],
  categoryID: null
};

const activities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case actionTypes.FETCH_CATEGORY_ACTIVITIES:
      const allCategories = action.payload;
      const categoryActivities = allCategories.find(
        category => action.categoryID === category.id
      );
      return {
        ...state,
        categoryActivities: categoryActivities
      };
    case actionTypes.ACTIVITY_DETAILS:
      return {
        ...state,
        activity: action.payload
      };
    case actionTypes.CATCH_CATEGORY_ID:
      return {
        ...state,
        categoryID: action.payload
      };
    case actionTypes.UPDATE_ACTIVITY:
      return {
        ...state
      };
    case actionTypes.DELETE_ACTIVITY:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default activities;
