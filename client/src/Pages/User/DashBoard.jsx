import React from "react";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../Context/Auth";
const DashBoard = () => {
  const { auth } = useAuth();
  return (
    <>
      <div style={{ minHeight: "80vh" }} className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h4> Name: {auth?.user?.name} </h4>
              <h4>Email: {auth?.user?.email} </h4>
              <h4> Address: {auth?.user?.address} </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
