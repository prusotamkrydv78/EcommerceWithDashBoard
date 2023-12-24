import React from "react";
import UserMenu from '../../Components/Layout/UserMenu'
const Orders = () => {
  return (
    <div className="my-3 p-3 container-flui" style={{ minHeight: "80vh" }}>
      <div className="row">
        <div className="col-md-3"> 
          <UserMenu/>
        </div>
        <div className="col-md-9">
          <h1>All Orders</h1>
        </div>
      </div>
    </div>
  );
};

export default Orders;
