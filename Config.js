import dotenv from 'dotenv';
dotenv.config();

const DevMode = process.env.DevMode;
const DBHost = DevMode == "TRUE" ? "localhost" : "sql6.freemysqlhosting.net";
const DBUser = DevMode == "TRUE" ? "root" : "sql6514933";
const DBPassword = DevMode == "TRUE" ? "" : "dTWFFg9nlD";
const DBName = DevMode == "TRUE" ? "soulbulbs" : "sql6514933";

export { DevMode, DBHost, DBUser, DBPassword, DBName };