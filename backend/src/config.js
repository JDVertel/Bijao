import { config } from "dotenv";

config();

export const DB_HOST =process.env.HOST
export const DB_USER =process.env.USER
export const DB_BD =process.env.DATABASE
export const DB_PASSW = process.env.PASSWORD

