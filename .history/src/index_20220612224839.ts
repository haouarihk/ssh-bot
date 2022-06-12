import http from "http"

import dotenv from "dotenv";
dotenv.config();

import fb from "messenger-bot";
const appSecret = process.env.FB_SECRET;
const appID = process.env.FB_ID;
const pageID = process.env.FB_PAGE_ID;
const pageToken = process.env.FB_PAGE_TOKEN;
const validationToken = process.env.FB_VALIDATION_TOKEN;

if (!appSecret || !appID || !pageID || !pageToken || !validationToken) {
    console.error("Missing one of if not all FB_SECRET, FB_ID, FB_PAGE_ID, FB_PAGE_TOKEN, FB_VALIDATION_TOKEN");
}

const bot = new fb({
    // pageID,
    // appID,
    // appSecret,
    verify: validationToken,
    token: pageToken
});


http.createServer(bot.middleware()).listen(4141, () => {
    console.log("Server is listening on port 3000");
})


bot.on('message', (payload: any, reply: Function, actions: any) => {
    console.log(payload, reply, actions);
    reply({ text: 'hey!' })
})