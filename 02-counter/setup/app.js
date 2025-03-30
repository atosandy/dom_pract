const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let check = e.currentTarget.classList;
    if (check.contains("decrease")) {
      counter--;
    } else if (check.contains("reset")) {
      counter = 0;
    } else if (check.contains("increase")) {
      counter++;
    }
    if (counter < 0) {
      value.style.color = "red";
    } else if (counter === 0) {
      value.style.color = "black";
    } else {
      value.style.color = "green";
    }
    value.textContent = counter;
  });
});
