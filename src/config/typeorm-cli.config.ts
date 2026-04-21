import 'dotenv/config';
import { DataSource } from "typeorm";
import { Test } from "../entity/test";

export default new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT ?? 5432),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [Test],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
});
    