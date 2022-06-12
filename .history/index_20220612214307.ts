import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import fb from "facebook-bot-messenger";

let appSecret = process.env.FB_SECRET;
let appID = process.env.FB_ID;
let pageID = process.env.FB_PAGE_ID;
let pageAccessToken = process.env.FB_PAGE_TOKEN;

const bot = fb.create({
    pageID,
    appID,
    appSecret,
    validationToken: '<your validation token>',
    pageToken: '<your page token>'
})


