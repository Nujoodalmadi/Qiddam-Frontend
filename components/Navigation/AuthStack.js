import { createStackNavigator } from "react-navigation";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import MyProfile from "../MyProfile";

import ProfileUpdate from "../UpdateProfile";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    MyProfile: MyProfile,
    ProfileUpdate: ProfileUpdate
  },
  {
    initialRouteName: "Login",

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

export default AuthStack;
