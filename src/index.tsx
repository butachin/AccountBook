import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/Pages/HomePage";
import * as serviceWorker from "./serviceWorker";
import rootSaga from "./sagas";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";

const composeEnhancers = composeWithDevTools({});
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
