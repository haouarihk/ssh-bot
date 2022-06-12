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

const bot = fb.create({
    pageID,
    appID,
    appSecret,
    validationToken,
    pageToken
});





