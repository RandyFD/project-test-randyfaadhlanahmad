let gambar = document.getElementById("gambar");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  gambar.style.bottom = value * 0.5 + "px";
});
