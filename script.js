// --- WEEK START DATES ---
const summerWeeks = [
  { week: 1, start: "2026-05-18" },
  { week: 2, start: "2026-05-25" },
  { week: 3, start: "2026-06-01" },
  { week: 4, start: "2026-06-08" }
];
document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".week-box");
  boxes.forEach(function(box) {
    box.addEventListener("click", function() {
      box.classList.toggle("opened");
    });
  });
});

