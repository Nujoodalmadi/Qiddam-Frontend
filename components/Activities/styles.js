import { StyleSheet } from "react-native";

const resizeMode = "center";

import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "green",
    alignItems: "flex-start",
    overflow: "hidden"
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 25
  },
  text: {
    marginBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  memberImage: {
    height: 30,
    width: 30,

    marginRight: 4,
    borderRadius: 15
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  countMembers: {
    color: "#20B2AA"
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969"
  },
  groupName: {
    fontSize: 23,
    color: "#1E90FF"
  },
  //////here
  groupMembersContent: {
    flexDirection: "row",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "white",
    padding: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    padding: 10
  },
  header: {
    marginTop: 30,
    padding: 20,
    alignItems: "center",
    alignSelf: "center",
    width: 250,
    backgroundColor: "#efefef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },

  headerTitle: {
    fontSize: 20,
    color: "#8768A6",
    marginTop: 10,

    textAlign: "center"
  },

  postContent: {
    flex: 1,
    padding: 30,
    backgroundColor: "#efefef",
    alignSelf: "center",
    width: 300,
    borderRadius: 16,
    marginTop: 20
  },
  postTitle: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "right"
  },
  postDescription: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "right"
  },
  tags: {
    color: "#C75D7A",
    marginTop: 10,
    textAlign: "right"
  },
  date: {
    color: "#696969",
    marginTop: 10,
    textAlign: "right",
    alignSelf: "center"
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "white",
    marginLeft: 3,
    marginTop: 3,
    marginBottom: 3
  },
  profile: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: "white",
    backgroundColor: "rgb(222, 226, 226)"
  },

  containerD: {
    flex: 1,
    backgroundColor: "white",
    width: null
  },
  name: {
    fontSize: 20,
    color: "#04BFBF",
    fontWeight: "300",
    alignSelf: "center",
    marginLeft: 10
  },
  shareButton: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9663D",
    borderRadius: 30,
    alignSelf: "center"
  },
  shareButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  qiddam: {
    width: 30,
    height: 30
  },
  pageView: {
    flex: 1,
    resizeMode,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  categoryList: {
    flexGrow: 1,

    marginTop: 10,
    marginBottom: 10,
    height: 164,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor: "#efefef"
  },
  activityList: {
    flexGrow: 1,

    marginTop: 10,
    marginBottom: 10,
    height: 100,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor: "#efefef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  background: {
    backgroundColor: "white",
    width: null,
    flex: 1
  },
  titleList: {
    color: "#D9663D",
    fontSize: 20,
    fontWeight: "200"
  },
  titleTextCategory: {
    color: "#D9663D",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 30,
    borderWidth: 6,
    padding: 12,
    borderColor: "white"
  },
  catHeader: {
    flexDirection: "row",
    flex: 1,
    width: WIDTH,
    padding: 20,
    backgroundColor: "#bbc1c1"
  },

  titleStyle: {
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    color: "#8768A6"
  },
  subtitleStyleOrg: {
    color: "#a1a3a2"
  },
  createForm: {
    borderRadius: 35,
    padding: 15
  },
  addButtonText: {
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    color: "white",
    fontWeight: "bold"
  },
  addButton: {
    borderRadius: 30,
    width: 140,
    height: 48,
    padding: 7,
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
  input: {
    height: 35,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,

    fontSize: 15,
    marginTop: 10,
    alignSelf: "center"
  },
  item: {
    marginTop: 100,
    alignItems: "flex-end"
  }
});

export default styles;
