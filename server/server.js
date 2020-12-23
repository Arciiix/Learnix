const express = require("express");
const app = express();
const path = require("path");

//Use env variable or defined port
const PORT = process.env.PORT || 1410;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

function log(content, isError) {
  if (isError) {
    console.error(
      '\x1b[31m%s\x1b[0m"',
      `[ERROR] [${dateToTime(new Date())}] ${content}` //The first part of log makes the font red (copied from https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color - ANSI escape code)
    );
  } else {
    console.log(`[LOG] [${dateToTime(new Date())}] ${content}`);
  }

  return content;
}

function dateToTime(date) {
  if (!(date instanceof Date)) {
    return log("ERR while parsing date", true);
  }
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

app.listen(PORT, () => {
  log(`App has started on the port ${PORT}`);
});
