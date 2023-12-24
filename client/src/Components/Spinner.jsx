import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate,path]);

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <RingLoader
        color="#36d7b7"
        cssOverride={{}}
        loading
        size={150}
        speedMultiplier={0.5}
      />
      <h1 className="text-center">Redirection to you in {count}</h1>
    </div>
  );
};

export default Spinner;
