import { CREATE_POST, UPDATE_POST, DELETE_POST } from './PostConstant';

const initialState = { posts: [] };

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case UPDATE_POST:
      return {
        posts: state.posts.map((post) =>
          post.id == action.payload.id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
