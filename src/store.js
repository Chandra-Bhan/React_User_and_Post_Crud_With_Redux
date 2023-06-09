import { createStore, combineReducers } from 'redux';
import { userReducer } from './userReducer/UserReducer';
import { postReducer } from './postReducer/PostReducer';

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
});

export const store = createStore(rootReducer);
