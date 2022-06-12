import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

let userAccessToken = process.env.FB_TOKEN;


let pageAccessToken = "";


console.log(userAccessToken);
axios.get(`https://graph.facebook.com/PAGE-ID?
fields=access_token&
access_token=${userAccessToken}`)
    .then((res) => console.log(res.data)).catch(console.log)

