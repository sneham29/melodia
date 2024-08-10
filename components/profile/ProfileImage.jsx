// ProfileImage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileImage = () => {
  return (
    <Link to="/profile">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU"
        alt="Profile"
        className="profile-image"
      />
    </Link>
  );
};

export default ProfileImage;
