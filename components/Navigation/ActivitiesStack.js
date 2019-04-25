import { createStackNavigator } from "react-navigation";

import Categories from "../Activities/Categories";
import ActivitiesList from "../Activities/ActivitiesList";
import ActivityDetail from "../Activities/ActivityDetail";
import ActivityCreate from "../Activities/ActivityCreateUpdate/ActivityCreateForm";
import Profile from "../Profile/index";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";

const ActivitiesStack = createStackNavigator(
  {
    Categories: Categories,
    ActivitiesList: ActivitiesList,
    ActivityDetail: ActivityDetail,
    ActivityCreate: ActivityCreate,
    Profile: Profile
  },
  {
    initialRouteName: "Categories",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#bbc1c1"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default ActivitiesStack;
