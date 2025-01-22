import modPow from "./mod-pow";

export default function encrypt(message, publicKey) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Encrypts a message using the RSA public key
    console.log(message, publicKey)
    const [e, n] = publicKey;
    let encryptedMessage = "";
    for (let char of message) {
        const position = alphabet.indexOf(char);
        const encryptedChar = modPow(position, e, n);
        encryptedMessage += encryptedChar + " ";
    }
    console.log(encryptedMessage);
    return encryptedMessage.trim();
}