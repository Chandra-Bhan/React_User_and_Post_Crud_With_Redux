import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddUser from './AddUser';
import UserDetails from './UserDetails';

export default function User() {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  return (
    <div>
      <h1>User</h1>
      <AddUser />
      <UserDetails/>
    </div>
  );
}
