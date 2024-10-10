"use client";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Button from "../utils/Button";
import waves from "@/public/waves.jpg";

const page = () => {
  const [triggerForm, setTriggerForm] = useState<boolean>(true);

  const handleTrigger = () => {
    setTriggerForm(!triggerForm);
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-gray-1000 w-1/2 flex justify-center items-center">
          {triggerForm ? (
            <div className="flex flex-col w-1/3">
              <div className="flex justify-center pointer-events-none">
                <Image src={logo} alt="main-logo" width={"200"} />
              </div>

              <div className="text-3xl text-primary p-4">Login</div>

              <div className="flex flex-col p-2">
                <label htmlFor="" className="p-2 text-lg text-white">
                  Username
                </label>
                <input
                  type="text"
                  className="w-72 h-10 rounded-3xl focus:outline-none p-5 hover:bg-primary transition-all duration-300 ease-in-out text-slate-800"
                />
              </div>

              <div className="flex flex-col p-2">
                <label className="p-2 text-lg text-white">Password</label>
                <input
                  type="password"
                  className="w-72 h-10 rounded-3xl focus:outline-none p-5 hover:bg-primary transition-all duration-300 ease-in-out text-slate-800"
                />
              </div>

              <div className="flex justify-end">
                <Button initial="Login" />
              </div>

              <div className="flex gap-1 p-4 text-sm text-white">
                Don't have an account yet?
                <div
                  className="text-primary hover:underline hover:cursor-pointer"
                  onClick={handleTrigger}
                >
                  Register
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-1/3">
              <div className="flex justify-center pointer-events-none">
                <Image src={logo} alt="main-logo" width={"200"} />
              </div>

              <div className="text-3xl text-primary p-4">Register</div>

              <div className="flex flex-col p-2">
                <label htmlFor="" className="p-2 text-lg text-white">
                  Username
                </label>
                <input
                  type="text"
                  className="w-72 h-10 rounded-3xl focus:outline-none p-5 hover:bg-primary transition-all duration-300 ease-in-out text-slate-800"
                />
              </div>

              <div className="flex flex-col p-2">
                <label htmlFor="" className="p-2 text-lg text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="w-72 h-10 rounded-3xl focus:outline-none p-5 hover:bg-primary transition-all duration-300 ease-in-out text-slate-800"
                />
              </div>

              <div className="flex flex-col p-2">
                <label className="p-2 text-lg text-white">Password</label>
                <input
                  type="password"
                  className="w-72 h-10 rounded-3xl focus:outline-none p-5 hover:bg-primary transition-all duration-300 ease-in-out text-slate-800"
                />
              </div>

              <div className="flex flex-col p-2">
                <label className="p-2 text-lg text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  className="w-72 h-10 rounded-3xl focus:outline-none p-5 hover:bg-primary transition-all duration-300 ease-in-out text-slate-800"
                />
              </div>

              <div className="flex justify-end">
                <Button initial="Register" />
              </div>

              <div className="flex gap-1 p-4 text-sm text-white">
                Have an account already?
                <div
                  className="text-primary hover:underline hover:cursor-pointer"
                  onClick={handleTrigger}
                >
                  Login
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-violet-300 h-full w-1/2">
          <Image
            className="w-full h-full"
            src={waves}
            alt="waves"
            height={1000}
          />
        </div>
      </div>
    </>
  );
};

export default page;
