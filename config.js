const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/akash001-bot/AKASH-BOT-V1/blob/main/images/20260626_211635.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 AKASH-BOT Is Alive Now😍*",
BOT_OWNER: '94768572902',  // Replace with the owner's phone number



};
