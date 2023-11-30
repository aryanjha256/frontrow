import logo from "../assets/user.svg";
import TextField from "../components/TextField";

const Login = () => {
  return (
    <div className="flex pt-16 items-center flex-col min-h-screen">
      <img src={logo} alt="logo" width={94} />
      <h1 className="text-xl pt-8">Welcome back, you have been missed!</h1>
      <div className="pt-8 space-y-4">
        <TextField placeholder="Enter your email address" />
        <TextField placeholder="Enter your password" />
        <button className="w-80 h-12 rounded-md px-4 bg-accent hover:bg-primary transition-colors">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
