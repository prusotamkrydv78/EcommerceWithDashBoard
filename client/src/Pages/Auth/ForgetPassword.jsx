// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "../../Styles/AuthStyles.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../Context/Auth";

// const ForgetPassword = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [user, setUser] = useState({
//     email: "",
//     newPassword: "",
//     answer: "",
//   });
//   const { auth, setAuth } = useAuth();

//   const handleInput = (e) => {
//     const inputValue = e.target.value;
//     const inputName = e.target.name;
//     setUser({
//       ...user,
//       [inputName]: inputValue,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/v1/auth/forget-password",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         }
//       );
//       const data = await response.json();

//       console.log(response.ok);
//       if (response && response.ok) {
//         setUser({ email: "", password: "", newPassword: "" });

//         toast.success("Login Successfully");

//         navigate("/login");
//       } else {
//         toast.error("Opps! Invalid Details");
//       }
//       console.log(response.body);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <div style={{ minHeight: "80vh" }} className="form-container">
//         <h1 className="title mb-5">Reset Password</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={user.email}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Enter your crush name.
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="email"
//               name="answer"
//               value={user.answer}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="newPassword"
//               value={user.newPassword}
//               onChange={handleInput}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Reset
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;
