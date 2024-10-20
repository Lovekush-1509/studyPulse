import "./App.css";
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/common/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import SignLogin from "./pages/SignLogin";
import VerifyMail from "./pages/VerifyMail";
import { useState } from "react";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  const [formData,setFormData] = useState({
    lastName:'',
    firstName:'',
    contactNo:'',
    accountType:'',
    password:'',
    confirmPassword:'',
    email:'',
    otp:'',
});
  return (
    <div className="w-screen min-h-screen bg-richblack-900 font-inter text-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<SignLogin  type={"login"}/>}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>
        <Route path="/signup" element={<SignLogin formData={formData} setFormData={setFormData} type={"signup"}/>}/>
        <Route path="verify-email" element={<VerifyMail formData={formData} />}/>
      </Routes>

    </div>
  );
}

export default App;
