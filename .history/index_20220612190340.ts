import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

let userAccessToken = process.env.FB_TOKEN;
let pageId = process.env.FB_PAGE_ID;

let pageAccessToken = "";


console.log(userAccessToken);
axios.get(`https://graph.facebook.com/${pageId}?
fields=access_token&
access_token=${userAccessToken}`)
    .then((res) => console.log(res.data)).catch(data => console.log(data.response.data));

