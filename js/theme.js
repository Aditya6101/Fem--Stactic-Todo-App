const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  const body = document.body;
  const themeIcon = document.querySelector(".theme-icon");
  const darkTheme = document.querySelector("body.dark");
  body.classList.toggle("dark");
  themeBtn.classList.add("dark");
  darkTheme
    ? (themeIcon.src = "./images/icon-sun.svg")
    : (themeIcon.src = "./images/icon-moon.svg");
}
