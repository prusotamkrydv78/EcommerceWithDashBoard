import React from "react";
import { useAuth } from "../Context/Auth";
const Home = () => { 
  const {auth,setAuth} = useAuth();   
  console.log(JSON.stringify(useAuth()))
  return (
    <div style={{ minHeight: "80vh" }}>
      <h1>home page</h1>
      <pre>{JSON.stringify(auth,null ,4)}</pre>
    </div>
  );
};

export default Home;
