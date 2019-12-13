export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let friend = {
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id
      };
      state = {
        friends: [...state.friends, friend]
      };
      return state;
    case "REMOVE_FRIEND":
      let i;
      let arr = state.friends;
      state.friends.map((friend, index) => {
        if (friend.id === action.id) {
          i = index;
          arr.splice(i, 1);
        }
      });
      const res = {
        friends: arr
      };
      return res;
    default:
      return state;
  }
}
