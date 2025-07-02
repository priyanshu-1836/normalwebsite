function sayHello() {
  document.querySelector(".content-box").style.display = "none"; // Hide welcome section
  document.getElementById("mainSection").style.display = "block"; // Show calculator/resume options
}

function openCalculator() {
  alert("Calculator feature coming soon!");
}
function goBack() {
  document.querySelector(".content-box").style.display = "block";
  document.getElementById("mainSection").style.display = "none";
}

function openResume() {
  alert("Resume builder coming soon!");
}

function showAbout() {
  const about = document.getElementById("aboutSection");
  about.style.display = "block"; // About Us dikhana
}
