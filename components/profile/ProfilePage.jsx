import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import { useHistory } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    profilePic: '',
    bio: '',
    location: '',
    website: '',
    musicalInterests: '',
    favoriteInstruments: '',
    learningGoals: '',
    recentActivity: [], // Initialize as empty array
    achievements: [],   // Initialize as empty array
    upcomingEvents: [], // Initialize as empty array
  });
  const history = useHistory();

  // Function to fetch profile data from the backend
  const fetchProfileData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/profile'); // Replace with your endpoint
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    // Fetch profile data when component mounts
    fetchProfileData();
  }, []);

  return (
    <div className="profile-container">
      <img src={profile.profilePic} alt={profile.username} className="profile-pic" />
      <h2>{profile.username}</h2> {/* Displaying the username */}
      <p>{profile.email}</p>
      <p className="bio">{profile.bio}</p>
      <p className="location">{profile.location}</p>
      <p className="website">
        <a href={profile.website} target="_blank" rel="noreferrer">
          {profile.website || 'No website provided'}
        </a>
      </p>
      <h3>Musical Interests</h3>
      <p>{profile.musicalInterests || 'No musical interests listed'}</p>
      <h3>Favorite Instruments</h3>
      <p>{profile.favoriteInstruments || 'No favorite instruments listed'}</p>
      <h3>Learning Goals</h3>
      <p>{profile.learningGoals || 'No learning goals set'}</p>
      
      {/* New Section: Recent Activity */}
      <h3>Recent Activity</h3>
      {Array.isArray(profile.recentActivity) && profile.recentActivity.length > 0 ? (
        <ul>
          {profile.recentActivity.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      ) : (
        <p>No recent activity available.</p>
      )}

      {/* New Section: Achievements */}
      <h3>Achievements</h3>
      {Array.isArray(profile.achievements) && profile.achievements.length > 0 ? (
        <ul>
          {profile.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      ) : (
        <p>No achievements listed.</p>
      )}

      {/* New Section: Upcoming Events */}
      <h3>Upcoming Events</h3>
      {Array.isArray(profile.upcomingEvents) && profile.upcomingEvents.length > 0 ? (
        <ul>
          {profile.upcomingEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      ) : (
        <p>No upcoming events.</p>
      )}

      <button onClick={() => history.push('/profile/edit')}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
