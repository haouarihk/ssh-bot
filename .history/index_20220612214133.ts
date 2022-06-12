import axios from "axios";
import dotenv from "dotenv";
import fb from "facebook-bot-messenger";

const bot = fb.create({

})

dotenv.config();

let userAccessToken = process.env.FB_TOKEN;
let pageId = process.env.FB_PAGE_ID;
let pageAccessToken = process.env.FB_PAGE_TOKEN;




