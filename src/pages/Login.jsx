import logo from "../assets/lock.svg";
import TextField from "../components/TextField";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../lib/auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Login successful");
      toast(`Logged in as ${credential.user.email}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex pt-16 items-center flex-col min-h-screen">
      <img src={logo} alt="logo" width={94} />
      <h1 className="text-xl pt-8">Welcome back, you have been missed</h1>
      <Toaster />
      <div className="pt-8 space-y-4">
        <TextField
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-80 h-12 rounded-md px-4 bg-accent hover:bg-primary transition-colors"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <p className="pt-8">
        Not a member yet?{" "}
        <Link to="/" className="text-accent">
          Register now
        </Link>
      </p>
    </div>
  );
};

export default Login;
