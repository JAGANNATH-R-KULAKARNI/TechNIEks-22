import nc from "next-connect";
// import CryptoJS from "react-native-crypto-js";
const crypto = require("crypto");

require("dotenv").config();

const handler = nc();
handler.post(async (req, res) => {
  const data = req.body;

  const algorithm = "aes-256-cbc";
  const initVector = crypto.randomBytes(16);
  const message = "pay_JXeV2BjjZipvP2";
  const Securitykey = crypto.randomBytes(32);
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(message, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  console.log("Encrypted message: " + encryptedData);

  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  console.log("Decrypted message: " + decryptedData);
  if (data.tempbro == "encrypt") {
    return res.status(200).json({ msg: encryptedData });
  }

  return res.status(200).json({ msg: decryptedData });
});

export default handler;
