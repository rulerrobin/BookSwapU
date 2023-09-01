import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');  // Replace with the current user's name
  const [email, setEmail] = useState('');  // Replace with the current user's email
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, maybe sending the updated data to an API
  };

  return (
    <div className="container mt-5 profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            id="name"
            type="text"
            className="form-control"
            placeholder="Current User Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            type="email"
            className="form-control"
            placeholder="Current Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="oldPassword">Old Password:</label>
          <input 
            id="oldPassword"
            type="password"
            className="form-control"
            placeholder="Old Password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input 
            id="newPassword"
            type="password"
            className="form-control"
            placeholder="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary btn-lg mt-3" type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
