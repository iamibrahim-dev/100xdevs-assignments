const fs = require("fs");

fs.readFile("3-read-from-file.md", "utf8", function (err, data) {
  console.log(data);
});

// putting the below line makes the javascript thread busy and 
//after it gets freed then console.log() on fs.readFile() runs 
for (let i = 0; i < 10000000000; i++) {}
