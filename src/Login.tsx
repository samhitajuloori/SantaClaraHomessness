import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

const Login = ({ onSuccess }: { onSuccess: () => void }) => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      if (email && email.endsWith("@sjsu.edu")) {
        onSuccess();
      } else {
        await signOut(auth);
        alert("Only SJSU email addresses are allowed.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-blue-700 mb-2">Welcome to</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Santa Clara County <br /> Homelessness Prediction & Prevention System
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Please sign in with your SJSU email to continue.
        </p>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
