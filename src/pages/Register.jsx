import logo from "../assets/user.svg";
import TextField from "../components/TextField";

const Register = () => {
  return (
    <div className="flex pt-16 items-center flex-col min-h-screen">
      <img src={logo} alt="logo" width={94} />
      <h1 className="text-xl pt-8">Signup for a new account.</h1>
      <div className="pt-8 space-y-4">
        <TextField placeholder="Enter your email address" />
        <TextField placeholder="Set up your password" />
        <button className="w-80 h-12 rounded-md px-4 bg-accent hover:bg-primary transition-colors">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Register;
