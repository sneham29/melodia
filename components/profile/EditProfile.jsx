import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './editprofile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: '',
  });

  useEffect(() => {
    // Fetch user profile data on component mount
    const fetchProfileData = async () => {
      try {
        // Replace with the actual endpoint to fetch user data
        const response = await axios.get('http://localhost:8080/profile');
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormData({ ...formData, [username]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with the actual endpoint
      const response = await axios.put('http://localhost:8080/update', formData);

      if (response.status === 200) {
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <label>
          UserName:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </label>
        {/* Add other fields as necessary */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
