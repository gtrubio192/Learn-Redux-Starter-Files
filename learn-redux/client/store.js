import { createStore, compose } from 'redux';
import { synchHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

// create and object for default data
// will typically make service call to get default states
const defaultState = {
  posts,
  comments
};

// think of it as database or master object, 
// aka 'source of truth' for data and different component states
const store = createStore(rootReducer, defaultState);

// weave in redux store into router history
// every route will have access to both its history, and store
export const history = synchHistoryWithStore(browserHistory, store);

export default store;