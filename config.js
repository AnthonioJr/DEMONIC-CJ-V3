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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJ5bnpKdkRUam15eTVwN2pWcUJhTUhVZWlEUU1RWERvQXdQTGRFdFRXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGFJeWtqTmlvWTREUGxDcStVK0I3SlFJT3ZMelR6QWR4OXJIbGx3L05RST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR2ZlK1d3TkZNK2M1bVBXM01xbHZKTkthUzJYWmQ2MEI5MFZhS2Y5a1ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQbC9yVkRjeWYxZ244SUlRQlQ3Q09LZ3AzQzdHK3dwRzdtQmtiV2t3S0J3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFVGZzWjNFbXY2SEpQWGxHK055RFRGbGR0TkdRQ2QycFFlZE51M3hBRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFqY200dndWRndPWDdSS0dPU0phZjNmN1RzQThabDJNa1VKVGNrR2NXQ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0M0bjh2Q3QwaXpqMmFrN29BY0gxM1RKdW5nUEdzKzRweXBSUTY3MUhtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0tJZW9lSXJkcjNUbVhqeVdqZ2hWYUxrOGZHOFFvdnZTYnc1SmdtRkNXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIyMzFVNExzVnl0UDdWa0ZlU0dKM0pESDFiVUQxM1hBRVg3RWovSlNoaWNKdVVZRnc0Y3F4bURxOTVZeVpDRWd2Q0dkWFNWZ0lwaE9FZHlHQ3kxWWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6IjhyTk1MaURDeDZBT1pVQ3habjJpaHdQUk5FRTRLaVhyNGVFQjBnek5pWWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc0sInBhaXJpbmdDb2RlIjoiQUQ0TDQ3QjgiLCJtZSI6eyJpZCI6IjIzNDkwNzE0NDM1OTc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVZG9ubWtleSI6IlkrcUxxTWVvR0ZSdDhGMytSYVZUVWZKRVo3dU1Pc2VrOGFlbXIrdlg4VHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im0rU8rMWVwL2Zua093T2pIZy9KZEMSI6IjIz" // session id here
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
