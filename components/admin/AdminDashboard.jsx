import React from "react";
import Admin from "../admin/Admin"; // Adjust the import path as needed

const AdminDashboard = () => {
  // Hardcoded admin data for testing
  const adminData = {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "System Administrator",
    department: "IT",
    joiningDate: "2022-05-10",
    managedStaff: ["Bob Smith", "Carol Evans", "David Wilson"],
    systemAnnouncements: [
      "System maintenance scheduled for 2024-08-15.",
      "New security updates have been applied.",
      "Please update your passwords by the end of the month."
    ]
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Admin adminData={adminData} />
    </div>
  );
};

export default AdminDashboard;
