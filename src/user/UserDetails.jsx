import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../userReducer/UserConstant';

export default function UserDetails() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isUpdate, setisUpdate] = useState(false);
  const [updationID, setUpdationID] = useState('');
  const { users } = state;
  console.log(users);
  const handleDeletion = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };
  const handleUpdationData = (user) => {
    setisUpdate(true);
    setUpdationID(user.id);
    setName(user.name);
    setEmail(user.email);
  };
  const handleUpdation = () => {
    if (name !== '' && email !== '') {
      const tempdata = { id: updationID, name, email };
      dispatch({ type: UPDATE_USER, payload: tempdata });

      setName('');
      setEmail('');
      setisUpdate(false);
    } else {
      alert('please fill all fields');
    }
  };
  return (
    <div>
      {isUpdate && (
        <div
          className="border p-5"
          style={{ width: '30rem', margin: 'auto', marginTop: '10px' }}
        >
          <h1 className="text-warning">Updation Form</h1>
          <input
            className="form-control"
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn btn-info mt-3 ps-5 pe-5"
            onClick={handleUpdation}
          >
            Update
          </button>
        </div>
      )}
      <h1 className="text-secondary mt-3">USERS Details</h1>

      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeletion(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => handleUpdationData(user)}
                  >
                    Updation
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
