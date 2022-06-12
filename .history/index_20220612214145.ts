import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import fb from "facebook-bot-messenger";

let userAccessToken = process.env.FB_TOKEN;
let pageId = process.env.FB_PAGE_ID;
let pageAccessToken = process.env.FB_PAGE_TOKEN;

const bot = fb.create({
    pageID: '<your page id>',
    appID: '<your app id>',
    appSecret: '<your app secret>',
    validationToken: '<your validation token>',
    pageToken: '<your page token>'
})


