function log(content = "", isError = false): string {
  if (isError) {
    console.error(
      "\x1b[31m%s\x1b[0m",
      `[ERROR] [${dateToTime(new Date())}] ${content}` //The first part of log makes the font red (copied from https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color - ANSI escape code)
    );
  } else {
    console.log(`[LOG] [${dateToTime(new Date())}] ${content}`);
  }

  return content;
}

function dateToTime(date): string {
  if (!(date instanceof Date)) {
    return log("ERR while parsing date", true);
  }
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

export { log, dateToTime };
