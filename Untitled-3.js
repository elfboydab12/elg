// app.js

document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  
  // Function to switch screens
  function showScreen(id) {
    screens.forEach(screen => screen.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }

  // Add event listeners to navigation elements (create these elements in HTML or JavaScript)
  document.getElementById("now-playing-btn").addEventListener("click", () => showScreen("now-playing"));
  document.getElementById("home-btn").addEventListener("click", () => showScreen("home"));
  document.getElementById("artist-detail-btn").addEventListener("click", () => showScreen("artist-detail"));

  // Placeholder functions for play controls
  document.querySelector(".controls button:nth-child(1)").onclick = () => alert("Previous Song");
  document.querySelector(".controls button:nth-child(2)").onclick = () => alert("Play/Pause");
  document.querySelector(".controls button:nth-child(3)").onclick = () => alert("Next Song");
});
