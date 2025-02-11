
// Reducers receive 'dispatched' action, handle and update the state. 
// Create a reducer for every single piece of state (ex. posts and comments)

// Reducer takes in 2 things
// - the action (info about what happened)
// - copy of current state

// Reducer takes the action, interprets it, 
// then makes a copy of current state/store, 
// edits it with the action, and return an updated store
// then react will take over and update DOM

// ** Every reducer runs anytime an action is dispatched.
// up to logic inside of a reducer to do anything with the dispatch


function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      console.log("Incrementing Likes!!", state[i]);
    
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;