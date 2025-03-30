// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

console.log(author.textContent);

let count = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[count];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
});

next.addEventListener("click", function () {
  count++;
  if (count > reviews.length - 1) {
    count = 0;
  }
  update(count);
});

prev.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }
  update(count);
});

function update(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}

//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// }
// // show next person
// nextBtn.addEventListener('click', function () {
//   currentItem++;
//   if (currentItem > reviews.length - 1) {
//     currentItem = 0;
//   }
//   showPerson(currentItem);
// });
// // show prev person
// prevBtn.addEventListener('click', function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = reviews.length - 1;
//   }
//   showPerson(currentItem);
// });
// // show random person
// randomBtn.addEventListener('click', function () {
//   console.log('hello');

//   currentItem = Math.floor(Math.random() * reviews.length);
//   showPerson(currentItem);
// });
