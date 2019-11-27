// Redux can really only accept 1 reducer in the end
// We need to combine all of our individual reducers here in root reducer 
// ** Every reducer runs anytime an action is dispatched.

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;