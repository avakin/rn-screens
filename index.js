import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App.js";
import configureStore from "./src/store/configureStore";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent("first", () => RNRedux);
