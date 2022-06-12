import axios from "axios";


let userAccessToken = Process.env.FB_USER_ACCESS_TOKEN;


let pageAccessToken = "";



axios.get(`https://graph.facebook.com/PAGE-ID?
fields=access_token&
access_token=${userAccessToken}`)