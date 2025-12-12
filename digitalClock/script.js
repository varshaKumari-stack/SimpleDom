let hour = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let timeF = document.querySelector("#Format");

setInterval(() => {
  let curTime = new Date();
  let h = curTime.getHours();
  let mi = curTime.getMinutes();
  let se = curTime.getSeconds();
  // AM / PM
  let format = h >= 12 ? "PM" : "AM";

  // Convert 24hr → 12hr format
  if (h == 0) {
    h = 12; // Midnight
  } else if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? `0${h}` : h;
  mi = mi < 10 ? `0${mi}` : mi;
  se = se < 10 ? `0${se}` : se;

  hour.innerHTML = `${h}`;
  min.innerHTML = `${mi}`;
  sec.innerHTML = `${se}`;
  timeF.innerHTML = `${format}`;
}, 1000);
