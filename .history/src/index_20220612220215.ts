import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import fb from "messenger-bot";

let appSecret = process.env.FB_SECRET;
let appID = process.env.FB_ID;
let pageID = process.env.FB_PAGE_ID;
let pageToken = process.env.FB_PAGE_TOKEN;
let validationToken = process.env.FB_VALIDATION_TOKEN;

const bot = fb.create({
    pageID,
    appID,
    appSecret,
    validationToken,
    pageToken
});





