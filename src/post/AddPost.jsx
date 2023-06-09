import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../postReducer/PostConstant';

export default function AddPost() {
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const dispatch = useDispatch();

  const handleSubmission = () => {
    if (name !== '' && post !== '') {
      const tempData = { id: new Date(), name, post };
      dispatch({ type: CREATE_POST, payload: tempData });
      setName('');
      setPost('');
    } else {
      alert('please fill all fields');
    }
  };

  return (
    <div className="border p-5" style={{ width: '30rem', margin: 'auto' }}>
      <h3 className="text-info">Add Post</h3>
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
        placeholder="User Post"
        value={post}
        onChange={(e) => setPost(e.target.value)}
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
