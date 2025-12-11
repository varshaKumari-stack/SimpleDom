let main = document.querySelector("main");
let btn = document.querySelector("button");

const letter = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
btn.addEventListener("click", () => {
  let hex = "#";
  for (let i = 1; i <= 6; i++) {
    hex += letter[Math.floor(Math.random() * letter.length)];
  }
  main.style.backgroundColor = `${hex}`;
  btn.style.backgroundColor = `${hex}`;
  btn.innerText = `${hex}`;
});
