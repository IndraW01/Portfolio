// toggle
const thumbs = document.querySelectorAll(".thumb img");
const modal = document.querySelector(".modal-bg");
const full = document.querySelector(".full-img");

thumbs.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    modal.classList.add("bg-active");
    full.classList.add("open");
    const originalSrc = thumb.getAttribute("data-original");
    full.src = `img/${originalSrc}`;
  });
});

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-bg")) {
    modal.classList.remove("bg-active");
    full.classList.remove("open");
  }
});

// Dark mode
const button = document.querySelector(".dark-mode");
const html = document.querySelector("html");
// buble
const bulat = document.querySelectorAll(".background-bulat img");
const riwayat = document.querySelectorAll(".riwayat div img");

button.addEventListener("click", function () {
  // cek color mode saat ini, lalu ubah
  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
    button.textContent = "Light Mode";
    bulat.forEach(function (bul) {
      bul.style.opacity = "0";
    });

    riwayat.forEach(function (sekolah) {
      const riwayatSekolah = sekolah.getAttribute("data-modal");
      sekolah.src = `img/${riwayatSekolah}`;
    });
  } else {
    html.dataset.colorMode = "light";
    this.textContent = "Dark Mode";
    bulat.forEach(function (bul) {
      bul.style.opacity = "1";
    });

    riwayat.forEach(function (sekolah) {
      const riwayatSekolah = sekolah.getAttribute("data-black");
      sekolah.src = `img/${riwayatSekolah}`;
    });
  }
});

// fade
function scrollAppear() {
  const skills = document.querySelectorAll(".skil1");
  skills.forEach(function (skill) {
    let introPosition = skill.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;

    if (introPosition < screenPosition) {
      skill.classList.add("skil1-appear");
    }
  });
}
window.addEventListener("scroll", scrollAppear);
