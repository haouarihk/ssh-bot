import axios from "axios";
import dotenv from "dotenv";

let userAccessToken = process.env.FB_TOKEN;


let pageAccessToken = "";



axios.get(`https://graph.facebook.com/PAGE-ID?
fields=access_token&
access_token=${userAccessToken}`)
    .then((res) => console.log(res.data));

