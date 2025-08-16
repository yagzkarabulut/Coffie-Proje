// * Html'den Javascript'e eleman çekme
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

// menuBtn'e tıklanınca nav elemanına class ekle çıkar

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
