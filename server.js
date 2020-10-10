const express = require("express");
const app = express();
const path = require("path");

//Use env variable or defined port
const PORT = process.env.PORT || 1410;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

function dateToTime(date) {
  if (!(date instanceof Date)) {
    return "ERR while parsing date";
  }
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

app.listen(PORT, () => {
  console.log(
    `[${dateToTime(new Date())}] App has started on the port ${PORT}`
  );
});
