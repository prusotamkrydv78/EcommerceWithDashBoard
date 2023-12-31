import React from "react";
import {NavLink} from 'react-router-dom'
const AdminMenu = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="list-group">
        <div className="text-center">
          <NavLink
            to="/dashboard/admin" 
            aria-current="true"
            style={{backgroundColor:"lightblue",
          color:"black"}}
          >
            <h4>Admin Panel</h4>
          </NavLink>
          <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">
            Create Category
          </NavLink>
          <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
            Create Product
          </NavLink>
          <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
