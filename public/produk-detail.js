
// Logo sosmed pada detaii Produk
document.addEventListener("DOMContentLoaded", function() {
    const logos = [
      {image: "../../asset/blibli.png"},
      {image: "../../asset/bukalapak.png"},
      {image: "../../asset/lazada.png"},
      {image: "../../asset/shopee.png"},
      {image: "../../asset/tiktok.png"},
      {image: "../../asset/tokopedia.png"},
    ];

    const logoContainer = document.querySelector(".logo-sosmed");

    logos.forEach((index) => {
      const img = document.createElement("img");
      img.src = index.image;
      img.className = "xl:w-24 xl:h-24 md:w-16 md:h-16 w-10 h-10";
      logoContainer.appendChild(img);
    });
  })

  // Hamburger btn
const hamBtn = document.querySelector(".hamburger");
const menus = document.querySelector(".menu");

hamBtn.addEventListener("click", function() {
    hamBtn.classList.toggle("is-active");
    menus.classList.toggle("menu-active")
})

document.addEventListener("scroll", function() {
  if(window.scrollY > 50) {
    if (menus.classList.contains("menu-active")) {
      hamBtn.classList.remove("is-active");
      menus.classList.remove("menu-active");
    }
  }
})