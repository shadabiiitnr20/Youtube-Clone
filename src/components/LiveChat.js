import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { randomTextGenerator } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomTextGenerator(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-96 h-[400px] ml-2 p-2 border-2 border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, i) => {
          return (
            <ChatMessage key={i} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form
        className="w-96 ml-2 p-1 border-2 border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shadab",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="p-1 m-1 w-72 border border-black rounded-lg"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-red-300 rounded-md font-medium">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
