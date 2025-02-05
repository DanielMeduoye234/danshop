import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import './profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture'));
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

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

  if (!user) {
    return (
      <div className="loginNotification">
        <p>Please log in to view your profile.</p>
        <a href="/auth">
          <button className="authBtn" type="button">Log In</button>
        </a>
      </div>
    );
  }

  return (
    <div className="profileContainer">
      <h2>MY Profile</h2>
      <div className="profileDetails">
        <h3>Welcome, {user.email}</h3>
        
        <div className="profileImageContainer">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" className="profileImage" />
          ) : (
            <p>No profile picture uploaded</p>
          )}
        </div>

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

        <button className="logoutBtn" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Profile;
