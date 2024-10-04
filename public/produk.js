document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {image: "../asset/produk/edit1.jpg", title: "GAGA 100 EXTRA PEDAS", desc: "The noodle made with the best wheat flour quality served with the famous Indonesian herbs and spices, available in 5 different variants", id: "../public/product/detail1.html"},
        {image: "../asset/produk/edit2.jpg", title: "GAGA BAKMIE", desc: "Is one of the finest dried wheat noodles, the chewy texture of the noodle similiar like home made noodles, no preservative, and made from the finest quality ingridients", id: "../public/product/detail2.html"},
        {image: "../asset/produk/edit3.jpg", title: "GAGA BEEF READY TO EAT", desc: "Ready to Eat product, made from beef as a good protein and iron sauce and processed with sterilization, no preservatives, more hygiene and easy to served, with famous Indonesian herbs and spices", id: "../public/product/detail3.html"},
        {image: "../asset/produk/edit4.jpg", title: "GAGA BUBUR", desc: "We provide ready to eat desserts, no preservativees, available in 2 variants: Mix Bean Porridge and Black Glutinous Rice Porridge.", id: "../public/product/detail4.html"},
        {image: "../asset/produk/edit5.jpg", title: "GAGA MIE AUSSIE", desc: "Special instant noodle with two different flavour. Made by pure Australian wheat combine Indonesia traditional spices with guranteed quality", id: "../public/product/detail5.html"},
        {image: "../asset/produk/edit6.jpg", title: "GAGA GEPENG", desc: "The noodle made with the best wheat flour quality serve with th famous Indonesian herbs and spices, available in four different variants", id: "../public/product/detail6.html"},
        {image: "../asset/produk/edit7.jpg", title: "GAGA INDONESIAN MIE", desc: "Instant Fried Noodles with a soft noodle texture and in combination of sweet and savory flavors made from herbs and spices complemented by chili sauce, soy sauce and fried onions", id: "../public/product/detail7.html"},
        {image: "../asset/produk/edit8.jpg", title: "GAGA MIE TELOR A1", desc: "One of the premium quality wheat noodles in its class that has a level of texture noodles that is quite chewy and which can be processed with various types of processed", id: "../public/product/detail8.html"},
        {image: "../asset/produk/edit9.jpg", title: "GAGA 100 EXTRA PEDAS SAUS SAMBAL", desc: "Extra spicy sambal sauce made with real jalapeno peppers, packaged in food-grade and hygienic PET bottles", id: "../public/product/detail9.html"},
        {image: "../asset/produk/edit10.jpg", title: "GAGA SARDINES", desc: "GAGA Sardines is made from high-quality fresh sardines with a strong aroma and delicious taste of tomato and chili sauce", id: "../public/product/detail10.html"},
        {image: "../asset/produk/edit11.jpg", title: "GAGA SOSIS & OTAK-OTAK", desc: "Otak-Otakku is a tasty sausage with fine quality of fresh fish. Loncat Sausage is a tasty sausage which has two flavor, chicken and beef, it is a ready to eat product", id: "../public/product/detail11.html"},
    ];

    const produkList = document.getElementById("produk-list");

    products.forEach((item) => {
        const list = document.createElement("li");
        list.className = "border-b rounded-lg sm:pb-6 pb-3 md:pt-8 pt-0 border-blue";

        list.innerHTML = `
        <div class="flex sm:justify-between justify-center sm:items-center sm:gap-6 gap-4">
            <img src="${item.image}" alt="" class=" sm:w-[35%] w-[30%] h-[50%] sm:pt-0 pt-12">
            <div class="">
                <div class="flex flex-col w-full">
                    <h1 class="sm:text-3xl text-xl text-blue font-bold md:pt-0 pt-2">${item.title}</h1>
                    <p class="sm:text-xl text-sm py-4 text-blue">${item.desc}</p>
                </div>
                <a href=${item.id}><button class="bg-blue hover:bg-white sm:mt-4 mt-0 sm:px-4 sm:py-3 px-2 py-2 rounded-lg text-white hover:text-blue transition-all border border-blue font-medium">Learn More</button></a>
            </div>
        </div> `

        produkList.appendChild(list);
    })
});

// Logo sosmed pada produk
document.addEventListener("DOMContentLoaded", function() {
    const logo = [
        {image: "../asset/blibli.png"},
        {image: "../asset/bukalapak.png"},
        {image: "../asset/lazada.png"},
        {image: "../asset/shopee.png"},
        {image: "../asset/tiktok.png"},
        {image: "../asset/tokopedia.png"},
    ];

    const logoContain = document.querySelector(".logo-sosmed");

    logo.forEach((item) => {
        const img = document.createElement("img");
        img.src = item.image;
        img.className = "xl:w-24 xl:h-24 md:w-16 md:h-16 w-10 h-10";
        logoContain.appendChild(img);
    })
})

// Hamburger btn
const hamBtn = document.querySelector(".hamburger");
const menus = document.querySelector(".menu");

hamBtn.addEventListener("click", function() {
    hamBtn.classList.toggle("is-active");
    menus.classList.toggle("menu-active")
})

  // CTA
const toTop = document.getElementById("btt");
document.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        toTop.classList.add("active");
        if (menus.classList.contains("menu-active")) {
            hamBtn.classList.remove("is-active");
            menus.classList.remove("menu-active");
        }
    } else {
        toTop.classList.remove("active");
    }
})

// Detail ham scroll
document.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      if (menus.classList.contains("menu-active")) {
        hamBtn.classList.remove("is-active");
        menus.classList.remove("menu-active");
      }
    }
})
