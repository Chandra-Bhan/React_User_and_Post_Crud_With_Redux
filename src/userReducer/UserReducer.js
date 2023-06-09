import { CREATE_USER, UPDATE_USER, DELETE_USER } from './UserConstant';

const initialState = { users: [] };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      return {
        users: state.users.map((user) =>
          user.id == action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
      default:
        return state;
  }
};
