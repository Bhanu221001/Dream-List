// import {createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {thunk} from 'redux-thunk';
// import reducer from './reducer';

// const middleware = [thunk]

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;




import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger'; // Import the redux-logger middleware
import reducer from './reducer';

const middleware = [thunk, logger]; // Include the logger middleware

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;