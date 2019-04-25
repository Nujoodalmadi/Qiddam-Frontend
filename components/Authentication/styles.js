import { StyleSheet } from "react-native";

const resizeMode = "cover";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(184, 224, 224)"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "transparent"
  },

  loginButton: {
    backgroundColor: "rgb(217,102,61)",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 1
    }
  },
  loginText: {
    color: "white"
  },
  bgImage: {
    flex: 1,
    resizeMode,

    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  btnText: {
    color: "#F2CA50",
    fontWeight: "bold"
  },
  textByRegister: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  gender: {
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 100,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },

  dateIcon: {
    position: "absolute",
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    borderWidth: 0
  }
  // ... You can check the source to find the other keys.
});

export default styles;
