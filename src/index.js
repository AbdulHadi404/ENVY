import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/rootReducer';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from 'redux-firestore';
import fbconfig from './fbconfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbconfig)
  )
);

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.Fragment>
        {/* <React.StrictMode> */}
        <Router>
          <App />
        </Router>
        {/* </React.StrictMode> */}
      </React.Fragment>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
