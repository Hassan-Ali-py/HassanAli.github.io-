// Auto-scroll the slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function updateSlider() {
  const offset = -currentSlide * 100;
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

// Auto-scroll every 5 seconds (adjust as needed)
setInterval(nextSlide, 4000);

function toggleAnswer(index) {
  const answer = document.getElementById(`answer-${index}`);
  const allAnswers = document.querySelectorAll(".faq-answer");
  allAnswers.forEach((ans, i) => {
    if (i !== index) {
      ans.style.display = "none";
      document.querySelector(`#question-${i}`).classList.remove("open");
    }
  });
  answer.style.display = answer.style.display === "none" ? "block" : "none";
  document.querySelector(`#question-${index}`).classList.toggle("open");
}
// NAVBAR pop in and pop out when scrolling ;]

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  const hideThreshold = document.documentElement.scrollHeight * 0.5;
  const showThreshold = document.documentElement.scrollHeight * 0.2;

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > hideThreshold) {
      if (scrollTop > lastScrollTop) {
        navbar.classList.add("navbar-hidden");
      } else if (scrollTop <= showThreshold) {
        navbar.classList.remove("navbar-hidden");
      }
    } else {
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = scrollTop;
  });
});
// Animations for navbar fun
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-fluid");
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;
  const hideThreshold = document.documentElement.scrollHeight * 0.5;
  const showThreshold = document.documentElement.scrollHeight * 0.2;

  // Function to handle scroll events
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > hideThreshold) {
      if (scrollTop > lastScrollTop) {
        navbar.classList.add("navbar-hidden");
      } else if (scrollTop <= showThreshold) {
        navbar.classList.remove("navbar-hidden");
      }
    } else {
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = scrollTop;
  });

  // Function to add animation class on mouse enter
  container.addEventListener("mouseenter", function () {
    container.classList.add("animate-gradient");
  });

  // Function to remove animation class on mouse leave
  container.addEventListener("mouseleave", function () {
    container.classList.remove("animate-gradient");
  });
});

//
//
//
// Compare
function sortTable(columnIndex) {
  const tables = document.querySelectorAll(".comparison-table tbody");

  tables.forEach((table) => {
    const rows = Array.from(table.querySelectorAll("tr"));

    rows.sort((a, b) => {
      const cellA = a.children[columnIndex].innerText;
      const cellB = b.children[columnIndex].innerText;

      if (columnIndex === 3) {
        // Sorting by price
        return (
          parseFloat(cellA.replace("$", "")) -
          parseFloat(cellB.replace("$", ""))
        );
      } else if (columnIndex === 2) {
        // Sorting by rating
        return parseInt(cellA.split("(")[1]) - parseInt(cellB.split("(")[1]);
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    rows.forEach((row) => table.appendChild(row));
  });
}
// Contact Form
document
  .querySelectorAll(".new-input-container input, .new-input-container textarea")
  .forEach((input) => {
    input.addEventListener("focus", () => {
      input.previousElementSibling.classList.add("focus");
    });
    input.addEventListener("blur", () => {
      if (input.value === "") {
        input.previousElementSibling.classList.remove("focus");
      }
    });
  });

function newToggleAnswer(index) {
  const answer = document.getElementById(`new-answer-${index}`);
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "table-row";
  } else {
    answer.style.display = "none";
  }
}

// Initialize the display state of all answers to be hidden
document.querySelectorAll(".new-faq-answer").forEach((answer) => {
  answer.style.display = "none";
});
