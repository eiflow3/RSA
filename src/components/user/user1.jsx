import { useState } from "react";
import encrypt from "../../functions/encrypt";

export default function User1({ setSecret, publicKey, handleSetError }) {
  const [message, setMessage] = useState("");

  const sendSecret = () => {
    const formattedMessage = message.toUpperCase().replace(/ /g, "");

    if (formattedMessage === "") {
      handleSetError(true, "Message can't be empty, try again!");
      return;
    }
    if (!/^[A-Z]+$/.test(formattedMessage)) {
      handleSetError(true, "Only letters (A-Z) allowed, please!");
      return;
    }
    if(publicKey?.length == 0){
        handleSetError(true, "Generate public key first.")
        return;
    }

    const encryptedMessage = encrypt(formattedMessage, publicKey);

    setSecret(encryptedMessage);
  };

  return (
    <div className="h-3/5 w-1/5 flex flex-col gap-2 justify-center align-center">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Sender
      </h1>
      <p>Compose text to be send</p>
      <textarea
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="h-dvh border border-blue-500 p-2 rounded-lg"
      />
      <button
        onClick={sendSecret}
        className="flex justify-between bg-blue-500 text-white p-2 rounded-lg"
      >
        Send Secret
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
}
