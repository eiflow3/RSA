import modPow from "./mod-pow";

export default function decrypt(encryptedMessage, privateKey) {
  console.log("privateKey", privateKey);
  console.log("encrpytedMessage", encryptedMessage);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Decrypts a message using the RSA private key
  const [d, n] = privateKey;
  let decryptedMessage = "";
  const encryptedChars = encryptedMessage.split(" ");
  for (let char of encryptedChars) {
    const decryptedChar = modPow(parseInt(char), d, n);
    if (alphabet[decryptedChar] === undefined) {
      decryptedMessage += "?";
    } else {
      decryptedMessage += alphabet[decryptedChar];
    }
  }
  return decryptedMessage;
}
