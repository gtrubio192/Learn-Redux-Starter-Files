import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

// These 2 functions will surface our store data and pass/connect them to our app

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatch(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// App is a wrapper for our Main component.
// After we connect state and dispatchs, we immediately call Main to run
// Main will be injected with the current store and dispatch types
const App = connect(mapStateToProps, mapDispatch)(Main);

export default App;