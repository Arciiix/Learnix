"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const path = require("path");
const log_1 = require("./log");
//Use env variable or defined port
const PORT = process.env.PORT || 1410;
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => {
    log_1.log(`App has started on the port ${PORT}`);
});
log_1.log("ilovegod", true);
//# sourceMappingURL=server.js.map