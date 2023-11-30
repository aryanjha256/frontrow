import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import send from "../assets/send.svg";

const Chat = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex text-center font-bold text-2xl bg-secondary py-1 px-4">
        <img src={logout} alt="logout" width={36} />
        <h1 className="mx-auto">Front Row</h1>
        <img src={user} alt="user" width={36} />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex-grow"></div>
        <div className="flex justify-center items-center h-20 bg-accent">
          <input
            type="text"
            placeholder="Speak your mind..."
            className="w-full h-12 rounded-md px-4 outline-none focus:border border-secondary"
          />
          <button className="bg-secondary text-white font-bold py-2 px-4 rounded-full">
            <img src={send} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
