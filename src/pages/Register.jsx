import logo from "../assets/user.svg";
import TextField from "../components/TextField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../lib/auth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastic";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex pt-16 items-center flex-col min-h-screen">
      <img src={logo} alt="logo" width={94} />
      <h1 className="text-xl pt-8">Let's create a new account for you</h1>
      <ToastContainer position="top-right" />
      <div className="pt-8 space-y-4">
        <TextField
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Set up your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-80 h-12 rounded-md px-4 bg-accent hover:bg-primary transition-colors"
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </div>
      <p className="pt-8">
        Already have an account?{" "}
        <Link to="/login" className="text-accent">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
