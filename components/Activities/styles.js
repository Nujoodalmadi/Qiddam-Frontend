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
    fontSize: 25,
    color: "#8768A6",
    fontWeight: "bold",
    marginTop: 10,

    textAlign: "center"
  },

  postContent: {
    flex: 1,
    padding: 25,
    flexDirection: "column",
    backgroundColor: "#efefef",
    alignSelf: "center",
    width: 300,
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10
  },
  addContent: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    backgroundColor: "#efefef",
    alignSelf: "center",
    maxWidth: 360,
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10
  },
  postContentSub: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    backgroundColor: "#f7f8f9",
    alignSelf: "center",
    width: 260,
    borderRadius: 16,
    marginTop: 20,
    fontSize: 16,
    marginTop: 10,
    textAlign: "right"
  },

  postTitle: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "right"
  },
  postSub: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "right"
  },

  tags: {
    color: "#C75D7A",
    marginTop: 10,
    textAlign: "right"
  },
  date: {
    color: "#696969",
    marginTop: 5,
    textAlign: "right",
    alignSelf: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 3,
    marginTop: 3,
    marginBottom: 3
  },
  profile: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: "white"
  },

  containerD: {
    flex: 1,
    backgroundColor: "white",
    width: null,
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    color: "#696969",
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
    fontSize: 16,
    fontWeight: "700"
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
    fontSize: 20,

    fontWeight: "200",
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
    fontWeight: "100",
    fontSize: 10,
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
    fontSize: 15,
    padding: 5,
    color: "white"
  },
  addButton: {
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
  input: {
    flex: 1,
    fontSize: 15,
    alignSelf: "center",
    alignItems: "center"
  },
  item: {
    maxHeight: 40,
    flex: 1,
    fontSize: 15,
    alignSelf: "center",
    backgroundColor: "white",
    marginBottom: 10
  },
  itemLarge: {
    maxHeight: 160,
    flex: 1,
    fontSize: 15,
    alignSelf: "center",
    backgroundColor: "white",
    marginBottom: 10
  },

  peopleCount: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
    backgroundColor: "#04BFBF",
    alignItems: "center",
    justifyContent: "center"
  },
  female: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
    backgroundColor: "#8768A6",
    alignItems: "center",
    justifyContent: "center"
  },
  male: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,

    backgroundColor: "#049DD9",
    alignItems: "center",
    justifyContent: "center"
  },
  genderContainer: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#efefef",
    alignSelf: "center",
    width: 300,
    maxHeight: 80,
    borderRadius: 16,
    marginTop: 20
  },
  divider: {
    backgroundColor: "white",
    height: 2,
    marginTop: 10,
    marginBottom: 10
  },
  editButton: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef",
    borderRadius: 30,
    alignSelf: "center",
    margin: 5
  },
  editButtonText: {
    color: "#D9663D",
    fontSize: 15,
    fontWeight: "700"
  },
  purple: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
    backgroundColor: "#8768A6",
    alignItems: "center",
    justifyContent: "center"
  },
  blue: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 20,
    backgroundColor: "#049DD9",
    alignItems: "center",
    justifyContent: "center"
  },
  green: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
    backgroundColor: "#04BFBF",
    alignItems: "center",
    justifyContent: "center"
  },
  yellow: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
    backgroundColor: "#F2CA50",
    alignItems: "center",
    justifyContent: "center"
  },
  orange: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
    backgroundColor: "#D9663D",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
