import React from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";
import {useAuth} from '../../Context/Auth'
const AdminDashboard = () => {
  const {auth} = useAuth()
  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="container-fluid my-3 p-3" style={{display:"flex"}}>
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <div className="card w-75 p-3">
            <h4> Admin Name: {auth?.user?.name}</h4>
            <h4> Admin Email: {auth?.user?.email}</h4>
            <h4> Admin Contact: {auth?.user?.phone}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
