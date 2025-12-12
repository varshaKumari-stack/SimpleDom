let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let h1 = document.querySelector("h1");

let count = 0;
inc.addEventListener("click", () => {
  count++;
  h1.innerHTML = count;
});
dec.addEventListener("click", () => {
  count--;
  if (count < 0) {
    alert("negative values not printed...");
  } else h1.innerHTML = count;
});
reset.addEventListener("click", () => {
  count = 0;
  if (count === 0) {
    alert("reset value is already 0");
  } else h1.innerText = count;
});
