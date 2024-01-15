import React from "react";
import { useState } from 'react';

function AddPost(props) {

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddPost(formData);
    e.target.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="new-post form-group"
    >
      Title
      <input
        type="text"
        name="title"
        required
        minLength={1}
        className="form-control"
        value={formData.title} 
        onChange={handleInputChange}
      />
      Description
      <input
        type="text"
        name="description"
        required
        minLength={1}
        className="form-control"
        value={formData.description} 
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Add Post
      </button>
    </form>
  );
}

export default AddPost;
