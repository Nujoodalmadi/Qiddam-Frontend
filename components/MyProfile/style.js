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
  container: {
    flex: 1,
    backgroundColor: "white",
    width: null,
    flexDirection: "column",
    justifyContent: "center"
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

  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "black",
    marginTop: 4
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
  qiddamWalla: {
    fontSize: 20,
    color: "#D9663D",
    textAlign: "right",
    marginRight: 14,
    fontWeight: "bold"
  },

  flatList: {
    maxHeight: 200
  },
  listItem: {
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: "#efefef"
  },

  postContent: {
    flex: 1,
    padding: 5,
    flexDirection: "column",
    backgroundColor: "#efefef",
    alignSelf: "center",
    width: 350,
    maxHeight: 180,
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    color: "#696969",
    fontWeight: "500"
  },
  subtitle: {
    fontSize: 16,
    color: "#696969"
  },
  itemContainer: {
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 5
  },
  logoutButton: {
    borderRadius: 20,
    width: 60,
    alignSelf: "center",
    backgroundColor: "rgba(242, 202, 80, 1)",
    shadowColor: "#8768A6",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  logoutButtonText: {
    textAlign: "center",
    fontSize: 15,
    padding: 5,
    color: "white"
  }
});

export default styles;
