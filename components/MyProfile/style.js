import { StyleSheet } from "react-native";

import img from "../../img/profile.png";

const resizeMode = "center";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: "100%",
    alignSelf: "center",
    flex: 1
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  },
  inviteCard: {
    alignSelf: "center",
    width: "90%",
    marginBottom: 1
  },
  pageView: {
    backgroundColor: "white"
  },
  qiddam: {
    width: 30,
    height: 30
  },
  flatList: {
    maxHeight: 200
  },
  qiddamWalla: {
    fontSize: 20,
    color: "#D9663D",
    textAlign: "right",
    marginRight: 14,
    fontWeight: "bold"
  }
});

export default styles;
