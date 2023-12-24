import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Context/Auth";
import { Outlet } from "react-router-dom";
import Spinner from "../../Spinner";
import axios from "axios";

function Private() {
  const [ok, setOk] = useState(false);
  const { auth, setAuth } = useAuth();

  const authCheck = async () => { 
    const response = await fetch(
      "http://localhost:5000/api/v1/auth/user-auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.ok === false) {
      setOk(true);
    } else {
      setOk(false);
    }
  };
  if (auth?.token) authCheck();

  return ok ? <Outlet /> : <Spinner />;
}

export default Private;
