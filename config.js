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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349074148043";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_22_35_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDY3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOd0hPeG91R0pEbXFqWWNlNzdqaGhrSFA0Y2VTYWxwMVJTa1JjVWRaTCtRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKRWEyUVJrNlFwV3NMWGUxVmlQSmdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmZTIwNTIzLTE5MWQtNDllOC05YmRmLTAyMTU4OTQ5NTU2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICA4MSxcbiAgICAgIDI1MixcbiAgICAgIDExMyxcbiAgICAgIDIyMyxcbiAgICAgIDg2LFxuICAgICAgNyxcbiAgICAgIDc3LFxuICAgICAgMTY3LFxuICAgICAgODksXG4gICAgICAxNDMsXG4gICAgICAxMzgsXG4gICAgICAyLFxuICAgICAgMTA1LFxuICAgICAgODQsXG4gICAgICA1MCxcbiAgICAgIDE3MSxcbiAgICAgIDU1LFxuICAgICAgNDIsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICA1LFxuICAgICAgNzIsXG4gICAgICAzMCxcbiAgICAgIDUwLFxuICAgICAgMTIzLFxuICAgICAgMjAwLFxuICAgICAgMTM0LFxuICAgICAgNjQsXG4gICAgICAxNTEsXG4gICAgICAxNjEsXG4gICAgICAzNCxcbiAgICAgIDQwLFxuICAgICAgMTcxLFxuICAgICAgMTM2LFxuICAgICAgMTgzLFxuICAgICAgOCxcbiAgICAgIDYxLFxuICAgICAgMTgsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTOEpaN0xESlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3NDE0ODA0MzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM0ODY2MTA5MDU1MjI1OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ083MjNVUVFqWk9EdHdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ1Ywb1BvSmM1eXIvejhhQUJmNDNCZjFMYkNFb2lkTXFGcFZPK3RRaHdrTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxMkZ6TVd3Sm1SRTR1SGxSNFNjY3J6amp6MVdLczI5N0lBVUdtL3dXM09Jd296NzdMS2sxOXhKZlRKTTN2eWhqZVJDMHd6Yk5UTGREUGhqYTVXNEtCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUY1JQTzlUZFA5NEZRczJFWlFVV3ljVlBUV2IrdlkrZkgvUW5jOW1XU2xCRUpkZGtrckh2OHB2a2ZtUjFIMTBzb0xmcXpQdStqbUVocVdZVTNuclFpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc0MTQ4MDQzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjAwNzY5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdhUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2FRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2c4ZGtHYVhzYVcxNTNsZW95QlBUNXRUanFXV2hJcXVkRUluVndaVkRmQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQxNDUyNjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
