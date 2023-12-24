import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Layout/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Layout/Footer";
import Policy from "./Pages/Policy";
import Error from "./Pages/Error";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import DashBoard from "./Pages/User/DashBoard";
import Private from "./Components/Layout/Routes/Private";
import AdminRoutes from "./Components/Layout/Routes/AdminRoutes";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CreateCatgeory from "./Pages/Admin/CreateCatgeory";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Users from "./Pages/Admin/Users";
import Profile from "./Pages/User/Profile";
import Orders from "./Pages/User/Orders";
function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<DashBoard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoutes />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCatgeory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
