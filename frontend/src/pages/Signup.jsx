import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle sign-up logic here
  };

  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="min-h-screen bg-gradient-to-r from-green-50 via-teal-50 to-green-50 flex justify-center items-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-lg sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="text-center">
              <motion.img
                src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-cartoon-cartoon-earth-with-flower-with-happy-smiling-face-against-a-png-image_12253196.png"
                className="mx-auto w-24 h-24"
                alt="Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h2 className="mt-6 text-3xl font-extrabold" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
                Sign Up
              </h2>
            </div>
            <div className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-400 focus:bg-white"
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName")}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-5 tracking-wide font-semibold bg-green-500 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className="ml-2">Register</span>
                  </motion.button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    By signing up, I agree to the
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex flex-col justify-center items-center">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <h4 className="text-2xl font-bold text-green-700 mb-4">Welcome To Annamaya Vasundhara</h4>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage:
                    "url('https://png.pngtree.com/png-clipart/20230916/original/pngtree-cartoon-cartoon-earth-with-flower-with-happy-smiling-face-against-a-png-image_12253196.png')",
                  height: '150px',
                  width: '150px',
                  margin: '0 auto',
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default SignUp;