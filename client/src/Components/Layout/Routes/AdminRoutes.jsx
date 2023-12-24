import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Context/Auth";
import { Outlet } from "react-router-dom";
import Spinner from "../../Spinner"; 
function AdminRoutes() {
  const [ok, setOk] = useState(false);
  const { auth, setAuth } = useAuth();

  const authCheck = async () => {
    const response = await fetch(
      "http://localhost:5000/api/v1/auth/admin-auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (auth?.user?.role === true) {
      setOk(true);
    } else {
      setOk(false);
    }
  };
  if (auth?.token) authCheck();

  return ok ? <Outlet /> : <Spinner path=""/>;
}

export default AdminRoutes;
