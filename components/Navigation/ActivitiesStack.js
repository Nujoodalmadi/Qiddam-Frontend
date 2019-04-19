import { createStackNavigator } from "react-navigation";

import Categories from "../Activities/Categories";
import ActivitiesList from "../Activities/ActivitiesList";
import ActivityDetail from "../Activities/ActivityDetail";

const ActivitiesStack = createStackNavigator(
  {
    Categories: Categories,
    ActivitiesList: ActivitiesList,
    ActivityDetail: ActivityDetail
  },
  {
    initialRouteName: "Categories",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(155, 166, 87)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default ActivitiesStack;