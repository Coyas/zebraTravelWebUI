const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const nextI18next = require("./i18n");

const port = process.env.PORT || 8332;
const app = next({ dev: process.env.NODEENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    // middleware for i18n
    await nextI18next.initPromise;
    server.use(nextI18NextMiddleware(nextI18next));

    server.get("*", (req, res) => handle(req, res));

    await server.listen(port);
    console.log(`<iMedia pro="zebraTravel"> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
