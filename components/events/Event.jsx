import React from "react";
import { event } from "../../dummydata";
import "./event.css"; // Ensure to import the correct CSS file

const EventCard = () => {
  return (
    <div className="event-container">
      {event.map((val, index) => (
        <div className="event-item shadow" key={index}>
          <div className="event-img">
            <img src={val.cover} alt={val.name} />
          </div>
          <div className="overlay">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-tiktok icon"></i>
          </div>
          <div className="event-details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
