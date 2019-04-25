import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  activity: [],
  categoryActivities: [],
  userActivities: []
};

const activities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case actionTypes.ACTIVITY_DETAILS:
      return {
        ...state,
        activity: action.payload
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

    case actionTypes.FETCH_USER_ACTIVITIES:
      cat = action.payload.map(category => category.activities);
      return {
        ...state,
        userActivities: cat
      };
    default:
      return state;
  }
};

export default activities;
