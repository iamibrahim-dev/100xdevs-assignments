function clock() {
  console.clear();
  let date = new Date();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  let currentSecond = date.getSeconds();
  console.log(
    "Time : "
      .concat(currentHour)
      .concat(":")
      .concat(currentMinute)
      .concat(":")
      .concat(currentSecond)
  );
  console.log(
    "Time : "
      .concat(currentHour % 12)
      .concat(":")
      .concat(currentMinute)
      .concat(":")
      .concat(currentSecond)
      .concat(":")
      .concat(currentHour >= 12 ? "PM" : "AM")
  );
}

setInterval(clock, 1000);
