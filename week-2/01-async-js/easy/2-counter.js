let count = 0;
function counter() {
  console.log("Count: " + count);
  count++;
}
function main() {
  for (let i = 0; i <= 100; i++) {
    setTimeout(counter, 1000 * i);
  }
}
main();
