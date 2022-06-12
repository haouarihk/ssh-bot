import axios from "axios";


let userAccessToken = Process.env.FB_TOKEN;


let pageAccessToken = "";



axios.get(`https://graph.facebook.com/PAGE-ID?
fields=access_token&
access_token=${userAccessToken}`)
    .then((res) => console.log(res.data));

