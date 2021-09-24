require("dotenv").config();
const { i18n } = require("./i18n.config");

module.exports = {
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        SiteKey: process.env.SiteKey,
        SecretKey: process.env.SecretKey
    },
    i18n
};
