// console.dir(window);

// console.log(document.getElementById("title"));

// console.log(document.getElementsByClassName("nav-center"));

// let nav_one = document.querySelector(".nav-center");

// console.log(nav_one);

// let title = document.querySelector("#title");

// title.textContent = "Hello World!";

// console.log(title.textContent);

// const btns = document.querySelectorAll(".btn");

// console.log(btns);

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

// document.body.style.backgroundColor = "red";
let green = colors[2];

btn.addEventListener("click", function () {
  let random = randomColor();

  document.body.style.backgroundColor = colors[random];
  color.style.color = colors[random];
  color.textContent = colors[random];
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
