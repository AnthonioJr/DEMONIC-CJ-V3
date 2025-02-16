//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cjc7096@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/CJ-LAP/DEMONIC-CJ-V3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajOKquG3R3pOUajb71j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajOKquG3R3pOUajb71j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/aifztz.jpg";
global.devs = "2348138621982";
global.sudo = process.env.SUDO || "2348138621982";
global.owner = process.env.OWNER_NUMBER || "2348138621982";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/9tndy3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mariapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJFVXl4Z3V0STVsVUZZMkZOUmUrZC81UXo0TXBnaHU4bjF4ZGE3OHdWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2VkWTd4VlNna3ZxQWs5MHNrQjJnRnB6ejc0QkhsWmpsbVB0b3JpWjREWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRWpxQ2h0Nmx1aGVFcVdxK24xSk1vOWtOUlJHNG1qYlZGalVZaS85TGxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQm5YNzVtaU9iNXlpU3o3d1JidHFwd3R3QldNVlFacEVJZ3plWThGZ0RBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCaDN5bjdoalIrdUgxTzY1WEsxTksrSFJDbkhxTlh1RExqVjlvS2lwRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhFakxEUWZUZDVTdkpuM1cwb0VhYVpzOGZKTFZ1N0RDZFJpazdHbkk2WFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ovZ3JQZWQ1amZlZm44ZFlXano0TE9YVi96eWJxemdoeEV6MXVNSkkxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnFqakZVeWIxU1BqdGV6VU1qdlJJTTlQYnVVWlZpeGFTbS9DdHljZGxrWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFySFZDZnpRWG9ueUhiUTNjY01vY0RwMXRPTzVkNk55aEMyNXQ1a0htL0phTnVPSGtNUDl0N1QrTi9MZXhRWHBJWkRlSTVSbG9RNUZnRklSU2VIRkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6ImFzZUk3V01uWmFKbjYrUlZHcGtPSDlVeWYrYlVyUHRvenJZNmU1Q1pyM1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVQUUpTSlFWUm91SG1hMmdEVE81eXciLCJwaG9uZUlkIjoiOWIwNTBlYzYtNzAyYy00ZDIyLWI3MmYtZTA0OTRkYzk3OTE3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik92NnZmbkZxd2dNSDlFUWdCcFRuQ1pkVmtZND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvMkpZVDVSTlJZSTQ5T3FUY1FvWlpDbjY1RmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM0hOM1JQWlQiLCJtZSI6eyJpZCI6IjIzNDkwNjE3ODYyODc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLJpu+7idmx4LijIMmt0bvguIHvu4nJvCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG0rbHBFR0VLRFJ4cjBHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib21kdWE5M2YveGxYSjhxT3FnRTVvYWUzRHM0SlJQQWduZXd6eEhKTjRGcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMGJ3bjdFR2N1UWRaMzFjWVRiM2xta0JMZHZkN0lQNWkwWXBOcC9QNUx0U3prOHBzdEMwUkdOVFphb2NDeFFROWhHUEdOUEl4cWhGNlJNYzNJNGlKQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1aWFl1VWlMQTZaNTl0VS9vWGJmUE9IbFF0dHUrOEZpWFl3QzV6VGllNlhQSUYyRFFJU0JyZGJqUS9ZamkrUE1MNXp3cU1NMFZFVDllK2VmYjJNSkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2MTc4NjI4Nzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFKbmJtdmQzLzhaVnlmS2pxb0JPYUdudHc3T0NVVHdJSjNzTThSeVRlQmIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzk2OTYzMDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0xVIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`DEMONIC™-CJ-V3`",
  author: process.env.PACK_AUTHER || "CEEJAY",
  packname: process.env.PACK_NAME || "DＥMＯNＩC－CJ－V３",
  botname: process.env.BOT_NAME || "`𝑫𝑬𝑴𝑶𝑵𝑰𝑪™-𝑪𝑱-𝑽3`",
  ownername: process.env.OWNER_NAME || "CEEJAY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "C J").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
