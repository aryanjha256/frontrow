import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import send from "../assets/send.svg";
import RowPost from "../components/RowPost";
import { signOut } from "firebase/auth";
import auth from "../lib/auth";

const Chat = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex text-center font-bold text-2xl bg-secondary py-1 px-4">
        <button onClick={() => signOut(auth)}>
          <img src={logout} alt="logout" width={36} />
        </button>
        <h1 className="mx-auto">Front Row</h1>
        <img src={user} alt="user" width={36} />
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="max-w-4xl m-auto px-4 py-4 space-y-4">
          <RowPost />
          <RowPost />
          <RowPost />
          <RowPost />
          <RowPost />
          <RowPost />
        </div>
      </div>
      <div className="flex justify-center items-center bg-accent py-4 px-4 space-x-2">
        <input
          type="text"
          placeholder="Speak your mind..."
          className="w-full h-12 rounded-md px-4 outline-none focus:border border-secondary"
        />
        <button className="h-12 rounded-md px-4 bg-secondary hover:bg-primary transition-colors">
          <img src={send} alt="send" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
