import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from "../shared/Navbar";
import signupImage from "/images/imgg1.avif"; // Add a relevant image
import { USER_API_END_POINT } from "@/utils/constant.js";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <motion.div
          ref={formRef}
          className="bg-white p-8 rounded-2xl shadow-2xl w-[60rem] flex items-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-1/2 hidden md:block">
            <img
              src={signupImage}
              alt="Signup Illustration"
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Sign Up
            </h2>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-gray-100 border"
                  placeholder="Enter your full name"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded bg-gray-100 border"
                  placeholder="Enter your email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 rounded bg-gray-100 border"
                  placeholder="Enter your phone number"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded bg-gray-100 border"
                  placeholder="Enter your password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                />
              </div>
              <div className="flex gap-4 mb-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    className="accent-blue-500"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                  />{" "}
                  Student
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="accent-blue-500"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                  />{" "}
                  Recruiter
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Profile</label>
                <input
                  type="file"
                  className="w-full p-2 rounded bg-gray-100 border"
                  accept="image/"
                  onChange={changeFileHandler}
                />
              </div>
              <motion.button
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </form>
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SignUp;
