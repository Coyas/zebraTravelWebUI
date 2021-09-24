require("dotenv").config();
const { i18n } = require("./i18n.config");

module.exports = {
    env: {
        //API_BASE_URL: "https://dash.zebratravel.net",
        API_BASE_URL: "http://localhost:8333",
        SiteKey: "6LfQgq8ZAAAAAFV14LeRqM4Wl7n4rOUDi9r-cbG9",
        SecretKey: "6LfQgq8ZAAAAABMPHcpxSr4dVr-yWP-ZlWawhsQF"
    },
    i18n
};
