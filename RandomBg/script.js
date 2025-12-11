let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  main.style.backgroundColor = `rgb(${red},${green},${blue})`;
  btn.innerText = ` RGB(${red},${green},${blue})`;
});
