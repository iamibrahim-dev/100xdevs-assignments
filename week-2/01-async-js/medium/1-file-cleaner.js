const fs = require("fs");

fs.readFile("./cleanup.txt", "utf8", function (err, data) {
  let spaceRemoved = data.replace(/\s+/g, " ").trim();
  fs.writeFile("./cleaned.txt", spaceRemoved, "utf8", (err) => {
    if (err != null) {
      console.log(err);
    }
  });
});
