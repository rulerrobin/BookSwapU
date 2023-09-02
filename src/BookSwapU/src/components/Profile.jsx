import React, { useState } from 'react';
import { updateCurrentUserDetails } from './api'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  // State for the old password input field
  const [oldPassword, setOldPassword] = useState('');

  // State for the new password input field
  const [newPassword, setNewPassword] = useState('');

  // Retrieve user token from local storage
  const token = localStorage.getItem('userInfo');

  // Hook to programmatically navigate to different routes
  const navigate = useNavigate() 

  const handleSubmit = (e) => {
    // Prevent default form behavior
    e.preventDefault();
    
    // Construct user data object for the API request
    const userData = {
      old_password: oldPassword,
      password: newPassword
    };

    // If a token exists, attempt to update the user's password
    if (token) {
      updateCurrentUserDetails(token, userData)
        .then(() => {
        // If the password is successfully updated, navigate to the "/usersbooks" route
        navigate('/usersbooks');

        })
        .catch(error => {
          // Log the error if there's any issue in updating the password
          console.error('Error updating password:', error);
        });
    } else {
      // If the token doesn't exist, log an error indicating that the user might not be authenticated
      console.error('Token is not available. User might not be authenticated.');
    }
  };

return (
  <div className="container mt-5 profile-container">
    <h2>Change Password</h2>
    <form onSubmit={handleSubmit}>

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

      <button className="btn btn-primary btn-lg mt-3" type="submit">Change Password</button>
    </form>
  </div>
);
}

export default Profile;