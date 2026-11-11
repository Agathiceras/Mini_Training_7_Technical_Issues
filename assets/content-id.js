/* Mini_Training_7_Technical_Issues - konten bahasa Indonesia (semua teks halaman).
   Untuk menambah bahasa: salin file ini menjadi content-xx.js, terjemahkan teksnya (pertahankan kode, key, tag HTML, pemanggilan helper, serta path gambar/video/simulasi), lalu atur PAGE_LANG, flag, dan dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Masalah Teknis — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Saat <span class=\"h-pill\">Teknologi</span> Bermasalah",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang keluarganya mengajukan refund karena masalah teknis. Di sini kamu akan melihat apa yang bisa kamu lakukan sebelum, selama, dan setelah pelajaran, solusi alternatif apa saja yang bisa dipakai, dan ke mana meminta bantuan agar masalahnya teratasi tepat waktu.",
    heroCard1:"<b>Sesuai kecepatanmu.</b> Progresmu tersimpan di browser ini.",
    heroCard2:"<b>Termasuk latihan.</b> Kamu akan melaporkan masalah teknis di simulasi Back Office.",
    pbLabel:'modul selesai',
    tapOpen:'Ketuk untuk membuka',
    tapFlip:'Ketuk untuk membalik',
    lblSee:'Yang kamu lihat',
    lblDo:'Yang kamu lakukan',
    lblSay:'Yang bisa kamu katakan',
    lblReport:'Ke mana melapor',
    lblAvoid:'Hindari',
    lblTip:'Tips',
    stepOf:'Langkah {i} dari {n}',
    next:'Berikutnya',
    heroWork:"Selesaikan 6 modul singkat. Setiap cek modul butuh nilai 70%+ untuk membuka modul berikutnya. Total sekitar 30–40 menit.",
    startBtn:"🚀 Mulai Pelatihan",
    pathLabel:'Jalur belajarmu',
    devTitle:'Dev: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai cek modul',
    finishBtn:'▶ Selesaikan mini-training',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Cek modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Cek modul — soal {i} dari {n}',
    scoreSoFar:'Skor sementara: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum berhasil',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resDone:"Kamu sudah menyelesaikan mini-training ini.",
    resNeed:'Kamu butuh 70% untuk membuka modul berikutnya. Tinjau lagi bagian di atas, lalu coba cek ini sekali lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resFinish:'Lanjut',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Mini-Training Selesai',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu sudah menyelesaikan mini-training ini.</strong>",
    doneP2:"Semuanya sudah selesai di sini! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka mini-training ini untuk menuntaskan tugasnya.",
    doneP3:"👉 <strong>Jika ada cek atau penilaian yang tercantum tepat di bawah pelatihan ini di LMS, pastikan kamu menyelesaikannya dan mencapai nilai kelulusan</strong> — jika tidak, tugasnya bisa tetap tercatat belum selesai.",
    doneP4:'Semoga sukses! ❤️',
    doneP5:'',
    devUnlockAlert:'Mode dev: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode dev AKTIF — semua modul terbuka',
    devOff:'🔒 Mode dev NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE DEV',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:',
    cvSee:'Yang kamu lihat:',
    cvDo:'Yang kamu lakukan:',
    dtExample:'Contoh dari kelas sungguhan',
    dtNext:'Berikutnya:',
    dtDone:"✅ Itu dia ketiga level.",
    tlVideoTitle:'{label} — contoh dari kelas sungguhan',
    tlVideoMeta:'Tonton seperti apa fase ini dalam pelajaran sungguhan'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'🧩', color:'#5DD39E', art:'lifebuoy', learn:[['📊','Apa yang ditunjukkan data'],['🔎','Masalah yang dibahas pelatihan ini'],['🧭','Mana yang jadi bagianmu — dan mana yang bukan'],['🛟','Apa yang harus dilakukan jika permintaan refund sudah ada'],['🎯','Cara menjadikan pelajaran berikutnya sebagai upaya pemulihan']],
 eyebrow:'Pendahuluan',
 title:'Kenapa Kamu Ada di Sini',
 desc:'Mengapa masalah teknis di pelajaran-pelajaran pertama bisa membuat kita kehilangan sebuah keluarga, mana yang jadi bagianmu — dan apa yang harus dilakukan jika permintaan refund sudah ada.',
 obj:'Memahami mengapa masalah teknis di pelajaran-pelajaran pertama bisa membuat kita kehilangan sebuah keluarga, mana yang jadi bagianmu, dan apa yang harus dilakukan begitu permintaan refund sudah ada.',
 sections:[
  {t:'📊 Apa yang ditunjukkan data', html:`
   <div class="card"><p>Masalah teknis jarang datang sendirian. Masalah ini muncul di pelajaran-pelajaran pertama, saat keluarga masih menimbang apakah Kodland cocok untuk mereka — dan terkadang bahkan sebelum anaknya mengikuti satu pelajaran pun.</p></div>
   ${bigStat('≈ 1 dari 20',`<p>permintaan refund punya <strong>masalah teknis yang nyata</strong> di baliknya. Dan itu angka minimum: sebagian kasus seperti ini masuk dengan label alasan lain.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Berdasarkan permintaan refund dalam 90 hari terakhir di semua wilayah; angka perkiraan.</p>
   ${co('co-idea','💡',`<p><strong>Pelajaran-pelajaran pertama adalah jendela yang paling sempit.</strong> Masalah teknis yang diperbaiki di hari yang sama biasanya bisa diselamatkan; masalah yang sama jika diperbaiki terlambat hampir tidak pernah bisa. Karena itulah pelajaran-pelajaran pertama itu penting, dan hari yang sama itu penting.</p>`)}
  `},
  {t:'🔎 Masalah yang dibahas pelatihan ini', html:`
   ${iconGrid([
     {ic:'🖥️', html:`<strong>Classroom dan platform belajar.</strong> Tautan yang rusak atau tidak ada, error platform, layar hitam, serta audio dan kamera yang berhenti berfungsi.`},
     {ic:'💻', html:`<strong>Komputer yang tidak memenuhi persyaratan kursus</strong>`},
     {ic:'🧩', html:`<strong>Alat kursus yang tidak mau terbuka atau terinstal:</strong> Blender, Roblox Studio, Krita, dan program lainnya.`}
   ])}
  `},
  {t:'🧭 Mana yang jadi bagianmu dan mana yang bukan', html:`
   <div class="card"><p>Kamu tidak bisa memperbaiki bug platform, pendaftaran, atau jadwal. Tapi banyak hal ada di tanganmu — dan bagian terpentingnya adalah <strong>memberi tahu orang yang tepat, dengan cepat dan dengan baik</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Sepenuhnya bagianmu</th><th>🔁 Bagianmu untuk menyesuaikan dan melaporkan</th><th>🚫 Di luar kendalimu</th></tr>
    <tr><td>Memeriksa koneksi, perangkat, dan Chrome milikmu sendiri sebelum setiap pelajaran<br>Mengirimkan detail login yang kamu temukan di BO kepada keluarga</td><td>Siswa yang tidak bisa masuk atau terhubung: bantu dengan pertolongan pertama dan <strong>laporkan</strong></td><td>Memperbaiki bug Classroom atau platform</td></tr>
    <tr><td>Tetap tenang dan menganggapnya hal yang wajar di depan grup</td><td>Pelajaran yang hilang karena gangguan: sesuaikan pelajaran berikutnya dan <strong>laporkan</strong></td><td>Pendaftaran, lisensi, dan kredit pelajaran</td></tr>
    <tr><td>Mematikan dan menyalakan mikrofon dengan hati-hati</td><td>Komputer yang tidak memenuhi persyaratan: jaga agar pelajaran tetap bermanfaat dan <strong>laporkan ke Team Leader-mu</strong></td><td>Memindahkan siswa ke kursus, grup, atau jadwal lain</td></tr>
    <tr><td>Mencoba solusi alternatif yang sudah diketahui (refresh, masuk ulang, alat lain untuk kursusnya)</td><td>Masalah teknis yang bisa membuat keluarga pergi: <strong>ajukan pelajaran tambahan ke Team Leader-mu</strong></td><td>Menyetujui pelajaran tambahan, penjadwalan ulang, atau kompensasi apa pun</td></tr>
    <tr><td>Melapor di hari yang sama dengan detail lengkap</td><td>Gangguan yang memengaruhi beberapa siswa: triase, <strong>laporkan</strong>, dan buat rencana pemulihan</td><td>Penyedia internet atau jaringan rumah keluarga</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Bagianmu terdiri dari tiga langkah:</strong> pertolongan pertama di pelajaran, menyesuaikan pelajaran agar dampaknya sekecil mungkin, dan <strong>melapor di hari yang sama</strong> dengan detail lengkap.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>Jangan menunggu dalam diam.</strong> Jika dalam 10 menit belum teratasi, berhenti mencoba sendirian: komunikasikan, dokumentasikan, eskalasikan.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund karena masalah teknis sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah tentang mencegahnya. Tapi mungkin kamu membuka pelatihan ini karena ada keluarga yang <strong>sudah</strong> mengajukan refund karena masalah teknis. Baca dulu aturan-aturan ini.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaannya dibuat oleh Client Service, bukan oleh kamu.</strong> Kamu mengetahuinya dari komentar Client Service di profil siswa di BO; tidak ada notifikasi otomatis.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Jangan membicarakan permintaan itu sama sekali</strong> — tidak kepada anak, tidak kepada keluarga — kecuali Client Service memintamu menyampaikan sesuatu yang spesifik. Jika anak itu yang membahasnya, alihkan dengan hangat dan lanjutkan mengajar.</p>`)}
  `},
  {t:'🎯 Pelajaran berikutnya adalah upaya pemulihan', html:`
   <div class="card"><p>Pelajaran itu harus <strong>bebas dari gangguan teknis</strong>. Gangguan kedua setelah permintaan refund adalah skenario terburuk.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 menit sebelumnya:</strong> Chrome desktop versi terbaru, aplikasi lain ditutup; mikrofon, kamera, dan berbagi layar sudah dites; grup dan daftar siswa sudah dicek di BO.`},
     {ic:'🅱️', html:`<strong>Rencana B yang siap:</strong> apa yang akan kamu lakukan jika siswa tidak bisa masuk, jika audionya gagal, atau jika alat kursusnya tidak mau terbuka (Modul 1 dan 2).`},
     {ic:'👀', html:`<strong>Perhatian yang spesifik</strong> untuk anak itu — buat dia merasa diperhatikan karena sesuatu yang konkret, bukan sekadar dipuji secara umum.`},
     {ic:'🏆', html:`<strong>Keberhasilan yang cepat dan terlihat.</strong> Dia harus meninggalkan pelajaran dengan perasaan mampu, bukan tertinggal.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Jika gangguan terjadi lagi di pelajaran itu, segera laporkan</strong> ke Team Leader-mu, yang akan mengeskalasikannya ke dukungan teknis — bukan di akhir hari.</p>`)}
  `},
  {t:'📮 Laporkan di hari yang sama, dan ingat satu kalimat yang aman', html:`
   ${numlist([
     'Tinggalkan komentar di BO pada hari yang sama berisi persis apa yang kamu lihat: tanggal, apa yang gagal, pesan error atau banner, apa yang sudah kamu coba, dan tangkapan layar',
     'Sertakan kata-kata keluarga itu sendiri, apa adanya, jika kamu punya',
     'Beri tahu Team Leader-mu di hari yang sama — ini juga saat yang tepat untuk menanyakan apakah pelajaran tambahan masuk akal',
     'Jangan pernah mengonfirmasi bahwa refund sudah disetujui, jangan pernah membahas nominal, dan jangan pernah menyalahkan platform'
   ])}
   ${co('co-ok','✅',`<p><strong>Kalimat yang selalu aman:</strong> <em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em> Di situlah bagianmu dalam percakapan berakhir.</p>`)}
  `},
  {t:'🌱 Pertahankan upayanya setelah itu', html:`
   <div class="card"><p>Meskipun permintaannya dibatalkan atau anak itu pindah ke grup lain, tetap perhatikan sisi teknis pelajarannya selama beberapa minggu berikutnya: masuk lebih awal, tes perangkatmu, dan tanyakan apakah semuanya berfungsi. Pemulihan yang hanya bertahan satu pelajaran lalu diam-diam kembali seperti biasa sering kali tidak bertahan.</p></div>
  `}
 ],
 ix:{
  title:'Bagianmu, bagianmu untuk dilaporkan, dan bukan bagianmu',
  instr:'Kelompokkan setiap situasi dan pilih tindakan terbaik. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Ini bagian siapa?', card:`Gangguan di Classroom menghabiskan setengah pelajaran kemarin.`, zones:[{label:'✅ Sepenuhnya bagianku', fb:'Belum tepat — kamu tidak bisa memperbaiki gangguannya sendiri. Yang jadi bagianmu adalah menyesuaikan pelajaran berikutnya dan melaporkannya.'},{label:'🔁 Bagianku untuk menyesuaikan dan melaporkan', fb:'Benar — kamu menyesuaikan pelajaran berikutnya untuk mengejar materi pokok dan melaporkannya di hari yang sama.'},{label:'🚫 Di luar kendaliku', fb:'Tidak sepenuhnya — memperbaiki gangguannya memang bukan bagianmu, tapi menyesuaikan pelajaran berikutnya dan melaporkannya adalah bagianmu.'}], correctZone:1},
   {type:'sort', prompt:'Ini bagian siapa?', card:`Menyetujui pelajaran tambahan untuk keluarga setelah pelajaran yang hilang.`, zones:[{label:'✅ Sepenuhnya bagianku', fb:'Belum tepat — kamu bisa mengajukannya, tapi kamu tidak menyetujui atau menawarkannya.'},{label:'🔁 Bagianku untuk menyesuaikan dan melaporkan', fb:'Tidak sepenuhnya — bagianmu adalah melaporkan dan mengajukannya ke Team Leader-mu; persetujuannya bukan bagianmu.'},{label:'🚫 Di luar kendaliku', fb:'Benar — Team Leader-mu yang menyetujuinya. Bagianmu adalah melaporkan pelajaran yang hilang dan mengajukannya di hari yang sama.'}], correctZone:2},
   {type:'choice', prompt:`Seorang orang tua menulis: “Kami sudah mengajukan refund, platformnya tidak pernah berfungsi.” Apa yang kamu lakukan?`, opts:[`Menjelaskan bahwa platformnya berfungsi dengan baik dan mungkin masalahnya ada di koneksi mereka`,`Membalas “Tim Customer Service akan membantu Anda terkait hal ini”, meninggalkan komentar di BO berisi apa yang kamu lihat dan kata-kata persis mereka, lalu memberi tahu Team Leader-mu di hari yang sama`,`Berjanji bahwa semuanya akan berfungsi di pelajaran berikutnya dan refund tidak diperlukan`], correct:1, fb:`Kamu tidak berdebat, tidak berjanji, dan tidak membahas permintaannya. Kamu memakai kalimat yang aman dan memberikan detailnya kepada timmu di hari yang sama.`},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini kalimat yang baik untuk keluarga?', card:`“Ini salah platformnya, kami juga sering mengalaminya.”`, zones:[{label:'💎 Harta karun', fb:'Belum tepat — menyalahkan platform mengikis kepercayaan dan tidak menyelesaikan apa pun.'},{label:'🗑️ Sampah', fb:'Benar — jangan pernah menyalahkan platform. Katakan bahwa kamu sudah menanganinya bersama timmu.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Modul 1', emoji:'🧰', color:'#7EA8FF', art:'clock', learn:[['⏱️','15 menit sebelum setiap pelajaran'],['🩺','Apa yang dilakukan saat akses gagal'],['💻','Apakah perangkatnya cocok untuk kursusnya?'],['📮','Siapa yang diberi tahu dan apa yang dikatakan']],
 eyebrow:'Modul 1 dari 4',
 title:'Sebelum Pelajaran',
 desc:'15 menit sebelum setiap pelajaran, masalah akses, pendaftaran, jadwal, dan tautan, serta cara mengetahui apakah perangkat siswa cocok untuk kursusnya.',
 obj:'Mengenali dan melaporkan masalah akses sebelum keluarga kehilangan pelajarannya.',
 sections:[
  {t:'⏱️ 15 menit sebelumnya', html:`
   <div class="card"><p>Sebagian besar masalah akses bisa terlihat <strong>sebelum</strong> pelajaran dimulai. 15 menit ini adalah asuransi terbaikmu.</p></div>
   ${stepper([
     {ic:'🌐', title:'Buka pelajaran di Chrome desktop', html:`<p>Gunakan <strong>Google Chrome desktop versi terbaru</strong>. Hanya browser ini yang sepenuhnya kompatibel; Safari dan browser lain tidak sepenuhnya kompatibel.</p>`},
     {ic:'🧹', title:'Tutup aplikasi lain', html:`<p>Classroom menjadi lambat saat ada program lain yang berjalan. Tutup semua yang tidak akan kamu pakai di pelajaran.</p>`},
     {ic:'🎙️', title:'Tes mikrofon dan kameramu', html:`<p>Jika browser tidak meminta izin, aktifkan secara manual: ikon di sebelah kiri URL → Kamera dan Mikrofon diatur ke “Selalu izinkan”.</p>`},
     {ic:'📋', title:'Cek grup dan tautannya di BO', html:`<p>Cek grup, daftar siswa, dan pastikan tautan pelajaran berfungsi. Perhatikan <strong>peringatan di layar sebelum bergabung</strong> (misalnya, persyaratan sistem yang tidak didukung).</p>`},
     {ic:'👋', title:'Di pelajaran pertama siswa baru, masuk lebih awal', html:`<p>Masuk lebih awal dan tunggu. Jika dia belum bergabung <strong>5 menit setelah waktu mulai</strong>, laporkan; jangan menunggu sampai pelajaran selesai.</p>`}
   ])}
   ${co('co-idea','📶',`<p><strong>Tips dari tutor mentor:</strong> Classroom butuh koneksi yang kuat. Ingatkan siswa (dan keluarganya) untuk menutup aplikasi yang tidak dipakai dan memastikan tidak ada orang lain di rumah yang memakai Wi-Fi secara berat selama pelajaran.</p>`)}
   ${doavoid(
     ['Masuk 15 menit lebih awal dan tes semuanya','Gunakan Chrome desktop versi terbaru, dengan aplikasi lain ditutup','Cek grup dan tautannya di BO sebelum setiap pelajaran','Segera laporkan jika siswa baru tidak muncul'],
     ['Membuka pelajaran di menit terakhir','Mengajar dari Safari atau browser lain','Menunggu sampai akhir pelajaran untuk bilang ada yang tidak bisa masuk','Berasumsi “nanti juga dia masuk”']
   )}
  `},
  {t:'🩺 Gejala sebelum pelajaran', html:`
   <div class="card"><p>Ketuk setiap gejala. Kamu akan melihat <strong>apa yang kamu lakukan</strong>, <strong>apa yang bisa kamu katakan</strong>, dan <strong>ke mana melapor</strong>. Semua kontak bantuanmu ada di Modul 4.</p></div>
   ${symCards([
     {ic:'🔗', title:`Tautan pelajaran rusak atau tidak ada`,
      do:`Refresh BO dan cek tautannya dari halaman grup. Jika masih rusak atau tidak ada, segera laporkan agar tim Teaching bisa memperbaikinya sebelum pelajaran dimulai.`,
      say:`<em>“Saya sedang mengecek tautan pelajarannya bersama tim saya, saya akan mengabari Anda dalam beberapa menit.”</em>`,
      rep:`Team Leader-mu (dia yang mengeskalasikannya ke dukungan teknis) + komentar di BO.`},
     {ic:'🚪', title:`Tombol untuk bergabung tidak muncul`,
      do:`Refresh, pastikan kamu memakai Chrome, dan konfirmasi di BO bahwa siswa ada di grup. Jika tidak ada perubahan, laporkan dengan menyertakan tautan BO grup dan siswa.`,
      say:`<em>“Saya sedang mengecek aksesnya bersama tim saya dan akan menghubungi Anda begitu ada kabar.”</em>`,
      rep:`Team Leader-mu (dia yang mengeskalasikannya ke dukungan teknis) + komentar di BO.`},
     {ic:'📋', title:`“Saya tidak terdaftar”`,
      see:`Keluarga mengatakan anaknya tidak muncul sebagai terdaftar.`,
      do:`<strong>Jangan mengonfirmasi atau membantah pendaftarannya.</strong> Cek di BO dan beri tahu Team Leader-mu dan Client Service.`,
      say:`<em>“Saya sedang mengecek akses Anda bersama tim saya.”</em>`,
      rep:`Team Leader + Client Service + komentar di BO.`,
      avoid:`Mengatakan kepada keluarga <em>“anak Anda tidak terdaftar”</em>.`},
     {ic:'🕒', title:`Jadwalnya bukan yang diminta keluarga`,
      see:`Pelajarannya di jam lain, atau ada notifikasi yang datang dengan tanggal mulai yang berbeda.`,
      do:`Jangan mengubah apa pun sendiri — tutor tidak bisa menjadwal ulang pelajaran. Beri tahu Team Leader-mu dan Client Service di hari yang sama.`,
      say:`Akui ketidaknyamanannya tanpa menjelaskan penyebabnya atau menjanjikan perubahan: <em>“Saya mengerti ini merepotkan. Saya sudah menyampaikannya ke tim saya agar mereka bisa menghubungi Anda.”</em>`,
      rep:`Team Leader + Client Service + komentar di BO.`},
     {ic:'🎟️', title:`Kredit pelajaran kurang atau pelajaran dipotong secara tidak adil`,
      see:`Keluarga mengatakan jumlah pelajarannya tidak sesuai, atau ada pelajaran yang tidak terlaksana tapi tetap dipotong.`,
      do:`Catat persis apa yang dikatakan keluarga dan teruskan ke Team Leader-mu dan Client Service di hari yang sama — tim Operations yang akan meninjaunya.`,
      say:`<em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em>`,
      rep:`Team Leader + Client Service + komentar di BO.`,
      avoid:`Menjelaskan atau menjanjikan apa pun soal kredit.`},
     {ic:'✉️', title:`Keluarga belum menerima tautan atau kredensialnya`,
      do:`<strong>Kamu punya datanya di BO.</strong> Di profil siswa, kamu akan menemukan tautan masuk serta login dan kata sandinya. Kirimkan sendiri ke keluarga, saat itu juga. Jika datanya tidak ada atau tidak berfungsi, laporkan.`,
      say:`<em>“Saya kirimkan detail aksesnya sekarang. Silakan dicoba dan kabari saya jika ada yang tidak berfungsi.”</em>`,
      rep:`Hanya jika detailnya tidak ada di BO atau tidak berfungsi: Team Leader + Client Service + komentar di BO.`,
      avoid:`Membuat tautan sendiri yang bukan dari BO.`}
   ])}
   ${co('co-warn','🔗',`<p><strong>Zoom saat ada yang tidak bisa masuk?</strong> Ya — Zoom dipakai agar pelajaran tidak ditunda, tapi selalu direkam dan dilaporkan di hari yang sama (Modul 2). Mengirim tautan Zoom dari pelajaran ke pelajaran justru menyembunyikan masalahnya: tidak ada yang memperbaikinya karena tidak ada yang tahu.</p>`)}
  `},
  {t:'💻 Sebelum pelajaran 1: apakah perangkatnya cocok?', html:`
   <div class="card"><p>Kasus refund karena perangkat yang kurang mumpuni biasanya baru ketahuan <strong>di pelajaran pertama</strong>. Setiap kursus membutuhkan hal yang berbeda:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Mudah', desc:'Funtech · Scratch · Python 1 / Python Pro · Web', note:'Chrome sudah cukup (ditambah VS Code untuk Web). <strong>Pengecekan biasa sebelum pelajaran.</strong>'},
     {ic:'🟡', title:'Perlu dicek', desc:'Digital Creativity · Graphic Design · Roblox · Minecraft', note:'Butuh alat tertentu, instalasi, akun, atau layar tertentu. <strong>Konfirmasi perangkatnya sebelum pelajaran 1.</strong>'},
     {ic:'🔴', title:'Berat', desc:'3D Modelling', note:'RAM 8 GB, sistem dan perangkat keras tertentu. <strong>Konfirmasi perangkatnya sebelum pelajaran 1.</strong>'}
   ],3)}
   ${accItem('📋 Lihat persyaratan per kursus', `
    <p><strong>Secara umum:</strong> Chrome versi terbaru · RAM minimal 4 GB (8 GB untuk Blender) · 10 Mbps, idealnya pakai kabel · ruang kosong 5 GB. <strong>Jangan pakai Safari</strong> (di Mac ada masalah yang sudah diketahui dengan platform).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Kursus</th><th>Persyaratan</th><th>Level</th></tr>
     <tr><td>Funtech</td><td>Hanya Chrome. Tidak ada yang perlu diinstal.</td><td>🟢 Mudah</td></tr>
     <tr><td>Scratch</td><td>Hanya Chrome. Windows, Mac, dan tablet.</td><td>🟢 Mudah</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + akun Google (Google Colab).</td><td>🟢 Mudah</td></tr>
     <tr><td>Web</td><td>Chrome + VS Code. Windows, Mac, atau Linux.</td><td>🟢 Mudah</td></tr>
     <tr><td>Digital Creativity</td><td>Chrome. Beberapa alat online (Canva dan lainnya); cadangan untuk setiap alat ada di wiki / catatan pengajar.</td><td>🟡 Perlu dicek</td></tr>
     <tr><td>Graphic Design</td><td>Chrome + Canva. Layar minimal 1280×768.</td><td>🟡 Perlu dicek</td></tr>
     <tr><td>Roblox</td><td>Windows atau Mac (bukan tablet, bukan Linux). 4 GB. <strong>Instal Roblox Studio sebelum pelajaran 1.</strong></td><td>🟡 Perlu dicek</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac, atau Linux. Disarankan Java Edition. 4 GB. Wajib punya akun Minecraft.</td><td>🟡 Perlu dicek</td></tr>
     <tr><td>3D Modelling</td><td>Blender. 8 GB. Mouse dengan roda gulir. Disarankan GPU terpisah. Windows atau Mac.</td><td>🔴 Berat</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>Aturannya:</strong> jika kamu melihat di BO bahwa kursus siswa termasuk <strong>🟡 Perlu dicek</strong> atau <strong>🔴 Berat</strong>, konfirmasi perangkatnya sebelum pelajaran 1, dengan pesan yang sudah disetujui Team Leader-mu.</p>`)}
   ${co('co-danger','💻',`<p><strong>Jika komputernya tidak bisa menjalankan kursus, seharusnya kursus itu tidak dijual dengan cara itu — dan itu bukan tugasmu untuk memperbaikinya.</strong> Laporkan ke Team Leader-mu; tim Teaching dan Sales bersama-sama memutuskan bagaimana dan di mana siswa melanjutkan. Jangan pernah menyuruh keluarga membeli komputer baru atau pindah kursus atas inisiatifmu sendiri. Sementara itu, jaga agar pelajaran tetap bermanfaat dengan solusi alternatif di Modul 2.</p>`)}
  `}
 ],
 ix:{
  title:'Sebelum pelajaran dimulai',
  instr:'Pilih tindakan pertama dan apa yang akan kamu katakan. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Apa tindakan pertamamu?', card:`Pelajaran dimulai 10 menit lagi dan seorang siswa bilang tombol untuk bergabung tidak muncul.`, zones:[{label:'🔁 Refresh, cek Chrome, dan konfirmasi di BO bahwa dia ada di grup', fb:'Benar — pertolongan pertama yang cepat. Jika tidak ada perubahan, laporkan dengan menyertakan tautan BO grup dan siswa.'},{label:'🔗 Kirim tautan Zoom untuk pelajaran itu', fb:'Belum tepat — Zoom dipakai saat seseorang benar-benar tidak bisa masuk, setelah pengecekan cepat. Pertolongan pertama dulu.'},{label:'⏳ Tunggu dan lihat apakah dia masuk nanti', fb:'Belum tepat — menunggu dalam diam membuat pelajarannya hilang. Bertindaklah sekarang.'}], correctZone:0},
   {type:'sort', prompt:'Apa tindakan pertamamu?', card:`Kursus siswa adalah 3D Modelling dan BO menunjukkan pelajaran 1-nya hari Kamis.`, zones:[{label:'⏳ Tidak ada — nanti kita lihat di pelajaran 1', fb:'Belum tepat — di 3D Modelling, masalah perangkat biasanya baru ketahuan di pelajaran pertama, saat sudah terlambat.'},{label:'💻 Konfirmasi perangkatnya sebelum pelajaran 1, dengan pesan yang sudah disetujui Team Leader-mu', fb:'Benar — 3D Modelling adalah kursus yang berat. Mengonfirmasi perangkat lebih dulu mencegah hilangnya pelajaran pertama.'},{label:'📝 Minta keluarga membeli komputer yang lebih baik', fb:'Belum tepat — kamu tidak meminta keluarga membeli sesuatu. Kamu mengonfirmasi perangkatnya dan, jika tidak memenuhi persyaratan, melaporkannya.'}], correctZone:1},
   {type:'choice', prompt:`Seorang ibu menulis: “Anak saya tidak muncul sebagai terdaftar di pelajaran.” Bagaimana kamu membalasnya?`, opts:[`“Anak Anda tidak terdaftar, Anda perlu menghubungi tim sales.”`,`“Ya, dia terdaftar, mungkin ada kesalahan di pihak Anda.”`,`“Saya sedang mengecek akses Anda bersama tim saya.”`], correct:2, fb:`Jangan mengonfirmasi atau membantah pendaftarannya. Kamu mengeceknya di BO dan memberi tahu Team Leader-mu dan Client Service.`},
   {type:'choice', prompt:`Keluarga mengatakan jam pelajarannya ternyata berbeda dari yang mereka minta. Apa yang kamu lakukan?`, opts:[`Mengakui ketidaknyamanannya tanpa menjanjikan perubahan, dan memberi tahu Team Leader-mu di hari yang sama`,`Menawarkan untuk memindahkannya sendiri ke jam yang mereka inginkan`,`Menjelaskan bahwa jadwalnya sudah tidak bisa diubah`], correct:0, fb:`Kamu tidak mengubah jadwalnya, tapi juga tidak menutup kemungkinan perubahan. Kamu mengakui ketidaknyamanannya dan memberi tahu timmu di hari yang sama.`},
   {type:'choice', prompt:`Keluarga mengatakan ada pelajaran yang tidak pernah terlaksana tapi dipotong dari paket mereka. Apa yang kamu lakukan?`, opts:[`Mengatakan bahwa kamu akan mengembalikan pelajarannya`,`Mencatat apa yang mereka katakan, menyampaikan “Tim Customer Service akan membantu Anda terkait hal ini”, lalu meneruskannya ke Team Leader-mu dan Client Service di hari yang sama`,`Menjelaskan cara kerja pemotongan pelajaran`], correct:1, fb:`Kredit dan pemotongan ditinjau oleh tim Operations. Kamu tidak berjanji atau menjelaskan — kamu meneruskan persis apa yang dikatakan keluarga, di hari yang sama.`},
   {type:'choice', prompt:`Di pelajaran 1 kursus 3D Modelling, kamu melihat komputer siswa hanya punya RAM 4 GB dan Blender tidak bisa berjalan. Mana yang benar?`, opts:[`Laporkan ke Team Leader-mu — tim Teaching dan Sales yang memutuskan bagaimana siswa melanjutkan — dan sementara itu jaga agar pelajaran ini tetap bermanfaat`,`Bilang ke keluarga bahwa kursus ini tidak cocok untuk mereka dan sarankan kursus lain`,`Minta keluarga meng-upgrade komputernya sebelum pelajaran berikutnya`], correct:0, fb:`Komputer yang tidak bisa menjalankan kursus seharusnya tidak dijual dengan cara itu. Itu bukan tugasmu untuk diselesaikan: kamu melaporkannya, dan tim Teaching dan Sales yang memutuskan.`}
  ]
 }
},
{id:'during', numLabel:'Modul 2', emoji:'🛠️', color:'#FFB44D', art:'micCam', learn:[['🧘','Tetap tenang dulu'],['🔧','Solusi Classroom dari tutor mentor'],['🧩','Solusi alternatif untuk setiap kursus'],['🆘','Kapan Zoom boleh dipakai']],
 eyebrow:'Modul 2 dari 4',
 title:'Selama Pelajaran',
 desc:'Langkah pertama adalah soal emosi, aturan 10 menit, solusi Classroom dari tutor mentor, solusi alternatif untuk setiap kursus, gangguan yang menimpa beberapa siswa sekaligus, dan kapan platform alternatif seperti Zoom boleh dipakai.',
 obj:'Menyelesaikan apa yang bisa diselesaikan dalam 10 menit, menjaga agar pelajaran tetap bermanfaat bagi setiap siswa, dan tidak kehilangan seluruh pelajaran karena masalah teknis.',
 sections:[
  {t:'🧘 Langkah pertama adalah soal emosi', html:`
   <div class="card"><p>Sebelum menyentuh apa pun, <strong>tetap tenang dan katakan dengan lantang bahwa ini wajar</strong>: <em>“Ini kadang terjadi, kita perbaiki sama-sama, ya.”</em> Orang dewasa yang tenang memberi tahu anak bahwa semuanya baik-baik saja, dan grup akan mengikuti sikapmu. Baru setelah itu, perbaiki.</p></div>
  `},
  {t:'⏱️ Aturan 10 menit', html:`
   <div class="card"><p>Jika kamu tidak bisa menyelesaikannya dalam <strong>10 menit</strong>, berhenti mencoba dalam diam.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Komunikasikan: kepada siswa, grup, dan jika perlu, timmu'},
     {ic:'📝', label:'Dokumentasikan: apa yang gagal, pesannya, tangkapan layar, apa yang sudah kamu coba'},
     {ic:'📮', label:'Eskalasikan: laporkan ke Team Leader-mu, yang akan mengeskalasikannya ke dukungan teknis'}
   ])}
  `},
  {t:'🔧 Solusi Classroom yang berhasil — dari tutor mentor', html:`
   <div class="card"><p>Tutor yang mengajar setiap hari sepakat: <strong>sebagian besar masalah Classroom selesai dengan refresh dan mengurangi beban.</strong> Coba langkah-langkah ini, sesuai urutannya:</p></div>
   ${stepper([
     {ic:'🔄', title:'Refresh halaman', html:`<p>Atau minta siswa melakukannya. Ini mengatasi sebagian besar layar hitam, video yang membeku, dan berbagi layar yang tidak mau mulai.</p>`},
     {ic:'🧹', title:'Tutup aplikasi lain', html:`<p>Milikmu dan milik siswa. Classroom menjadi lambat saat ada program lain yang berjalan.</p>`},
     {ic:'🚪', title:'Bergabung ulang ke pelajaran', html:`<p>Jika kameramu berhenti berfungsi, tutup browser, muat ulang, dan bergabung lagi — terkadang butuh dua kali percobaan.</p>`},
     {ic:'🎚️', title:'Cek perangkat yang dipilih', html:`<p>Mikrofon bisa terlihat “menyala” tapi tetap terblokir: di pengaturan, cek bahwa mikrofon dan kamera yang benar sudah dipilih.</p>`},
     {ic:'📶', title:'Ringankan koneksi', html:`<p>Minta siswa mematikan kamera dan memastikan tidak ada orang lain di rumah yang memakai Wi-Fi.</p>`},
     {ic:'🌐', title:'Pilihan terakhir: browser lain', html:`<p>Bergabung ulang dari browser lain terkadang bisa menyelamatkan pelajaran. Laporkan setelahnya: Chrome tetap menjadi browser yang didukung.</p>`}
   ])}
   ${iconGrid([
     {ic:'👥', html:`<strong>Grup besar (sekitar 15 siswa).</strong> Pelajaran bisa restart, crash, membeku, atau mematikan kamera semua orang. Minta siswa mematikan kamera sejak awal, dan laporkan jika terus terjadi.`},
     {ic:'📡', html:`<strong>Berbagi layar terus berhenti.</strong> Biasanya masalah koneksi. Tutup aplikasi, tanyakan tentang perangkat lain yang memakai Wi-Fi, lalu bagikan layar lagi.`},
     {ic:'🔄', html:`<strong>Siswa tidak bisa melihat layarmu dan tidak ada yang berhasil.</strong> Minta satu siswa membagikan layarnya ke grup sebagai gantinya — terutama di pelajaran grup, cara ini sering lebih berhasil.`},
     {ic:'✏️', html:`<strong>Anotasi tidak berfungsi</strong> (kamu tidak bisa menggambar, gambarnya tidak muncul, atau muncul di tempat yang salah). Matikan anotasi, bagikan layarmu lagi, lalu nyalakan kembali anotasinya.`}
   ])}
  `},
  {t:'⬛ Layar hitam saat berbagi layar — tonton prosedurnya', html:`
   <div class="card"><p>Ini adalah prosedur yang harus diikuti siswa dan/atau tutor saat layar menjadi hitam ketika berbagi layar.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Layar hitam saat berbagi layar</div><div class="vslot-meta">Langkah demi langkah · 19 detik</div></div></div>
    <div class="vslot-frame" style="padding:0"><video src="Media/black_screen.mkv" controls preload="metadata" playsinline style="display:block;width:100%;max-height:420px;background:#000"></video></div>
    <div class="vslot-brief">Jika layar masih hitam setelah mengikuti langkah-langkahnya, refresh halaman (kamu atau siswa). Jika terus terjadi, laporkan dengan tangkapan layar.</div></div>
  `},
  {t:'🖥️ Classroom — solusi cepat lainnya', html:`
   <div class="card"><p>Langkah-langkah lengkap dan terbaru ada di panduan <strong>“Classroom Issues Quick Fixes”</strong> dari tim Classroom. Yang paling sering:</p></div>
   ${accItem('▬ Persegi panjang hitam muncul alih-alih layarmu', `<p>Hentikan lalu lanjutkan berbagi layar. Bagi sebagian orang, meminimalkan lalu memulihkan jendela juga berhasil.</p>`)}
   ${accItem('🌫️ Layar yang dibagikan buram', `<p>Bagikan lagi dan cek koneksinya.</p>`)}
   ${accItem('🙈 Siswa tidak bisa melihat layar yang kamu bagikan', `<p>Jika dia memakai ponsel, dia harus menggunakan “situs desktop”. Cek bahwa dia memakai Chrome. Jika tidak ada yang berhasil, minta siswa lain membagikan layarnya ke grup.</p>`)}
   ${accItem('📱 Siswa tidak bisa membagikan layarnya', `<p>Dari browser seluler (iPad, tablet, atau ponsel) <strong>hal ini tidak memungkinkan</strong>. Dia butuh komputer.</p>`)}
   ${accItem('🧾 Papan tulis tetap terlihat setelah ditutup', `<p>Minta mereka keluar lalu bergabung lagi; laporkan dengan tautan BO grupnya.</p>`)}
   ${accItem('🚪 Breakout room menampilkan error', `<p>Tutup semua room lalu buat lagi. Jika berbagi layar gagal di dalam room, laporkan.</p>`)}
   ${accItem('📄 Halaman Assignments tampil hitam', `<p>Matikan dan hapus anotasi, hentikan berbagi layar, lalu klik kanan → “Reload frame”. Jika layar siswa menjadi hitam karena dia sedang di tab Assignments, hentikan lalu bagikan lagi.</p>`)}
   ${accItem('⚠️ Siswa melihat banner error', `<p>Minta dia <strong>membacakannya dengan lantang</strong> dan jelaskan apa yang harus dilakukan. <strong>Catat</strong> apakah ada banner, pesannya, peringatan sebelum bergabung, dan jenis error-nya. Laporkan dengan tangkapan layar.</p>`)}
   ${accItem('🖼️ Kamera bermasalah saat memakai latar belakang virtual', `<p>Aktifkan “Use graphics acceleration when available” di <em>chrome://settings/system</em>.</p>`)}
   ${accItem('🪟 Mode Picture-in-Picture', `<p>Ini membantu: klik kanan pada layar yang dibagikan → Picture-in-Picture.</p>`)}
  `},
  {t:'🎙️ Saat mikrofon atau kamera siswa tidak berfungsi', html:`
   ${stepFlow([
     {ic:'🔁', label:'Minta dia bergabung ulang ke pelajaran'},
     {ic:'🎚️', label:'Cek bahwa mikrofon dan kamera yang benar sudah dipilih'},
     {ic:'📮', label:'Masih tidak berfungsi: laporkan ke Team Leader-mu, yang akan mengeskalasikannya ke dukungan teknis, dan minta dukungan teknis mengetesnya dalam minggu itu'}
   ])}
   ${co('co-ok','💬',`<p><strong>Sementara itu, siswa tetap belajar.</strong> Dia bisa ikut tanpa kamera dan, sebagai pengecualian, bahkan tanpa mikrofon: kalian berkomunikasi lewat chat dan reaksi. Tidak ada yang tertinggal dari pelajaran karena masalah perangkat.</p>`)}
   ${co('co-danger','🔇',`<p><strong>Jika kamu mematikan mikrofon siswa, nyalakan lagi.</strong> Membiarkan mikrofon anak tetap mati tanpa disadari bisa membuat kita kehilangan sebuah keluarga.</p>`)}
  `},
  {t:'🧩 Saat alat kursus tidak berfungsi — solusi alternatif per kursus', html:`
   <div class="card"><p>Para penyusun kursus membagikan apa yang bisa kamu lakukan saat siswa tidak bisa membuka program kursus atau komputernya kesulitan menjalankannya. Ketuk kursusmu:</p></div>
   ${tabsBlock([
     {ic:'🎮', title:'Roblox', html:`${symCards([
       {ic:'🔑', title:`Siswa tidak bisa login, atau programnya tidak mau terbuka`,
        do:`<ul><li><strong>Dia mengikuti demomu:</strong> siswa menonton layarmu dan menjawab secara lisan tentang apa yang sedang dikerjakan — dia tetap ikut serta dalam pelajaran.</li><li><strong>Setelah pelajaran,</strong> bantu dia menyelesaikan instalasi atau login.</li><li><strong>Masih belum teratasi?</strong> Minta dukungan teknis melalui Team Leader-mu, yang akan mengeskalasikannya ke dukungan teknis.</li></ul>`,
        avoid:`Menghabiskan seluruh pelajaran untuk instalasi sementara anggota grup lainnya menunggu.`},
       {ic:'🧱', title:`Roblox Studio tidak mau terunduh atau terinstal`,
        do:`Cek sistem operasi dan ruang kosongnya (lihat persyaratan di Modul 1). Lalu sama seperti di atas: demo sekarang, perbaiki setelah pelajaran, dukungan teknis jika perlu.`}
     ])}`},
     {ic:'🧊', title:'3D Modelling', html:`${symCards([
       {ic:'⬇️', title:`Blender tidak bisa berjalan di komputer siswa`,
        do:`<ul><li><strong>Coba versi Blender yang lebih lama,</strong> diunduh dari situs resmi Blender.</li><li><strong>Jika masih tidak berfungsi,</strong> komputernya tidak bisa menjalankan kursus: laporkan ke Team Leader-mu. Tim Teaching dan Sales yang memutuskan bagaimana siswa melanjutkan.</li></ul>`,
        avoid:`Menjanjikan pindah kursus — keputusan itu bukan wewenangmu.`}
     ])}`},
     {ic:'🎨', title:'Digital Creativity', html:`${symCards([
       {ic:'📚', title:`Salah satu alat online tidak berfungsi`,
        do:`<ul><li><strong>Cek cadangannya</strong> di wiki / catatan pengajar — banyak alat punya alternatif yang tercantum di sana.</li><li><strong>Tidak ada cadangan yang tercantum?</strong> Cari sendiri layanan yang serupa, lalu kirimkan lewat formulir umpan balik agar ditambahkan ke daftar cadangan untuk semua orang.</li></ul>`},
       {ic:'🖌️', title:`Krita tidak mau terbuka`,
        do:`Program menggambar online apa pun boleh — misalnya, <em>Kleki</em>.`}
     ])}`},
     {ic:'💻', title:'Komputer yang terlalu lemah', html:`${symCards([
       {ic:'🐢', title:`Komputernya sama sekali tidak memenuhi persyaratan kursus`,
        see:`Aplikasinya tidak mau terbuka, membeku, atau tertutup sendiri, atau layar sebelum bergabung menampilkan peringatan persyaratan.`,
        do:`<ul><li><strong>Jaga agar pelajaran tetap bermanfaat:</strong> demo di layar yang kamu bagikan, contoh yang dipandu, jawaban lisan.</li><li><strong>Laporkan ke Team Leader-mu.</strong> Kursus itu seharusnya tidak dijual untuk komputer tersebut; tim Teaching dan Sales yang memutuskan bagaimana dan di mana siswa melanjutkan.</li></ul>`,
        avoid:`Mengerjakan tugas untuk siswa, meminta keluarga membeli sesuatu, atau menjanjikan pindah kursus.`}
     ])}`}
   ])}
  `},
  {t:'👥 Saat beberapa siswa bermasalah sekaligus, atau pelajaran hilang', html:`
   ${doavoid(
     ['Triase: apakah hanya satu siswa atau banyak? Jika banyak, itu masalah platform — <strong>laporkan sekarang</strong>, dengan tautan BO grupnya','Jaga pelajaran tetap berjalan dengan yang sudah terhubung, dan minta yang lain mengikuti lewat chat','Jika pelajarannya hilang, kirim rekamannya dan susun rencana pemulihan (Modul 3)','Lakukan demonstrasi, bagikan file proyeknya, dan rencanakan sesi pemulihan'],
     ['Menghabiskan seluruh pelajaran untuk membantu siswa satu per satu sementara yang lain bosan','Mengerjakan tugas untuk siswa saat teknologinya gagal','Menjanjikan pelajaran tambahan kepada keluarga','Menjadwal ulang pelajaran atas inisiatifmu sendiri']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Saat masalah teknis mengganggu sebuah pelajaran</strong> — atau dua pelajaran berturut-turut — <strong>bicarakan dengan Team Leader-mu di hari yang sama.</strong> Kamu bisa mengajukan pelajaran tambahan; Team Leader-mu yang memutuskan. Jangan pernah menjanjikannya atau menolaknya sendiri kepada keluarga.</p>`)}
  `},
  {t:'🆘 Tidak bisa masuk Classroom: kapan memakai Zoom', html:`
   <div class="card"><p><strong>Classroom selalu menjadi pilihan pertama.</strong> Classroom terhubung dengan semuanya — pembayaran, rekaman, kehadiran. <strong>Zoom dipakai saat siswa atau kamu tidak bisa masuk ke pelajaran,</strong> agar pelajarannya tidak ditunda.</p></div>
   ${numlist(['Gunakan Zoom hanya saat seseorang benar-benar tidak bisa masuk ke Classroom, setelah mencoba solusi cepat','<strong>Rekam sesinya</strong>','Laporkan di hari yang sama ke Team Leader-mu, dengan komentar di BO yang menjelaskan apa yang gagal di Classroom'])}
   ${co('co-warn','📝',`<p><strong>Ini pengecualian, bukan kebiasaan.</strong> Pelajaran yang dipindah ke Zoom tanpa rekaman dan tanpa laporan di hari yang sama tidak bisa dihitung.</p>`)}
  `}
 ],
 ix:{
  title:'Pelajaran tetap berjalan',
  instr:'Pilih tindakan pertama untuk setiap kasus. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Apa tindakan pertamanya?', card:`Saat kamu membagikan layar, siswa hanya melihat warna hitam.`, zones:[{label:'🔁 Ikuti prosedur layar hitam dan refresh halaman jika perlu', fb:'Benar — itu prosedur di video. Jika terus terjadi, kamu melaporkannya dengan tangkapan layar.'},{label:'🆘 Langsung pindahkan pelajaran ke Zoom', fb:'Belum tepat — platform alternatif adalah pengecualian. Solusi Classroom dulu.'},{label:'⏭️ Lanjutkan menjelaskan tanpa layar', fb:'Belum tepat — coba dulu solusinya; jika dalam 10 menit belum teratasi, kamu melaporkannya.'}], correctZone:0},
   {type:'sort', prompt:'Apa tindakan pertamanya?', card:`Mikrofon seorang siswa terlihat menyala, tapi tidak ada yang bisa mendengarnya.`, zones:[{label:'📮 Langsung laporkan ke dukungan teknis', fb:'Belum tepat — coba dulu langkah cepatnya: bergabung ulang dan cek mikrofon yang dipilih.'},{label:'🔁 Minta dia bergabung ulang dan cek bahwa mikrofon yang benar sudah dipilih', fb:'Benar — mikrofon bisa terlihat “menyala” tapi tetap terblokir. Jika masih gagal, dia memakai chat dan kamu melaporkannya.'},{label:'🔇 Suruh dia mendengarkan saja kali ini', fb:'Belum tepat — solusi cepat dulu, dan sementara itu dia bisa ikut serta lewat chat dan reaksi.'}], correctZone:1},
   {type:'sort', prompt:'Apa tindakan pertamanya?', card:`Seorang siswa yang memakai tablet tidak bisa membagikan layarnya.`, zones:[{label:'🔁 Minta dia mencoba lagi beberapa kali', fb:'Belum tepat — berbagi layar tidak memungkinkan dari browser tablet.'},{label:'📝 Minta dia ganti browser di tabletnya', fb:'Belum tepat — di ponsel atau tablet hal ini tidak memungkinkan, apa pun browsernya.'},{label:'💻 Jelaskan bahwa dia butuh komputer untuk berbagi layar, dan lanjutkan pelajaran dengan cara lain', fb:'Benar — ini keterbatasan yang sudah diketahui. Sesuaikan aktivitasnya dan, jika kursusnya membutuhkannya, laporkan.'}], correctZone:2},
   {type:'choice', prompt:`Di pelajaran Roblox, seorang siswa tidak bisa login ke Roblox Studio. Apa yang kamu lakukan selama pelajaran?`, opts:[`Menghabiskan pelajaran untuk membantunya login sementara anggota grup lainnya menunggu`,`Membiarkannya mengikuti demomu dan menjawab secara lisan tentang apa yang sedang dikerjakan; setelah pelajaran, membantunya memperbaiki masalahnya dan meminta dukungan teknis jika perlu`,`Menyuruhnya melewatkan pelajaran ini dan kembali saat sudah berfungsi`], correct:1, fb:`Siswa tetap belajar dengan mengikuti demomu. Kamu memperbaiki aksesnya setelah pelajaran, dan meminta dukungan teknis jika masih belum teratasi.`},
   {type:'choice', prompt:`Di Digital Creativity, Krita tidak mau terbuka di komputer seorang siswa. Apa solusi alternatif yang baik?`, opts:[`Memakai program menggambar online, seperti Kleki`,`Melaporkan bahwa siswa tidak bisa mengikuti kursus`,`Meminta keluarga membeli tablet gambar`], correct:0, fb:`Program menggambar online apa pun boleh. Cek wiki / catatan pengajar untuk cadangannya, dan usulkan cadangan baru lewat formulir umpan balik.`},
   {type:'choice', prompt:`Lima menit berjalan, tiga siswa tidak bisa masuk dan dua lainnya menunggu. Apa yang kamu lakukan?`, opts:[`Membantu mereka satu per satu sampai semuanya masuk`,`Membatalkan pelajaran dan memberi tahu keluarga`,`Melaporkannya sekarang (itu masalah platform), melanjutkan dengan dua siswa yang sudah terhubung, dan meminta yang lain mengikuti lewat chat`], correct:2, fb:`Jika beberapa siswa bermasalah, itu masalah platform: laporkan sekarang. Jaga pelajaran tetap berjalan dengan yang sudah terhubung dan siapkan rencana pemulihan setelahnya.`},
   {type:'choice', prompt:`Seorang siswa masih tidak bisa masuk ke Classroom setelah mencoba solusi cepat. Apa yang wajib kamu lakukan?`, opts:[`Memindahkan pelajaran ke Zoom, merekam sesinya, dan melaporkannya ke Team Leader-mu di hari yang sama dengan komentar di BO`,`Pindah ke Zoom dan terus memakainya untuk pelajaran-pelajaran berikutnya, karena lebih lancar`,`Memakai Zoom tanpa merekam, karena pelajarannya singkat`], correct:0, fb:`Zoom ada agar pelajaran tidak ditunda — tapi itu pengecualian: direkam, dilaporkan ke Team Leader-mu di hari yang sama, dan dijelaskan di BO. Tanpa itu, pelajarannya tidak bisa dihitung.`}
  ]
 }
},
{id:'after', numLabel:'Modul 3', emoji:'🏠', color:'#B79DF2', art:'phoneDesk', learn:[['🔍','Kenali “tidak bisa” di balik “tidak mengumpulkan”'],['📲','Pahami keterbatasan ponsel dan tablet'],['📼','Pulihkan pelajaran yang hilang'],['🔁','Tuntaskan komunikasi dengan keluarga']],
 eyebrow:'Modul 3 dari 4',
 title:'Setelah Pelajaran',
 desc:'Pekerjaan rumah yang tidak dikumpulkan karena siswa tidak bisa masuk, platform di ponsel atau tablet, pelajaran yang hilang, dan cara menuntaskan komunikasi dengan keluarga.',
 obj:'Memastikan masalah teknis tidak membuat keluarga tertinggal pekerjaan rumah atau tidak mendapat jawaban, dan mengenalinya sebelum mengira itu sebagai “tidak mengumpulkan”.',
 sections:[
  {t:'🔍 Saat siswa tidak mengumpulkan, mungkin dia tidak bisa', html:`
   <div class="card"><p>Sebelum berpikir soal kurangnya motivasi, cek apakah siswa <strong>bisa masuk</strong> untuk mengerjakan pekerjaan rumahnya. Beberapa keluarga mengeluh bahwa mereka tidak bisa membuka pekerjaan rumah dan tidak ada yang memberi mereka pilihan.</p></div>
   ${co('co-idea','❓',`<p><strong>Tanyakan sebelum berasumsi:</strong> <em>“Kamu bisa membuka pekerjaan rumahnya? Kamu mencobanya di perangkat apa?”</em></p>`)}
  `},
  {t:'🩺 Gejala setelah pelajaran', html:`
   ${symCards([
     {ic:'🔒', title:`Dia tidak bisa masuk ke platform untuk mengerjakan pekerjaan rumah`,
      do:`Konfirmasi browsernya (Chrome desktop), perangkatnya, dan detail login-nya — kamu bisa menemukannya di BO dan mengirimkannya lagi. Jika tidak ada perubahan, laporkan ke Team Leader-mu, yang akan mengeskalasikannya ke dukungan teknis, dengan menyertakan tautan BO siswa dan grup, lalu <strong>tindak lanjuti setelah 24 jam</strong>.`,
      say:`<em>“Saya sedang mengeceknya bersama tim saya dan akan menghubungi Anda besok.”</em>`},
     {ic:'🧩', title:`Program kursus tidak mau terbuka selama pelajaran`,
      do:`Setelah pelajaran, bantu siswa menyelesaikan instalasi atau login (dan solusi alternatif untuk kursusnya dari Modul 2). Jika masih tidak berfungsi, minta dukungan teknis melalui Team Leader-mu, yang akan mengeskalasikannya ke dukungan teknis.`},
     {ic:'🎙️', title:`Mikrofon atau kameranya tidak berfungsi`,
      do:`Jika bergabung ulang dan mengecek perangkat tidak membantu, laporkan ke Team Leader-mu, yang akan mengeskalasikannya ke dukungan teknis, dan minta dukungan teknis mengetesnya bersama siswa dalam minggu berikutnya. Sampai saat itu, siswa ikut serta lewat chat dan reaksi.`},
     {ic:'📱', title:`Dia hanya bisa masuk dari ponsel dan tampilannya tidak bagus`,
      do:`Platform ini dirancang untuk komputer: dia sebaiknya memakai “situs desktop” atau komputer. Jangan menjanjikan akses alternatif.`,
      say:`Jelaskan keterbatasannya dengan hangat: <em>“Beberapa bagian tidak tampil dengan baik di ponsel; di komputer, atau dengan situs desktop, jauh lebih lancar.”</em>`},
     {ic:'📲', title:`Platform tidak sepenuhnya berfungsi di ponsel atau tablet`,
      do:`Ini adalah <strong>keterbatasan yang sudah diketahui</strong> (misalnya, berbagi layar tidak memungkinkan dari ponsel). Jika kursusnya membutuhkannya, laporkan.`},
     {ic:'🗂️', title:`Pekerjaan rumah tidak muncul di notebook atau dashboard`,
      do:`Laporkan dengan tangkapan layar.`},
     {ic:'📼', title:`Dia kehilangan pelajaran karena gangguan`,
      do:`Kirim rekaman dan bagian pentingnya, susun rencana pemulihan, dan bicarakan dengan Team Leader-mu di hari yang sama — kamu bisa mengajukan pelajaran tambahan.`,
      tip:`<strong>Selaraskan dulu dengan Team Leader-mu sebelum menulis ke keluarga.</strong>`}
   ])}
  `},
  {t:'🔁 Tuntaskan komunikasinya', html:`
   <div class="card"><p>Saat masalahnya sudah teratasi, <strong>beri tahu keluarga</strong>. Orang tua yang mendapat kabar adalah orang tua yang bertahan.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 Pesan penutup yang bisa kamu pakai</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Halo, [nama orang tua]. Saya ingin mengabarkan bahwa masalah akses yang dialami [siswa] sekarang sudah teratasi. Terima kasih atas kesabaran Anda. Jika ada kendala lagi, silakan hubungi saya dan kami akan segera mengeceknya.”</em></p></div>
  `}
 ],
 ix:{
  title:'Tidak ada yang dibiarkan tanpa jawaban',
  instr:'Pilih tindakan terbaik atau kelompokkan setiap kasus. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'choice', prompt:`Keluarga mengatakan anaknya hanya bisa masuk dari ponsel dan tampilan platformnya tidak bagus. Apa yang kamu lakukan?`, opts:[`Berjanji akan mencarikan akses khusus untuk ponsel`,`Menjelaskan dengan hangat bahwa platform dirancang untuk komputer, menyarankan situs desktop atau komputer, dan melaporkannya jika kursusnya membutuhkannya`,`Mengatakan bahwa dia tidak bisa melanjutkan kursus dengan cara ini`], correct:1, fb:`Jelaskan keterbatasannya dengan hangat, tawarkan apa yang memang berfungsi, dan jangan menjanjikan akses alternatif.`},
   {type:'choice', prompt:`Seorang siswa bilang pekerjaan rumahnya tidak muncul di dashboard. Apa yang kamu lakukan?`, opts:[`Melaporkannya dengan tangkapan layar`,`Menyuruhnya mencoba di hari lain`,`Menandai pekerjaan rumahnya sebagai tidak dikumpulkan`], correct:0, fb:`Jika pekerjaan rumahnya tidak muncul, itu masalah teknis: laporkan dengan tangkapan layar.`},
   {type:'sort', prompt:'Kamu selesaikan sendiri atau kamu laporkan?', card:`Seorang siswa tidak mengumpulkan pekerjaan rumah dan, saat ditanya, bilang dia tidak bisa masuk ke platform, bahkan dari Chrome di komputer.`, zones:[{label:'🧑‍🏫 Aku selesaikan sendiri', fb:'Belum tepat — kamu sudah mencoba hal-hal dasarnya (Chrome di komputer). Sekarang saatnya melaporkannya.'},{label:'📮 Aku laporkan', fb:'Benar — kamu melaporkannya dengan menyertakan tautan BO siswa dan grup, lalu menindaklanjutinya setelah 24 jam.'}], correctZone:1},
   {type:'choice', prompt:`Kamu sudah melaporkan bahwa seorang siswa tidak bisa masuk ke pekerjaan rumahnya. Kapan kamu menindaklanjutinya?`, opts:[`Minggu berikutnya`,`Hanya jika keluarga menulis lagi`,`Setelah 24 jam`], correct:2, fb:`Tindak lanjutnya setelah 24 jam: dengan begitu keluarga tidak dibiarkan tanpa jawaban.`}
  ]
 }
},
{id:'report', numLabel:'Modul 4', emoji:'📮', color:'#F58AC4', art:'report', learn:[['🆘','Ke mana meminta bantuan dan siapa yang dihubungi'],['🛣️','Pilih jalur yang tepat'],['📅','Pelajaran tambahan dan penjadwalan ulang'],['🧾','Tulis laporan yang lengkap'],['💛','Balas keluarga tepat waktu'],['🖥️','Berlatih di simulasi BO']],
 eyebrow:'Modul 4 dari 4',
 title:'Lapor dan Eskalasi',
 desc:'Ke mana meminta bantuan dan siapa yang dihubungi di wilayahmu, siapa yang diberi tahu tergantung masalahnya, pelajaran tambahan dan penjadwalan ulang, apa saja isi laporan yang baik, cara membalas keluarga tepat waktu, dan simulasi BO untuk berlatih membuat laporan teknis.',
 obj:'Mengetahui ke mana meminta bantuan, siapa yang diberi tahu, dengan detail apa, dan dalam urutan apa — serta terus memberi kabar kepada keluarga tepat waktu. Masalah yang tidak dilaporkan, atau keluarga yang tidak dibalas, tidak pernah diketahui oleh siapa pun.',
 sections:[
  {t:'🆘 Ke mana meminta bantuan dan siapa yang dihubungi', html:`
   <div class="card"><p><strong>Kirim pesan langsung ke Team Leader-mu.</strong> Saat kamu tidak bisa menyelesaikan masalah teknis sendiri, Team Leader-mu yang akan mengeskalasikannya ke dukungan teknis — kamu tidak perlu mencari saluran lain.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>👥 Siapa yang dihubungi</h4>
   <div class="tbl-wrap"><table>
    <tr><th>Apa yang terjadi</th><th>Siapa</th></tr>
    <tr><td>Masalah teknis yang tidak bisa kamu selesaikan (Classroom, tautan, platform)</td><td>Team Leader-mu</td></tr>
    <tr><td>Kredit pelajaran kurang, jadwal yang salah, pemotongan pelajaran yang tidak adil</td><td>Team Leader-mu + Client Service + komentar di BO (Operations: <strong>@Diah Sukmawati</strong>)</td></tr>
    <tr><td>Pelajaran tambahan, atau pelajaran yang tidak bisa dilaksanakan</td><td>Team Leader-mu</td></tr>
   </table></div></div>
  `},
  {t:'🛣️ Tiga jalur', html:`
   <div class="card"><p>Tergantung jenis masalahnya, laporan masuk ke jalur yang berbeda:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Jalur</th><th>Kapan</th><th>Ke mana</th></tr>
    <tr><td><strong>1. Gangguan Classroom atau platform</strong><br>(tidak bisa masuk / tombol bergabung tidak muncul, layar hitam, audio, papan tulis, room, tautan rusak)</td><td>Solusi cepat tidak menyelesaikannya</td><td>Team Leader-mu (dia yang mengeskalasikannya ke dukungan teknis) + komentar di BO</td></tr>
    <tr><td><strong>2. Akun dan Operations</strong><br>(pendaftaran, kredensial, jadwal, lisensi, kredit pelajaran, pemotongan)</td><td>Siswa tidak bisa masuk karena masalah akun: tidak terdaftar, kredensialnya tidak berfungsi, jadwalnya salah, atau pelajaran dipotong secara tidak adil</td><td>Team Leader + Client Service + komentar di BO (Operations: @Diah Sukmawati)</td></tr>
    <tr><td><strong>3. Pelajaran yang hilang</strong><br>(satu pelajaran atau lebih terganggu)</td><td>Karena gangguan platform, pembatalan, atau ketidakhadiran</td><td><strong>Team Leader di hari yang sama</strong> (kamu bisa mengajukan pelajaran tambahan) + Client Service jika keluarga kecewa + komentar di BO</td></tr>
   </table></div></div>
  `},
  {t:'📅 Pelajaran tambahan dan penjadwalan ulang', html:`
   ${iconGrid([
     {ic:'➕', html:`<strong>Pelajaran tambahan: kamu yang mengajukan, Team Leader-mu yang memutuskan.</strong> Kamu bisa mengajukannya saat ada masalah yang bisa membuat siswa pergi — seperti masalah teknis — atau untuk membantu siswa mengejar materi.`},
     {ic:'🚫', html:`<strong>Jangan pernah menawarkan pelajaran tambahan kepada keluarga</strong> sebelum Team Leader-mu menyetujuinya.`},
     {ic:'🎥', html:`<strong>Ada yang tidak bisa masuk?</strong> Zoom (direkam) ada justru agar pelajaran tidak ditunda.`},
     {ic:'🕒', html:`<strong>Kamu tidak menjadwal ulang pelajaran atas inisiatifmu sendiri.</strong> Jika benar-benar tidak ada cara untuk mengadakannya, bicarakan dengan Team Leader-mu.`}
   ])}
  `},
  {t:'🧾 Apa saja isi laporan', html:`
   ${numlist([
     '<strong>Tautan BO</strong> grup dan siswa (wajib)',
     'Apakah ada <strong>banner</strong> yang muncul untuk siswa? Apa isinya?',
     '<strong>Peringatan di layar sebelum bergabung</strong> (misalnya, persyaratan yang tidak didukung)',
     '<strong>Jenis error:</strong> layar hitam, tidak ada suara, tidak bisa masuk, program tidak mau terbuka…',
     '<strong>Tangkapan layar</strong>',
     'Perangkat, sistem operasi, browser, dan jika relevan, <strong>apakah memakai VPN</strong> dan dari negara mana',
     'Apa yang sudah kamu coba dan berapa lama',
     'Jika platform alternatif dipakai: <strong>rekamannya</strong>'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Seperti apa komentar BO yang berguna — salin dan lengkapi</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Pelajaran:</strong> [tanggal] · <strong>Grup:</strong> [tautan BO] · <strong>Siswa:</strong> [tautan BO]<br>
   <strong>Apa yang gagal:</strong> [mis. tidak bisa masuk ke pelajaran; layar hitam saat berbagi layar]<br>
   <strong>Banner atau pesan:</strong> [teks persisnya, atau “tidak ada”] · <strong>Peringatan sebelum bergabung:</strong> [ya / tidak, yang mana]<br>
   <strong>Perangkat:</strong> [perangkat, sistem, browser, VPN ya / tidak dan negaranya]<br>
   <strong>Yang sudah saya coba:</strong> [mis. refresh, bergabung ulang, menutup aplikasi, Blender versi lama — 10 menit]<br>
   <strong>Bagaimana pelajaran berlanjut:</strong> [mis. mengikuti demo saya; platform alternatif, direkam]<br>
   <strong>Tangkapan layar:</strong> [terlampir] · <strong>Kata-kata keluarga:</strong> [apa adanya, jika ada]</p></div>
  `},
  {t:'🖥️ Berlatih: laporkan masalah teknis di BO', html:`
   <div class="card"><p>Sekarang lakukan secara nyata, di replika Back Office. <strong>Seorang siswa tidak bisa masuk ke pelajaran hari ini karena masalah teknis.</strong> Ikuti panduan 4 langkah. Di <strong>langkah 4</strong>, pilih Jenis Masalah <strong>“Masalah teknis, mohon hubungi siswa”</strong> dan tulis komentarmu berisi fakta: apa yang gagal, kapan, pesan atau banner-nya, apa yang sudah kamu coba, dan kata-kata keluarga itu sendiri.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Laporkan masalah teknis</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Laporkan masalah teknis" loading="lazy"></iframe></div></div>
   ${co('co-idea','📝',`<p><strong>Gunakan template di atas.</strong> Semakin lengkap komentarmu, semakin cepat seseorang bisa menghubungi keluarga.</p>`)}
  `},
  {t:'🔢 Urutannya penting', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Tim dulu, keluarga kemudian.</strong> Saat masalahnya menyangkut lebih dari sekadar pengajaranmu (akses, jadwal, kredit, pelajaran yang hilang), jangan menulis hal lain ke keluarga sebelum berbicara dengan Team Leader-mu. Pengecualiannya: kamu <strong>selalu boleh langsung membalas</strong> dengan pesan singkat bahwa pesannya sudah kamu terima (<em>“Saya sudah melihatnya dan sedang mengeceknya”</em>). Pilihan, penjelasan, kompensasi, atau pelajaran tambahan baru disampaikan setelah kamu berbicara dengan Team Leader-mu.`},
     {ic:'🎓', html:`<strong>Kamu bicara soal pembelajaran; tindakannya kamu serahkan.</strong> Kamu bisa menyampaikan apa yang sudah kamu coba di pelajaran dan bahwa kamu sedang mengeceknya. Pilihan-pilihannya (pelajaran tambahan, pindah grup atau kursus, kompensasi) datang dari Team Leader-mu dan Client Service.`},
     {ic:'⚖️', html:`<strong>Jangan pernah berjanji dan jangan pernah menolak.</strong> Bukan <em>“kami akan memberi pelajaran tambahan”</em> dan bukan juga <em>“itu tidak mungkin”</em>. Tunjukkan bahwa kamu peduli dan sudah menanganinya.`},
     {ic:'📅', html:`<strong>Eskalasikan sekali lalu tindak lanjuti.</strong> Pasang pengingat di kalendermu untuk menindaklanjuti setelah 24 jam.`}
   ])}
   ${co('co-ok','💬',`<p><strong>Pesan yang bisa kamu kirim</strong> (setelah disepakati dengan Team Leader-mu): <em>“Halo, [nama orang tua]. Saya melihat [siswa] tidak bisa masuk ke pelajaran hari ini. Saya sudah melaporkannya ke tim saya dengan semua detailnya, dan Client Service akan menghubungi Anda. Sementara itu, saya kirimkan rekamannya agar tidak ada materi yang terlewat.”</em></p>`)}
  `},
  {t:'💛 Balas tepat waktu: keluarga memperhatikan usahamu', html:`
   <div class="card"><p>Gangguan teknis jarang menjadi satu-satunya alasan keluarga pergi. Yang menentukan adalah apa yang terjadi <strong>sesudahnya</strong>: apakah ada yang membalas, apakah anaknya bisa masuk lagi, apakah keluarga merasa ada yang peduli? Saat orang tua melihat bahwa kamu berusaha agar semuanya berjalan — kamu membalas dengan cepat, kamu menindaklanjuti, kamu memastikan anak mereka mendapat pelajaran sebaik mungkin — mereka menyadarinya. Usaha itulah yang membuat banyak keluarga <strong>memberi kita kesempatan kedua</strong>. Diam memberi tahu mereka hal sebaliknya.</p></div>
   ${co('co-danger','🚨',`<p><strong>Jangan menganggap masalah teknis sebagai hal kecil.</strong> Bagimu mungkin itu hanya layar hitam. Bagi keluarga, itu adalah pelajaran yang sudah mereka bayar, anak yang kecewa, dan sebuah keraguan: <em>“apakah ini sepadan?”</em> Tanggapi dengan serius, bahkan jika hanya berlangsung lima menit — terutama jika keluarga sudah menunjukkan bahwa mereka kecewa.</p>`)}
   ${rclock([
     {ic:'👀', when:'Segera', t:'Sudah dilihat, sedang ditangani', d:'Tanggapi pesan mereka saat itu juga, meskipun kamu belum punya jawabannya.'},
     {ic:'📮', when:'Hari yang sama', t:'Lapor dan selaraskan', d:'Komentar di BO dengan semua detail, Team Leader sudah diberi tahu, dan sepakati apa yang akan kamu sampaikan ke keluarga.'},
     {ic:'💬', when:'Hari yang sama', t:'Kabari keluarga', d:'Sampaikan apa yang sudah kamu lakukan dan kapan kamu akan menghubungi lagi — dan lakukan, meskipun belum ada kabar baru.'},
     {ic:'🚪', when:'Pelajaran berikutnya', t:'Pastikan berjalan', d:'Masuk lebih awal, tes semuanya, dan pastikan siswa bisa masuk. Lalu tuntaskan komunikasinya.'}
   ])}
   ${co('co-ok','💬',`<p><strong>Menanggapi selalu boleh.</strong> Pesan singkat yang hangat — kamu sudah melihatnya, kamu peduli, kamu sedang menanganinya, dan kapan kamu akan menghubungi lagi — tidak butuh persetujuan siapa pun. Yang menunggu Team Leader-mu adalah penjelasan apa pun, pilihan apa pun, dan apa pun yang terkait kompensasi.</p>`)}
   ${chatMock({
     name:'Orang tua', sub:'online', avatar:'👩', time:'18:02',
     msgs:[`Selamat malam. Ini sudah <strong>kedua kalinya</strong> anak saya tidak bisa masuk ke pelajaran. Kami membayar untuk kelas yang tidak dia dapatkan dan dia sangat kecewa. Sebenarnya ada apa??`],
     title:'Bagaimana kamu membalasnya?',
     text:'Sekarang pukul 18.00. Kamu baru saja melihat pesannya dan belum berbicara dengan Team Leader-mu. Ketuk setiap balasan untuk melihat apa yang terjadi.',
     opts:[
      {t:`“Selamat malam! Classroom biasanya lancar, mungkin masalahnya di internet Anda. Coba pakai browser lain.”`, ok:false, fb:`Kamu menyalahkan keluarga dan platform sekaligus, dan tidak menunjukkan kepedulian sama sekali. Orang tua akan membacanya sebagai “bukan urusan saya”.`},
      {t:`“Saya mohon maaf sekali — kehilangan dua pelajaran itu tidak bisa dibiarkan, dan saya mengerti betapa kecewanya dia. Saya sudah membaca pesan Anda dan sedang menanganinya: hari ini saya melaporkannya dengan semua detailnya ke tim saya. Besok pagi saya akan menghubungi Anda lagi dengan kabar terbaru, dan di pelajaran berikutnya saya akan masuk lebih awal untuk memastikan dia bisa masuk.”`, ok:true, fb:`Ini dia. Balasan ini mengakui masalah dan perasaannya, menunjukkan usaha yang konkret, menyebutkan kapan kamu akan menghubungi lagi, dan tidak menjanjikan apa pun yang bukan wewenangmu.`},
      {t:`“Jangan khawatir, saya akan memberinya pelajaran tambahan gratis sebagai gantinya!”`, ok:false, fb:`Niatnya baik, tapi itu bukan hakmu untuk dijanjikan: pelajaran tambahan dan kompensasi diputuskan bersama Team Leader-mu dan Client Service. Jika ternyata tidak bisa terlaksana, keluarga kehilangan kepercayaan lagi.`},
      {t:`Aku akan membalas besok, setelah punya jawaban lengkap.`, reply:`<i>(tidak ada balasan malam ini…)</i>`, ok:false, fb:`Diam adalah pilihan terburuk. Orang tua itu sudah kecewa; setiap jam tanpa jawaban menegaskan bahwa tidak ada yang peduli. Selalu tanggapi saat itu juga.`}
     ]
   })}
   ${co('co-star','🌟',`<p><strong>Ingat:</strong> gangguan teknis bisa dimaafkan. Merasa diabaikan jauh lebih sulit dimaafkan. Balasanmu, tindak lanjutmu, dan usahamu agar siswa bisa masuk lagi dan mendapat pelajaran sebaik mungkin adalah hal yang dilihat banyak keluarga — dan alasan mereka memutuskan untuk bertahan.</p>`)}
  `}
 ],
 ix:{
  title:'Laporkan dengan baik, dan sesuai urutan',
  instr:'Pilih jalurnya, komentar terbaik, dan apa yang akan kamu katakan. 70% untuk menyelesaikan modul ini.',
  items:[
   {type:'sort', prompt:'Laporan ini masuk ke jalur mana?', card:`Keluarga mengatakan dua pelajaran dipotong dari paket mereka, padahal hanya satu yang terlaksana.`, zones:[{label:'1️⃣ Gangguan Classroom atau platform', fb:'Belum tepat — tidak ada yang gagal di Classroom; ini soal kredit pelajaran.'},{label:'2️⃣ Akun dan Operations', fb:'Benar — kredit dan pemotongan dilaporkan ke Team Leader-mu dan Client Service, dengan komentar di BO. Tim Operations yang meninjaunya.'},{label:'3️⃣ Pelajaran yang hilang', fb:'Belum tepat — pelajarannya tidak hilang karena gangguan; ini soal kredit.'}], correctZone:1},
   {type:'sort', prompt:'Laporan ini masuk ke jalur mana?', card:`Papan tulis tetap terlihat setelah ditutup, dan keluar lalu bergabung lagi tidak mengatasinya.`, zones:[{label:'1️⃣ Gangguan Classroom atau platform', fb:'Benar — solusi cepat tidak menyelesaikannya: laporkan (kirim pesan ke Team Leader-mu) dengan komentar di BO.'},{label:'2️⃣ Akun dan Operations', fb:'Belum tepat — ini tidak ada hubungannya dengan akun siswa.'},{label:'3️⃣ Pelajaran yang hilang', fb:'Belum tepat — pelajarannya tetap berjalan; ini gangguan Classroom.'}], correctZone:0},
   {type:'choice', prompt:`Mana komentar BO terbaik untuk kasus yang sama?`, opts:[`“Tidak bisa masuk, koneksi jelek.”`,`“3/11, pelajaran 2. Tidak bisa masuk: banner ‘System not supported’ di layar sebelum bergabung. Windows 7, Chrome versi terbaru. Sudah mencoba refresh dan bergabung ulang, 10 menit; mengikuti demo saya selama sisa pelajaran. Tangkapan layar terlampir. Tautan BO grup dan siswa.”`,`“Platformnya bermasalah lagi, selalu begini.”`], correct:1, fb:`Komentar yang berguna itu lengkap dan netral: tanggal, apa yang gagal, banner-nya, perangkatnya, apa yang sudah dicoba, bagaimana pelajaran berlanjut, tangkapan layar, dan tautan BO.`},
   {type:'choice', prompt:`Seorang siswa kehilangan pelajaran karena gangguan platform, dan keluarganya tidak puas. Apa yang didahulukan?`, opts:[`Menulis ke keluarga dan menawarkan pelajaran tambahan`,`Menunggu dan melihat apakah pelajaran berikutnya berjalan lancar`,`Berbicara dengan Team Leader-mu di hari yang sama, mengajukan pelajaran tambahan, dan menyepakati bersamanya pesan untuk keluarga`], correct:2, fb:`Tim dulu, keluarga kemudian. Kamu bisa mengajukan pelajaran tambahan; Team Leader-mu yang memutuskan, dan baru setelah itu keluarga diberi tahu.`},
   {type:'choice', prompt:`Seorang siswa melewatkan sebagian besar pelajaran karena masalah teknis dan sekarang tertinggal dari grupnya. Apa yang bisa kamu lakukan?`, opts:[`Menjanjikan pelajaran tambahan gratis kepada keluarga`,`Mengajukan pelajaran tambahan ke Team Leader-mu — pelajaran tambahan memang ada untuk masalah yang bisa membuat siswa pergi, atau untuk membantunya mengejar materi`,`Tidak ada — siswa akan mengejar sendiri`], correct:1, fb:`Kamu bisa mengajukannya; Team Leader-mu yang memutuskan. Keluarga baru diberi tahu setelah disetujui.`},
   {type:'choice', prompt:`Seorang orang tua menulis dengan kesal: “Ini sudah kedua kalinya anak saya tidak bisa masuk.” Sekarang pukul 18.00 dan kamu belum berbicara dengan Team Leader-mu. Apa yang kamu lakukan pertama kali?`, opts:[`Menunggu sampai besok, berbicara dengan Team Leader-mu, lalu membalas sekali dengan semua jawabannya`,`Membalas sekarang, singkat saja: kamu minta maaf, kamu sudah melihatnya, kamu sedang menanganinya, dan kamu akan menghubungi lagi dengan kabar terbaru — lalu menyelaraskan dengan Team Leader-mu`,`Menjelaskan cara kerja Classroom agar mereka paham bahwa jarang sekali itu salah platformnya`], correct:1, fb:`Menanggapi selalu boleh, dan diam lebih merugikan daripada gangguannya sendiri. Balas sekarang dengan hangat dan sebutkan kapan kabar berikutnya; penjelasan dan pilihan-pilihannya menunggu Team Leader-mu.`}
  ]
 }
},
{id:'checklist', numLabel:'Checklist akhir', emoji:'✅', color:'#FFD34D', art:'shield', learn:[['🛟','Jika permintaan refund sudah ada'],['🧭','Sebelum · selama · setelah']],
 eyebrow:'Checklist akhir',
 title:'Checklist Akhir',
 desc:'Tidak ada tes di sini — hanya hal-hal penting dari mini-training ini, sebelum, selama, dan setelah pelajaran.',
 obj:'Baca checklist di bawah ini. Modul ini tidak dinilai — baca, lalu selesaikan mini-training-nya.',
 sections:[
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   ${numlist([
     'Aku meninggalkan komentar di BO pada hari yang sama saat aku tahu tentang permintaan itu, berisi tanggal, apa yang gagal, pesan atau banner-nya, apa yang sudah kucoba, dan tangkapan layar, lalu aku memberi tahu Team Leader-ku',
     'Pelajaran berikutnya dengan siswa ini bebas dari gangguan teknis: 15 menit lebih awal, aplikasi lain ditutup, ada rencana B, perhatian yang spesifik, dan keberhasilan yang terlihat',
     'Aku tidak pernah mengonfirmasi persetujuan, tidak pernah membahas nominal, dan tidak pernah menyalahkan platform — aku memakai satu kalimat yang aman itu'
   ])}
  `},
  {t:'🧭 Sebelum, selama, dan setelah', html:`
   ${tabsBlock([
     {ic:'🧰', title:'Sebelum', html:`<div class="card">${numlist(['Chrome desktop versi terbaru, aplikasi lain ditutup','Mikrofon, kamera, dan layar sudah dites','BO: grup, daftar siswa, dan tautan','Peringatan sebelum bergabung','Kursus 🟡 / 🔴: komputer sudah dicek sebelum pelajaran 1','Di pelajaran 1, aku masuk lebih awal'])}</div>`},
     {ic:'🛠️', title:'Selama', html:`<div class="card">${numlist(['Tenang dulu','Refresh, bergabung ulang, tutup aplikasi, cek perangkat','10 menit, lalu aku kirim pesan ke Team Leader-ku','Alat kursus tidak bisa dipakai? Demo + jawaban lisan, atau cadangan dari kursusnya','Zoom hanya saat ada yang tidak bisa masuk: direkam dan dilaporkan di hari yang sama','Jika banyak yang terdampak, aku langsung melaporkannya','Aku tidak mengerjakan tugas untuk siswa'])}</div>`},
     {ic:'🏠', title:'Setelah', html:`<div class="card">${numlist(['Bisakah dia masuk ke pekerjaan rumahnya?','Bantuan dengan program setelah pelajaran','Rekaman, rencana pemulihan, dan jika perlu, pelajaran tambahan yang diajukan ke Team Leader-ku','Laporan di hari yang sama dengan detail lengkap','Aku membalas keluarga tepat waktu dan terus memberi kabar, meskipun belum ada kabar baru','Tindak lanjut setelah 24 jam','Aku menuntaskan komunikasi dengan keluarga'])}</div>`}
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah keseluruhan mini-training ini.</strong> Saat kamu siap, lanjutkan — lalu selesaikan DST di LMS untuk menuntaskan tugasnya.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
