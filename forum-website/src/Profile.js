// src/components/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
