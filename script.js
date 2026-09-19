// 1. DATA BERITA (Sudah ditambah jalur gambar)
const berita = [
  {
    j: "IPSAL Sukses Gelar Kegiatan Menyambut HUT RI ke-81",
    t: "02 Sep 2026",
    v: 102,
    gambar: "img/berita1.png", // Simpan gambar di folder img/berita1.png
    url: "https://melung.desa.id/artikel-detail/ipsal-sukses-gelar-kegiatan-menyambut-hut-ri-ke-81",
    isi: [
      "Ikatan Pemuda Salam (IPSAL) menggelar rangkaian lomba dan pentas seni untuk menyambut HUT RI ke-81. Kegiatan berlangsung selama tiga hari di lapangan desa.",
      "Panitia mencatat lebih dari 200 warga ikut serta, mulai dari anak-anak hingga lansia. Lomba favorit tahun ini adalah balap karung antar-RT."
    ]
  },
  {
    j: "Peringatan HUT RI Ke-81 di Desa Melung dengan Partisipasi Beragam",
    t: "18 Agu 2026",
    v: 76,
    gambar: "img/berita2.png",
    url: "https://melung.desa.id/artikel-detail/peringatan-hut-ri-ke-81-di-desa-melung-dengan-partisipasi-beragam",
    isi: [
      "Upacara bendera diikuti perangkat desa, siswa sekolah, dan perwakilan lembaga kemasyarakatan.",
      "Usai upacara, warga melanjutkan dengan kirab budaya keliling dusun dan santap bersama di balai desa."
    ]
  },
  {
    j: "Wujudkan Tertib Administrasi, Pemdes Melung Rilis Daftar Lengkap Syarat Pelayanan Publik",
    t: "07 Jul 2026",
    v: 179,
    gambar: "img/berita3.png",
    url: "https://melung.desa.id/artikel-detail/wujudkan-tertib-administrasi-pemdes-melung-rilis-daftar-lengkap-syarat-pelayanan-publik",
    isi: [
      "Pemerintah desa menerbitkan daftar persyaratan seluruh layanan administrasi agar warga tidak bolak-balik melengkapi berkas.",
      "Daftar ini dipasang di papan informasi balai desa dan dapat diunduh melalui situs resmi desa."
    ]
  },
  {
    j: "Wujudkan Transparansi, Website Desa Melung Sediakan Menu Khusus \"Desa Anti Korupsi\"",
    t: "07 Jul 2026",
    v: 164,
    gambar: "img/berita4.png",
    url: "https://melung.desa.id/artikel-detail/wujudkan-transparansi-website-desa-melung-sediakan-menu-khusus-desa-anti-korupsi",
    isi: [
      "Menu baru ini memuat dokumen tata laksana, pengawasan, kualitas pelayanan publik, dan partisipasi masyarakat.",
      "Seluruh dokumen dapat diakses publik tanpa perlu mengajukan permohonan informasi terlebih dahulu."
    ]
  },
  {
    j: "Guyub Rukun Mbangun Desa, Begini Kemeriahan Ruwat Bumi Tiga Tahunan di Desa Melung Banyumas",
    t: "22 Jun 2026",
    v: 158,
    gambar: "img/berita5.png",
    url: "https://melung.desa.id/artikel-detail/guyub-rukun-mbangun-desa-begini-kemeriahan-ruwat-bumi-tiga-tahunan-di-desa-melung-banyumas",
    isi: [
      "Tradisi ruwat bumi yang digelar tiga tahun sekali kembali dilaksanakan sebagai wujud syukur atas hasil panen.",
      "Acara diawali kenduri bersama, dilanjutkan pertunjukan wayang semalam suntuk di halaman balai desa."
    ]
  },
  {
    j: "Pelepasan Siswa-Siswi SD Negeri Melung Tahun Ajaran 2025/2026 Berlangsung Meriah dan Sarat Budaya Lokal",
    t: "10 Jun 2026",
    v: 151,
    gambar: "img/berita6.png",
    url: "https://melung.desa.id/artikel-detail/pelepasan-siswa-siswi-sd-negeri-melung-tahun-ajaran-20252026-berlangsung-meriah-dan-sarat-budaya-lokal",
    isi: [
      "Acara pelepasan siswa kelas enam dikemas dengan tarian daerah dan pembacaan puisi karya siswa.",
      "Kepala sekolah berpesan agar para lulusan tetap menjaga nama baik desa saat melanjutkan ke jenjang berikutnya."
    ]
  }
];

// 2. MENAMPILKAN KARTU BERITA
const grid = document.getElementById('grid');
grid.innerHTML = '';
berita.forEach((b, i) => {
  const el = document.createElement('button');
  el.className = 'news';
  el.innerHTML = `
    <div class="thumb">
      <span class="tag">BERITA DESA</span>
      <img src="${b.gambar}" alt="${b.j}">
    </div>
    <div class="news-body">
      <h3>${b.j}</h3>
      <div class="meta"><span>📅 ${b.t} &nbsp;•&nbsp; 👁 ${b.v}</span><span class="read">Baca →</span></div>
    </div>`;
  el.addEventListener('click', () => buka(i));
  grid.appendChild(el);
});

document.getElementById('total').textContent = `Total ${berita.length} Berita`;

// 3. POPUP DETAIL BERITA
const overlay = document.getElementById('overlay');
let lastFocus = null;

function buka(i) {
  const b = berita[i];
  lastFocus = document.activeElement;
  document.getElementById('mTitle').textContent = b.j;
  document.getElementById('mMeta').textContent = `${b.t}  •  ${b.v} kali dibaca`;
  document.getElementById('mBody').innerHTML = b.isi.map(p => `<p>${p}</p>`).join('');
  document.getElementById('btnBuka').href = b.url;
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
  document.getElementById('btnClose').focus();
}

function tutup() {
  overlay.classList.remove('show');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

document.getElementById('btnClose').onclick = tutup;
document.getElementById('btnClose2').onclick = tutup;
overlay.addEventListener('click', e => { if (e.target === overlay) tutup(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('show')) tutup(); });

// 4. DROPDOWN MOBILE
document.querySelectorAll('.menu > li').forEach(li => {
  const a = li.querySelector('a'); 
  const sub = li.querySelector('.sub');
  if (sub) {
    a.addEventListener('click', e => { 
      if (window.innerWidth < 860) { 
        e.preventDefault(); 
        li.classList.toggle('open'); 
      }
    });
  }
});

// 5. JAM REALTIME
function jam() {
  const d = new Date();
  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][d.getDay()];
  const bln = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'][d.getMonth()];
  const p = n => String(n).padStart(2, '0');
  document.getElementById('clock').textContent =
    `${hari}, ${d.getDate()} ${bln} ${d.getFullYear()} • ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())} WIB`;
}

jam();
setInterval(jam, 1000);