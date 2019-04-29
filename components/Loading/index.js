import React, { Component } from "react";
import loagindimg from "../../img/loadingicon.svg";
/* -- get loading component -- */
class Loading extends Component {
  render() {
    return <img src={loagindimg} alt="loadImg" style={{ width: "200px" }} />;
  }
}

export default Loading;
