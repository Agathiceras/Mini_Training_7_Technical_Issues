/* Mini_Training_7_Technical_Issues - Türkçe içerik (sayfanın tüm metinleri).
   Yeni bir dil eklemek için: bu dosyayı content-xx.js olarak kopyalayın, metinleri çevirin (kodu, anahtarları, HTML etiketlerini, yardımcı fonksiyon çağrılarını ve görsel/video/simülasyon yollarını koruyun), PAGE_LANG, flag ve dir değerlerini ayarlayın. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini Eğitim · Teknik Sorunlar — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">Teknoloji</span> Aksadığında",
    heroIntro:"Bu eğitimi, aileleri teknik sorunlar nedeniyle iade talep eden öğrencileriniz olduğu için alıyorsunuz. Burada dersten önce, ders sırasında ve dersten sonra neler yapabileceğinizi, hangi alternatif çözümleri kullanabileceğinizi ve sorunun zamanında çözülmesi için nereden yardım alacağınızı göreceksiniz.",
    heroCard1:"<b>Kendi hızınızda.</b> İlerlemeniz bu tarayıcıda kaydedilir.",
    heroCard2:"<b>Uygulama dahil.</b> Bir Back Office simülasyonunda teknik bir sorunu bildireceksiniz.",
    pbLabel:'modül tamamlandı',
    tapOpen:'Açmak için dokunun',
    tapFlip:'Çevirmek için dokunun',
    lblSee:'Gördüğünüz',
    lblDo:'Yapmanız gereken',
    lblSay:'Söyleyebileceğiniz',
    lblReport:'Nereye bildirilir',
    lblAvoid:'Kaçının',
    lblTip:'İpucu',
    stepOf:'Adım {i} / {n}',
    next:'İleri',
    heroWork:"6 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül kontrolünde en az %70 almanız gerekir. Toplam süre yaklaşık 30–40 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme Yolunuz',
    devTitle:'Geliştirici: inceleme için tüm modüllerin kilidini aç',
    backToPath:'Öğrenme yoluna dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ İncele',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolüne başla',
    finishBtn:'▶ Mini eğitimi bitir',
    doneBack:'✓ Tamamlandı — öğrenme yoluna dön',
    ixBadge:'📋 Modül kontrolü — sonraki modülün kilidini açmak için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam değil — doğru cevap “{label}”.',
    resPassed:'Modülü geçtiniz!',
    resFailed:'Henüz tam olmadı',
    resUnlocked:"Sonraki modülün kilidini açtınız.",
    resDone:"Bu mini eğitimi tamamladınız.",
    resNeed:'Sonraki modülün kilidini açmak için %70 almanız gerekiyor. Yukarıdaki bölümü yeniden gözden geçirin ve kontrolü tekrar deneyin.',
    resContinue:'Öğrenme yoluna devam et',
    resFinish:'Devam et',
    resBack:'Öğrenme yoluna dön',
    resReview:'Bu modülü incele',
    doneEyebrow:'Mini Eğitim Tamamlandı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! Bu mini eğitimi tamamladınız.</strong>",
    doneP2:"Burada işiniz bitti! Ödevi kapatmak için lütfen bu mini eğitime eriştiğiniz LMS eğitim sayfasına geri dönün.",
    doneP3:"👉 <strong>LMS’de eğitimin hemen altında bir kontrol veya değerlendirme varsa, onu da tamamladığınızdan ve geçer puan aldığınızdan emin olun</strong> — aksi hâlde ödev tamamlanmamış olarak kalabilir.",
    doneP4:'Bol şans! ❤️',
    doneP5:'',
    devUnlockAlert:'Geliştirici modu: tüm modüllerin kilidi inceleme için açıldı.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüllerin kilidi açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme sıfırlandı',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yapın',
    avoidLabel:'🚫 Kaçının',
    noticeLabel:'Dikkat:',
    cvSee:'Gördüğünüz:',
    cvDo:'Yapmanız gereken:',
    dtExample:'Gerçek bir dersten örnek',
    dtNext:'Sonraki:',
    dtDone:"✅ Üç seviyenin hepsini gördünüz.",
    tlVideoTitle:'{label} — gerçek bir ders örneği',
    tlVideoMeta:'Bu aşamanın gerçek bir derste nasıl göründüğünü izleyin'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'🧩', color:'#5DD39E', art:'lifebuoy', learn:[['📊','Veriler ne gösteriyor'],['🔎','Bu eğitimin ele aldığı sorunlar'],['🧭','Neler sizin elinizde — neler değil'],['🛟','Bir iade talebi zaten varsa ne yapmalı'],['🎯','Bir sonraki dersinizi nasıl kurtarma fırsatına dönüştürürsünüz']],
 eyebrow:'Giriş',
 title:'Neden Buradasınız',
 desc:'İlk derslerdeki bir teknik sorunun bize neden bir aileyi kaybettirebileceği, bunun hangi kısmının sizin elinizde olduğu — ve bir iade talebi zaten varsa ne yapmanız gerektiği.',
 obj:'İlk derslerdeki bir teknik sorunun bize neden bir aileyi kaybettirebileceğini, bunun hangi kısmının sizin elinizde olduğunu ve bir iade talebi zaten oluşturulduysa ne yapmanız gerektiğini anlamak.',
 sections:[
  {t:'📊 Veriler ne gösteriyor', html:`
   <div class="card"><p>Teknik bir sorun nadiren tek başına gelir. Aile, Kodland’ın kendileri için doğru seçim olup olmadığına hâlâ karar verirken, ilk derslerde ortaya çıkar — hatta bazen çocuk henüz tek bir ders bile görmeden.</p></div>
   ${bigStat('≈ 20’de 1',`<p>iade talebinin arkasında <strong>gerçek bir teknik sorun</strong> vardır. Ve bu en düşük tahmin: bu vakaların bir kısmı başka bir nedenle etiketlenmiş olarak gelir.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Tüm bölgelerdeki son 90 günün iade taleplerine dayanmaktadır; rakamlar yaklaşıktır.</p>
   ${co('co-idea','💡',`<p><strong>İlk dersler en dar penceredir.</strong> Aynı gün çözülen bir teknik sorun genellikle telafi edilir; aynı sorun geç çözüldüğünde ise neredeyse hiç edilmez. İlk derslerin ve aynı günün bu kadar önemli olmasının nedeni budur.</p>`)}
  `},
  {t:'🔎 Bu eğitimin ele aldığı sorunlar', html:`
   ${iconGrid([
     {ic:'🖥️', html:`<strong>Classroom ve öğrenme platformları.</strong> Bozuk veya eksik bağlantılar, platform hataları, siyah ekranlar, çalışmayı bırakan ses ve kamera.`},
     {ic:'💻', html:`<strong>Kurs gereksinimlerini karşılamayan bilgisayarlar</strong>`},
     {ic:'🧩', html:`<strong>Açılmayan veya kurulamayan kurs araçları:</strong> Blender, Roblox Studio, Unity, Krita ve diğer programlar.`}
   ])}
  `},
  {t:'🧭 Neler sizin elinizde, neler değil', html:`
   <div class="card"><p>Bir platform hatasını, bir kaydı ya da bir ders programını siz düzeltemezsiniz. Ama birçok şey sizin elinizde — ve en önemlisi <strong>doğru kişilere hızlı ve eksiksiz bilgi vermektir</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Tamamen sizin elinizde</th><th>🔁 Uyarlamanız ve bildirmeniz gereken</th><th>🚫 Kontrolünüz dışında</th></tr>
    <tr><td>Her dersten önce kendi bağlantınızı, cihazınızı ve Chrome’u kontrol etmek<br>BO’da bulduğunuz giriş bilgilerini aileye göndermek</td><td>Derse giremeyen veya bağlanamayan bir öğrenci: ilk yardımı yapın ve <strong>bildirin</strong></td><td>Bir Classroom veya platform hatasını düzeltmek</td></tr>
    <tr><td>Sakin kalmak ve sorunu grubun önünde olağan bir şeymiş gibi karşılamak</td><td>Bir aksaklık yüzünden kaybedilen ders: bir sonraki dersi uyarlayın ve <strong>bildirin</strong></td><td>Kayıtlar, lisanslar ve ders bakiyesi</td></tr>
    <tr><td>Mikrofonları dikkatle kapatıp açmak</td><td>Gereksinimleri karşılamayan bir bilgisayar: dersi faydalı tutun ve <strong>Takım Liderinize bildirin</strong></td><td>Öğrenciyi başka bir kursa, gruba veya ders saatine taşımak</td></tr>
    <tr><td>Bilinen alternatif çözümleri denemek (sayfayı yenilemek, derse yeniden katılmak, kurs için başka bir araç)</td><td>Ailenin ayrılmasına yol açabilecek bir teknik sorun: <strong>Takım Liderinizden ek ders talep edin</strong></td><td>Ek dersi, ders saati değişikliğini veya herhangi bir telafiyi onaylamak</td></tr>
    <tr><td>Aynı gün, eksiksiz ayrıntılarla bildirmek</td><td>Birden fazla öğrenciyi etkileyen bir aksaklık: önceliklendirme, <strong>bildirim</strong> ve bir telafi planı</td><td>Ailenin internet sağlayıcısı veya ev ağı</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Sizin payınıza düşen üç hamle var:</strong> derste ilk yardım, zararı olabildiğince küçültmek için dersi uyarlamak ve eksiksiz ayrıntılarla <strong>aynı gün bildirmek</strong>.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>Sessizce beklemeyin.</strong> 10 dakikada çözülmezse tek başınıza uğraşmayı bırakın: iletişim kurun, kayıt altına alın, üst kademeye iletin.</p>`)}
  `},
  {t:'🛟 Teknik sorun nedeniyle bir iade talebi zaten varsa', html:`
   <div class="card"><p>Yukarıdakilerin hepsi bunu önlemekle ilgili. Ancak bu eğitimi, bir aile teknik bir sorun nedeniyle <strong>zaten</strong> iade talep ettiği için açıyor olabilirsiniz. Önce şu kuralları okuyun.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebi siz değil, Müşteri Hizmetleri oluşturur.</strong> Bunu BO’da öğrencinin profilindeki Müşteri Hizmetleri yorumlarından öğrenirsiniz; otomatik bir bildirim gelmez.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Talep hakkında hiçbir şey söylemeyin</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri sizden belirli bir şey söylemenizi istemedikçe. Çocuk konuyu açarsa sıcak bir şekilde konuyu değiştirin ve derse devam edin.</p>`)}
  `},
  {t:'🎯 Bir sonraki dersiniz, kurtarma fırsatınızdır', html:`
   <div class="card"><p>O dersin <strong>teknik olarak kusursuz</strong> geçmesi gerekir. Talepten sonra yaşanacak ikinci bir aksaklık, olabilecek en kötü senaryodur.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 dakika önce:</strong> masaüstü Chrome güncel, diğer uygulamalar kapalı; mikrofon, kamera ve ekran paylaşımı test edilmiş; grup ve öğrenci listesi BO’da kontrol edilmiş.`},
     {ic:'🅱️', html:`<strong>Hazır bir B planı:</strong> öğrenci derse giremezse, ses kesilirse ya da kurs aracı açılmazsa ne yapacağınız (Modül 1 ve 2).`},
     {ic:'👀', html:`<strong>O çocuğa özel ilgi</strong> — genel geçer bir övgü yerine, somut bir şey için fark edildiğini hissettirin.`},
     {ic:'🏆', html:`<strong>Erken ve görünür bir başarı.</strong> Dersten geride kalmış hissederek değil, başarabildiğini hissederek ayrılmalı.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>O derste aksaklık tekrar yaşanırsa, hemen bildirin</strong> — Takım Liderinize; o da nöbetteki TSM için <em>#menap-teaching-and-techsupport</em> Slack kanalına yazar. Günün sonunu beklemeyin.</p>`)}
  `},
  {t:'📮 Aynı gün bildirin ve güvenli tek cümleyi bilin', html:`
   ${numlist([
     'Aynı gün BO’da tam olarak ne gördüğünüzü anlatan bir yorum bırakın: tarihler, neyin aksadığı, hata mesajı veya uyarı bandı, neler denediğiniz ve bir ekran görüntüsü',
     'Varsa, ailenin kendi sözlerini kelimesi kelimesine ekleyin',
     'Aynı gün Takım Liderinizi de bilgilendirin — ek dersin mantıklı olup olmadığını sormanın da tam zamanı budur',
     'Bir iadenin onaylandığını asla teyit etmeyin, asla tutar konuşmayın ve asla platformu suçlamayın'
   ])}
   ${co('co-ok','✅',`<p><strong>Her zaman güvenle söyleyebileceğiniz cümle:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Konuşmadaki rolünüz burada biter.</p>`)}
  `},
  {t:'🌱 Sonrasında da özen göstermeye devam edin', html:`
   <div class="card"><p>Talep geri çekilse ya da çocuk başka bir gruba geçse bile, sonraki haftalarda derslerinin teknik tarafıyla ilgilenmeye devam edin: erken katılın, kurulumunuzu test edin ve her şeyin çalışıp çalışmadığını ona sorun. Bir ders boyunca süren ve sonra sessizce eski hâline dönen bir kurtarma çoğu zaman kalıcı olmaz.</p></div>
  `}
 ],
 ix:{
  title:'Sizin elinizde, bildirmeniz gereken ve sizin elinizde olmayan',
  instr:'Her durumu sınıflandırın ve en iyi hamleyi seçin. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'Bu kimin payına düşüyor?', card:`Bir Classroom aksaklığı dünkü dersin yarısına mal oldu.`, zones:[{label:'✅ Tamamen benim elimde', fb:'Tam değil — aksaklığı kendiniz düzeltemezsiniz. Sizin elinizde olan, bir sonraki dersi uyarlamak ve durumu bildirmektir.'},{label:'🔁 Uyarlamam ve bildirmem gereken', fb:'Doğru — temel konuları telafi etmek için bir sonraki dersi uyarlarsınız ve aynı gün bildirirsiniz.'},{label:'🚫 Kontrolüm dışında', fb:'Tam olarak değil — aksaklığı düzeltmek size düşmez, ama bir sonraki dersi uyarlamak ve bildirmek size düşer.'}], correctZone:1},
   {type:'sort', prompt:'Bu kimin payına düşüyor?', card:`Kaybedilen dersin ardından aile için ek bir dersi onaylamak.`, zones:[{label:'✅ Tamamen benim elimde', fb:'Tam değil — talep edebilirsiniz, ama onu siz onaylamaz veya teklif etmezsiniz.'},{label:'🔁 Uyarlamam ve bildirmem gereken', fb:'Tam olarak değil — sizin payınız durumu bildirmek ve Takım Liderinizden talep etmektir; onay size ait değildir.'},{label:'🚫 Kontrolüm dışında', fb:'Doğru — onu Takım Lideriniz onaylar. Sizin payınız, kaybedilen dersi bildirmek ve aynı gün ek dersi talep etmektir.'}], correctZone:2},
   {type:'choice', prompt:`Bir veli şöyle yazıyor: “Zaten iade talep ettik, platform hiç çalışmadı.” Ne yaparsınız?`, opts:[`Platformun sorunsuz çalıştığını ve sorunun büyük ihtimalle onların bağlantısından kaynaklandığını açıklarsınız`,`“Müşteri Hizmetleri bu konuda size yardımcı olacak” diye cevap verir, BO’ya gördüklerinizi ve ailenin kendi sözlerini içeren bir yorum bırakır ve aynı gün Takım Liderinize haber verirsiniz`,`Bir sonraki derste her şeyin çalışacağına ve iadeye gerek olmadığına söz verirsiniz`], correct:1, fb:`Tartışmaz, söz vermez ve talep hakkında konuşmazsınız. Güvenli cümleyi kullanır ve ayrıntıları aynı gün ekibinize iletirsiniz.`},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu aileye söylenecek iyi bir cümle mi?', card:`“Platformun hatası, bizim de başımıza sürekli geliyor.”`, zones:[{label:'💎 Hazine', fb:'Tam değil — platformu suçlamak güveni zedeler ve hiçbir şeyi çözmez.'},{label:'🗑️ Çöp', fb:'Doğru — platformu asla suçlamayın. Ekibinizle birlikte konuyla zaten ilgilendiğinizi söyleyin.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Modül 1', emoji:'🧰', color:'#7EA8FF', art:'clock', learn:[['⏱️','Her dersten önceki 15 dakika'],['🩺','Erişim sorun çıkardığında ne yapmalı'],['💻','Cihaz kurs için uygun mu?'],['📮','Kime haber vermeli ve ne söylemeli']],
 eyebrow:'Modül 1 / 4',
 title:'Dersten Önce',
 desc:'Her dersten önceki 15 dakika; erişim, kayıt, ders saati ve bağlantı sorunları; ve öğrencinin cihazının kursu için uygun olup olmadığını nasıl anlayacağınız.',
 obj:'Aile dersi kaçırmadan önce erişim sorunlarını fark etmek ve bildirmek.',
 sections:[
  {t:'⏱️ Önceki 15 dakika', html:`
   <div class="card"><p>Erişim sorunlarının çoğu ders başlamadan <strong>önce</strong> görülebilir. Bu 15 dakika en iyi sigortanızdır.</p></div>
   ${stepper([
     {ic:'🌐', title:'Dersi masaüstü Chrome’da açın', html:`<p><strong>Güncel, masaüstü Google Chrome</strong> kullanın. Tam uyumlu tek tarayıcı odur; Safari ve diğerleri tam uyumlu değildir.</p>`},
     {ic:'🧹', title:'Diğer uygulamaları kapatın', html:`<p>Başka programlar çalışırken Classroom yavaşlar. Derste kullanmayacağınız her şeyi kapatın.</p>`},
     {ic:'🎙️', title:'Mikrofonunuzu ve kameranızı test edin', html:`<p>Tarayıcı izin istemediyse izinleri elle açın: URL’nin solundaki simge → Kamera ve Mikrofon “Her zaman izin ver” olarak ayarlanmalı.</p>`},
     {ic:'📋', title:'BO’da grubu ve bağlantıyı kontrol edin', html:`<p>Grubu, öğrenci listesini ve ders bağlantısının çalıştığını kontrol edin. <strong>Katılım öncesi ekrandaki uyarılara</strong> dikkat edin (örneğin desteklenmeyen sistem gereksinimleri).</p>`},
     {ic:'👋', title:'Yeni bir öğrencinin ilk dersinde erken katılın', html:`<p>Erken katılın ve bekleyin. <strong>Başlangıç saatinden 5 dakika sonra</strong> hâlâ katılmadıysa durumu bildirin; dersin bitmesini beklemeyin.</p>`}
   ])}
   ${co('co-idea','📶',`<p><strong>Mentor eğitmenlerden bir ipucu:</strong> Classroom güçlü bir bağlantıya ihtiyaç duyar. Öğrencilere (ve ailelerine) kullanmadıkları uygulamaları kapatmalarını ve ders sırasında evde kimsenin Wi-Fi’yi yoğun şekilde kullanmadığından emin olmalarını hatırlatın.</p>`)}
   ${doavoid(
     ['15 dakika erken katılın ve her şeyi test edin','Diğer uygulamalar kapalıyken güncel, masaüstü Chrome kullanın','Her dersten önce BO’da grubu ve bağlantıyı kontrol edin','Yeni bir öğrenci gelmezse hemen bildirin'],
     ['Dersi son dakikada açmak','Safari’den veya başka bir tarayıcıdan ders vermek','Birinin derse giremediğini söylemek için dersin sonunu beklemek','“Nasılsa bir ara katılır” diye düşünmek']
   )}
  `},
  {t:'🩺 Ders öncesi belirtiler', html:`
   <div class="card"><p>Her belirtiye dokunun. <strong>Yapmanız gerekeni</strong>, <strong>söyleyebileceklerinizi</strong> ve <strong>nereye bildireceğinizi</strong> göreceksiniz. Tüm destek kişileriniz Modül 4’te.</p></div>
   ${symCards([
     {ic:'🔗', title:`Ders bağlantısı bozuk veya yok`,
      do:`BO’yu yenileyin ve bağlantıyı grup sayfasından kontrol edin. Hâlâ bozuksa veya yoksa, Teaching ekibinin ders başlamadan düzeltebilmesi için hemen bildirin.`,
      say:`<em>“Ders bağlantısını ekibimle kontrol ediyorum, birkaç dakika içinde size bilgi vereceğim.”</em>`,
      rep:`Takım Lideriniz → Slack kanalı <em>#menap-teaching-and-techsupport</em> + BO yorumu.`},
     {ic:'🚪', title:`Katıl düğmesi görünmüyor`,
      do:`Sayfayı yenileyin, Chrome kullandığınızdan emin olun ve BO’da öğrencinin grupta olduğunu doğrulayın. Hiçbir şey değişmezse, grubun ve öğrencinin BO bağlantılarıyla birlikte bildirin.`,
      say:`<em>“Erişimi ekibimle kontrol ediyorum, bir gelişme olur olmaz size yazacağım.”</em>`,
      rep:`Takım Lideriniz → Slack kanalı <em>#menap-teaching-and-techsupport</em> + BO yorumu.`},
     {ic:'📋', title:`“Kayıtlı değilim”`,
      see:`Aile, çocuğun kayıtlı görünmediğini söylüyor.`,
      do:`<strong>Kaydı ne doğrulayın ne de reddedin.</strong> BO’da kontrol edin ve Takım Liderinize ve Müşteri Hizmetleri’ne haber verin.`,
      say:`<em>“Erişiminizi ekibimle kontrol ediyorum.”</em>`,
      rep:`Takım Lideri + Müşteri Hizmetleri + BO yorumu.`,
      avoid:`Aileye <em>“kayıtlı değil”</em> demek.`},
     {ic:'🕒', title:`Ders saati ailenin istediği saat değil`,
      see:`Ders başka bir saatte ya da farklı bir başlangıç tarihi içeren bir bildirim gelmiş.`,
      do:`Kendiniz hiçbir şeyi değiştirmeyin — ders saati yalnızca Müşteri Hizmetleri aracılığıyla ve velilerin onayıyla değişebilir. Aynı gün Takım Liderinize haber verin.`,
      say:`Neden böyle olduğunu açıklamadan veya değişiklik sözü vermeden yaşanan zorluğu kabul edin: <em>“Bunun zahmetli olduğunu anlıyorum. Sizinle iletişime geçebilmeleri için durumu ekibimle paylaştım bile.”</em>`,
      rep:`Takım Lideri + Müşteri Hizmetleri + BO yorumu.`},
     {ic:'🎟️', title:`Eksik ders bakiyesi veya haksız düşülen bir ders`,
      see:`Aile, derslerinin tutmadığını ya da yapılmayan bir dersin düşüldüğünü söylüyor.`,
      do:`Ailenin söylediklerini aynen not alın ve aynı gün Takım Liderinize ve Müşteri Hizmetleri’ne iletin — durumu Operasyon ekibi inceler.`,
      say:`<em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em>`,
      rep:`Takım Lideri + Müşteri Hizmetleri + BO yorumu.`,
      avoid:`Ders bakiyesi hakkında açıklama yapmak veya söz vermek.`},
     {ic:'✉️', title:`Aileye bağlantı veya giriş bilgileri ulaşmamış`,
      do:`<strong>Bu bilgiler BO’da sizde var.</strong> Öğrencinin profilinde giriş bağlantısını, kullanıcı adını ve şifreyi bulursunuz. Bunları aileye hemen kendiniz gönderin. Eksikse veya çalışmıyorsa bildirin.`,
      say:`<em>“Giriş bilgilerini şimdi gönderiyorum. Lütfen deneyin, bir şey çalışmazsa bana haber verin.”</em>`,
      rep:`Yalnızca bilgiler BO’da yoksa veya çalışmıyorsa: Takım Lideri + Müşteri Hizmetleri + BO yorumu.`,
      avoid:`BO’dan gelmeyen bağlantılar uydurmak.`}
   ])}
   ${co('co-warn','🔗',`<p><strong>Alternatif video bağlantısı yok.</strong> Türkiye’de Zoom kullanılmıyor — dersler yalnızca Classroom’da yapılıyor. Biri derse giremezse, Takım Lideriniz aracılığıyla canlı yardım isteyin (Modül 4).</p>`)}
  `},
  {t:'💻 1. dersten önce: cihaz uygun mu?', html:`
   <div class="card"><p>Yetersiz bir cihazdan kaynaklanan iade vakaları genellikle <strong>ilk derste</strong> ortaya çıkar. Her kursun ihtiyacı farklıdır:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Kolay', desc:'Funtech · Scratch · Python 1 / Python Pro · Web · Paper Drawing', note:'Chrome yeterli (Web için ayrıca VS Code). <strong>Dersten önce normal kontrol.</strong>'},
     {ic:'🟡', title:'Kontrol', desc:'Digital Creativity · Graphic Design · Roblox · Minecraft', note:'Belirli araçlar, bir kurulum, bir hesap veya bir ekran gerektirir. <strong>Cihazı 1. dersten önce doğrulayın.</strong>'},
     {ic:'🔴', title:'Zorlu', desc:'3D Modelling · Unity', note:'8 GB RAM, belirli bir sistem ve donanım. <strong>Cihazı 1. dersten önce doğrulayın.</strong>'}
   ],3)}
   ${accItem('📋 Kurslara göre gereksinimleri görün', `
    <p><strong>Genel olarak:</strong> güncel Chrome · en az 4 GB RAM (Blender veya Unity için 8 GB) · 10 Mbps, tercihen kablolu · 5 GB boş alan. <strong>Safari kullanmayın</strong> (Mac’te platformla bilinen sorunları var).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Kurs</th><th>Gereksinimler</th><th>Seviye</th></tr>
     <tr><td>Funtech</td><td>Yalnızca Chrome. Kurulacak bir şey yok.</td><td>🟢 Kolay</td></tr>
     <tr><td>Scratch</td><td>Yalnızca Chrome. Windows, Mac ve tablet.</td><td>🟢 Kolay</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + bir Google hesabı (Google Colab).</td><td>🟢 Kolay</td></tr>
     <tr><td>Web</td><td>Chrome + VS Code. Windows, Mac veya Linux.</td><td>🟢 Kolay</td></tr>
     <tr><td>Paper Drawing</td><td>Dersi izlemek için yalnızca Chrome. Fiziksel malzemeler.</td><td>🟢 Kolay</td></tr>
     <tr><td>Digital Creativity</td><td>Chrome. Çeşitli çevrim içi araçlar (Canva ve diğerleri); her aracın yedekleri wiki’de / eğitmen notlarında.</td><td>🟡 Kontrol</td></tr>
     <tr><td>Graphic Design</td><td>Chrome + Canva. En az 1280×768 ekran.</td><td>🟡 Kontrol</td></tr>
     <tr><td>Roblox</td><td>Windows veya Mac (tablet yok, Linux yok). 4 GB. <strong>Roblox Studio’yu 1. dersten önce kurun.</strong></td><td>🟡 Kontrol</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac veya Linux. Java Edition önerilir. 4 GB. Bir Minecraft hesabı gereklidir.</td><td>🟡 Kontrol</td></tr>
     <tr><td>3D Modelling</td><td>Blender. 8 GB. Tekerlekli fare. Ayrı ekran kartı (GPU) önerilir. Windows veya Mac.</td><td>🔴 Zorlu</td></tr>
     <tr><td>Unity</td><td>8 GB. 10 GB boş alan. Windows veya Mac. Chromebook yok.</td><td>🔴 Zorlu</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>Kural:</strong> BO’da öğrencinin <strong>🟡 Kontrol</strong> veya <strong>🔴 Zorlu</strong> seviyesinde bir kursu olduğunu görürseniz, cihazı 1. dersten önce, Takım Liderinizin onayladığı bir mesajla doğrulayın.</p>`)}
   ${co('co-danger','💻',`<p><strong>Bilgisayar kursu çalıştıramıyorsa, kurs bu şekilde satılmamalıydı — ve bunu çözmek size düşmez.</strong> Takım Liderinize bildirin; öğrencinin nasıl ve nerede devam edeceğine Teaching ve Satış ekipleri birlikte karar verir. Aileye asla yeni bilgisayar almasını ya da kendi başınıza kurs değiştirmesini söylemeyin. Bu arada, Modül 2’deki alternatif çözümlerle dersi faydalı tutun.</p>`)}
  `}
 ],
 ix:{
  title:'Ders başlamadan önce',
  instr:'İlk hamleyi ve ne söyleyeceğinizi seçin. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'İlk hamleniz ne?', card:`Dersin başlamasına 10 dakika var ve bir öğrenci katıl düğmesinin görünmediğini söylüyor.`, zones:[{label:'🔁 Sayfayı yenileyin, Chrome’u kontrol edin ve BO’da grupta olduğunu doğrulayın', fb:'Doğru — hızlı ilk yardım. Hiçbir şey değişmezse, grubun ve öğrencinin BO bağlantılarıyla bildirirsiniz.'},{label:'🔗 O ders için bir Zoom bağlantısı gönderin', fb:'Tam değil — bölgenizde Zoom kullanılmıyor. Önce ilk yardım; işe yaramazsa yardım istersiniz.'},{label:'⏳ Bekleyin, belki sonra katılır', fb:'Tam değil — sessizce beklemek dersin kaybedilmesine yol açar. Hemen harekete geçin.'}], correctZone:0},
   {type:'sort', prompt:'İlk hamleniz ne?', card:`Öğrencinin kursu Unity ve BO’da 1. dersinin perşembe günü olduğu görünüyor.`, zones:[{label:'⏳ Hiçbir şey — 1. derste görürüz', fb:'Tam değil — Unity’de cihaz sorunları genellikle ilk derste, iş işten geçtikten sonra ortaya çıkar.'},{label:'💻 Cihazı 1. dersten önce, Takım Liderinizin onayladığı bir mesajla doğrulayın', fb:'Doğru — Unity zorlu bir kurs. Cihazı önceden doğrulamak ilk dersin kaybedilmesini önler.'},{label:'📝 Aileden daha iyi bir bilgisayar almasını isteyin', fb:'Tam değil — satın alma talep etmezsiniz. Cihazı doğrular ve gereksinimleri karşılamıyorsa bildirirsiniz.'}], correctZone:1},
   {type:'choice', prompt:`Bir anne şöyle yazıyor: “Oğlum derste kayıtlı görünmüyor.” Nasıl cevap verirsiniz?`, opts:[`“Oğlunuz kayıtlı değil, satış ekibiyle görüşmeniz gerekiyor.”`,`“Evet, kayıtlı, sizin tarafınızda bir hata olmalı.”`,`“Erişiminizi ekibimle kontrol ediyorum.”`], correct:2, fb:`Kaydı ne doğrulayın ne de reddedin. BO’da kontrol eder, Takım Liderinize ve Müşteri Hizmetleri’ne haber verirsiniz.`},
   {type:'choice', prompt:`Aile, dersin istedikleri saatten farklı bir saate denk geldiğini söylüyor. Ne yaparsınız?`, opts:[`Değişiklik sözü vermeden yaşanan zorluğu kabul eder ve aynı gün Takım Liderinize haber verirsiniz`,`Dersi tercih ettikleri saate kendiniz taşımayı teklif edersiniz`,`Ders saatinin artık değiştirilemeyeceğini açıklarsınız`], correct:0, fb:`Ders saatini değiştirmezsiniz, ama bir değişikliği de baştan reddetmezsiniz. Yaşanan zorluğu kabul eder ve aynı gün ekibinize haber verirsiniz.`},
   {type:'choice', prompt:`Bir aile, hiç yapılmamış bir dersin paketlerinden düşüldüğünü söylüyor. Ne yaparsınız?`, opts:[`Dersi geri vereceğinizi söylersiniz`,`Söylediklerini not alır, “Müşteri Hizmetleri bu konuda size yardımcı olacak” der ve aynı gün Takım Liderinize ve Müşteri Hizmetleri’ne iletirsiniz`,`Ders düşümlerinin nasıl işlediğini açıklarsınız`], correct:1, fb:`Ders bakiyesi ve düşümleri Operasyon ekibi inceler. Söz vermez veya açıklama yapmazsınız — ailenin söylediklerini aynen, aynı gün iletirsiniz.`},
   {type:'choice', prompt:`Bir 3D Modelling kursunun 1. dersinde öğrencinin bilgisayarında 4 GB RAM olduğunu ve Blender’ın çalışmadığını görüyorsunuz. Doğrusu hangisi?`, opts:[`Takım Liderinize bildirirsiniz — öğrencinin nasıl devam edeceğine Teaching ve Satış ekipleri karar verir — ve bu arada bu dersi faydalı tutarsınız`,`Aileye kursun onlara uygun olmadığını söyler ve başka bir kurs önerirsiniz`,`Aileden bir sonraki dersten önce bilgisayarı yükseltmesini istersiniz`], correct:0, fb:`Kursu çalıştıramayan bir bilgisayara kurs bu şekilde satılmamalıydı. Bunu çözmek size düşmez: bildirirsiniz, kararı Teaching ve Satış ekipleri verir.`}
  ]
 }
},
{id:'during', numLabel:'Modül 2', emoji:'🛠️', color:'#FFB44D', art:'micCam', learn:[['🧘','Önce sakin kalın'],['🔧','Mentor eğitmenlerden Classroom çözümleri'],['🧩','Her kurs için alternatif çözümler'],['🆘','Classroom çöktüğünde ne yapmalı']],
 eyebrow:'Modül 2 / 4',
 title:'Ders Sırasında',
 desc:'İlk hamle duygusaldır; 10 dakika kuralı, mentor eğitmenlerden Classroom çözümleri, her kurs için alternatif çözümler, birden fazla öğrenciyi etkileyen aksaklıklar ve Classroom çöktüğünde ne yapmalı.',
 obj:'10 dakikada çözülebilecek olanı çözmek, dersi her öğrenci için faydalı tutmak ve dersin tamamını teknik bir soruna kaptırmamak.',
 sections:[
  {t:'🧘 İlk hamle duygusaldır', html:`
   <div class="card"><p>Hiçbir şeye dokunmadan önce <strong>sakin kalın ve durumu yüksek sesle olağanlaştırın</strong>: <em>“Bu bazen olur, birlikte çözeceğiz.”</em> Sakin bir yetişkin, çocuğa her şeyin yolunda olduğunu gösterir ve grup da sizi örnek alır. Ancak ondan sonra sorunu çözmeye geçin.</p></div>
  `},
  {t:'⏱️ 10 dakika kuralı', html:`
   <div class="card"><p><strong>10 dakika</strong> içinde çözemezseniz, sessizce uğraşmayı bırakın.</p></div>
   ${stepFlow([
     {ic:'💬', label:'İletişim kurun: öğrenciyle, grupla ve gerekirse ekibinizle'},
     {ic:'📝', label:'Kayıt altına alın: neyin aksadığı, mesaj, ekran görüntüsü, neler denediğiniz'},
     {ic:'📮', label:'Üst kademeye iletin: Takım Liderinize bildirin; o da nöbetteki TSM için #menap-teaching-and-techsupport Slack kanalına yazar'}
   ])}
  `},
  {t:'🔧 İşe yarayan Classroom çözümleri — mentor eğitmenlerden', html:`
   <div class="card"><p>Her gün ders veren eğitmenler aynı fikirde: <strong>Classroom sorunlarının çoğu sayfayı yenileyerek ve yükü hafifleterek çözülür.</strong> Şunları bu sırayla deneyin:</p></div>
   ${stepper([
     {ic:'🔄', title:'Sayfayı yenileyin', html:`<p>Ya da öğrenciden yenilemesini isteyin. Siyah ekranların, donan görüntünün ve başlamayan paylaşımların çoğunu çözer.</p>`},
     {ic:'🧹', title:'Diğer uygulamaları kapatın', html:`<p>Hem sizinkileri hem öğrencilerinkileri. Başka programlar çalışırken Classroom yavaşlar.</p>`},
     {ic:'🚪', title:'Derse yeniden katılın', html:`<p>Kameranız çalışmayı bırakırsa tarayıcıyı kapatın, yeniden yükleyin ve tekrar katılın — bazen iki deneme gerekir.</p>`},
     {ic:'🎚️', title:'Seçili cihazı kontrol edin', html:`<p>Bir mikrofon “açık” görünüp yine de engellenmiş olabilir: ayarlarda doğru mikrofonun ve kameranın seçili olduğunu kontrol edin.</p>`},
     {ic:'📶', title:'Bağlantıyı hafifletin', html:`<p>Öğrencilerden kameralarını kapatmalarını ve evde başka kimsenin Wi-Fi’yi kullanmadığından emin olmalarını isteyin.</p>`},
     {ic:'🌐', title:'Son çare: başka bir tarayıcı', html:`<p>Başka bir tarayıcıdan yeniden katılmak bazen dersi tamamlamanızı sağlar. Sonrasında bildirin: desteklenen tarayıcı Chrome olmaya devam ediyor.</p>`}
   ])}
   ${iconGrid([
     {ic:'👥', html:`<strong>Kalabalık gruplar (15 öğrenci civarı).</strong> Ders yeniden başlayabilir, çökebilir, donabilir veya herkesin kamerası kapanabilir. Öğrencilerden en baştan kameralarını kapalı tutmalarını isteyin ve tekrar ederse bildirin.`},
     {ic:'📡', html:`<strong>Ekran paylaşımı sürekli kesiliyor.</strong> Genellikle bağlantıdan kaynaklanır. Uygulamaları kapatın, Wi-Fi’ye bağlı diğer cihazları sorun ve yeniden paylaşın.`},
     {ic:'🔄', html:`<strong>Öğrenciler ekranınızı göremiyor ve hiçbir şey işe yaramıyor.</strong> Bunun yerine bir öğrenciden ekranını grupla paylaşmasını isteyin — özellikle grup derslerinde bu çoğu zaman daha iyi çalışır.`},
     {ic:'✏️', html:`<strong>Ek açıklamalar (annotations) çalışmıyor</strong> (çizemiyorsunuz, çizimler görünmüyor ya da yanlış yerde görünüyor). Ek açıklamaları kapatın, ekranınızı yeniden paylaşın ve tekrar açın.`}
   ])}
  `},
  {t:'⬛ Paylaşırken siyah ekran — prosedürü izleyin', html:`
   <div class="card"><p>Ekran paylaşımı sırasında ekran siyaha döndüğünde öğrencinin ve/veya eğitmenin izlemesi gereken prosedür budur.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Ekran paylaşımı sırasında siyah ekran</div><div class="vslot-meta">Adım adım · 19 saniye</div></div></div>
    <div class="vslot-frame" style="padding:0"><video src="Media/black_screen.mkv" controls preload="metadata" playsinline style="display:block;width:100%;max-height:420px;background:#000"></video></div>
    <div class="vslot-brief">Adımları izledikten sonra ekran hâlâ siyahsa sayfayı yenileyin (siz veya öğrenci). Tekrar ederse ekran görüntüsüyle bildirin.</div></div>
  `},
  {t:'🖥️ Classroom — daha fazla hızlı çözüm', html:`
   <div class="card"><p>Eksiksiz ve güncel adımlar, Classroom ekibinin <strong>“Classroom Issues Quick Fixes”</strong> rehberinde yer alıyor. En sık görülenler:</p></div>
   ${accItem('▬ Ekranınız yerine siyah bir dikdörtgen', `<p>Paylaşımı durdurun ve yeniden başlatın. Bazıları için pencereyi simge durumuna küçültüp geri açmak işe yarar.</p>`)}
   ${accItem('🌫️ Paylaşılan ekran bulanık', `<p>Yeniden paylaşın ve bağlantıyı kontrol edin.</p>`)}
   ${accItem('🙈 Öğrenci paylaştığınız ekranı göremiyor', `<p>Telefondaysa “masaüstü sitesi” seçeneğini kullanmalı. Chrome kullandığını kontrol edin. Hiçbir şey işe yaramazsa başka bir öğrenciden ekranını grupla paylaşmasını isteyin.</p>`)}
   ${accItem('📱 Öğrenci ekranını paylaşamıyor', `<p>Mobil bir tarayıcıdan (iPad, tablet veya telefon) <strong>bu mümkün değildir</strong>. Bir bilgisayara ihtiyacı var.</p>`)}
   ${accItem('🧾 Beyaz tahta kapattıktan sonra da görünür kalıyor', `<p>Dersten çıkıp yeniden katılmalarını isteyin; grubun BO bağlantısıyla bildirin.</p>`)}
   ${accItem('🚪 Ayrı odalar (breakout rooms) hata veriyor', `<p>Tüm odaları kapatın ve yeniden oluşturun. Odaların içinde ekran paylaşımı çalışmazsa bildirin.</p>`)}
   ${accItem('📄 Ödevler (Assignments) sayfası siyah görünüyor', `<p>Ek açıklamaları kapatıp temizleyin, ekran paylaşımını durdurun ve sağ tık → “Çerçeveyi yeniden yükle”. Bir öğrencinin ekranı Ödevler sekmesinde olduğu için siyaha döndüyse paylaşımı durdurup yeniden başlatın.</p>`)}
   ${accItem('⚠️ Öğrenci hata bantları görüyor', `<p>Ondan bandı <strong>yüksek sesle okumasını</strong> isteyin ve ne yapması gerektiğini açıklayın. Bir bant olup olmadığını, mesajı, katılım öncesi uyarıları ve hatanın türünü <strong>not edin</strong>. Ekran görüntüsüyle bildirin.</p>`)}
   ${accItem('🖼️ Sanal arka planla kamera çalışmıyor', `<p><em>chrome://settings/system</em> adresinde “Kullanılabilir olduğunda grafik hızlandırmayı kullan” seçeneğini açın.</p>`)}
   ${accItem('🪟 Pencere içinde pencere modu', `<p>İşe yarar: paylaşılan ekrana sağ tıklayın → Pencere içinde pencere.</p>`)}
  `},
  {t:'🎙️ Bir öğrencinin mikrofonu veya kamerası çalışmadığında', html:`
   ${stepFlow([
     {ic:'🔁', label:'Derse yeniden katılmasını isteyin'},
     {ic:'🎚️', label:'Doğru mikrofonun ve kameranın seçili olduğunu kontrol edin'},
     {ic:'📮', label:'Hâlâ çalışmıyorsa: bildirin ve teknik destekten hafta içinde test etmesini isteyin'}
   ])}
   ${co('co-ok','💬',`<p><strong>Bu arada öğrenci öğrenmeye devam eder.</strong> Kamerasız, hatta istisnai olarak mikrofonsuz da derse katılabilir: sohbet ve tepkiler üzerinden iletişim kurarsınız. Hiç kimse bir cihaz yüzünden dersin dışında kalmaz.</p>`)}
   ${co('co-danger','🔇',`<p><strong>Bir öğrencinin sesini kapatırsanız, yeniden açın.</strong> Bir çocuğun sesini fark etmeden kapalı bırakmak bize bir aileyi kaybettirebilir.</p>`)}
  `},
  {t:'🧩 Kurs aracı çalışmadığında — kurslara göre alternatif çözümler', html:`
   <div class="card"><p>Kurs yazarları, bir öğrenci kurs programını açamadığında veya bilgisayarı programı zor çalıştırdığında neler yapabileceğinizi paylaştı. Kursunuza dokunun:</p></div>
   ${tabsBlock([
     {ic:'🎮', title:'Roblox, Unity, herhangi bir platform', html:`${symCards([
       {ic:'🔑', title:`Öğrenci giriş yapamıyor veya program açılmıyor`,
        do:`<ul><li><strong>Sizin demonuzu takip eder:</strong> öğrenci ekranınızı izler ve yapılanlar hakkında sözlü cevaplar verir — böylece derse katılmaya devam eder.</li><li><strong>Dersten sonra</strong> kurulumu veya girişi onunla birlikte yapın.</li><li><strong>Hâlâ çözülmedi mi?</strong> Takım Liderinizden teknik destek isteyin; o da nöbetteki TSM için <em>#menap-teaching-and-techsupport</em> Slack kanalına yazar.</li></ul>`,
        avoid:`Grubun geri kalanı beklerken tüm dersi kurulumla geçirmek.`},
       {ic:'🧱', title:`Roblox Studio indirilmiyor veya kurulmuyor`,
        do:`İşletim sistemini ve boş alanı kontrol edin (Modül 1’deki gereksinimlere bakın). Sonrası yukarıdakiyle aynı: şimdi demo, dersten sonra çözüm, gerekirse teknik destek.`},
       {ic:'🐌', title:`Ders sırasında Unity donuyor`,
        do:`Diğer sekmeleri ve uygulamaları kapatmasını isteyin. Unity 8 GB RAM gerektirir. Devam ederse cihazın modeli ve sistemiyle birlikte bildirin.`}
     ])}`},
     {ic:'🧊', title:'3D Modelling', html:`${symCards([
       {ic:'⬇️', title:`Blender öğrencinin bilgisayarında çalışmıyor`,
        do:`<ul><li><strong>Blender’ın daha eski bir sürümünü deneyin;</strong> resmî Blender web sitesinden indirilebilir.</li><li><strong>Hâlâ çalışmıyorsa</strong> bilgisayar kursu çalıştıramıyordur: Takım Liderinize bildirin. Öğrencinin nasıl devam edeceğine Teaching ve Satış ekipleri karar verir.</li></ul>`,
        avoid:`Kurs değişikliği sözü vermek — bu karar size ait değil.`}
     ])}`},
     {ic:'🎨', title:'Digital Creativity', html:`${symCards([
       {ic:'📚', title:`Çevrim içi araçlardan biri çalışmıyor`,
        do:`<ul><li><strong>Wiki’deki / eğitmen notlarındaki yedeklere bakın</strong> — birçok aracın orada listelenmiş bir alternatifi var.</li><li><strong>Listede yedek yok mu?</strong> Benzer bir hizmeti kendiniz bulun ve herkes için yedek listesine eklenmesi amacıyla geri bildirim formu üzerinden gönderin.</li></ul>`},
       {ic:'🖌️', title:`Krita açılmıyor`,
        do:`Herhangi bir çevrim içi çizim programı olur — örneğin <em>Kleki</em>.`}
     ])}`},
     {ic:'💻', title:'Yetersiz bir bilgisayar', html:`${symCards([
       {ic:'🐢', title:`Bilgisayar kurs gereksinimlerini hiç karşılamıyor`,
        see:`Uygulama açılmıyor, donuyor veya kapanıyor ya da katılım öncesi ekranda bir gereksinim uyarısı çıkıyor.`,
        do:`<ul><li><strong>Dersi faydalı tutun:</strong> paylaştığınız ekranda demo, rehberli bir örnek, sözlü cevaplar.</li><li><strong>Takım Liderinize bildirin.</strong> Kurs bu bilgisayar için satılmamalıydı; öğrencinin nasıl ve nerede devam edeceğine Teaching ve Satış ekipleri karar verir.</li></ul>`,
        avoid:`Görevi öğrencinin yerine yapmak, aileden bir şey satın almasını istemek veya kurs değişikliği sözü vermek.`}
     ])}`}
   ])}
  `},
  {t:'👥 Birden fazla öğrenci aynı anda sorun yaşadığında ya da ders kaybedildiğinde', html:`
   ${doavoid(
     ['Önceliklendirin: sorun tek bir öğrencide mi, birçoğunda mı? Birçoğundaysa sorun platformdadır — grubun BO bağlantısıyla <strong>hemen bildirin</strong>','Bağlı olanlarla dersi sürdürün, diğerlerinden sohbetten takip etmelerini isteyin','Ders kaybedildiyse kaydı gönderin ve bir telafi planı hazırlayın (Modül 3)','Gösterin, proje dosyasını paylaşın ve bir telafi oturumu planlayın'],
     ['Diğerleri sıkılırken tüm dersi öğrencilere tek tek yardım ederek geçirmek','Teknoloji aksadığında görevi öğrencinin yerine yapmak','Aileye ek ders sözü vermek','Dersi kendi başınıza yeniden planlamak']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Teknik bir sorun bir dersi</strong> — ya da arka arkaya iki dersi — <strong>tehlikeye attığında, aynı gün Takım Liderinizle konuşun.</strong> Ek ders talep edebilirsiniz; kararı Takım Lideriniz verir. Aileye bunu asla kendiniz vaat etmeyin ya da reddetmeyin.</p>`)}
  `},
  {t:'🆘 Classroom çöktü: canlı yardım isteyin', html:`
   <div class="card"><p><strong>Türkiye’de Zoom kullanılmıyor. Dersler yalnızca Classroom’da yapılıyor</strong> — Classroom her şeye bağlıdır: ödeme, kayıtlar, katılım.</p></div>
   ${numlist(['Yukarıdaki hızlı çözümleri deneyin','Çözülmedi mi? Takım Lideriniz <em>#menap-teaching-and-techsupport</em> Slack kanalına yazar','Nöbetteki TSM (teknik destek yöneticisi) konuyu üstlenir ve size yardım eder — gerekirse derse katılır','TSM çalışma saatleri dışında ilk iletişim noktanız Takım Lideri veya nöbetteki Ops ekibidir','Aynı gün bir BO yorumuyla bildirin'])}
  `}
 ],
 ix:{
  title:'Ders devam ediyor',
  instr:'Her durumda ilk hamleyi seçin. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'İlk hamle ne?', card:`Ekranınızı paylaştığınızda öğrenciler yalnızca siyah görüyor.`, zones:[{label:'🔁 Siyah ekran prosedürünü izleyin ve gerekirse sayfayı yenileyin', fb:'Doğru — videodaki prosedür bu. Tekrar ederse ekran görüntüsüyle bildirirsiniz.'},{label:'🆘 Dersi hemen Zoom’a taşıyın', fb:'Tam değil — bölgenizde Zoom kullanılmıyor. Önce Classroom çözümü gelir.'},{label:'⏭️ Ekran olmadan anlatmaya devam edin', fb:'Tam değil — önce çözümü deneyin; 10 dakikada çözülmezse bildirirsiniz.'}], correctZone:0},
   {type:'sort', prompt:'İlk hamle ne?', card:`Bir öğrencinin mikrofonu açık görünüyor ama kimse onu duyamıyor.`, zones:[{label:'📮 Hemen teknik desteğe bildirin', fb:'Tam değil — önce hızlı adımları deneyin: yeniden katılma ve seçili mikrofonu kontrol etme.'},{label:'🔁 Yeniden katılmasını ve doğru mikrofonun seçili olduğunu kontrol etmesini isteyin', fb:'Doğru — bir mikrofon “açık” görünüp yine de engellenmiş olabilir. Hâlâ çalışmazsa öğrenci sohbeti kullanır, siz de bildirirsiniz.'},{label:'🔇 Bu sefer sadece dinlemesini söyleyin', fb:'Tam değil — önce hızlı çözümler; bu arada sohbet ve tepkilerle derse katılabilir.'}], correctZone:1},
   {type:'sort', prompt:'İlk hamle ne?', card:`Tablet kullanan bir öğrenci ekranını paylaşamıyor.`, zones:[{label:'🔁 Birkaç kez daha denemesini isteyin', fb:'Tam değil — tablet tarayıcısından ekran paylaşımı mümkün değildir.'},{label:'📝 Tablette tarayıcı değiştirmesini isteyin', fb:'Tam değil — telefon veya tablette, tarayıcı ne olursa olsun bu mümkün değildir.'},{label:'💻 Ekranını paylaşmak için bir bilgisayara ihtiyacı olduğunu açıklayın ve derse başka bir yolla devam edin', fb:'Doğru — bu bilinen bir kısıtlama. Etkinliği uyarlayın ve kurs gerektiriyorsa bildirin.'}], correctZone:2},
   {type:'choice', prompt:`Bir Roblox dersinde bir öğrenci Roblox Studio’ya giriş yapamıyor. Ders sırasında ne yaparsınız?`, opts:[`Grubun geri kalanı beklerken dersi onun giriş yapmasına yardım ederek geçirirsiniz`,`Demonuzu takip etmesini ve yapılanlar hakkında sesli cevap vermesini sağlarsınız; dersten sonra sorunu çözmesine yardım eder, gerekirse teknik destek istersiniz`,`Bu dersi atlamasını ve sorun çözülünce geri gelmesini söylersiniz`], correct:1, fb:`Öğrenci demonuzu takip ederek öğrenmeye devam eder. Erişimi dersten sonra çözersiniz ve hâlâ çözülmediyse teknik destek istersiniz.`},
   {type:'choice', prompt:`Digital Creativity’de Krita bir öğrencinin bilgisayarında açılmıyor. İyi bir alternatif çözüm hangisi?`, opts:[`Kleki gibi çevrim içi bir çizim programı kullanmak`,`Öğrencinin kursu alamayacağını bildirmek`,`Aileden bir çizim tableti almasını istemek`], correct:0, fb:`Herhangi bir çevrim içi çizim programı olur. Yedekler için wiki’ye / eğitmen notlarına bakın ve yenilerini geri bildirim formu üzerinden önerin.`},
   {type:'choice', prompt:`Dersin beşinci dakikasında üç öğrenci derse giremiyor, diğer ikisi bekliyor. Ne yaparsınız?`, opts:[`Hepsi girene kadar sırayla her birine yardım edersiniz`,`Dersi iptal edip ailelere haber verirsiniz`,`Hemen bildirirsiniz (sorun platformda), bağlı olan iki öğrenciyle devam eder ve diğerlerinden sohbetten takip etmelerini istersiniz`], correct:2, fb:`Birden fazla öğrenci sorun yaşıyorsa sorun platformdadır: hemen bildirin. Bağlı olanlarla dersi sürdürün ve ardından telafi planını hazırlayın.`},
   {type:'choice', prompt:`Classroom gruptaki hiç kimse için çalışmıyor. Ne yaparsınız?`, opts:[`Ders kaybedilmesin diye herkese bir Zoom bağlantısı gönderirsiniz`,`Canlı yardım istersiniz: Takım Lideriniz #menap-teaching-and-techsupport Slack kanalına yazar ve nöbetteki TSM size yardım eder ya da derse katılır`,`Dersi iptal edip kendiniz başka bir güne taşırsınız`], correct:1, fb:`Türkiye’de Zoom kullanılmıyor ve dersi kendi başınıza yeniden planlayamazsınız. Nöbetteki TSM size canlı yardım etmek için orada.`}
  ]
 }
},
{id:'after', numLabel:'Modül 3', emoji:'🏠', color:'#B79DF2', art:'phoneDesk', learn:[['🔍','“Yapmıyor”un ardındaki “yapamıyor”u fark edin'],['📲','Telefon ve tabletin sınırlarını bilin'],['📼','Kaybedilen bir dersi telafi edin'],['🔁','Aileyle süreci kapatın']],
 eyebrow:'Modül 3 / 4',
 title:'Dersten Sonra',
 desc:'Giriş yapılamadığı için teslim edilmeyen ödevler, telefon veya tablette platform, kaybedilen dersler ve aileyle süreci nasıl kapatacağınız.',
 obj:'Teknik bir sorunun bir aileyi ödevsiz ya da cevapsız bırakmamasını sağlamak ve bunu “teslim etmemek” ile karıştırmadan önce fark etmek.',
 sections:[
  {t:'🔍 Teslim etmiyorlarsa, belki edemiyorlardır', html:`
   <div class="card"><p>Motivasyon eksikliğini düşünmeden önce, öğrencinin ödevi yapmak için <strong>platforma girip giremediğini</strong> kontrol edin. Bazı aileler ödevi açamadıklarından ve kimsenin onlara bir seçenek sunmadığından şikâyet etti.</p></div>
   ${co('co-idea','❓',`<p><strong>Varsaymadan önce sorun:</strong> <em>“Ödevi açabildin mi? Hangi cihazda denedin?”</em></p>`)}
  `},
  {t:'🩺 Ders sonrası belirtiler', html:`
   ${symCards([
     {ic:'🔒', title:`Ödevi yapmak için platforma giremiyorlar`,
      do:`Tarayıcıyı (masaüstü Chrome), cihazı ve giriş bilgilerini doğrulayın — bilgileri BO’da bulup yeniden gönderebilirsiniz. Hiçbir şey değişmezse öğrencinin ve grubun BO bağlantılarıyla bildirin ve <strong>24 saat sonra takip edin</strong>.`,
      say:`<em>“Ekibimle birlikte bu konuyla ilgileniyorum, yarın size yazacağım.”</em>`},
     {ic:'🧩', title:`Kurs programı derste açılmadı`,
      do:`Dersten sonra kurulumu veya girişi öğrenciyle birlikte yapın (Modül 2’deki, kursuna uygun alternatif çözümle). Hâlâ çalışmazsa Takım Liderinizden teknik destek isteyin; o da nöbetteki TSM için <em>#menap-teaching-and-techsupport</em> Slack kanalına yazar.`},
     {ic:'🎙️', title:`Mikrofonu veya kamerası çalışmadı`,
      do:`Yeniden katılmak ve cihazı kontrol etmek işe yaramadıysa bildirin ve teknik destekten sonraki hafta içinde öğrenciyle test etmesini isteyin. O zamana kadar öğrenci sohbet ve tepkilerle katılır.`},
     {ic:'📱', title:`Yalnızca telefondan girebiliyorlar ve düzgün görünmüyor`,
      do:`Platform bilgisayarlar için tasarlanmıştır: “masaüstü sitesi” seçeneğini veya bir bilgisayar kullanmalılar. Alternatif erişim sözü vermeyin.`,
      say:`Kısıtlamayı sıcak bir dille açıklayın: <em>“Bazı bölümler telefonda iyi görünmüyor; bilgisayarda ya da masaüstü sitesiyle çok daha iyi çalışıyor.”</em>`},
     {ic:'📲', title:`Platform telefonda veya tablette tam olarak çalışmıyor`,
      do:`Bu <strong>bilinen bir kısıtlamadır</strong> (örneğin telefondan ekran paylaşımı mümkün değildir). Kurs gerektiriyorsa bildirin.`},
     {ic:'🗂️', title:`Ödev not defterinde veya panelde görünmüyor`,
      do:`Ekran görüntüsüyle bildirin.`},
     {ic:'📼', title:`Bir aksaklık yüzünden ders kaybettiler`,
      do:`Kaydı ve temel kısmı gönderin, bir telafi planı hazırlayın ve aynı gün Takım Liderinizle konuşun — ek ders talep edebilirsiniz.`,
      tip:`<strong>Aileye yazmadan önce Takım Liderinizle uzlaşın.</strong>`}
   ])}
  `},
  {t:'🔁 Süreci kapatın', html:`
   <div class="card"><p>Sorun çözüldüğünde <strong>aileye haber verin</strong>. Bilgilendirilen bir veli, kalan bir velidir.</p></div>
  `}
 ],
 ix:{
  title:'Kimse cevapsız kalmasın',
  instr:'En iyi hamleyi seçin veya her durumu sınıflandırın. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:`Bir aile, oğullarının yalnızca telefondan girebildiğini ve platformun düzgün görünmediğini söylüyor. Ne yaparsınız?`, opts:[`Telefon için özel bir erişim sağlayacağınıza söz verirsiniz`,`Platformun bilgisayarlar için tasarlandığını sıcak bir dille açıklar, masaüstü sitesini veya bir bilgisayarı önerir ve kurs gerektiriyorsa bildirirsiniz`,`Kursa bu şekilde devam edemeyeceğini söylersiniz`], correct:1, fb:`Kısıtlamayı sıcak bir dille açıklayın, işe yarayanı önerin ve alternatif erişim sözü vermeyin.`},
   {type:'choice', prompt:`Bir öğrenci ödevin panelinde görünmediğini söylüyor. Ne yaparsınız?`, opts:[`Ekran görüntüsüyle bildirirsiniz`,`Başka bir gün denemesini söylersiniz`,`Ödevi teslim edilmedi olarak işaretlersiniz`], correct:0, fb:`Ödev görünmüyorsa bu teknik bir sorundur: ekran görüntüsüyle bildirin.`},
   {type:'sort', prompt:'Kendiniz mi çözersiniz, yoksa bildirir misiniz?', card:`Bir öğrenci ödev teslim etmiyor ve sorulduğunda bilgisayarda Chrome’dan bile platforma giremediğini söylüyor.`, zones:[{label:'🧑‍🏫 Kendim çözerim', fb:'Tam değil — temel adımları (bilgisayarda Chrome) zaten denediniz. Artık bildirme zamanı.'},{label:'📮 Bildiririm', fb:'Doğru — öğrencinin ve grubun BO bağlantılarıyla bildirir ve 24 saat sonra takip edersiniz.'}], correctZone:1},
   {type:'choice', prompt:`Bir öğrencinin ödeve giremediğini bildirdiniz. Ne zaman takip edersiniz?`, opts:[`Sonraki hafta`,`Yalnızca aile tekrar yazarsa`,`24 saat sonra`], correct:2, fb:`Takip 24 saat sonra yapılır: böylece aile cevapsız kalmaz.`}
  ]
 }
},
{id:'report', numLabel:'Modül 4', emoji:'📮', color:'#F58AC4', art:'report', learn:[['🆘','Nereden yardım alınır ve kimle iletişime geçilir'],['🛣️','Doğru kanalı seçin'],['📅','Ek dersler ve ders saati değişiklikleri'],['🧾','Eksiksiz bir bildirim yazın'],['💛','Aileye zamanında cevap verin'],['🖥️','Bir BO simülasyonunda pratik yapın']],
 eyebrow:'Modül 4 / 4',
 title:'Bildirin ve Üst Kademeye İletin',
 desc:'Bölgenizde nereden yardım alacağınız ve kimle iletişime geçeceğiniz, soruna göre kime haber vereceğiniz, ek dersler ve ders saati değişiklikleri, iyi bir bildirimin neleri içerdiği, aileye nasıl zamanında cevap vereceğiniz ve teknik bir bildirim için pratik yapabileceğiniz bir BO simülasyonu.',
 obj:'Nereden yardım alacağınızı, kime, hangi ayrıntılarla ve hangi sırayla haber vereceğinizi bilmek — ve aileyi zamanında bilgilendirmek. Bildirilmeyen bir sorun ya da cevap verilmeyen bir aile, başka hiç kimse için var olmaz.',
 sections:[
  {t:'🆘 Nereden yardım alınır ve kimle iletişime geçilir', html:`
   <div class="card">${numlist(['<strong>Ders sırasında:</strong> Takım Lideriniz <em>#menap-teaching-and-techsupport</em> Slack kanalına yazar; nöbetteki TSM (teknik destek yöneticisi) konuyu üstlenir ve size yardım eder ya da gerekirse derse katılır','<strong>İlk dersler (M1L1):</strong> yeni gruplara önceden bir TSM atanır, bu yüzden erişim, bağlantı ve cihaz sorunlarının çoğu orada çözülür','<strong>TSM çalışma saatleri dışında veya acil durumlarda:</strong> ilk iletişim noktanız Takım Lideri veya nöbetteki Ops ekibidir; teknik sorunları nöbetteki TSM’ye iletirler','<strong>Kurs sorunları</strong> (platform hataları, giriş bilgileri): Slack kanalında bildirin; TSM’ler sorun gidermeyle çözülemeyenleri üst kademeye iletir'])}</div>
   <div class="card" style="background:var(--surface2)"><h4>👥 Kimle iletişime geçilir</h4>
   <div class="tbl-wrap"><table>
    <tr><th>Ne oldu</th><th>Kim</th></tr>
    <tr><td>Çözemediğiniz teknik bir sorun (Classroom, bağlantılar, platformlar)</td><td>Takım Lideriniz → Slack kanalı <em>#menap-teaching-and-techsupport</em> · Teknik destek: <strong>@Gözde Garcia</strong></td></tr>
    <tr><td>Eksik ders bakiyesi, yanlış ders saati, haksız düşülen bir ders</td><td>Takım Lideriniz + Operasyon: <strong>@İlke Aslı Aslan</strong> · Müşteri Hizmetleri: <strong>@Batuhan Oruç</strong></td></tr>
    <tr><td>Ek ders ya da yapılamayacak bir ders</td><td>Takım Lideriniz</td></tr>
   </table></div></div>
  `},
  {t:'🛣️ Üç kanal', html:`
   <div class="card"><p>Sorunun türüne göre bildirim farklı bir kanaldan ilerler:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Kanal</th><th>Ne zaman</th><th>Nereye</th></tr>
    <tr><td><strong>1. Classroom veya platform aksaklığı</strong><br>(siyah ekran, ses, beyaz tahta, odalar, bozuk bağlantılar)</td><td>Hızlı çözümler sorunu gidermedi</td><td>Takım Lideriniz → Slack kanalı <em>#menap-teaching-and-techsupport</em> + BO yorumu</td></tr>
    <tr><td><strong>2. Hesap ve Operasyon</strong><br>(kayıt, giriş bilgileri, ders saati, lisanslar, ders bakiyesi, düşümler)</td><td>Öğrenci giremiyor, kayıtlı değil, ders saati yanlış, giriş bilgileri çalışmıyor ya da dersler haksız yere düşülmüş</td><td>Takım Lideri + Müşteri Hizmetleri + BO yorumu (Operasyon: @İlke Aslı Aslan · Müşteri Hizmetleri: @Batuhan Oruç)</td></tr>
    <tr><td><strong>3. Kaybedilen ders</strong><br>(bir veya daha fazla ders tehlikeye girdi)</td><td>Bir platform aksaklığı, iptal veya devamsızlık nedeniyle</td><td><strong>Aynı gün Takım Lideri</strong> (ek ders talep edebilirsiniz) + aile üzgünse Müşteri Hizmetleri + BO yorumu</td></tr>
   </table></div></div>
  `},
  {t:'📅 Ek dersler ve ders saati değişiklikleri', html:`
   ${iconGrid([
     {ic:'➕', html:`<strong>Ek dersi Takım Lideriniz onaylar.</strong> Teknik bir sorun dersi etkiliyorsa veya ailenin ayrılmasına yol açabilecekse Takım Liderinize bildirin. Ek dersi onaylarsa BO’da planlanır.`},
     {ic:'🚫', html:`<strong>Takım Lideriniz onaylamadan aileye asla ek ders teklif etmeyin.</strong>`},
     {ic:'🕒', html:`<strong>Bir dersi kendi başınıza yeniden planlayamazsınız.</strong> Ders saati yalnızca Müşteri Hizmetleri aracılığıyla ve velilerin onayıyla değişir.`}
   ])}
  `},
  {t:'🧾 Bir bildirim neleri içerir', html:`
   ${numlist([
     'Grubun ve öğrencinin <strong>BO bağlantıları</strong> (zorunlu)',
     'Öğrenciye bir <strong>uyarı bandı</strong> gösterildi mi? Ne yazıyordu?',
     '<strong>Katılım öncesi ekrandaki uyarılar</strong> (örneğin desteklenmeyen gereksinimler)',
     '<strong>Hata türü:</strong> siyah ekran, ses yok, derse girilemiyor, program açılmıyor…',
     '<strong>Ekran görüntüsü</strong>',
     'Cihaz, işletim sistemi, tarayıcı ve gerekiyorsa <strong>VPN kullanılıp kullanılmadığı</strong> ve hangi ülkeden',
     'Neleri ve ne kadar süre denediğiniz',
     'Alternatif bir platform kullanıldıysa: <strong>kayıt</strong>'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Faydalı bir BO yorumu nasıl görünür — kopyalayın ve doldurun</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Ders:</strong> [tarih] · <strong>Grup:</strong> [BO bağlantısı] · <strong>Öğrenci:</strong> [BO bağlantısı]<br>
   <strong>Ne aksadı:</strong> [ör. derse giremedi; paylaşırken siyah ekran]<br>
   <strong>Uyarı bandı veya mesaj:</strong> [birebir metin ya da “yok”] · <strong>Katılım öncesi uyarılar:</strong> [evet / hayır, hangileri]<br>
   <strong>Cihaz:</strong> [cihaz, sistem, tarayıcı, VPN evet / hayır ve ülke]<br>
   <strong>Denediklerim:</strong> [ör. sayfayı yeniledim, yeniden katıldım, uygulamaları kapattım, eski Blender sürümü — 10 dakika]<br>
   <strong>Ders nasıl devam etti:</strong> [ör. demomu takip etti; alternatif platform, kaydedildi]<br>
   <strong>Ekran görüntüsü:</strong> [ekte] · <strong>Ailenin sözleri:</strong> [varsa kelimesi kelimesine]</p></div>
  `},
  {t:'🖥️ Pratik yapın: BO’da teknik bir sorunu bildirin', html:`
   <div class="card"><p>Şimdi bunu, Back Office’in bir kopyasında gerçekten yapın. <strong>Bir öğrenci teknik bir sorun nedeniyle bugünkü derse giremedi.</strong> 4 adımlı rehberli turu izleyin. <strong>4. adımda</strong> Sorun Türü olarak <strong>“Teknik sorun, lütfen öğrenciyle iletişime geçin”</strong> seçeneğini seçin ve yorumunuzu olgularla yazın: neyin aksadığı, ne zaman olduğu, mesaj veya uyarı bandı, neler denediğiniz ve ailenin kendi sözleri.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Teknik bir sorunu bildirin</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Teknik bir sorunu bildirin" loading="lazy"></iframe></div></div>
   ${co('co-idea','📝',`<p><strong>Yukarıdaki şablonu kullanın.</strong> Yorumunuz ne kadar eksiksiz olursa, aileyle o kadar hızlı iletişime geçilebilir.</p>`)}
  `},
  {t:'🔢 Sıra önemlidir', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Önce ekip, sonra aile.</strong> Sorun sizin dersinizin ötesine geçiyorsa (erişim, ders saati, ders bakiyesi, kaybedilen bir ders), Takım Liderinizle konuşmadan aileye yazmayın.`},
     {ic:'🎓', html:`<strong>Siz öğrenmeden bahsedersiniz; aksiyonu devredersiniz.</strong> Derste neler denediğinizi ve konuyla ilgilendiğinizi söyleyebilirsiniz. Seçenekler (ek ders, grup veya kurs değişikliği, telafi) Takım Lideriniz ve Müşteri Hizmetleri’nden gelir.`},
     {ic:'⚖️', html:`<strong>Asla söz vermeyin, asla reddetmeyin.</strong> Ne <em>“size ek ders vereceğiz”</em> ne de <em>“bu mümkün değil”</em>. Ama önemsediğinizi ve konuyla zaten ilgilendiğinizi mutlaka gösterin.`},
     {ic:'📅', html:`<strong>Bir kez iletin ve takip edin.</strong> İki ders sonra kontrol etmek için takviminize bir hatırlatma koyun.`}
   ])}
  `},
  {t:'💛 Zamanında cevap verin: aileler emeğinizi fark eder', html:`
   <div class="card"><p>Teknik bir aksaklık, bir ailenin ayrılmasının nadiren tek nedenidir. Belirleyici olan <strong>sonrasında</strong> yaşananlardır: Biri cevap veriyor mu, çocuk derse geri dönebiliyor mu, aile birinin önemsediğini hissediyor mu? Veliler, her şeyin yolunda gitmesi için çalıştığınızı gördüklerinde — hızlı cevap veriyor, takip ediyor, çocuklarının mümkün olan en iyi dersi almasını sağlıyorsanız — bunu fark ederler. Birçok ailenin <strong>bize ikinci bir şans vermesini</strong> sağlayan şey bu emektir. Sessizlik ise onlara tam tersini anlatır.</p></div>
   ${co('co-danger','🚨',`<p><strong>Teknik bir sorunu önemsiz bir şey gibi görmeyin.</strong> Sizin için bu sadece siyah bir ekran olabilir. Aile için ise parasını ödedikleri bir ders, hayal kırıklığına uğramış bir çocuk ve bir şüphedir: <em>“buna değer mi?”</em> Yalnızca beş dakika sürmüş olsa bile — hele ki aile üzgün olduğunu zaten belli ettiyse — ciddiye alın.</p>`)}
   ${rclock([
     {ic:'👀', when:'Hemen', t:'Gördüm, ilgileniyorum', d:'Henüz cevabınız olmasa bile mesajı hemen yanıtlayın.'},
     {ic:'📮', when:'Aynı gün', t:'Bildirin ve uzlaşın', d:'Tüm ayrıntıları içeren BO yorumu, Takım Liderinin bilgilendirilmesi ve aileye ne söyleyeceğiniz konusunda uzlaşma.'},
     {ic:'💬', when:'Aynı gün', t:'Aileyi bilgilendirin', d:'Neler yaptığınızı ve bir sonraki mesajınızı ne zaman yazacağınızı söyleyin — ve yeni bir gelişme olmasa bile yazın.'},
     {ic:'🚪', when:'Sonraki ders', t:'Çalışmasını sağlayın', d:'Erken katılın, her şeyi test edin ve öğrencinin derse girdiğini kontrol edin. Ardından süreci kapatın.'}
   ])}
   ${co('co-ok','💬',`<p><strong>Mesajı aldığınızı belirtmek her zaman serbesttir.</strong> Kısa ve sıcak bir mesaj — gördüğünüzü, önemsediğinizi, ilgilendiğinizi ve ne zaman tekrar yazacağınızı söyleyen — kimsenin onayını gerektirmez. Takım Liderinizi bekleyen şeyler; her türlü açıklama, her türlü seçenek ve telafiyle ilgili her şeydir.</p>`)}
   ${chatMock({
     name:'Veli', sub:'çevrim içi', avatar:'👩', time:'18:02',
     msgs:[`İyi akşamlar. Oğlum <strong>ikinci kez</strong> derse giremiyor. Almadığı dersler için para ödüyoruz ve çok hayal kırıklığına uğradı. Neler oluyor??`],
     title:'Nasıl cevap verirsiniz?',
     text:'Saat 18:00. Mesajı yeni gördünüz ve henüz Takım Liderinizle konuşmadınız. Ne olacağını görmek için her cevaba dokunun.',
     opts:[
      {t:`“İyi akşamlar! Classroom genelde sorunsuz çalışır, muhtemelen sizin internetinizden kaynaklanıyor. Başka bir tarayıcı deneyin.”`, ok:false, fb:`Aynı anda hem aileyi hem platformu suçladınız ve önemsediğinize dair hiçbir işaret vermediniz. Veli bunu “benim sorunum değil” olarak okuyacaktır.`},
      {t:`“Çok üzgünüm — iki dersin kaybedilmesi kabul edilebilir bir şey değil ve onun ne kadar hayal kırıklığına uğradığını anlıyorum. Mesajınızı gördüm ve ilgileniyorum: durumu bugün tüm ayrıntılarıyla ekibime bildiriyorum. Yarın sabah size gelişmelerle ilgili tekrar yazacağım ve bir sonraki derste girebildiğinden emin olmak için derse erken katılacağım.”`, ok:true, fb:`İşte bu. Sorunu ve duyguyu kabul ediyor, somut bir çaba gösteriyor, ne zaman tekrar yazacağınızı söylüyor ve kararı size ait olmayan hiçbir şey için söz vermiyor.`},
      {t:`“Merak etmeyin, telafi olarak ona ücretsiz bir ek ders vereceğim!”`, ok:false, fb:`Nazik, ama söz vermek size düşmez: ek dersler ve telafiler Takım Lideriniz ve Müşteri Hizmetleri ile birlikte kararlaştırılır. Sonra gerçekleşmezse aile güvenini yeniden kaybeder.`},
      {t:`Tam cevabı öğrendikten sonra yarın cevap veririm.`, reply:`<i>(bu akşam cevap yok…)</i>`, ok:false, fb:`Sessizlik en kötü seçenektir. Veli zaten üzgün; cevapsız geçen her saat, kimsenin önemsemediğini doğrular. Mesajı her zaman hemen yanıtlayın.`}
     ]
   })}
   ${co('co-star','🌟',`<p><strong>Unutmayın:</strong> teknik bir aksaklık affedilebilir. Görmezden gelinmiş hissetmek ise çok daha zor affedilir. Cevabınız, takibiniz ve öğrencinin erişimini geri kazanıp mümkün olan en iyi dersi alması için gösterdiğiniz çaba, birçok ailenin gördüğü şeydir — ve kalmaya karar vermelerinin nedenidir.</p>`)}
  `}
 ],
 ix:{
  title:'İyi ve doğru sırayla bildirin',
  instr:'Kanalı, en iyi yorumu ve ne söyleyeceğinizi seçin. Bu modülü tamamlamak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'Bu bildirim hangi kanaldan ilerler?', card:`Bir aile paketlerinden iki ders düşüldüğünü, ama yalnızca birinin yapıldığını söylüyor.`, zones:[{label:'1️⃣ Classroom veya platform aksaklığı', fb:'Tam değil — Classroom’da hiçbir şey aksamadı; konu ders bakiyesiyle ilgili.'},{label:'2️⃣ Hesap ve Operasyon', fb:'Doğru — ders bakiyesi ve düşümler, bir BO yorumuyla birlikte Takım Liderinize ve Müşteri Hizmetleri’ne gider. Durumu Operasyon ekibi inceler.'},{label:'3️⃣ Kaybedilen ders', fb:'Tam değil — ders bir aksaklık yüzünden kaybedilmedi; bu bir ders bakiyesi meselesi.'}], correctZone:1},
   {type:'sort', prompt:'Bu bildirim hangi kanaldan ilerler?', card:`Beyaz tahta kapattıktan sonra da görünür kalıyor ve dersten çıkıp yeniden katılmak sorunu çözmüyor.`, zones:[{label:'1️⃣ Classroom veya platform aksaklığı', fb:'Doğru — hızlı çözümler sorunu gidermedi: bir BO yorumuyla birlikte bildirin (Takım Lideriniz ve Slack kanalı #menap-teaching-and-techsupport).'},{label:'2️⃣ Hesap ve Operasyon', fb:'Tam değil — bunun öğrencinin hesabıyla hiçbir ilgisi yok.'},{label:'3️⃣ Kaybedilen ders', fb:'Tam değil — ders devam etti; bu bir Classroom aksaklığı.'}], correctZone:0},
   {type:'choice', prompt:`Aynı durum için en iyi BO yorumu hangisi?`, opts:[`“Giremedi, bağlantı kötü.”`,`“3/11, 2. ders. Giremedi: katılım öncesi ekranda ‘System not supported’ bandı. Windows 7, Chrome güncel. Yenilemeyi ve yeniden katılmayı denedim, 10 dk; dersin geri kalanında demomu takip etti. Ekran görüntüsü ekte. Grubun ve öğrencinin BO bağlantıları.”`,`“Platform yine çalışmıyor, hep böyle oluyor.”`], correct:1, fb:`Faydalı yorum eksiksiz ve tarafsızdır: tarih, neyin aksadığı, uyarı bandı, cihaz, neler denendiği, dersin nasıl devam ettiği, ekran görüntüsü ve BO bağlantıları.`},
   {type:'choice', prompt:`Bir öğrenci platform aksaklığı yüzünden bir ders kaybetti ve aile memnun değil. Önce ne gelir?`, opts:[`Aileye yazıp ek ders teklif etmek`,`Bir sonraki dersin çalışıp çalışmayacağını beklemek`,`Aynı gün Takım Liderinizle konuşmak, ek ders talep etmek ve aileye gidecek mesajda onunla uzlaşmak`], correct:2, fb:`Önce ekip, sonra aile. Ek ders talep edebilirsiniz; kararı Takım Lideriniz verir ve aile ancak ondan sonra bunu duyar.`},
   {type:'choice', prompt:`Bir veli, bağlantı sorunları nedeniyle gelecek haftaki dersin başka bir saate alınmasını istiyor. Ne yaparsınız?`, opts:[`Dersi BO’da kendiniz taşırsınız`,`Bunu kendinizin değiştiremeyeceğini açıklar, Takım Liderinize ve Müşteri Hizmetleri’ne haber verirsiniz`,`Ders saatlerinin asla değişemeyeceğini söylersiniz`], correct:1, fb:`Dersi yeniden planlamaz ve bunu baştan reddetmezsiniz: ders saati yalnızca Müşteri Hizmetleri aracılığıyla ve velilerin onayıyla değişir.`},
   {type:'choice', prompt:`Bir veli üzgün bir şekilde şöyle yazıyor: “Oğlum ikinci kez derse giremedi.” Saat 18:00 ve henüz Takım Liderinizle konuşmadınız. İlk olarak ne yaparsınız?`, opts:[`Yarına kadar bekler, Takım Liderinizle konuşur ve tüm cevaplarla tek seferde yanıt verirsiniz`,`Şimdi kısaca cevap verirsiniz: üzgün olduğunuzu, gördüğünüzü, ilgilendiğinizi ve gelişmelerle tekrar yazacağınızı söylersiniz — ardından Takım Liderinizle uzlaşırsınız`,`Sorunun nadiren platformdan kaynaklandığını anlamaları için Classroom’un nasıl çalıştığını açıklarsınız`], correct:1, fb:`Mesajı aldığınızı belirtmek her zaman serbesttir ve sessizlik aksaklığın kendisinden daha fazla zarar verir. Şimdi sıcak bir dille ve bir sonraki bilgilendirme zamanını belirterek cevap verin; açıklamalar ve seçenekler Takım Liderinizi bekler.`}
  ]
 }
},
{id:'checklist', numLabel:'Son Kontrol Listesi', emoji:'✅', color:'#FFD34D', art:'shield', learn:[['🛟','Bir iade talebi varsa'],['🧭','Önce · sırasında · sonra']],
 eyebrow:'Son Kontrol Listesi',
 title:'Son Kontrol Listesi',
 desc:'Burada test yok — yalnızca bu mini eğitimin dersten önce, ders sırasında ve dersten sonra için temel noktaları.',
 obj:'Aşağıdaki kontrol listesini gözden geçirin. Bu modül puanlanmaz — okuyun, ardından mini eğitimi bitirin.',
 sections:[
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   ${numlist([
     'Talebi öğrendiğim gün BO’ya tarihleri, neyin aksadığını, mesajı veya uyarı bandını, neler denediğimi ve bir ekran görüntüsünü içeren bir yorum bıraktım ve Takım Liderime haber verdim',
     'Bu öğrenciyle bir sonraki dersim teknik olarak kusursuzdu: 15 dakika erken, diğer uygulamalar kapalı, bir B planı, özel ilgi ve görünür bir başarı',
     'Bir onayı asla teyit etmedim, asla tutar konuşmadım ve asla platformu suçlamadım — güvenli tek cümleyi kullandım'
   ])}
  `},
  {t:'🧭 Önce, sırasında ve sonra', html:`
   ${tabsBlock([
     {ic:'🧰', title:'Önce', html:`<div class="card">${numlist(['Güncel, masaüstü Chrome, diğer uygulamalar kapalı','Mikrofon, kamera ve ekran test edildi','BO: grup, öğrenci listesi ve bağlantı','Katılım öncesi uyarılar','🟡 / 🔴 kurs: bilgisayar 1. dersten önce kontrol edildi','1. derste erken katılıyorum'])}</div>`},
     {ic:'🛠️', title:'Sırasında', html:`<div class="card">${numlist(['Önce sakinlik','Yenile, yeniden katıl, uygulamaları kapat, cihazı kontrol et','10 dakika, sonra Takım Liderim nöbetteki TSM’den yardım ister','Kurs aracı yok mu? Demo + sözlü cevaplar ya da kursun yedeği','Zoom yok: Classroom aksarsa Takım Liderim ve nöbetteki TSM aracılığıyla canlı yardım','Birçok öğrenci etkileniyorsa hemen bildiririm','Görevi öğrencinin yerine yapmam'])}</div>`},
     {ic:'🏠', title:'Sonra', html:`<div class="card">${numlist(['Ödeve girebiliyorlar mı?','Dersten sonra programla ilgili yardım','Kayıt, telafi planı ve gerekirse Takım Liderimden talep edilen ek ders','Eksiksiz ayrıntılarla aynı gün bildirim','Aileye zamanında cevap verir ve yeni bir gelişme olmasa bile onları bilgilendiririm','24 saat sonra takip','Aileyle süreci kapatırım'])}</div>`}
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Mini eğitimin tamamı bu kadar.</strong> Hazır olduğunuzda devam edin — ardından ödevi kapatmak için LMS’deki DST’yi tamamlayın.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
