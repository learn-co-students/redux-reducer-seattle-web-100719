export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let friend = {
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id
      };
      return {
        friends: [...state.friends, friend]
      };
    case "REMOVE_FRIEND":
      let i;
      let arr = state.friends.filter(friend => friend.id!==action.id);
      return {
        friends: arr
      };
    default:
      return state;
  }
}
