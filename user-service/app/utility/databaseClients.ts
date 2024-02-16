import { Client } from "pg";

export const DBClient = async() => {
    return new Client({
        host : `${process.env.DB_HOST}`,
        user : `${process.env.DB_USER}`,
        database : `${process.env.DB_NAME}`,
        password : `${process.env.DB_PASSWORD}`,
        port : parseInt(process.env.DB_PORT)

    });
};