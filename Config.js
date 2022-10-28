import dotenv from 'dotenv';
dotenv.config();

const DevMode = process.env.DevMode;
const DBHost = DevMode == "TRUE" ? "localhost" : "92.205.8.54";
const DBUser = DevMode == "TRUE" ? "root" : "zeke";
const DBPassword = DevMode == "TRUE" ? "" : "$NA^EEoZ1+A?";
const DBName = DevMode == "TRUE" ? "soulbulbs" : "soulbulbs";

export { DevMode, DBHost, DBUser, DBPassword, DBName };