export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      return {
        ...state,
        friends: state.friends.filter(friend => {
          return action.id !== friend.id
        })
      };
    default:
      return state;
  }
}
