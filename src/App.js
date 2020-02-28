import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConfigureStore } from "/home/priyanka/react-appl/src/Redux/configureStore.js";
import MainComponent from "/home/priyanka/react-appl/src/MainComponent.js";
import { BrowserRouter } from "react-router-dom";
const store = ConfigureStore();
console.log(store);
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Provider store={store} >
          <MainComponent />
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;
