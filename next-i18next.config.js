const path = require("path");

module.exports = {
    i18n: {
        locales: ["pt", "en", "fr"],
        defaultLocale: "pt"
    },
    localePath: path.resolve("./public/static/locales")
    // react: { useSuspense: false }
    // localeDetection: false
};
