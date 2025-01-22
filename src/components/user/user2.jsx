import { useState, useEffect, useRef } from "react";
import decrypt from "../../functions/decrypt";

function TypewriterText({ text, speed}) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        setDisplayedText('');
        setIndex(0);
    }, [text]);

  useEffect(() => {
    if (index < text.length) {
      timerRef.current = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timerRef.current);
    }
  }, [index, text, speed]);

    return <p>{displayedText}</p>;
}

export default function User2({ secret, handleSetError  }) {
  const [message, setMessage] = useState(secret);

  const [numA, setA] = useState(0);
  const [numB, setB] = useState(0);

  useEffect(() => {
    setMessage(secret);
  }, [secret]);

  const decryptHandler = () => {
    if (numA == 0 || numB == 0) {
      handleSetError(true, "Private key is invalid.");
      return;
    }
    if(message == ""){
        handleSetError(true, "There is no message to be decrypted.")
        return;
    }
    const decryptedMessage = decrypt(secret, [parseInt(numA), parseInt(numB)]);
    setMessage(decryptedMessage);
  };

  return (
    <div className="h-3/5 w-1/5 flex flex-col gap-2 justify-center align-center">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Receiver
      </h1>
      <p>Enter digit pair to decrypt</p>
      <div className="h-dvh border border-blue-500 p-2 rounded-lg">
        <TypewriterText text={message} speed={100} />
      </div>
      <div className="w-full flex justify-between gap-2">
        <input
          onChange={(e) => setA(e.target.value)}
          type="number"
          maxLength="4"
          className="w-full border border-blue-500 p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <input
          onChange={(e) => setB(e.target.value)}
          type="number"
          maxLength="4"
          className="w-full border border-blue-500 p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          onClick={decryptHandler}
          className="bg-blue-500 text-white p-2 rounded-lg"
          title="Click to decrypt"
        >
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
              d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
