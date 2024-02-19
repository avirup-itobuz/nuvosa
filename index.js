 const icon = document.getElementById("toggle");
icon.onclick = () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.src = "./images/nav/sun.png";
  } else {
    icon.src = "./images/nav/moon.png";
  }
};
