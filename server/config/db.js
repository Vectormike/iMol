import dotenv from "dotenv";

dotenv.config();

export const mongoURI = process.env.DATABASE_URL;
