import React from "react";
import "../admin/Admin.css";

const Admin = ({ adminData }) => {
  // Provide default values for properties in case they are missing
  const {
    name = "Alice Johnson",
    email = "alice.johnson@example.com",
    role = "System Administrator",
    department = "IT",
    joiningDate = "2022-05-10",
    managedStaff = ["Bob Smith", "Carol Evans", "David Wilson"],
    systemAnnouncements = [
      "System maintenance scheduled for 2024-08-15.",
      "New security updates have been applied.",
      "Please update your passwords by the end of the month."
    ]
  } = adminData || {}; // Provide fallback if adminData is undefined

  return (
    <div className="admin-profile-container">
      <h1 className="admin-heading">Welcome, {name}</h1>
      <div className="admin-info-card">
        <h2>Profile Information</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Joining Date:</strong> {joiningDate}</p>
      </div>
      <div className="admin-managed-staff-card">
        <h2>Managed Staff</h2>
        <ul>
          {managedStaff.length > 0 ? (
            managedStaff.map((staff, index) => (
              <li key={index}>{staff}</li>
            ))
          ) : (
            <li>No staff managed</li>
          )}
        </ul>
      </div>
      <div className="admin-announcements-card">
        <h2>System Announcements</h2>
        <ul>
          {systemAnnouncements.length > 0 ? (
            systemAnnouncements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))
          ) : (
            <li>No announcements</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
