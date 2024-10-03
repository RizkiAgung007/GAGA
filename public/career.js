document.addEventListener("DOMContentLoaded", function () {
  const career = [
    {
      name: "Sales Supervisor (FMCG)",
      detail1: "- Full Time",
      detail2: "- Minimum Education D3 All Majors",
      detail3: "- Placement : South Jakarta",
      btn: "Learn More",
      jobId: "sales-supervisor",
    },
    {
      name: "Brand Activation Supervisor",
      detail1: "- Full Time",
      detail2:
        "- Minimum Bachelor's Degree In Any Major From A Leading University",
      detail3: "- Placement : South Jakarta",
      btn: "Learn More",
      jobId: "brand-activation",
    },
    {
      name: "Business Process Improvement Manager",
      detail1: "- Full Time",
      detail2: "- Minimum Bachelor Degree Preferably From Reputable University",
      detail3: "- Placement : South Jakarta",
      btn: "Learn More",
      jobId: "business-process",
    },
    {
      name: "Production Manager (FMCG)",
      detail1: "- Full Time",
      detail2:
        "- Minimum Education Bachelor Degree of Engineering (Food/Mechanical/Electrical Technology) With GPA 3.00",
      detail3: "- Placement : Ciawi, Bogor",
      btn: "Learn More",
      jobId: "production-manager",
    },
  ];

  const careerList = document.getElementById("career-list");

  career.forEach((car) => {
    const contain = document.createElement("div");
    contain.className ="border-b border-r border-blue rounded-2xl mb-11 p-8 md:mx-0 mx-4";

    contain.innerHTML = `
      <h1 class="text-blue md:text-3xl text-xl font-bold">${car.name}</h1>
      <div class="mt-3">
        <p class="text-blue md:text-lg text-base font-medium">${car.detail1}</p>
        <p class="text-blue md:text-lg text-base font-medium">${car.detail2}</p> 
        <p class="text-blue md:text-lg text-base font-medium">${car.detail3}</p>
      </div>
      <button class="bg-blue mt-2 px-4 py-2 rounded-lg border hover:border-blue hover:bg-white text-white hover:text-blue transition-all" job-id="${car.jobId}">${car.btn}</button>
        `;

    careerList.appendChild(contain);
  });

  const jobDetails = {
    "sales-supervisor": `
        <h2 class="text-blue text-2xl font-bold">Sales Supervisor (FMCG)</h2>
<p>Jakarta Selatan, Jakarta Raya</p>
<p>Manajemen Area/Multi-lokasi (Ritel & Produk Konsumen)</p>
<p>Full time</p>
<h3 class="text-blue text-xl font-bold mt-4">Deskripsi Pekerjaan</h3>
<p>1. Bertanggung jawab untuk membuat laporan kerja sales.</p>
<p>2. Membuat perencanaan kerja Tim Sales.</p>
<p>3. Mengelola dan mengatur Tim Sales dalam proses pencapaian target.</p>
<p>4. Memastikan target penjualan tercapai.</p>
<h3 class="text-blue text-xl font-bold mt-4">Kualifikasi</h3>
<p>1. Pendidikan minimal D3 Semua Jurusan.</p>
<p>2. Memiliki pengalaman minimal 2 tahun sebagai Sales Supervisor di bidang FMCG.</p>
<p>3. Mampu mengoperasikan komputer dengan baik.</p>
<p>4. Mampu bekerja secara individu maupun team.</p>
<p>5. Memiliki jiwa kepemimpinan, kemampuan analisa pemecahan masalah, dan interaksi yang baik.</p>
<p>6. Memiliki semangat dan motivasi yang tinggi.</p>
<p>7. Bisa mengendarai mobil dan sepeda motor serta memiliki sim A dan C.</p>
<p>8. Bersedia untuk penempatan di Seluruh Indonesia</p>
<h3 class="text-blue text-xl font-bold mt-4">Pengumuman</h3>
<p>1. PT Jakarana Tama tidak pernah memungut biaya apapun dalam proses rekrutmen.</p>
<p>2. PT Jakarana Tama. tidak pernah bekerja sama dengan travel agent / biro perjalanan tertentu dalam proses rekrutmen.</p>
<p>3. Apabila Anda diminta untuk membayar sejumlah uang dalam bentuk pembayaran tiket pesawat dan hotel atau akomodasi lainnya agar diabaikan.</p>
<p>4. Jangan memberikan data pribadi atau data keuangan Anda kepada siapapun.</p>
<p>5. Jika membutuhkan klarifikasi lebih lanjut dapat langsung menghubungi PT Jakarana Tama.</p>
<h3 class="text-blue text-xl font-bold mt-4">Profil Perusahaan</h3>
<p class="text-justify">
  PT Jakarana Tama berdiri pada tanggal 20 Juni 1980 berdasarkan Akta Notaris
  Kusmulayanto Ongko, SH No. 107 sebagai perusahaan distribusi regional di
  Medan, Sumatera Utara. Bisnis utama perusahaan adalah memproduksi mi instan,
  produk kalengan, Sosis siap saji, dan bumbu penyedap. Menyadari pentingnya
  diversifikasi bisnis dan produk, perusahaan telah menginvestasikan merek
  'GaGa' dalam portofolio kami. Perusahaan juga memiliki beberapa merek lain,
  seperti, 100, 1000, Mie Gepeng, Mie Telor A1, Otak-otak, Sosis Loncat.
  Merek-merek ini melayani beberapa segmen pasar dan konsumen yang berbeda.
  Sejalan dengan meningkatnya jumlah variasi produk, perusahaan telah memperluas
  distribusinya yang tersebar di semua kota besar di Indonesia. Saat ini,
  perusahaan telah melengkapi dirinya dengan inovasi produk berstandar
  internasional, teknologi produksi yang memadai dan canggih, dengan tenaga ahli
  yang sangat berkualitas untuk mendukung tujuan keseluruhan perusahaan dalam
  mengejar misi perusahaan kami. Perusahaan ini memiliki salah satu merek mie
  instan paling populer di Indonesia, GaGa, yang terus-menerus mendapatkan
  pangsa pasar dalam lingkungan yang sangat kompetitif.
</p>
<h1 class="text-center pt-4 text-2xl font-bold text-red">CV dapat dikirimkan melalui email ke recruitment@jakaranatama.co.id</h1>`,
    "brand-activation": `
<h2 class="text-blue text-2xl font-bold">Brand Activation Supervisor</h2>
<p>Jakarta Selatan, Jakarta Raya</p>
<p>Manajemen Brand (Pemasaran & Komunikasi)</p>
<p>Full time</p>
<h3 class="text-blue text-xl font-bold mt-4">Deskripsi Pekerjaan</h3>
<p>1. Bertanggung jawab atas promotion program, perencanaan dan pelaksanaan kegiatan ATL, BTL dan TTL.</p>
<p>2. Bertanggung jawab atas strategi marketing, implementasi, dan analisis untuk meningkatkan brand awareness dan memperkuat brand image.</p>
<p>3. Membuat event dan kegiatan aktivasi yang dapat memperkuat brand image dan brand awareness.</p>
<h3 class="text-blue text-xl font-bold mt-4">Kualifikasi</h3>
<p>1. Minimum lulusan S1 segala jurusan dari universitas terkemuka.</p>
<p>2. Berpengalaman minimal 3 tahun menangani marketing communication, promotion atau brand management ,diutamakan dari Perusahaan consumer goods.</p>
<p>3. Berpengalaman berhubungan dengan media cetak, digital, dan elektronik.</p>
<p>4. Memiliki kemampuan komunikasi yang baik dan networking yang luas.</p>
<p>5. Penempatan : Jakarta Selatan.</p>
<h3 class="text-blue text-xl font-bold mt-4">Pengumuman</h3>
<p>1. PT Jakarana Tama tidak pernah memungut biaya apapun dalam proses rekrutmen.</p>
<p>2. PT Jakarana Tama. tidak pernah bekerja sama dengan travel agent / biro perjalanan tertentu dalam proses rekrutmen.</p>
<p>3. Apabila Anda diminta untuk membayar sejumlah uang dalam bentuk pembayaran tiket pesawat dan hotel atau akomodasi lainnya agar diabaikan.</p>
<p>4. Jangan memberikan data pribadi atau data keuangan Anda kepada siapapun.</p>
<p>5. Jika membutuhkan klarifikasi lebih lanjut dapat langsung menghubungi PT Jakarana Tama.</p>
<h3 class="text-blue text-xl font-bold mt-4">Profil Perusahaan</h3>
<p class="text-justify">
  PT Jakarana Tama berdiri pada tanggal 20 Juni 1980 berdasarkan Akta Notaris
  Kusmulayanto Ongko, SH No. 107 sebagai perusahaan distribusi regional di
  Medan, Sumatera Utara. Bisnis utama perusahaan adalah memproduksi mi instan,
  produk kalengan, Sosis siap saji, dan bumbu penyedap. Menyadari pentingnya
  diversifikasi bisnis dan produk, perusahaan telah menginvestasikan merek
  'GaGa' dalam portofolio kami. Perusahaan juga memiliki beberapa merek lain,
  seperti, 100, 1000, Mie Gepeng, Mie Telor A1, Otak-otak, Sosis Loncat.
  Merek-merek ini melayani beberapa segmen pasar dan konsumen yang berbeda.
  Sejalan dengan meningkatnya jumlah variasi produk, perusahaan telah memperluas
  distribusinya yang tersebar di semua kota besar di Indonesia. Saat ini,
  perusahaan telah melengkapi dirinya dengan inovasi produk berstandar
  internasional, teknologi produksi yang memadai dan canggih, dengan tenaga ahli
  yang sangat berkualitas untuk mendukung tujuan keseluruhan perusahaan dalam
  mengejar misi perusahaan kami. Perusahaan ini memiliki salah satu merek mie
  instan paling populer di Indonesia, GaGa, yang terus-menerus mendapatkan
  pangsa pasar dalam lingkungan yang sangat kompetitif.
</p>
<h1 class="text-center pt-4 text-2xl font-bold text-red">CV dapat dikirimkan melalui email ke recruitment@jakaranatama.co.id</h1>`,
    "business-process": `
    <h2 class="text-blue text-2xl font-bold">Business Process Improvement Manager</h2>
<p>Jakarta Selatan, Jakarta Raya</p>
<p>Konsultasi Manajemen & Perubahan (Konsultasi & Strategi)</p>
<p>Full time</p>
<h3 class="text-blue text-xl font-bold mt-4">Deskripsi Pekerjaan</h3>
<p>1. Memulai secara mandiri dan mampu menyesuaikan prioritas kerja sebagai respons terhadap lingkungan yang kompleks atau berubah.</p>
<p>2. Memimpin proyek rekayasa ulang proses bisnis dan bertujuan untuk menghilangkan pemborosan, menyederhanakan, dan meningkatkan alur kerja dalam perusahaan.</p>
<p>3. Mendorong pengoptimalan dengan mengidentifikasi area peluang peningkatan, menentukan dan merencanakan proyek untuk meningkatkan kinerja.</p>
<p>4. Mengelola proyek pusat keunggulan dari awal hingga akhir; menentukan cakupan, sasaran, dan hasil proyek.</p>
<p>5. Menyarankan, mengontrol, dan memantau Proyek atau Program Peningkatan/Rekayasa Ulang Proses Bisnis.</p>
<p>6. Merumuskan Kebijakan dan Prosedur Operasi Standar (SOP) sebagai bagian dari inisiatif Peningkatan Proses Bisnis, Rekayasa Ulang, dan Otomatisasi untuk mengoptimalkan kinerja bisnis.</p>
<h3 class="text-blue text-xl font-bold mt-4">Kualifikasi</h3>
<p>1. Minimal gelar Sarjana diutamakan dari universitas terkemuka.</p>
<p>2. Berpengalaman 4+ tahun di industri FMCG.</p>
<p>3. Memiliki pengetahuan yang baik tentang model bisnis, manajemen strategis, diagnostik/penilaian proses bisnis, Ketajaman Bisnis, dan pengetahuan terkait lainnya.</p>
<p>4. Lancar berbahasa Inggris baik tertulis maupun lisan.</p>
<p>5. Penempatan : Jakarta Selatan.</p>
<h3 class="text-blue text-xl font-bold mt-4">Pengumuman</h3>
<p>1. PT Jakarana Tama tidak pernah memungut biaya apapun dalam proses rekrutmen.</p>
<p>2. PT Jakarana Tama. tidak pernah bekerja sama dengan travel agent / biro perjalanan tertentu dalam proses rekrutmen.</p>
<p>3. Apabila Anda diminta untuk membayar sejumlah uang dalam bentuk pembayaran tiket pesawat dan hotel atau akomodasi lainnya agar diabaikan.</p>
<p>4. Jangan memberikan data pribadi atau data keuangan Anda kepada siapapun.</p>
<p>5. Jika membutuhkan klarifikasi lebih lanjut dapat langsung menghubungi PT Jakarana Tama.</p>
<h3 class="text-blue text-xl font-bold mt-4">Profil Perusahaan</h3>
<p class="text-justify">
  PT Jakarana Tama berdiri pada tanggal 20 Juni 1980 berdasarkan Akta Notaris
  Kusmulayanto Ongko, SH No. 107 sebagai perusahaan distribusi regional di
  Medan, Sumatera Utara. Bisnis utama perusahaan adalah memproduksi mi instan,
  produk kalengan, Sosis siap saji, dan bumbu penyedap. Menyadari pentingnya
  diversifikasi bisnis dan produk, perusahaan telah menginvestasikan merek
  'GaGa' dalam portofolio kami. Perusahaan juga memiliki beberapa merek lain,
  seperti, 100, 1000, Mie Gepeng, Mie Telor A1, Otak-otak, Sosis Loncat.
  Merek-merek ini melayani beberapa segmen pasar dan konsumen yang berbeda.
  Sejalan dengan meningkatnya jumlah variasi produk, perusahaan telah memperluas
  distribusinya yang tersebar di semua kota besar di Indonesia. Saat ini,
  perusahaan telah melengkapi dirinya dengan inovasi produk berstandar
  internasional, teknologi produksi yang memadai dan canggih, dengan tenaga ahli
  yang sangat berkualitas untuk mendukung tujuan keseluruhan perusahaan dalam
  mengejar misi perusahaan kami. Perusahaan ini memiliki salah satu merek mie
  instan paling populer di Indonesia, GaGa, yang terus-menerus mendapatkan
  pangsa pasar dalam lingkungan yang sangat kompetitif.
</p>
<h1 class="text-center pt-4 text-2xl font-bold text-red">CV dapat dikirimkan melalui email ke recruitment@jakaranatama.co.id</h1>`,
    "production-manager": `
    <h2 class="text-blue text-2xl font-bold">Production Manager (FMCG)</h2>
<p>Ciawi, Bogor, Jawa Barat</p>
<p>Produksi, Perencanaan & Penjadwalan (Manufaktur, Transportasi & Logistik)</p>
<p>Full time</p>
<h3 class="text-blue text-xl font-bold mt-4">Deskripsi Pekerjaan</h3>
<p>1. Bertanggung jawab melakukan evaluasi proses produksi dengan mengontrol parameter produksi dan bahan baku sesuai dengan standar kualitas dan target produksi.</p>
<p>2. Mengatur dan mengawasi pelaksanaan proses produksi.</p>
<p>3. Bersama PPIC, mengatur jadwal produksi dan memastikan produk memenuhi spesifikasi dan standar kualitas yang ditentukan.</p>
<p>4. Melakukan Continuous Improvement pada lini produksi untuk mencapai produksi yang efektif dan efisien.</p>
<p>5. Mengelola tim dan evaluasi kinerja secara berkala.</p>
<p>6. Memahami dan menerapkan prinsip mutu dan keselamatan kerja.</p>
<p>7. Memastikan penerapan Sistem Mutu, GMP, Persyaratan Hukum dan keselamatan sesuai standar yang telah ditentukan.</p>
<p>8. Melaksanakan kegiatan produksi sesuai dengan Prosedur Operasional Standar dan Instruksi Kerja yang berlaku.</p>
<p>9. Membuat laporan harian dan pelaporan dasbor.</p>
<h3 class="text-blue text-xl font-bold mt-4">Kualifikasi</h3>
<p>1. Pendidikan minimal Sarjana Teknik (Teknologi Pangan/Mekanikal/Listrik) dengan IPK 3,00.</p>
<p>2. Memiliki pengalaman kerja minimal 5 tahun sebagai Manajer Produksi di FMCG/Pabrik Makanan (mie dan bumbu).</p>
<p>3. Memiliki keterampilan kepemimpinan yang kuat untuk memotivasi dan mengelola tim produksi.</p>
<p>4. Memiliki kemampuan analitis, pemecahan masalah, komunikasi dan interpersonal yang baik.</p>
<p>5. Mampu mengoperasikan Microsoft Office (Excel Intermediate) dan SAP.</p>
<p>6. Motivasi kerja yang tinggi dan perhatian terhadap detail.</p>
<p>7. Bersedia ditempatkan di Pabrik Ciawi, Bogor.</p>
<h3 class="text-blue text-xl font-bold mt-4">Pengumuman</h3>
<p>1. PT Jakarana Tama tidak pernah memungut biaya apapun dalam proses rekrutmen.</p>
<p>2. PT Jakarana Tama. tidak pernah bekerja sama dengan travel agent / biro perjalanan tertentu dalam proses rekrutmen.</p>
<p>3. Apabila Anda diminta untuk membayar sejumlah uang dalam bentuk pembayaran tiket pesawat dan hotel atau akomodasi lainnya agar diabaikan.</p>
<p>4. Jangan memberikan data pribadi atau data keuangan Anda kepada siapapun.</p>
<p>5. Jika membutuhkan klarifikasi lebih lanjut dapat langsung menghubungi PT Jakarana Tama.</p>
<h3 class="text-blue text-xl font-bold mt-4">Profil Perusahaan</h3>
<p class="text-justify">
  PT Jakarana Tama berdiri pada tanggal 20 Juni 1980 berdasarkan Akta Notaris
  Kusmulayanto Ongko, SH No. 107 sebagai perusahaan distribusi regional di
  Medan, Sumatera Utara. Bisnis utama perusahaan adalah memproduksi mi instan,
  produk kalengan, Sosis siap saji, dan bumbu penyedap. Menyadari pentingnya
  diversifikasi bisnis dan produk, perusahaan telah menginvestasikan merek
  'GaGa' dalam portofolio kami. Perusahaan juga memiliki beberapa merek lain,
  seperti, 100, 1000, Mie Gepeng, Mie Telor A1, Otak-otak, Sosis Loncat.
  Merek-merek ini melayani beberapa segmen pasar dan konsumen yang berbeda.
  Sejalan dengan meningkatnya jumlah variasi produk, perusahaan telah memperluas
  distribusinya yang tersebar di semua kota besar di Indonesia. Saat ini,
  perusahaan telah melengkapi dirinya dengan inovasi produk berstandar
  internasional, teknologi produksi yang memadai dan canggih, dengan tenaga ahli
  yang sangat berkualitas untuk mendukung tujuan keseluruhan perusahaan dalam
  mengejar misi perusahaan kami. Perusahaan ini memiliki salah satu merek mie
  instan paling populer di Indonesia, GaGa, yang terus-menerus mendapatkan
  pangsa pasar dalam lingkungan yang sangat kompetitif.
</p>
<h1 class="text-center pt-4 text-2xl font-bold text-red">CV dapat dikirimkan melalui email ke recruitment@jakaranatama.co.id</h1>`,
  };

  function showDetail(jobId) {
    const detail = document.getElementById("job-detail");
    detail.innerHTML = jobDetails[jobId];
    detail.classList.remove("hidden")
  }

  document.addEventListener("click", function(event) {
    if (event.target.matches('button[job-id]')) {
        const jobId = event.target.getAttribute('job-id');
        showDetail(jobId);
    }
  })
});

// Hamburger btn
const hamBtn = document.querySelector(".hamburger");
const menus = document.querySelector(".menu");

hamBtn.addEventListener("click", function() {
  hamBtn.classList.toggle("is-active");
  menus.classList.toggle("menu-active");
})

// CTA
const topCareer = document.getElementById("top-Career");
document.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    topCareer.classList.add("active");
    if (menus.classList.contains("menu-active")) {
      hamBtn.classList.remove("is-active");
      menus.classList.remove("menu-active");
    }
  } else {
    topCareer.classList.remove("active");
  }
})
