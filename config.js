const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349133094018";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_39_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICA4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpRXRTaVN5dnd1aDI2S1h4azV0U2tyelFSOENibzJFQWtCQVJWMVRUM280PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOb1h2azZNbFRlV1FHNHFRX2stWE1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5ODEwZTFmLWNiMjQtNDM1OS1iY2UwLWExZmZkOTg4ZjUzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMTkyLFxuICAgICAgNzQsXG4gICAgICA0MixcbiAgICAgIDIyMCxcbiAgICAgIDgyLFxuICAgICAgMTc2LFxuICAgICAgMTgyLFxuICAgICAgMjE0LFxuICAgICAgMjQ5LFxuICAgICAgMTksXG4gICAgICAyMDMsXG4gICAgICAxMjEsXG4gICAgICAyMTksXG4gICAgICAxMTYsXG4gICAgICAxNjUsXG4gICAgICAyMjUsXG4gICAgICA3MixcbiAgICAgIDY0LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTM1LFxuICAgICAgODEsXG4gICAgICA5MyxcbiAgICAgIDMxLFxuICAgICAgMjQ1LFxuICAgICAgNDksXG4gICAgICAyNDUsXG4gICAgICA3MSxcbiAgICAgIDQzLFxuICAgICAgMjQ0LFxuICAgICAgMTM0LFxuICAgICAgMTg3LFxuICAgICAgMTk3LFxuICAgICAgMjUyLFxuICAgICAgMTQsXG4gICAgICAzMixcbiAgICAgIDE5NyxcbiAgICAgIDIxNCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNQzZZMllRNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMzA5NDAxODoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNocmlzIE1lZGlhXCIsXG4gICAgXCJsaWRcIjogXCI1MzY0ODcyMTczNTgzNzoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcVVxTDBGRU4va3diY0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZRNFd6d2VhZHVOTk05emxDb3AybkJ0TW1XMFBxWndTV3BYM0haVUlYQnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSnZ3Z2svakxlYlp2SGJ2RWNKLzNSODdiN0tvckt3YWI4N1I2aE9KYTI2LzJrbldzMWcyU0Y3TnE1aDNZSUtnQWtFVUhuNW42YW9PVUc4b3RJZlAyQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRVlrYjZGcHQxL3VjdzZ6bkk0aG1Rb2pwNG5uTzdhQzBGbUpXMExrVWV2amt0K0lnbFJWWDVETG96MGhLaDJSM3pOK0hjNU5RcUR4bW9uYXVLdFpxQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMzA5NDAxODoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcwMzM5NTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKYS5qc29uIjogIntcImtleURhdGFcIjpcIk5UTjZoUDRmdUovWlRtUmxqak5OdWdjRFp3bWozK1o5aEZ5dElqVGtndk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3MDc2MTUxNCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjcwMzM4OTgxMjRcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
