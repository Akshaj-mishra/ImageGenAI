import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/Appcontext';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setshowlogin } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleEmailPasswordSignIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      alert("Login successful!");
      setshowlogin(false);
      navigate("/result", { replace: true });
    } catch (error) {
      console.error("Error signing in:", error.message);
      if (error.code === "auth/user-not-found") {
        alert("User not found. Please check your email.");
      } else if (error.code === "auth/wrong-password") {
        alert("Wrong password. Please try again.");
      } else {
        alert("Login failed: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in:", result.user);
      alert("Signed in with Google!");
      setshowlogin(false);
      navigate("/result", { replace: true });
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Google sign-in failed");
    }
  };

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleEmailPasswordSignIn();
        }}
        className='relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-md shadow-xl'
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>Login</h1>
        <p className='text-sm text-center'>Please login to continue</p>

        {/* Email Input */}
        <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-4'>
          <img src={assets.emailIcon} className="w-8 h-8 object-contain" alt="Email" />
          <input
            type='email'
            placeholder='Email ID'
            className='outline-none text-sm h-8 w-full bg-transparent'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-4'>
          <img src={assets.lockIcon} className="w-8 h-8 object-contain" alt="Password" />
          <input
            type='password'
            placeholder='Password'
            className='outline-none text-sm h-8 w-full bg-transparent'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className='bg-orange-400 w-full text-white py-2 rounded-full mt-4 hover:bg-amber-400'
        >
          Login with Google
        </button>

        {/* Email/Password Login */}
        <button
          type="submit"
          className='bg-blue-600 w-full text-white py-2 rounded-full mt-3 hover:bg-blue-400'
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Close button */}
        <img
          onClick={() => setshowlogin(false)}
          src={assets.crossIcon}
          alt="Close"
          className='absolute top-5 right-5 cursor-pointer'
        />
      </form>
    </div>
  );
};

export default Login;
