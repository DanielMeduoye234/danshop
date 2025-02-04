import React, { useEffect, useState } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import './profile.css';

const Profile = () => {
  const { user, logout, login } = useKindeAuth();
  const [profilePicture, setProfilePicture] = useState(() =>
    localStorage.getItem('profilePicture')
  );
  const [uploading, setUploading] = useState(false);

  // Handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataUrl = reader.result;
        localStorage.setItem('profilePicture', imageDataUrl);
        setProfilePicture(imageDataUrl);
      };

      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Error uploading file:', err.message);
    } finally {
      setUploading(false);
    }
  };

  // If the user is not authenticated, show a login prompt
  if (!user) {
    return (
      <div className="loginNotification">
        <p>Please log in to view your profile.</p>
        <button className="authBtn" onClick={login} type="button">
          Log In
        </button>
      </div>
    );
  }

  return (
    <div className="profileContainer">
      <h2>MY Profile</h2>
      <div className="profileDetails">
        <h3>Welcome, {user.name}</h3>
        <p>Email: {user.email}</p>

        {/* Profile Picture */}
        <div className="profileImageContainer">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="profileImage" />
          ) : (
            <p>No profile picture uploaded</p>
          )}
        </div>

        {/* Upload Profile Picture */}
        <div className="uploadContainer">
          <label htmlFor="fileUpload" className="uploadLabel">
            {uploading ? 'Uploading...' : 'Change Profile Picture'}
          </label>
          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="fileInput"
          />
        </div>

        <div>
          <button className="logoutBtn" onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
