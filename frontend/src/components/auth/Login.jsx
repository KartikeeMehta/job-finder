import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from "../shared/Navbar";
import loginImage from "/images/imgg1.avif"; // Add a relevant image
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Button } from "../ui/button";
import { Loader, Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
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
          className="bg-white p-8 rounded-2xl shadow-2xl w-[40rem] flex items-center gap-6"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-1/2 hidden md:block">
            <img src={loginImage} alt="Login Illustration" className="w-full" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Login
            </h2>
            <form onSubmit={submitHandler}>
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
              {loading ? (
                <motion.button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500 shadow-md">
                  <Loader2 className="animate-spin"></Loader2>
                  Please Wait
                </motion.button>
              ) : (
                <motion.button
                  className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
              )}
            </form>
            <p className="text-center mt-4 text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
