const calendar = document.getElementById("calendar");

// Create the calendar days
for (let i = 0; i < 31; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.textContent = i + 1;
  day.addEventListener("click", selectDate);
  calendar.appendChild(day);
}

function selectDate(event) {
  // Remove the "selected" class from all days
  const days = document.querySelectorAll(".day");
  days.forEach((day) => day.classList.remove("selected"));

  // Add the "selected" class to the clicked day
  event.target.classList.add("selected");
}
