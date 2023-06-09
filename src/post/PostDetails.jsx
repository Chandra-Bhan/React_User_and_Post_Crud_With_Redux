import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../postReducer/PostConstant';

export default function PostDetails() {
  const state = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [isUpdate, setisUpdate] = useState(false);
  const [updationID, setUpdationID] = useState('');
  const { posts } = state;
  console.log(posts);
  const handleDeletion = (id) => {
    dispatch({ type: DELETE_POST, payload: id });
  };
  const handleUpdationData = (post) => {
    setisUpdate(true);
    setUpdationID(post.id);
    setName(post.name);
    setPost(post.post);
  };
  const handleUpdation = () => {
    if (name !== '' && post !== '') {
      const tempdata = { id: updationID, name, post };
      dispatch({ type: UPDATE_POST, payload: tempdata });

      setName('');
      setPost('');
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
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button
            className="btn btn-info mt-3 ps-5 pe-5"
            onClick={handleUpdation}
          >
            Update
          </button>
        </div>
      )}
      <h1 className="text-secondary mt-3">POSTS Details</h1>

      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User POST</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.post}</td>
              <td>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeletion(post.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => handleUpdationData(post)}
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
