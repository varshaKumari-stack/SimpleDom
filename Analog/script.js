let h = document.querySelector("#hrs");
let m = document.querySelector("#min");
let s = document.querySelector("#sec");
 
setInterval(() => {
  let day = new Date();
  let hr = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let sc = day.getSeconds() * 6;
  h.style.transform = `rotateZ(${hr + mm / 12}deg)`;
  m.style.transform = `rotateZ(${mm}deg)`;
  s.style.transform = `rotateZ(${sc}deg)`;
});
