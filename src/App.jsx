import { useState } from "react";
import generateKeys from "./functions/generate-keys";
import "./index.css";

import User1 from "./components/user/user1";
import User2 from "./components/user/user2";
import GenerateKeys from "./components/generate-key";
import ErrorNotif from "./components/error-notif";

function App() {
  const [privateKey, setPrivateKey] = useState([]);
  const [publicKey, setPublicKey] = useState([]);
  const [secret, setSecret] = useState("");
  const [keys, setKeys] = useState([]);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generate = () => {
    const [publicKey, privateKey] = generateKeys();
    setKeys([{ publicKey, privateKey }, ...keys]);
    setPublicKey(publicKey);
    setPrivateKey(privateKey);
  };

  const handleSetError = (value, message) => {
    setError(value);
    setErrorMessage(message);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center gap-10">
      <User1
        setSecret={setSecret}
        publicKey={publicKey}
        setError={setError}
        handleSetError={handleSetError}
      />
      <GenerateKeys
        generate={generate}
        publicKey={publicKey}
        privateKey={privateKey}
        keys={keys}
      />
      <User2
        secret={secret}
        privateKey={privateKey}
        handleSetError={handleSetError}
      />
      {isError ? (
        <ErrorNotif errorMessage={errorMessage} setError={setError} />
      ) : null}
    </div>
  );
}

export default App;
