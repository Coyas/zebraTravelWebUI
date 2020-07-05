// const NextI18Next = require("next-i18next/dist/commonjs");
// import NextI18Next from "next-i18next/dist/commonjs";
const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
    defaultLanguage: "pt",
    otherLanguages: ["en", "fr"]
    // localeSubpaths: {
    //     pt: "pt",
    //     en: "en",
    //     fr: "fr"
    // }
});
