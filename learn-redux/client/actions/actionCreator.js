// might need an action creator file for each component on larger apps

/* 
Actions are just objects with 2 things:
- action type
- index/id (to specify what component were acting upon)


*/

// increment action for likes
// 'increment' function is 'action creator' that 'dispatches' the action
export function increment(index) {
  // return statement is the 'action', gets dispatched
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index, 
    postId
  }
}

// Reducers receive 'dispatched' action, handle and update the state. 
// Create a reducer for every single piece of state (ex. posts and comments)