import { useState } from "react";
import encrypt from "../functions/encrypt";
import generateKeys from "../functions/generate-keys";

export default function UserInput({
  generate,
  privateKey,
  publicKey,
  setData,
}) {
  const [message, setMessage] = useState("");

  const [a, b] = publicKey;
  const [c, d] = privateKey;

  const encryptMessage = () => {
    const formattedMessage = message.toUpperCase().replace(/ /g, "");

    if (formattedMessage === "") {
      console.log("Message can't be empty, try again!");
      return;
    }
    if (!/^[A-Z]+$/.test(formattedMessage)) {
      console.log("Only letters (A-Z) allowed, please!");
      return;
    }

    const encryptedMessage = encrypt(formattedMessage, publicKey);

    // Add the encrypted message and private key to the data
    setData((data) => [
      ...data,
      {
        encrypted_message: encryptedMessage,
        private_key: privateKey,
      },
    ]);

    setMessage("")
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">RSA Encryption</h1>
        <p>
          Public Key: [{a}, {b}]
        </p>
        <p>
          Private Key: [{c}, {d}]
        </p>

        <button
          onClick={generate}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Generate
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1>Encrypt</h1>
        <div className="w-80 mb-6">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            rows="4"
            value={message}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter message to decrypyt"
          ></textarea>
        </div>
        <button
          onClick={encryptMessage}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Encrypt Message
        </button>
      </div>
    </div>
  );
}
