import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="list-group">
        <div className="text-center">
          <NavLink
            to="/dashboard/admin"
            aria-current="true"
            style={{ backgroundColor: "lightblue", color: "black" }}
          >
            <h4>DashBoard</h4>
          </NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >Orders
          </NavLink> 
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
