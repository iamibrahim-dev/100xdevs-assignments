let count = 0;
function counter() {
  console.log("Count: " + count);
  count++;
}

setInterval(counter, 1000);
