import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class Receipt {
  static async generate(key) {
    const salt = randomBytes(8).toString("hex");
    const buf = await scryptAsync(key + Date.now().toString(), salt, 4);
    return `TECHNIEks-${buf.toString("hex")}`;
  }
}
