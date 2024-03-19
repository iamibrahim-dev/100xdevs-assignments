const fs = require("fs");

fs.writeFile("4-write-to-file.md2", "Hewwo World", "utf8", function (err) {
  console.log("Exception: " + err);
});
