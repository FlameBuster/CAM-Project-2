import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";
import bcrypt from "bcryptjs"; // Ensure you have bcryptjs installed

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const BACKEND_URL = "http://localhost:8080";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  try {
    const response = await fetch(`${BACKEND_URL}/login/fetch/${username}`);
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Error fetching user data" });
    }

    const user = await response.json();
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "5s" });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
