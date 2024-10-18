"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function Signin() {
  const router = useRouter();
  const [userData, setUserData] = React.useState({ name: "", email: "", password: "" });
  const [error, setError] = React.useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signin", userData);
      //   console.log(response);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] h-screen">
      <div>
        <h2 className="text-center mb-5 font-bold text-2xl">Sign In</h2>
        <form>
          <div className="my-1 flex flex-col">
            <label htmlFor="">Full Name (optional)</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input input-bordered w-full max-w-xs text-white"
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
          </div>
          <div className="my-1 flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              required
              className="input input-bordered w-full required max-w-xs text-white"
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </div>
          <div className="my-1 flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="input input-bordered w-full max-w-xs text-white"
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
          </div>
          <button className="btn btn-accent cursor-pointer mt-4" onClick={handleSubmit}>
            sing in
          </button>
        </form>
      </div>
    </div>
  );
}
