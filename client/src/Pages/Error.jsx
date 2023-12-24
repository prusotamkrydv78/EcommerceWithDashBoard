import React from "react"; 
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error" style={{ minHeight: "80vh" }}>
      <h1 className="error-title">404</h1>
      <h2 className="error-heading">Opps! Page Not Found</h2>
      <Link to="/" className="error-btn">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
