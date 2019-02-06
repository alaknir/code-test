import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import Dashboard from "./layouts/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Dashboard />
        </main>
      </Provider>
    );
  }
}

export default App;
