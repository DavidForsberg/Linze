import path from "path";
import "dotenv-safe/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entities/Post";
import { Updoot } from "./entities/Updoot";
import { User } from "./entities/User";

export const conn = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: [Post, User, Updoot],
  subscribers: [],
  migrations: [path.join(__dirname, "./migrations/*")],
});
