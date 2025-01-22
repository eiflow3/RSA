import { useState } from "react";
import decrypt from "../functions/decrypt";

export default function Database({ data }) {
  const [message, setMessage] = useState("");

  const decryptHandler = (message, privateKey) => {
    const decryptedMessage = decrypt(message, privateKey);

    return setMessage(decryptedMessage);
  };

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="flex flex-col gap-12 justify-center align-center">
        <h1 className="text-3xl font-bold text-center">Database</h1>
        <table className="min-w-3/5 table-fixed border-solid dark:bg-gray-800 dark:border-gray-700 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border dark:bg-gray-800 dark:border-gray-700">
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Private Key
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const [a, b] = row.private_key; // Destructure private_key outside of the return statement
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="max-w-lg border border-gray-300 p-2 break-words"
                  >
                    {row.encrypted_message}
                  </th>
                  <td className="border border-gray-300 p-2 break-words">
                    [{a}, {b}]
                  </td>
                  <td className="border border-gray-300 p-2 break-words">
                    <button
                      onClick={() => {
                        decryptHandler(row.encrypted_message, row.private_key);
                      }}
                      type="button"
                      className="undeline hover:text-red-300"
                    >
                      Decrypt
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="border border-red-400 p-32 pt-0 flex flex-col justify-center align-center">
        <h3 className="text-2xl font-bold">Decrypted Message</h3>
        <p className="text-center">{message}</p>
      </div>
    </div>
  );
}
