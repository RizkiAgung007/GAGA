  
  document.addEventListener("DOMContentLoaded", function() {
    const logos = [
      {image: "../asset/Logo1.png"},
      {image: "../asset/Logo3.png"},
      {image: "../asset/Logo4.png"},
      {image: "../asset/Logo5.png"},
      {image: "../asset/Logo6.png"},
      {image: "../asset/Logo7.png"},
      {image: "../asset/Logo8.png"},
      {image: "../asset/Logo9.png"},
      {image: "../asset/Logo10.png"},
      {image: "../asset/Logo2.png"},
    ];

    const logoContainer = document.getElementById("logo-product");

    logos.forEach((item) => {
      const img = this.createElement("img");
      img.src = item.image;
      img.className = "lg:w-24 lg:h-24 sm:w-14 sm:h-14 w-7 h-7 hover:shadow-lg hover:rounded-lg duration-300 transition-all"
      logoContainer.appendChild(img);
    })
  });

  document.addEventListener("DOMContentLoaded", function() {
    const logos = [
      {image: "../asset/blibli.png"},
      {image: "../asset/bukalapak.png"},
      {image: "../asset/lazada.png"},
      {image: "../asset/shopee.png"},
      {image: "../asset/tiktok.png"},
      {image: "../asset/tokopedia.png"},
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

// CTA Index
const up = document.getElementById("cta");
document.addEventListener("scroll", function() {
  if(window.scrollY > 50) {
    up.classList.add("active");
    if(menus.classList.contains("menu-active")) {
      hamBtn.classList.remove("is-active");
      menus.classList.remove("menu-active");
    }
  } else {
    up.classList.remove("active");
  }
})

// CTA partner
const partner = document.getElementById("top-Partner");
document.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    partner.classList.add("active");
  } else {
    partner.classList.remove("active");
  }
})

// Ham
document.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    if (menus.classList.contains("menu-active")) {
      hamBtn.classList.remove("is-active");
      menus.classList.remove("menu-active");
    }
  }
})
  
