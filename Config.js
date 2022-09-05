import dotenv from 'dotenv';
dotenv.config();

const DevMode = process.env.DevMode;
const DBHost = DevMode == "TRUE" ? "localhost" : "sql6.freemysqlhosting.net";
const DBUser = DevMode == "TRUE" ? "root" : "sql6517316";
const DBPassword = DevMode == "TRUE" ? "" : "sxC4AM4ZC1";
const DBName = DevMode == "TRUE" ? "soulbulbs" : "sql6517316";

export { DevMode, DBHost, DBUser, DBPassword, DBName };