import React from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";

const CreateProduct = () => {
  return (
    <div style={{ minHeight: "80vh" }} className="my-3 p-3 container-fluid">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>CreateProduct</h1>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
