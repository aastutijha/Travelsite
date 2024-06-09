// src/components/Dashboard.js

import {} from "react";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="container">
      <h1>Dashboard</h1>
      {currentUser ? <p>Welcome, {currentUser.email}</p> : <p>Not logged in</p>}
    </div>
  );
};

export default Dashboard;
