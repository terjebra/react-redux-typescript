import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Store as ReduxStore
} from "redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducers from "./reducers/reducers";
import "./styles/main.css";
import "./containers/App";
import { GlobalState } from "./models/state";

const store: ReduxStore<GlobalState> = createStore(reducers);

import App from "./containers/App";

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  document.getElementById("app")
);
