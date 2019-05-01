import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppContainer from "./components/Navigation";

import SplashScreen from "./components/LandingPage/SplashScreen";

class App extends React.Component {
  state = { isLoading: true };
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 3000)
    );
  };
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
