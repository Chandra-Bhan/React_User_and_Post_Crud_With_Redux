import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../userReducer/UserConstant';

export default function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmission = () => {
    if (name !== '' && email !== '') {
      const tempData = { id: new Date(), name, email };
      dispatch({ type: CREATE_USER, payload: tempData });
      setName('');
      setEmail('');
    } else {
      alert('please fill all fields');
    }
  };

  return (
    <div className="border p-5" style={{ width: '30rem', margin: 'auto' }}>
      <h3 className="text-info">Add User</h3>
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
        className="btn btn-success mt-3 ps-5 pe-5"
        onClick={handleSubmission}
      >
        Submit
      </button>
    </div>
  );
}
