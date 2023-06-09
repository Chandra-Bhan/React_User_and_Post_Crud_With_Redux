import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddPost from './AddPost';
import PostDetails from './PostDetails';

export default function Post() {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  return (
    <div>
      <h1>Post</h1>
      <AddPost />
      <PostDetails />
    </div>
  );
}
