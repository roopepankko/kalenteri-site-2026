const summerWeeks = [
  { week: 1, start: "2026-05-18" },
  { week: 2, start: "2026-05-25" },
  { week: 3, start: "2026-06-01" },
  { week: 4, start: "2026-06-08" }
];

document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".week-box");
  const today = new Date("2026-05-05");
  
  boxes.forEach(function(box, index) {
    const weekData = summerWeeks[index];
    
    if (!weekData) return;
    
    const weekStart = new Date(weekData.start);
    const isUnlocked = today >= weekStart;
    
    // Add locked/unlocked state
    if (!isUnlocked) {
      box.classList.add("locked");
      box.style.pointerEvents = "none";
      box.style.opacity = "0.5";
    } else {
      box.classList.add("unlocked");
    }
    
    // Toggle opened state only if unlocked
    box.addEventListener("click", function() {
      if (isUnlocked) {
        box.classList.toggle("opened");
      }
    });
  });
});
