import * as actionTypes from "../actions/actionTypes";
import { resetActivityAdd } from "../actions/activityActions";

const initialState = {
  categories: [],
  activity: [],
  categoryActivities: [],
  userActivities: [],
  categoryID: null,
  activeMembers: []
};

const activities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case actionTypes.FETCH_CATEGORY_ACTIVITIES:
      return {
        ...state,
        categoryActivities: action.payload
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
    case actionTypes.ACTIVE_MEMBERS:
      let activeMembersFilter = state.categories.find(
        category => category.id === state.categoryID
      );
      console.log("activeMembersFilter ", activeMembersFilter);
      return {
        ...state,
        activeMembers: activeMembersFilter.activities
      };

    default:
      return state;
  }
};

export default activities;
