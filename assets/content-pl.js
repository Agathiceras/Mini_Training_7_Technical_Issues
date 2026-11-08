/* Mini_Training_7_Technical_Issues - treść w języku polskim (cały tekst strony).
   Aby dodać język: skopiuj ten plik jako content-xx.js, przetłumacz teksty (zachowaj kod, klucze, tagi HTML, wywołania funkcji pomocniczych oraz ścieżki obrazów/wideo/symulacji), ustaw PAGE_LANG, flag i dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    pageTitle:"Miniszkolenie · Problemy techniczne — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Kiedy <span class=\"h-pill\">technologia</span> zawodzi",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, których rodziny poprosiły o zwrot pieniędzy z powodu problemów technicznych. Zobaczysz tu, co możesz zrobić przed lekcją, w jej trakcie i po niej, jakie obejścia możesz zastosować i gdzie szukać pomocy, żeby problem został rozwiązany na czas.",
    heroCard1:"<b>W swoim tempie.</b> Twój postęp zapisuje się w tej przeglądarce.",
    heroCard2:"<b>Z ćwiczeniem praktycznym.</b> Zgłosisz problem techniczny w symulacji Back Office.",
    pbLabel:'ukończonych modułów',
    tapOpen:'Kliknij, aby otworzyć',
    tapFlip:'Kliknij, aby odwrócić',
    lblSee:'Co widzisz',
    lblDo:'Co robisz',
    lblSay:'Co możesz powiedzieć',
    lblReport:'Gdzie zgłosić',
    lblAvoid:'Unikaj',
    lblTip:'Wskazówka',
    stepOf:'Krok {i} z {n}',
    next:'Dalej',
    heroWork:"Przejdź przez 6 krótkich modułów. Aby odblokować kolejny, w sprawdzianie każdego modułu potrzebujesz co najmniej 70%. Całość zajmie około 30–40 minut.",
    startBtn:"🚀 Rozpocznij szkolenie",
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Dev: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Powrót do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    finishBtn:'▶ Ukończ miniszkolenie',
    doneBack:'✓ Gotowe — powrót do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą część i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, która przekierowała cię do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Rób',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:',
    cvSee:'Co widzisz:',
    cvDo:'Co robisz:',
    dtExample:'Przykład z prawdziwych zajęć',
    dtNext:'Następnie:',
    dtDone:"✅ To już wszystkie trzy poziomy.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'#5DD39E', art:'lifebuoy', learn:[['📊','Co pokazują dane'],['🔎','Problemy, których dotyczy to szkolenie'],['🧭','Co należy do ciebie — a co nie'],['🛟','Co robić, gdy wniosek o zwrot już istnieje'],['🎯','Jak sprawić, by następna lekcja była szansą na odzyskanie rodziny']],
 eyebrow:'Wprowadzenie',
 title:'Dlaczego tu jesteś',
 desc:'Dlaczego problem techniczny na pierwszych lekcjach może kosztować nas rodzinę, która część należy do ciebie — i co robić, gdy wniosek o zwrot już istnieje.',
 obj:'Zrozumieć, dlaczego problem techniczny na pierwszych lekcjach może kosztować nas rodzinę, która część należy do ciebie i co robić, gdy wniosek o zwrot już istnieje.',
 sections:[
  {t:'📊 Co pokazują dane', html:`
   <div class="card"><p>Problem techniczny rzadko przychodzi sam. Pojawia się na pierwszych lekcjach, kiedy rodzina wciąż decyduje, czy Kodland jest dla niej — a czasem jeszcze zanim dziecko zobaczy choćby jedną lekcję.</p></div>
   ${bigStat('≈ 1 na 20',`<p>wniosków o zwrot ma za sobą <strong>prawdziwy problem techniczny</strong>. I to minimum: część takich przypadków trafia do nas oznaczona innym powodem.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Na podstawie wniosków o zwrot z ostatnich 90 dni we wszystkich regionach; dane przybliżone.</p>
   ${co('co-idea','💡',`<p><strong>Pierwsze lekcje to najwęższe okno.</strong> Problem techniczny rozwiązany tego samego dnia zwykle udaje się uratować; ten sam problem rozwiązany za późno — prawie nigdy. Dlatego liczą się pierwsze lekcje i dlatego liczy się ten sam dzień.</p>`)}
  `},
  {t:'🔎 Problemy, których dotyczy to szkolenie', html:`
   ${iconGrid([
     {ic:'🖥️', html:`<strong>Classroom i platformy edukacyjne.</strong> Niedziałające lub brakujące linki, błędy platformy, czarny ekran, dźwięk i kamera, które przestają działać.`},
     {ic:'💻', html:`<strong>Komputery, które nie spełniają wymagań kursu</strong>`},
     {ic:'🧩', html:`<strong>Narzędzia kursu, których nie da się otworzyć ani zainstalować:</strong> Blender, Roblox Studio, Unity, Krita i inne programy.`}
   ])}
  `},
  {t:'🧭 Co należy do ciebie, a co nie', html:`
   <div class="card"><p>Nie naprawisz błędu platformy, zapisu na kurs ani harmonogramu. Ale wiele jest w twoich rękach — a najważniejsze to <strong>szybko i dobrze poinformować właściwe osoby</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ W pełni twoje</th><th>🔁 Do dostosowania i zgłoszenia</th><th>🚫 Poza twoją kontrolą</th></tr>
    <tr><td>Sprawdzenie własnego połączenia, urządzenia i Chrome przed każdą lekcją<br>Wysłanie rodzinie danych logowania, które znajdziesz w BO</td><td>Uczeń, który nie może wejść ani się połączyć: pierwsza pomoc i <strong>zgłoszenie</strong></td><td>Naprawa błędu Classroom lub platformy</td></tr>
    <tr><td>Zachowanie spokoju i oswojenie problemu przy grupie</td><td>Lekcja stracona przez awarię: dostosowanie następnej i <strong>zgłoszenie</strong></td><td>Zapisy, licencje i saldo lekcji</td></tr>
    <tr><td>Uważne wyciszanie i włączanie mikrofonów</td><td>Komputer, który nie spełnia wymagań: utrzymanie wartości lekcji i <strong>zgłoszenie liderowi zespołu</strong></td><td>Przeniesienie ucznia na inny kurs, do innej grupy lub na inny termin</td></tr>
    <tr><td>Wypróbowanie znanych obejść (odświeżenie, ponowne dołączenie, inne narzędzie do kursu)</td><td>Problem techniczny, przez który rodzina może odejść: <strong>prośba do lidera zespołu o dodatkową lekcję</strong></td><td>Zatwierdzenie dodatkowej lekcji, zmiany terminu lub jakiejkolwiek rekompensaty</td></tr>
    <tr><td>Zgłoszenie tego samego dnia z kompletem informacji</td><td>Awaria, która dotyczy kilku uczniów: ocena sytuacji, <strong>zgłoszenie</strong> i plan nadrobienia</td><td>Dostawca internetu rodziny lub jej sieć domowa</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Twoja część to trzy ruchy:</strong> pierwsza pomoc na lekcji, takie dostosowanie lekcji, żeby szkody były jak najmniejsze, i <strong>zgłoszenie tego samego dnia</strong> z kompletem informacji.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>Nie czekaj w milczeniu.</strong> Jeśli w ciągu 10 minut problem nie zniknie, przestań próbować na własną rękę: poinformuj, udokumentuj, przekaż dalej.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot z powodu problemu technicznego już istnieje', html:`
   <div class="card"><p>Wszystko powyżej dotyczy zapobiegania. Ale być może otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot z powodu problemu technicznego. Najpierw przeczytaj te zasady.</p></div>
   ${co('co-idea','💡',`<p><strong>Wniosek tworzy Dział Obsługi Klienta, nie ty.</strong> Dowiadujesz się o nim z komentarzy Działu Obsługi Klienta w profilu ucznia w BO; nie ma automatycznego powiadomienia.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta poprosi cię o przekazanie czegoś konkretnego. Jeśli dziecko samo o tym wspomni, ciepło zmień temat i prowadź lekcję dalej.</p>`)}
  `},
  {t:'🎯 Twoja następna lekcja to szansa na odzyskanie rodziny', html:`
   <div class="card"><p>Ta lekcja musi być <strong>technicznie niezawodna</strong>. Druga awaria po złożeniu wniosku to najgorszy możliwy scenariusz.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 minut wcześniej:</strong> aktualny Chrome na komputerze, inne aplikacje zamknięte; mikrofon, kamera i udostępnianie ekranu sprawdzone; grupa i lista uczniów sprawdzone w BO.`},
     {ic:'🅱️', html:`<strong>Gotowy plan B:</strong> co zrobisz, jeśli uczeń nie będzie mógł wejść, jeśli zawiedzie dźwięk albo jeśli nie otworzy się narzędzie do jego kursu (Moduły 1 i 2).`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> poświęcona temu dziecku — niech poczuje, że dostrzegasz coś konkretnego, a nie słyszy ogólnych pochwał.`},
     {ic:'🏆', html:`<strong>Wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Jeśli na tej lekcji awaria się powtórzy, zgłoś ją natychmiast</strong> przez <strong>bota EU Request from Tutors</strong> — nie pod koniec dnia.</p>`)}
  `},
  {t:'📮 Zgłoś tego samego dnia i znaj jedno bezpieczne zdanie', html:`
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem tego, co widzisz: daty, co nie zadziałało, komunikat o błędzie lub baner, co próbowano zrobić i zrzut ekranu',
     'Jeśli je znasz, dodaj dokładne słowa rodziny, słowo w słowo',
     'Tego samego dnia poinformuj swojego lidera zespołu — to też dobry moment, żeby zapytać, czy dodatkowa lekcja ma sens',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, nigdy nie rozmawiaj o kwotach i nigdy nie obwiniaj platformy'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze jest bezpieczne:</strong> <em>„Dział Obsługi Klienta pomoże Państwu w tej sprawie”.</em> Na tym kończy się twoja część rozmowy.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Nawet jeśli wniosek zostanie wycofany albo dziecko przejdzie do innej grupy, w kolejnych tygodniach nadal dbaj o techniczną stronę jego lekcji: dołączaj wcześniej, sprawdzaj swój sprzęt i pytaj, czy wszystko działa. Odzyskanie rodziny, które trwa jedną lekcję, a potem po cichu wraca do starej rutyny, często się nie utrzymuje.</p></div>
  `}
 ],
 ix:{
  title:'Twoje, do zgłoszenia i nie twoje',
  instr:'Przyporządkuj każdą sytuację i wybierz najlepsze działanie. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Czyja to część?', card:`Awaria Classroom zabrała połowę wczorajszej lekcji.`, zones:[{label:'✅ W pełni moja', fb:'Nie do końca — samej awarii nie naprawisz. Do ciebie należy dostosowanie następnej lekcji i zgłoszenie.'},{label:'🔁 Moja do dostosowania i zgłoszenia', fb:'Zgadza się — dostosowujesz następną lekcję, żeby nadrobić najważniejsze treści, i zgłaszasz to tego samego dnia.'},{label:'🚫 Poza moją kontrolą', fb:'Nie całkiem — naprawa awarii nie należy do ciebie, ale dostosowanie następnej lekcji i zgłoszenie już tak.'}], correctZone:1},
   {type:'sort', prompt:'Czyja to część?', card:`Zatwierdzenie dla rodziny dodatkowej lekcji po tej straconej.`, zones:[{label:'✅ W pełni moja', fb:'Nie do końca — możesz o nią poprosić, ale nie zatwierdzasz jej ani jej nie proponujesz.'},{label:'🔁 Moja do dostosowania i zgłoszenia', fb:'Nie całkiem — twoja część to zgłoszenie i prośba do lidera zespołu; zatwierdzenie nie należy do ciebie.'},{label:'🚫 Poza moją kontrolą', fb:'Zgadza się — zatwierdza ją twój lider zespołu. Twoja część to zgłoszenie straconej lekcji i prośba o dodatkową tego samego dnia.'}], correctZone:2},
   {type:'choice', prompt:`Rodzic pisze: „Już poprosiliśmy o zwrot, platforma nigdy nie działała”. Co robisz?`, opts:[`Wyjaśniasz, że platforma działa dobrze, a winne było pewnie ich połączenie`,`Odpowiadasz: „Dział Obsługi Klienta pomoże Państwu w tej sprawie”, zostawiasz w BO komentarz z tym, co widzisz, i dokładnymi słowami rodzica, a tego samego dnia informujesz lidera zespołu`,`Obiecujesz, że na następnej lekcji wszystko zadziała i zwrot nie jest potrzebny`], correct:1, fb:`Nie kłócisz się, niczego nie obiecujesz i nie rozmawiasz o wniosku. Używasz bezpiecznego zdania i tego samego dnia przekazujesz zespołowi szczegóły.`},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to dobre zdanie do rodziny?', card:`„To wina platformy, u nas też to się ciągle zdarza”.`, zones:[{label:'💎 Skarb', fb:'Nie do końca — obwinianie platformy podkopuje zaufanie i niczego nie rozwiązuje.'},{label:'🗑️ Śmieć', fb:'Zgadza się — nigdy nie obwiniaj platformy. Powiedz, że już wyjaśniasz sprawę ze swoim zespołem.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Moduł 1', emoji:'🧰', color:'#7EA8FF', art:'clock', learn:[['⏱️','15 minut przed każdą lekcją'],['🩺','Co robić, gdy zawodzi dostęp'],['💻','Czy urządzenie pasuje do kursu?'],['📮','Komu powiedzieć i co powiedzieć']],
 eyebrow:'Moduł 1 z 4',
 title:'Przed lekcją',
 desc:'15 minut przed każdą lekcją, problemy z dostępem, zapisem, harmonogramem i linkiem oraz jak sprawdzić, czy urządzenie ucznia nadaje się do jego kursu.',
 obj:'Wychwycić i zgłosić problemy z dostępem, zanim rodzina straci lekcję.',
 sections:[
  {t:'⏱️ 15 minut przed lekcją', html:`
   <div class="card"><p>Większość problemów z dostępem widać <strong>jeszcze przed</strong> rozpoczęciem lekcji. Te 15 minut to twoje najlepsze zabezpieczenie.</p></div>
   ${stepper([
     {ic:'🌐', title:'Otwórz lekcję w Chrome na komputerze', html:`<p>Używaj <strong>aktualnej wersji Google Chrome na komputerze</strong>. To jedyna w pełni kompatybilna przeglądarka; Safari i inne nie są w pełni kompatybilne.</p>`},
     {ic:'🧹', title:'Zamknij inne aplikacje', html:`<p>Classroom zwalnia, gdy działają inne programy. Zamknij wszystko, czego nie użyjesz na lekcji.</p>`},
     {ic:'🎙️', title:'Sprawdź mikrofon i kamerę', html:`<p>Jeśli przeglądarka nie poprosiła o uprawnienia, włącz je ręcznie: ikona po lewej stronie adresu URL → Kamera i Mikrofon ustawione na „Zawsze zezwalaj”.</p>`},
     {ic:'📋', title:'Sprawdź grupę i link w BO', html:`<p>Sprawdź grupę, listę uczniów i to, czy link do lekcji działa. Zwróć uwagę na <strong>ostrzeżenia na ekranie przed dołączeniem</strong> (na przykład o nieobsługiwanych wymaganiach systemowych).</p>`},
     {ic:'👋', title:'Na pierwszej lekcji nowego ucznia dołącz wcześniej', html:`<p>Dołącz wcześniej i czekaj. Jeśli uczeń nie dołączy <strong>w ciągu 5 minut od rozpoczęcia</strong>, zgłoś to; nie czekaj do końca lekcji.</p>`}
   ])}
   ${co('co-idea','📶',`<p><strong>Wskazówka od nauczycieli mentorów:</strong> Classroom potrzebuje dobrego połączenia. Przypominaj uczniom (i ich rodzinom), żeby zamykali nieużywane aplikacje i upewnili się, że nikt inny w domu nie obciąża mocno Wi-Fi w czasie lekcji.</p>`)}
   ${doavoid(
     ['Dołącz 15 minut wcześniej i wszystko sprawdź','Używaj aktualnego Chrome na komputerze, z zamkniętymi innymi aplikacjami','Przed każdą lekcją sprawdź w BO grupę i link','Od razu zgłoś, jeśli nowy uczeń się nie pojawi'],
     ['Otwieranie lekcji w ostatniej chwili','Prowadzenie lekcji w Safari lub innej przeglądarce','Czekanie do końca lekcji z informacją, że ktoś nie mógł wejść','Zakładanie, że „w końcu dołączy”']
   )}
  `},
  {t:'🩺 Objawy przed lekcją', html:`
   <div class="card"><p>Kliknij każdy objaw. Zobaczysz, <strong>co robisz</strong>, <strong>co możesz powiedzieć</strong> i <strong>gdzie to zgłosić</strong>. Wszystkie kontakty do wsparcia znajdziesz w Module 4.</p></div>
   ${symCards([
     {ic:'🔗', title:`Link do lekcji nie działa lub go brakuje`,
      do:`Odśwież BO i sprawdź link na stronie grupy. Jeśli nadal nie działa lub go brakuje, zgłoś to od razu, żeby zespół dydaktyczny mógł to naprawić przed rozpoczęciem lekcji.`,
      say:`<em>„Sprawdzam link do lekcji z moim zespołem, za kilka minut dam Państwu znać”.</em>`,
      rep:`Bot EU Request from Tutors + komentarz w BO.`},
     {ic:'🚪', title:`Nie pojawia się przycisk dołączenia`,
      do:`Odśwież stronę, sprawdź, czy używasz Chrome, i potwierdź w BO, że uczeń jest w grupie. Jeśli nic się nie zmieni, zgłoś to z linkami do grupy i ucznia w BO.`,
      say:`<em>„Sprawdzam dostęp z moim zespołem i napiszę do Państwa, gdy tylko będę coś wiedzieć”.</em>`,
      rep:`Bot EU Request from Tutors + komentarz w BO.`},
     {ic:'📋', title:`„Nie jestem zapisany”`,
      see:`Rodzina mówi, że dziecko nie widnieje jako zapisane.`,
      do:`<strong>Nie potwierdzaj ani nie zaprzeczaj zapisu.</strong> Sprawdź to w BO i poinformuj lidera zespołu oraz Dział Obsługi Klienta.`,
      say:`<em>„Sprawdzam Państwa dostęp z moim zespołem”.</em>`,
      rep:`Lider zespołu + Dział Obsługi Klienta + komentarz w BO.`,
      avoid:`Mówienie rodzinie: <em>„syn nie jest zapisany”</em>.`},
     {ic:'🕒', title:`Termin nie jest tym, o który prosiła rodzina`,
      see:`Lekcja jest o innej godzinie albo przyszło powiadomienie z inną datą rozpoczęcia.`,
      do:`Niczego nie zmieniaj samodzielnie — nauczyciele nie mogą przekładać lekcji. Tego samego dnia poinformuj lidera zespołu i Dział Obsługi Klienta.`,
      say:`Przyznaj, że to niedogodność, nie tłumacząc, dlaczego tak się stało, i nie obiecując zmiany: <em>„Rozumiem, że to niewygodne. Przekazałem/-am już to mojemu zespołowi, żeby mógł się z Państwem skontaktować”.</em>`,
      rep:`Lider zespołu + Dział Obsługi Klienta + komentarz w BO.`},
     {ic:'🎟️', title:`Brakujące lekcje na saldzie lub niesłusznie pobrana lekcja`,
      see:`Rodzina mówi, że liczba lekcji się nie zgadza albo że odjęto lekcję, która się nie odbyła.`,
      do:`Zapisz dokładnie, co mówi rodzina, i tego samego dnia przekaż to liderowi zespołu i Działowi Obsługi Klienta — sprawę sprawdza Dział Operacyjny.`,
      say:`<em>„Dział Obsługi Klienta pomoże Państwu w tej sprawie”.</em>`,
      rep:`Lider zespołu + Dział Obsługi Klienta + komentarz w BO.`,
      avoid:`Wyjaśnianie lub obiecywanie czegokolwiek w sprawie salda lekcji.`},
     {ic:'✉️', title:`Rodzina nie dostała linku ani danych logowania`,
      do:`<strong>Masz je w BO.</strong> W profilu ucznia znajdziesz link do logowania oraz login i hasło. Wyślij je rodzinie sam/-a, od razu. Jeśli ich brakuje albo nie działają, zgłoś to.`,
      say:`<em>„Przesyłam Państwu dane dostępowe. Proszę je wypróbować i dać mi znać, jeśli coś nie zadziała”.</em>`,
      rep:`Tylko jeśli danych brakuje w BO lub nie działają: lider zespołu + Dział Obsługi Klienta + komentarz w BO.`,
      avoid:`Wymyślanie linków, które nie pochodzą z BO.`}
   ])}
   ${co('co-warn','🔗',`<p><strong>Alternatywny link do wideorozmowy, gdy ktoś nie może wejść?</strong> Tylko wtedy, gdy problem z Classroom lub z dostępem zagraża lekcji — zawsze z nagraniem i zgłoszeniem do lidera zespołu tego samego dnia (Moduł 2). Wysyłanie alternatywnych linków lekcja po lekcji ukrywa problem: nikt go nie naprawia, bo nikt się o nim nie dowiaduje.</p>`)}
  `},
  {t:'💻 Przed 1. lekcją: czy urządzenie się nadaje?', html:`
   <div class="card"><p>Przypadki zwrotów z powodu urządzenia, które sobie nie radzi, zwykle wychodzą na jaw <strong>na pierwszej lekcji</strong>. Każdy kurs potrzebuje czegoś innego:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Łatwy', desc:'Funtech · Python 1 / Python Pro', note:'Wystarczy Chrome. <strong>Zwykłe sprawdzenie przed lekcją.</strong>'},
     {ic:'🟡', title:'Do sprawdzenia', desc:'Digital Creativity · Roblox · Minecraft', note:'Potrzebują konkretnych narzędzi, instalacji, konta lub odpowiedniego ekranu. <strong>Potwierdź urządzenie przed 1. lekcją.</strong>'},
     {ic:'🔴', title:'Wymagający', desc:'3D Modelling · Unity', note:'8 GB RAM, konkretny system i sprzęt. <strong>Potwierdź urządzenie przed 1. lekcją.</strong>'}
   ],3)}   ${accItem('📋 Zobacz wymagania poszczególnych kursów', `
    <p><strong>Ogólnie:</strong> aktualny Chrome · co najmniej 4 GB RAM (8 GB dla Blendera lub Unity) · 10 Mb/s, najlepiej po kablu · 5 GB wolnego miejsca. <strong>Nie używaj Safari</strong> (na Macu ma znane problemy z platformą).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Kurs</th><th>Wymagania</th><th>Poziom</th></tr>
     <tr><td>Funtech</td><td>Tylko Chrome. Nic nie trzeba instalować.</td><td>🟢 Łatwy</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + konto Google (Google Colab).</td><td>🟢 Łatwy</td></tr>
     <tr><td>Digital Creativity</td><td>Chrome. Kilka narzędzi online (Canva i inne); zamienniki każdego narzędzia są w wiki / notatkach dla nauczyciela.</td><td>🟡 Do sprawdzenia</td></tr>
     <tr><td>Roblox</td><td>Windows lub Mac (bez tabletu, bez Linuksa). 4 GB. <strong>Zainstaluj Roblox Studio przed 1. lekcją.</strong></td><td>🟡 Do sprawdzenia</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac lub Linux. Zalecana Java Edition. 4 GB. Wymagane konto Minecraft.</td><td>🟡 Do sprawdzenia</td></tr>
     <tr><td>3D Modelling</td><td>Blender. 8 GB. Mysz z kółkiem. Zalecana dedykowana karta graficzna. Windows lub Mac.</td><td>🔴 Wymagający</td></tr>
     <tr><td>Unity</td><td>8 GB. 10 GB wolnego miejsca. Windows lub Mac. Bez Chromebooka.</td><td>🔴 Wymagający</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>Zasada:</strong> jeśli widzisz w BO, że uczeń ma kurs <strong>🟡 Do sprawdzenia</strong> lub <strong>🔴 Wymagający</strong>, potwierdź urządzenie przed 1. lekcją, wiadomością zatwierdzoną przez lidera zespołu.</p>`)}
   ${co('co-danger','💻',`<p><strong>Jeśli komputer nie obsłuży kursu, kurs nie powinien był zostać tak sprzedany — i to nie ty masz to naprawić.</strong> Zgłoś to liderowi zespołu; zespoły dydaktyczny i sprzedażowy wspólnie decydują, jak i gdzie uczeń będzie kontynuować naukę. Nigdy sam/-a nie mów rodzinie, żeby kupiła nowy komputer albo zmieniła kurs. W międzyczasie utrzymuj wartość lekcji dzięki obejściom z Modułu 2.</p>`)}
  `}
 ],
 ix:{
  title:'Zanim zacznie się lekcja',
  instr:'Wybierz pierwsze działanie i to, co powiesz. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Jakie jest twoje pierwsze działanie?', card:`Lekcja zaczyna się za 10 minut, a uczeń mówi, że nie pojawia się przycisk dołączenia.`, zones:[{label:'🔁 Odśwież, sprawdź Chrome i potwierdź w BO, że uczeń jest w grupie', fb:'Zgadza się — szybka pierwsza pomoc. Jeśli nic się nie zmieni, zgłaszasz to z linkami do grupy i ucznia w BO.'},{label:'🔗 Wyślij mu link do Zooma na tę lekcję', fb:'Nie do końca — alternatywna platforma jest tylko na sytuacje, w których lekcja jest naprawdę zagrożona. Najpierw pierwsza pomoc.'},{label:'⏳ Poczekaj, czy dołączy później', fb:'Nie do końca — czekanie w milczeniu oznacza straconą lekcję. Działaj teraz.'}], correctZone:0},
   {type:'sort', prompt:'Jakie jest twoje pierwsze działanie?', card:`Uczeń jest na kursie Unity, a BO pokazuje, że jego 1. lekcja jest w czwartek.`, zones:[{label:'⏳ Nic — zobaczymy na 1. lekcji', fb:'Nie do końca — w Unity problemy z urządzeniem zwykle wychodzą na jaw na pierwszej lekcji, kiedy jest już za późno.'},{label:'💻 Potwierdź urządzenie przed 1. lekcją, wiadomością zatwierdzoną przez lidera zespołu', fb:'Zgadza się — Unity to wymagający kurs. Wcześniejsze potwierdzenie urządzenia chroni przed utratą pierwszej lekcji.'},{label:'📝 Poproś rodzinę o zakup lepszego komputera', fb:'Nie do końca — nie prosisz o zakupy. Potwierdzasz urządzenie, a jeśli nie spełnia wymagań, zgłaszasz to.'}], correctZone:1},
   {type:'choice', prompt:`Mama pisze: „Mój syn nie widnieje na lekcji jako zapisany”. Jak odpowiadasz?`, opts:[`„Syn nie jest zapisany, musi Pani porozmawiać z działem sprzedaży”.`,`„Tak, jest zapisany, to pewnie błąd po Pani stronie”.`,`„Sprawdzam Państwa dostęp z moim zespołem”.`], correct:2, fb:`Nie potwierdzaj ani nie zaprzeczaj zapisu. Sprawdzasz to w BO i informujesz lidera zespołu oraz Dział Obsługi Klienta.`},
   {type:'choice', prompt:`Rodzina mówi, że lekcja wypadła o innej godzinie niż ta, o którą prosiła. Co robisz?`, opts:[`Przyznajesz, że to niedogodność, nie obiecując zmiany, i tego samego dnia informujesz lidera zespołu`,`Proponujesz, że sam/-a przeniesiesz lekcję na dowolną godzinę, która im pasuje`,`Wyjaśniasz, że harmonogramu nie da się już zmienić`], correct:0, fb:`Nie zmieniasz harmonogramu, ale też nie wykluczasz zmiany. Przyznajesz, że to niedogodność, i tego samego dnia informujesz zespół.`},
   {type:'choice', prompt:`Rodzina mówi, że z jej pakietu odjęto lekcję, która nigdy się nie odbyła. Co robisz?`, opts:[`Mówisz, że oddasz im tę lekcję`,`Zapisujesz, co powiedzieli, odpowiadasz: „Dział Obsługi Klienta pomoże Państwu w tej sprawie” i tego samego dnia przekazujesz to liderowi zespołu i Działowi Obsługi Klienta`,`Wyjaśniasz, jak działa odliczanie lekcji`], correct:1, fb:`Saldo i odliczenia lekcji sprawdza Dział Operacyjny. Niczego nie obiecujesz ani nie wyjaśniasz — tego samego dnia przekazujesz dokładnie to, co powiedziała rodzina.`},
   {type:'choice', prompt:`Na 1. lekcji kursu 3D Modelling widzisz, że komputer ucznia ma 4 GB RAM i Blender się nie uruchamia. Co jest właściwe?`, opts:[`Zgłosić to liderowi zespołu — zespoły dydaktyczny i sprzedażowy zdecydują, jak uczeń będzie kontynuować naukę — a w międzyczasie utrzymać wartość tej lekcji`,`Powiedzieć rodzinie, że ten kurs nie jest dla nich, i zaproponować inny`,`Poprosić rodzinę o ulepszenie komputera przed następną lekcją`], correct:0, fb:`Kurs nie powinien był zostać sprzedany dla komputera, który go nie obsłuży. To nie ty masz to rozwiązać: zgłaszasz to, a decyzję podejmują zespoły dydaktyczny i sprzedażowy.`}
  ]
 }
},
{id:'during', numLabel:'Moduł 2', emoji:'🛠️', color:'#FFB44D', art:'micCam', learn:[['🧘','Najpierw spokój'],['🔧','Sposoby na Classroom od nauczycieli mentorów'],['🧩','Obejścia dla każdego kursu'],['🆘','Kiedy można użyć Zooma']],
 eyebrow:'Moduł 2 z 4',
 title:'W trakcie lekcji',
 desc:'Pierwszy ruch jest emocjonalny, zasada 10 minut, sposoby na Classroom od nauczycieli mentorów, obejścia dla każdego kursu, awarie, które dotykają kilku uczniów, i kiedy można użyć alternatywnej platformy, takiej jak Zoom.',
 obj:'Rozwiązać w 10 minut to, co da się rozwiązać, utrzymać wartość lekcji dla każdego ucznia i nie stracić całej lekcji przez problem techniczny.',
 sections:[
  {t:'🧘 Pierwszy ruch jest emocjonalny', html:`
   <div class="card"><p>Zanim cokolwiek ruszysz, <strong>zachowaj spokój i powiedz na głos, że to normalne</strong>: <em>„Czasem tak się zdarza, naprawimy to razem”.</em> Spokojny dorosły daje dziecku sygnał, że wszystko jest w porządku, a grupa bierze z ciebie przykład. Dopiero potem naprawiaj.</p></div>
  `},
  {t:'⏱️ Zasada 10 minut', html:`
   <div class="card"><p>Jeśli nie uda ci się tego rozwiązać w <strong>10 minut</strong>, przestań próbować w milczeniu.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Poinformuj: ucznia, grupę i w razie potrzeby swój zespół'},
     {ic:'📝', label:'Udokumentuj: co nie działa, komunikat, zrzut ekranu, co próbowano zrobić'},
     {ic:'📮', label:'Przekaż dalej: zgłoś to przez bota EU Request from Tutors'}
   ])}
  `},
  {t:'🔧 Sposoby na Classroom, które działają — od nauczycieli mentorów', html:`
   <div class="card"><p>Nauczyciele, którzy prowadzą lekcje codziennie, są zgodni: <strong>większość problemów z Classroom rozwiązuje odświeżenie strony i odciążenie sprzętu.</strong> Wypróbuj te kroki w tej kolejności:</p></div>
   ${stepper([
     {ic:'🔄', title:'Odśwież stronę', html:`<p>Albo poproś o to ucznia. To rozwiązuje większość przypadków czarnego ekranu, zamrożonego obrazu i udostępniania, które nie chce się uruchomić.</p>`},
     {ic:'🧹', title:'Zamknij inne aplikacje', html:`<p>Swoje i uczniów. Classroom zwalnia, gdy działają inne programy.</p>`},
     {ic:'🚪', title:'Dołącz ponownie do lekcji', html:`<p>Jeśli przestanie działać twoja kamera, zamknij przeglądarkę, odśwież i dołącz ponownie — czasem trzeba spróbować dwa razy.</p>`},
     {ic:'🎚️', title:'Sprawdź wybrane urządzenie', html:`<p>Mikrofon może wyglądać na „włączony”, a mimo to być zablokowany: w ustawieniach sprawdź, czy wybrano właściwy mikrofon i kamerę.</p>`},
     {ic:'📶', title:'Odciąż połączenie', html:`<p>Poproś uczniów o wyłączenie kamer i upewnienie się, że nikt inny w domu nie korzysta z Wi-Fi.</p>`},
     {ic:'🌐', title:'W ostateczności: inna przeglądarka', html:`<p>Ponowne dołączenie z innej przeglądarki czasem pozwala dokończyć lekcję. Zgłoś to potem: obsługiwaną przeglądarką pozostaje Chrome.</p>`}
   ])}
   ${iconGrid([
     {ic:'👥', html:`<strong>Duże grupy (około 15 uczniów).</strong> Lekcja może się zrestartować, zawiesić, zamrozić albo wyłączyć wszystkim kamery. Poproś uczniów, żeby od początku mieli wyłączone kamery, i zgłoś to, jeśli sytuacja się powtarza.`},
     {ic:'📡', html:`<strong>Udostępnianie ekranu ciągle się zatrzymuje.</strong> Zwykle winne jest połączenie. Zamknij aplikacje, zapytaj o inne urządzenia korzystające z Wi-Fi i udostępnij ekran ponownie.`},
     {ic:'🔄', html:`<strong>Uczniowie nie widzą twojego ekranu i nic nie działa.</strong> Poproś jednego ucznia, żeby to on udostępnił swój ekran grupie — zwłaszcza na lekcjach grupowych często działa to lepiej.`},
     {ic:'✏️', html:`<strong>Adnotacje nie działają</strong> (nie da się rysować, rysunki się nie pojawiają albo pojawiają się w złym miejscu). Wyłącz adnotacje, udostępnij ekran ponownie i włącz je z powrotem.`}
   ])}
  `},
  {t:'⬛ Czarny ekran przy udostępnianiu — obejrzyj procedurę', html:`
   <div class="card"><p>To procedura, którą uczeń i/lub nauczyciel powinni wykonać, gdy podczas udostępniania ekran robi się czarny.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Czarny ekran podczas udostępniania</div><div class="vslot-meta">Krok po kroku · 19 sekund</div></div></div>
    <div class="vslot-frame" style="padding:0"><video src="Media/black_screen.mkv" controls preload="metadata" playsinline style="display:block;width:100%;max-height:420px;background:#000"></video></div>
    <div class="vslot-brief">Jeśli po wykonaniu tych kroków ekran nadal jest czarny, odśwież stronę (ty lub uczeń). Jeśli to się powtarza, zgłoś to ze zrzutem ekranu.</div></div>
  `},
  {t:'🖥️ Classroom — więcej szybkich rozwiązań', html:`
   <div class="card"><p>Pełne, aktualne instrukcje znajdziesz w przewodniku zespołu Classroom <strong>„Classroom Issues Quick Fixes”</strong>. Najczęstsze przypadki:</p></div>
   ${accItem('▬ Czarny prostokąt zamiast twojego ekranu', `<p>Zatrzymaj i wznów udostępnianie. Niektórym pomaga zminimalizowanie i przywrócenie okna.</p>`)}
   ${accItem('🌫️ Udostępniony ekran jest rozmazany', `<p>Udostępnij ponownie i sprawdź połączenie.</p>`)}
   ${accItem('🙈 Uczeń nie widzi twojego udostępnionego ekranu', `<p>Jeśli korzysta z telefonu, powinien włączyć „wersję na komputer”. Sprawdź, czy używa Chrome. Jeśli nic nie działa, poproś innego ucznia, żeby udostępnił grupie swój ekran.</p>`)}
   ${accItem('📱 Uczeń nie może udostępnić swojego ekranu', `<p>Z przeglądarki mobilnej (iPad, tablet lub telefon) <strong>nie jest to możliwe</strong>. Potrzebny jest komputer.</p>`)}
   ${accItem('🧾 Tablica nadal jest widoczna po jej zamknięciu', `<p>Poproś o wyjście z lekcji i ponowne dołączenie; zgłoś to z linkiem do grupy w BO.</p>`)}
   ${accItem('🚪 Pokoje grupowe zgłaszają błędy', `<p>Zamknij wszystkie pokoje i utwórz je od nowa. Jeśli w pokojach nie działa udostępnianie ekranu, zgłoś to.</p>`)}
   ${accItem('📄 Strona z zadaniami wyświetla się na czarno', `<p>Wyłącz i wyczyść adnotacje, zatrzymaj udostępnianie ekranu i kliknij prawym przyciskiem → „Załaduj ponownie ramkę”. Jeśli ekran ucznia zrobił się czarny, bo był na karcie z zadaniami, zatrzymaj udostępnianie i udostępnij ponownie.</p>`)}
   ${accItem('⚠️ Uczeń widzi banery z błędami', `<p>Poproś go, żeby <strong>przeczytał komunikat na głos</strong>, i wyjaśnij, co zrobić. <strong>Zanotuj</strong>, czy był baner, jaki był komunikat, jakie były ostrzeżenia przed dołączeniem i jaki to typ błędu. Zgłoś to ze zrzutem ekranu.</p>`)}
   ${accItem('🖼️ Kamera nie działa z wirtualnym tłem', `<p>Włącz opcję „Używaj akceleracji grafiki, gdy jest dostępna” w <em>chrome://settings/system</em>.</p>`)}
   ${accItem('🪟 Tryb obrazu w obrazie', `<p>Pomaga: kliknij prawym przyciskiem na udostępnionym ekranie → Obraz w obrazie.</p>`)}
  `},
  {t:'🎙️ Gdy mikrofon lub kamera ucznia nie działa', html:`
   ${stepFlow([
     {ic:'🔁', label:'Poproś ucznia o ponowne dołączenie do lekcji'},
     {ic:'🎚️', label:'Sprawdź, czy wybrano właściwy mikrofon i kamerę'},
     {ic:'📮', label:'Nadal nie działa: zgłoś to i poproś wsparcie techniczne o test w ciągu tygodnia'}
   ])}
   ${co('co-ok','💬',`<p><strong>W międzyczasie uczeń dalej się uczy.</strong> Może uczestniczyć bez kamery, a wyjątkowo nawet bez mikrofonu: komunikujecie się przez czat i reakcje. Nikt nie zostaje wykluczony z lekcji z powodu urządzenia.</p>`)}
   ${co('co-danger','🔇',`<p><strong>Jeśli wyciszysz ucznia, pamiętaj, żeby go potem odciszyć.</strong> Dziecko, które niezauważenie zostało wyciszone, może kosztować nas rodzinę.</p>`)}
  `},
  {t:'🧩 Gdy nie działa narzędzie kursu — obejścia dla poszczególnych kursów', html:`
   <div class="card"><p>Autorzy kursów podzielili się tym, co możesz zrobić, gdy uczeń nie może otworzyć programu kursowego albo jego komputer sobie z nim nie radzi. Kliknij swój kurs:</p></div>
   ${tabsBlock([
     {ic:'🎮', title:'Roblox, Unity, każda platforma', html:`${symCards([
       {ic:'🔑', title:`Uczeń nie może się zalogować lub program się nie otwiera`,
        do:`<ul><li><strong>Uczeń śledzi twoją demonstrację:</strong> patrzy na twój ekran i ustnie odpowiada na pytania o to, co się dzieje — nadal bierze udział w lekcji.</li><li><strong>Po lekcji</strong> przejdź z nim przez instalację lub logowanie.</li><li><strong>Nadal nierozwiązane?</strong> Poproś o wsparcie techniczne przez <strong>bota EU Request from Tutors</strong>.</li></ul>`,
        avoid:`Spędzanie całej lekcji na instalacji, podczas gdy reszta grupy czeka.`},
       {ic:'🧱', title:`Roblox Studio nie chce się pobrać ani zainstalować`,
        do:`Sprawdź system operacyjny i wolne miejsce (zob. wymagania w Module 1). Dalej tak samo jak wyżej: teraz demonstracja, naprawa po lekcji, w razie potrzeby wsparcie techniczne.`},
       {ic:'🐌', title:`Unity zawiesza się w trakcie lekcji`,
        do:`Poproś o zamknięcie innych kart i aplikacji. Unity potrzebuje 8 GB RAM. Jeśli problem nie ustępuje, zgłoś go, podając model urządzenia i system.`}
     ])}`},
     {ic:'🧊', title:'3D Modelling', html:`${symCards([
       {ic:'⬇️', title:`Blender nie uruchamia się na komputerze ucznia`,
        do:`<ul><li><strong>Spróbuj starszej wersji Blendera,</strong> pobranej z oficjalnej strony Blendera.</li><li><strong>Jeśli nadal nie działa,</strong> komputer nie obsłuży kursu: zgłoś to liderowi zespołu. Zespoły dydaktyczny i sprzedażowy zdecydują, jak uczeń będzie kontynuować naukę.</li></ul>`,
        avoid:`Obiecywanie zmiany kursu — ta decyzja nie należy do ciebie.`}
     ])}`},
     {ic:'🎨', title:'Digital Creativity', html:`${symCards([
       {ic:'📚', title:`Jedno z narzędzi online nie działa`,
        do:`<ul><li><strong>Sprawdź zamienniki</strong> w wiki / notatkach dla nauczyciela — wiele narzędzi ma tam podaną alternatywę.</li><li><strong>Brak zamiennika?</strong> Znajdź samodzielnie podobny serwis i prześlij go przez formularz opinii, żeby trafił na listę zamienników dla wszystkich.</li></ul>`},
       {ic:'🖌️', title:`Krita się nie otwiera`,
        do:`Wystarczy dowolny program do rysowania online — na przykład <em>Kleki</em>.`}
     ])}`},
     {ic:'💻', title:'Za słaby komputer', html:`${symCards([
       {ic:'🐢', title:`Komputer zupełnie nie spełnia wymagań kursu`,
        see:`Aplikacja się nie otwiera, zawiesza lub zamyka albo ekran przed dołączeniem pokazuje ostrzeżenie o wymaganiach.`,
        do:`<ul><li><strong>Utrzymaj wartość lekcji:</strong> demonstracja na twoim udostępnionym ekranie, przykład krok po kroku, odpowiedzi ustne.</li><li><strong>Zgłoś to liderowi zespołu.</strong> Kurs nie powinien był zostać sprzedany na ten komputer; zespoły dydaktyczny i sprzedażowy zdecydują, jak i gdzie uczeń będzie kontynuować naukę.</li></ul>`,
        avoid:`Wykonywanie zadania za ucznia, proszenie rodziny o zakupy lub obiecywanie zmiany kursu.`}
     ])}`}
   ])}
  `},
  {t:'👥 Gdy problem ma kilku uczniów naraz albo lekcja przepada', html:`
   ${doavoid(
     ['Oceń sytuację: jeden uczeń czy wielu? Jeśli wielu, to wina platformy — <strong>zgłoś to od razu</strong>, z linkiem do grupy w BO','Prowadź lekcję dalej z tymi, którzy są połączeni, a pozostałych poproś o śledzenie jej na czacie','Jeśli lekcja przepadła, wyślij nagranie i przygotuj plan nadrobienia (Moduł 3)','Pokaż demonstrację, udostępnij plik projektu i zaplanuj sesję nadrabiającą'],
     ['Spędzanie całej lekcji na pomaganiu uczniom po kolei, podczas gdy reszta się nudzi','Wykonywanie zadania za ucznia, gdy zawodzi technologia','Obiecywanie rodzinie dodatkowej lekcji','Samodzielne przekładanie lekcji']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Gdy problem techniczny zagraża lekcji</strong> — albo dwóm z rzędu — <strong>porozmawiaj z liderem zespołu tego samego dnia.</strong> Możesz poprosić o dodatkową lekcję; decyzję podejmuje lider zespołu. Nigdy sam/-a jej rodzinie nie obiecuj ani nie wykluczaj.</p>`)}
  `},
  {t:'🆘 Classroom nie działa: kiedy wolno użyć alternatywnej platformy', html:`
   <div class="card"><p><strong>Classroom zawsze jest na pierwszym miejscu.</strong> To docelowe narzędzie do prowadzenia lekcji, połączone ze wszystkim — z płatnościami, nagraniami i obecnością. Alternatywna platforma wideo (np. Zoom) jest <strong>dozwolona tylko wtedy, gdy problem z Classroom lub z dostępem zagraża lekcji</strong>.</p></div>
   ${numlist(['Używaj alternatywnej platformy wideo tylko wtedy, gdy lekcji nie da się kontynuować w Classroom','<strong>Nagraj całe zajęcia</strong> — nagranie jest dowodem, że lekcja się odbyła','Tego samego dnia poinformuj lidera zespołu, żeby lekcja mogła zostać oceniona i uwzględniona przy wynagrodzeniu','Zostaw komentarz w BO z wyjaśnieniem, co nie zadziałało w Classroom'])}
   ${co('co-warn','📝',`<p><strong>To wyjątek, nigdy rutyna.</strong> Lekcja przeniesiona poza Classroom bez nagrania i bez zgłoszenia tego samego dnia nie może zostać zaliczona.</p>`)}
  `}
 ],
 ix:{
  title:'Lekcja trwa dalej',
  instr:'W każdym przypadku wybierz pierwsze działanie. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Jakie jest pierwsze działanie?', card:`Gdy udostępniasz ekran, uczniowie widzą tylko czerń.`, zones:[{label:'🔁 Wykonaj procedurę na czarny ekran i w razie potrzeby odśwież stronę', fb:'Zgadza się — to procedura z filmu. Jeśli problem się powtarza, zgłaszasz go ze zrzutem ekranu.'},{label:'🆘 Od razu przenieś lekcję na Zooma', fb:'Nie do końca — alternatywna platforma to wyjątek. Najpierw rozwiązanie w Classroom.'},{label:'⏭️ Tłumacz dalej bez ekranu', fb:'Nie do końca — najpierw spróbuj rozwiązania; jeśli w 10 minut problem nie zniknie, zgłaszasz go.'}], correctZone:0},
   {type:'sort', prompt:'Jakie jest pierwsze działanie?', card:`Mikrofon ucznia wyświetla się jako włączony, ale nikt go nie słyszy.`, zones:[{label:'📮 Od razu zgłoś to do wsparcia technicznego', fb:'Nie do końca — najpierw spróbuj szybkich kroków: ponowne dołączenie i sprawdzenie wybranego mikrofonu.'},{label:'🔁 Poproś o ponowne dołączenie i sprawdzenie, czy wybrano właściwy mikrofon', fb:'Zgadza się — mikrofon może wyglądać na „włączony”, a mimo to być zablokowany. Jeśli nadal nie działa, uczeń korzysta z czatu, a ty to zgłaszasz.'},{label:'🔇 Powiedz mu, żeby tym razem tylko słuchał', fb:'Nie do końca — najpierw szybkie rozwiązania, a w międzyczasie uczeń może uczestniczyć przez czat i reakcje.'}], correctZone:1},
   {type:'sort', prompt:'Jakie jest pierwsze działanie?', card:`Uczeń na tablecie nie może udostępnić swojego ekranu.`, zones:[{label:'🔁 Poproś go, żeby spróbował jeszcze kilka razy', fb:'Nie do końca — udostępnianie ekranu z przeglądarki na tablecie nie jest możliwe.'},{label:'📝 Poproś go o zmianę przeglądarki na tablecie', fb:'Nie do końca — na telefonie ani tablecie nie jest to możliwe, niezależnie od przeglądarki.'},{label:'💻 Wyjaśnij, że do udostępnienia ekranu potrzebny jest komputer, i kontynuuj lekcję w inny sposób', fb:'Zgadza się — to znane ograniczenie. Dostosuj zadanie, a jeśli kurs tego wymaga, zgłoś to.'}], correctZone:2},
   {type:'choice', prompt:`Na lekcji Roblox uczeń nie może zalogować się do Roblox Studio. Co robisz w trakcie lekcji?`, opts:[`Spędzasz lekcję na pomaganiu mu w logowaniu, podczas gdy reszta grupy czeka`,`Pozwalasz mu śledzić twoją demonstrację i ustnie odpowiadać na pytania o to, co się dzieje; po lekcji pomagasz mu to naprawić i w razie potrzeby prosisz o wsparcie techniczne`,`Mówisz mu, żeby opuścił tę lekcję i wrócił, gdy wszystko będzie działać`], correct:1, fb:`Uczeń dalej się uczy, śledząc twoją demonstrację. Dostęp naprawiasz po lekcji, a jeśli nadal nie działa, prosisz o wsparcie techniczne.`},
   {type:'choice', prompt:`Na kursie Digital Creativity Krita nie otwiera się na komputerze ucznia. Jakie jest dobre obejście?`, opts:[`Użyć programu do rysowania online, np. Kleki`,`Zgłosić, że uczeń nie może uczestniczyć w kursie`,`Poprosić rodzinę o zakup tabletu graficznego`], correct:0, fb:`Wystarczy dowolny program do rysowania online. Sprawdź zamienniki w wiki / notatkach dla nauczyciela, a nowe proponuj przez formularz opinii.`},
   {type:'choice', prompt:`Po pięciu minutach trzech uczniów nie może wejść, a dwóch pozostałych czeka. Co robisz?`, opts:[`Pomagasz każdemu po kolei, aż wszyscy wejdą`,`Odwołujesz lekcję i informujesz rodziny`,`Od razu to zgłaszasz (to wina platformy), kontynuujesz z dwójką połączonych uczniów, a pozostałych prosisz o śledzenie lekcji na czacie`], correct:2, fb:`Jeśli problem ma kilka osób, to wina platformy: zgłoś to od razu. Prowadź lekcję dalej z tymi, którzy są połączeni, a potem przygotuj plan nadrobienia.`},
   {type:'choice', prompt:`Classroom nie działa nikomu i lekcja jest zagrożona. Co musisz zrobić?`, opts:[`Użyć alternatywnej platformy, nagrać całe zajęcia i tego samego dnia poinformować lidera zespołu, zostawiając komentarz w BO`,`Użyć jej i korzystać z niej także na kolejnych lekcjach, skoro działa lepiej`,`Użyć jej bez nagrywania, bo lekcja jest krótka`], correct:0, fb:`To wyjątek, nie rutyna: nagranie, zgłoszenie liderowi zespołu tego samego dnia i wyjaśnienie w BO. Bez tego lekcja nie może zostać zaliczona.`}
  ]
 }
},
{id:'after', numLabel:'Moduł 3', emoji:'🏠', color:'#B79DF2', art:'phoneDesk', learn:[['🔍','Dostrzec „nie może” ukryte za „nie robi”'],['📲','Znać ograniczenia telefonu i tabletu'],['📼','Nadrobić straconą lekcję'],['🔁','Zamknąć sprawę z rodziną']],
 eyebrow:'Moduł 3 z 4',
 title:'Po lekcji',
 desc:'Zadania domowe, które nie są oddawane, bo uczeń nie może się zalogować, platforma na telefonie lub tablecie, stracone lekcje i to, jak zamknąć sprawę z rodziną.',
 obj:'Zadbać o to, żeby problem techniczny nie zostawił rodziny bez zadania domowego ani bez odpowiedzi, i dostrzec go, zanim pomylisz go z „nieoddawaniem zadań”.',
 sections:[
  {t:'🔍 Kiedy uczeń nie oddaje zadań, może po prostu nie może', html:`
   <div class="card"><p>Zanim pomyślisz o braku motywacji, sprawdź, czy uczeń <strong>w ogóle może wejść</strong>, żeby zrobić zadanie domowe. Niektóre rodziny skarżyły się, że nie mogły otworzyć zadania domowego i nikt nie zaproponował im żadnego rozwiązania.</p></div>
   ${co('co-idea','❓',`<p><strong>Zapytaj, zanim założysz:</strong> <em>„Udało ci się otworzyć zadanie domowe? Na jakim urządzeniu próbowałeś/-aś?”</em></p>`)}
  `},
  {t:'🩺 Objawy po lekcji', html:`
   ${symCards([
     {ic:'🔒', title:`Uczeń nie może wejść na platformę, żeby zrobić zadanie domowe`,
      do:`Potwierdź przeglądarkę (Chrome na komputerze), urządzenie i dane logowania — znajdziesz je w BO i możesz wysłać ponownie. Jeśli nic się nie zmieni, zgłoś to z linkami do ucznia i grupy w BO i <strong>sprawdź sytuację po 24 godzinach</strong>.`,
      say:`<em>„Wyjaśniam to z moim zespołem i jutro napiszę do Państwa”.</em>`},
     {ic:'🧩', title:`Program kursowy nie otworzył się na lekcji`,
      do:`Po lekcji przejdź z uczniem przez instalację lub logowanie (i obejście dla jego kursu z Modułu 2). Jeśli nadal nie działa, poproś o wsparcie techniczne przez <strong>bota EU Request from Tutors</strong>.`},
     {ic:'🎙️', title:`Mikrofon lub kamera ucznia nie działały`,
      do:`Jeśli ponowne dołączenie i sprawdzenie urządzenia nie pomogły, zgłoś to i poproś wsparcie techniczne o przetestowanie sprzętu z uczniem w ciągu następnego tygodnia. Do tego czasu uczeń uczestniczy przez czat i reakcje.`},
     {ic:'📱', title:`Uczeń może wejść tylko z telefonu i źle się to wyświetla`,
      do:`Platforma jest zaprojektowana na komputery: uczeń powinien użyć „wersji na komputer” albo komputera. Nie obiecuj alternatywnego dostępu.`,
      say:`Wyjaśnij to ograniczenie ciepło: <em>„Niektóre elementy źle wyświetlają się na telefonie; na komputerze albo w wersji na komputer działa to dużo lepiej”.</em>`},
     {ic:'📲', title:`Platforma nie działa w pełni na telefonie lub tablecie`,
      do:`To <strong>znane ograniczenie</strong> (na przykład z telefonu nie da się udostępnić ekranu). Jeśli kurs tego wymaga, zgłoś to.`},
     {ic:'🗂️', title:`Zadanie domowe nie wyświetla się w zeszycie ani w panelu`,
      do:`Zgłoś to ze zrzutem ekranu.`},
     {ic:'📼', title:`Uczeń stracił lekcję przez awarię`,
      do:`Wyślij nagranie i najważniejsze treści, przygotuj plan nadrobienia i tego samego dnia porozmawiaj z liderem zespołu — możesz poprosić o dodatkową lekcję.`,
      tip:`<strong>Zanim napiszesz do rodziny, uzgodnij to z liderem zespołu.</strong>`}
   ])}
  `},
  {t:'🔁 Zamknij sprawę', html:`
   <div class="card"><p>Gdy problem zostanie rozwiązany, <strong>daj znać rodzinie</strong>. Poinformowany rodzic to rodzic, który zostaje.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 Wiadomość na zamknięcie sprawy, której możesz użyć</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>„Dzień dobry, [imię rodzica]. Piszę, żeby dać znać, że problem z dostępem, który miał(a) [uczeń], został już rozwiązany. Dziękuję za cierpliwość. Gdyby coś się powtórzyło, proszę do mnie napisać, a od razu się tym zajmiemy”.</em></p></div>
  `}
 ],
 ix:{
  title:'Nikt nie zostaje bez odpowiedzi',
  instr:'Wybierz najlepsze działanie lub przyporządkuj każdy przypadek. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'choice', prompt:`Rodzina mówi, że syn może wejść tylko z telefonu, a platforma źle się wyświetla. Co robisz?`, opts:[`Obiecujesz, że załatwisz im specjalny dostęp na telefon`,`Ciepło wyjaśniasz, że platforma jest zaprojektowana na komputery, proponujesz wersję na komputer lub komputer, a jeśli kurs tego wymaga, zgłaszasz to`,`Mówisz, że w ten sposób nie może kontynuować kursu`], correct:1, fb:`Ciepło wyjaśnij ograniczenie, zaproponuj to, co działa, i nie obiecuj alternatywnego dostępu.`},
   {type:'choice', prompt:`Uczeń mówi, że zadanie domowe nie pojawia się w jego panelu. Co robisz?`, opts:[`Zgłaszasz to ze zrzutem ekranu`,`Mówisz mu, żeby spróbował innego dnia`,`Oznaczasz zadanie jako nieoddane`], correct:0, fb:`Jeśli zadanie domowe się nie wyświetla, to problem techniczny: zgłoś go ze zrzutem ekranu.`},
   {type:'sort', prompt:'Rozwiązujesz to sam/-a czy zgłaszasz?', card:`Uczeń nie oddaje zadań domowych, a zapytany mówi, że nie może wejść na platformę, nawet z Chrome na komputerze.`, zones:[{label:'🧑‍🏫 Rozwiązuję to sam/-a', fb:'Nie do końca — podstawy (Chrome na komputerze) już sprawdzono. Teraz czas to zgłosić.'},{label:'📮 Zgłaszam to', fb:'Zgadza się — zgłaszasz to z linkami do ucznia i grupy w BO i sprawdzasz sytuację po 24 godzinach.'}], correctZone:1},
   {type:'choice', prompt:`Zgłosił(a)ś, że uczeń nie może wejść do zadania domowego. Kiedy sprawdzasz, co dalej?`, opts:[`W następnym tygodniu`,`Tylko jeśli rodzina znowu napisze`,`Po 24 godzinach`], correct:2, fb:`Sprawdzasz sytuację po 24 godzinach: dzięki temu rodzina nie zostaje bez odpowiedzi.`}
  ]
 }
},
{id:'report', numLabel:'Moduł 4', emoji:'📮', color:'#F58AC4', art:'report', learn:[['🆘','Gdzie szukać pomocy i z kim się kontaktować'],['🛣️','Wybierz właściwą ścieżkę'],['📅','Dodatkowe lekcje i zmiany terminu'],['🧾','Napisz kompletne zgłoszenie'],['💛','Odpowiadaj rodzinie na czas'],['🖥️','Przećwicz w symulacji BO']],
 eyebrow:'Moduł 4 z 4',
 title:'Zgłaszanie i przekazywanie dalej',
 desc:'Gdzie szukać pomocy i z kim się kontaktować w twoim regionie, kogo informować w zależności od problemu, dodatkowe lekcje i zmiany terminu, co zawiera dobre zgłoszenie, jak odpowiadać rodzinie na czas i symulacja BO, w której przećwiczysz zgłoszenie techniczne.',
 obj:'Wiedzieć, gdzie szukać pomocy, kogo poinformować, z jakimi szczegółami i w jakiej kolejności — i na czas informować rodzinę. Problem, którego nikt nie zgłosił, albo rodzina, której nikt nie odpowiedział, dla nikogo innego nie istnieje.',
 sections:[
  {t:'🆘 Gdzie szukać pomocy i z kim się kontaktować', html:`
   <div class="card"><p>Nie ma osobnego kanału wsparcia technicznego. Problemy zgłaszaj tutaj:</p>
   ${numlist(['<strong>Bot EU Request from Tutors</strong> — w przypadku problemów z BO lub Classroom, np. niedziałającego linku','<strong>Kanał kursu</strong> — w przypadku problemów z konkretnym kursem lub programem'])}</div>
   <div class="card" style="background:var(--surface2)"><h4>👥 Z kim się kontaktować</h4>
   <div class="tbl-wrap"><table>
    <tr><th>Co się stało</th><th>Kto</th></tr>
    <tr><td>Niedziałający link w BO lub Classroom, problem z Classroom</td><td>Bot EU Request from Tutors</td></tr>
    <tr><td>Problem z konkretnym kursem lub programem</td><td>Kanał kursu</td></tr>
    <tr><td>Brakujące lekcje na saldzie, błędny harmonogram, niesłusznie odjęta lekcja</td><td>Twój lider zespołu + Dział Operacyjny / Dział Obsługi Klienta: <strong>@Erika Ietro</strong>, <strong>@Katarzyna Traczyk</strong></td></tr>
    <tr><td>Dodatkowa lekcja albo lekcja, która nie może się odbyć</td><td>Twój lider zespołu</td></tr>
   </table></div></div>
  `},
  {t:'🛣️ Trzy ścieżki', html:`
   <div class="card"><p>W zależności od rodzaju problemu zgłoszenie trafia inną ścieżką:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Ścieżka</th><th>Kiedy</th><th>Gdzie</th></tr>
    <tr><td><strong>1. Awaria Classroom lub platformy</strong><br>(czarny ekran, dźwięk, tablica, pokoje, niedziałające linki)</td><td>Szybkie rozwiązania nie pomogły</td><td>Bot EU Request from Tutors + komentarz w BO</td></tr>
    <tr><td><strong>2. Konto i Dział Operacyjny</strong><br>(zapis, dane logowania, harmonogram, licencje, saldo lekcji, odliczenia)</td><td>Uczeń nie może wejść, nie jest zapisany, harmonogram jest błędny, dane logowania nie działają albo niesłusznie odjęto lekcje</td><td>Lider zespołu + Dział Obsługi Klienta + komentarz w BO (Dział Operacyjny: @Erika Ietro, @Katarzyna Traczyk)</td></tr>
    <tr><td><strong>3. Stracona lekcja</strong><br>(jedna lub więcej lekcji zagrożonych)</td><td>Z powodu awarii platformy, odwołania lub nieobecności</td><td><strong>Lider zespołu tego samego dnia</strong> (możesz poprosić o dodatkową lekcję) + Dział Obsługi Klienta, jeśli rodzina jest zdenerwowana + komentarz w BO</td></tr>
   </table></div></div>
  `},
  {t:'📅 Dodatkowe lekcje i zmiany terminu', html:`
   ${iconGrid([
     {ic:'➕', html:`<strong>Dodatkowa lekcja: najpierw porozmawiaj z liderem zespołu.</strong> Zanim zaproponujesz dodatkową lekcję, przedstaw swoje obawy i sugestie liderowi zespołu. Decyzję podejmuje lider zespołu.`},
     {ic:'🚫', html:`<strong>Nigdy nie proponuj rodzinie dodatkowej lekcji,</strong> zanim lider zespołu jej nie zatwierdzi.`},
     {ic:'🕒', html:`<strong>Co do zasady nie możesz przełożyć lekcji.</strong>`},
     {ic:'1️⃣', html:`<strong>Przyszedł tylko jeden uczeń?</strong> Poprowadź lekcję dla tego ucznia.`},
     {ic:'🧑‍🏫', html:`<strong>Problem techniczny jest po twojej stronie?</strong> Znajdź obejście albo zastępstwo, żeby lekcja odbyła się na czas.`},
     {ic:'📞', html:`<strong>Nie ma absolutnie żadnej możliwości poprowadzenia lekcji</strong> albo nie przyszedł żaden uczeń? Wtedy skontaktuj się z liderem zespołu i poproś o zmianę terminu.`}
   ])}
  `},
  {t:'🧾 Co zawiera zgłoszenie', html:`
   ${numlist([
     '<strong>Linki w BO</strong> do grupy i ucznia (obowiązkowo)',
     'Czy uczniowi wyświetlił się <strong>baner</strong>? Co na nim było?',
     '<strong>Ostrzeżenia na ekranie przed dołączeniem</strong> (na przykład o nieobsługiwanych wymaganiach)',
     '<strong>Typ błędu:</strong> czarny ekran, brak dźwięku, nie można wejść, program się nie otwiera…',
     '<strong>Zrzut ekranu</strong>',
     'Urządzenie, system operacyjny, przeglądarka oraz, jeśli to istotne, <strong>czy uczeń korzysta z VPN</strong> i z jakiego kraju',
     'Co próbowano zrobić i jak długo',
     'Jeśli użyto alternatywnej platformy: <strong>nagranie</strong>'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Jak wygląda przydatny komentarz w BO — skopiuj i uzupełnij</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Lekcja:</strong> [data] · <strong>Grupa:</strong> [link w BO] · <strong>Uczeń:</strong> [link w BO]<br>
   <strong>Co nie zadziałało:</strong> [np. nie mógł wejść na lekcję; czarny ekran przy udostępnianiu]<br>
   <strong>Baner lub komunikat:</strong> [dokładna treść albo „brak”] · <strong>Ostrzeżenia przed dołączeniem:</strong> [tak / nie, jakie]<br>
   <strong>Urządzenie:</strong> [urządzenie, system, przeglądarka, VPN tak / nie i kraj]<br>
   <strong>Co próbowano:</strong> [np. odświeżenie, ponowne dołączenie, zamknięcie aplikacji, starsza wersja Blendera — 10 minut]<br>
   <strong>Jak przebiegła dalsza część lekcji:</strong> [np. śledził moją demonstrację; alternatywna platforma, nagrane]<br>
   <strong>Zrzut ekranu:</strong> [w załączniku] · <strong>Słowa rodziny:</strong> [słowo w słowo, jeśli są]</p></div>
  `},
  {t:'🖥️ Przećwicz: zgłoś problem techniczny w BO', html:`
   <div class="card"><p>Teraz zrób to naprawdę, w replice Back Office. <strong>Uczeń nie mógł wejść na dzisiejszą lekcję z powodu problemu technicznego.</strong> Przejdź przez 4-etapowy przewodnik. W <strong>kroku 4</strong> wybierz rodzaj problemu <strong>„Problem techniczny, proszę o kontakt z uczniem”</strong> i napisz komentarz z faktami: co nie zadziałało, kiedy, jaki był komunikat lub baner, co próbowano zrobić i jakie były słowa rodziny.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Zgłoś problem techniczny</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Zgłoś problem techniczny" loading="lazy"></iframe></div></div>
   ${co('co-idea','📝',`<p><strong>Skorzystaj z powyższego szablonu.</strong> Im pełniejszy komentarz, tym szybciej ktoś może skontaktować się z rodziną.</p>`)}
  `},
  {t:'🔢 Kolejność ma znaczenie', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Najpierw zespół, potem rodzina.</strong> Gdy problem wykracza poza twoje nauczanie (dostęp, harmonogram, saldo lekcji, stracona lekcja), nie pisz do rodziny, zanim nie porozmawiasz z liderem zespołu.`},
     {ic:'🎓', html:`<strong>Ty mówisz o nauce; działania przekazujesz dalej.</strong> Możesz powiedzieć, co próbowano zrobić na lekcji i że już się tym zajmujesz. Możliwe rozwiązania (dodatkowa lekcja, zmiana grupy lub kursu, rekompensata) przekazują lider zespołu i Dział Obsługi Klienta.`},
     {ic:'⚖️', html:`<strong>Nigdy nie obiecuj i nigdy nie odmawiaj.</strong> Ani <em>„damy Państwu dodatkową lekcję”</em>, ani <em>„to niemożliwe”</em>. Pokaż natomiast, że ci zależy i że już działasz.`},
     {ic:'📅', html:`<strong>Zgłoś raz i sprawdzaj dalej.</strong> Ustaw sobie w kalendarzu przypomnienie, żeby wrócić do sprawy za dwie lekcje.`}
   ])}
   ${co('co-ok','💬',`<p><strong>Wiadomość, którą możesz wysłać</strong> (po uzgodnieniu z liderem zespołu): <em>„Dzień dobry, [imię rodzica]. Widzę, że [uczeń] nie mógł/mogła dziś wejść na lekcję. Zgłosiłem/-am to już mojemu zespołowi ze wszystkimi szczegółami, a Dział Obsługi Klienta skontaktuje się z Państwem. W międzyczasie przesyłam nagranie, żeby nic z omawianego materiału nie przepadło”.</em></p>`)}
  `},
  {t:'💛 Odpowiadaj na czas: rodziny widzą twój wysiłek', html:`
   <div class="card"><p>Awaria techniczna rzadko jest jedynym powodem, dla którego rodzina odchodzi. Decyduje to, co dzieje się <strong>potem</strong>: czy ktoś odpowiada, czy dziecko znów może wejść, czy rodzina czuje, że komuś zależy? Gdy rodzice widzą, że pracujesz nad tym, żeby wszystko działało — szybko odpowiadasz, wracasz do sprawy, dbasz o to, by ich dziecko miało jak najlepszą lekcję — dostrzegają to. To właśnie ten wysiłek sprawia, że wiele rodzin <strong>daje nam drugą szansę</strong>. Milczenie mówi im coś przeciwnego.</p></div>
   ${co('co-danger','🚨',`<p><strong>Nie traktuj problemu technicznego jak drobiazgu.</strong> Dla ciebie to może być czarny ekran. Dla rodziny to opłacona lekcja, rozczarowane dziecko i wątpliwość: <em>„czy to w ogóle ma sens?”</em> Traktuj to poważnie, nawet jeśli trwało tylko pięć minut — a zwłaszcza jeśli rodzina już pokazała, że jest zdenerwowana.</p>`)}
   ${rclock([
     {ic:'👀', when:'Od razu', t:'Widzę, działam', d:'Od razu potwierdź, że widzisz wiadomość, nawet jeśli nie masz jeszcze odpowiedzi.'},
     {ic:'📮', when:'Tego samego dnia', t:'Zgłoś i uzgodnij', d:'Komentarz w BO ze wszystkimi szczegółami, poinformowany lider zespołu i uzgodnienie, co przekażesz rodzinie.'},
     {ic:'💬', when:'Tego samego dnia', t:'Poinformuj rodzinę', d:'Powiedz, co zrobiłeś/-aś i kiedy napiszesz następnym razem — i zrób to, nawet jeśli nie ma nowych informacji.'},
     {ic:'🚪', when:'Następna lekcja', t:'Niech wszystko zadziała', d:'Dołącz wcześniej, wszystko sprawdź i upewnij się, że uczeń wchodzi. Potem zamknij sprawę.'}
   ])}
   ${co('co-ok','💬',`<p><strong>Potwierdzenie zawsze jest dozwolone.</strong> Krótka, ciepła wiadomość — że widzisz, że ci zależy, że działasz i kiedy znowu napiszesz — nie wymaga niczyjej zgody. Na lidera zespołu czekają wszelkie wyjaśnienia, możliwe rozwiązania i wszystko, co dotyczy rekompensaty.</p>`)}
   ${chatMock({
     name:'Rodzic', sub:'online', avatar:'👩', time:'18:02',
     msgs:[`Dobry wieczór. To już <strong>drugi raz</strong>, kiedy mój syn nie może wejść na lekcję. Płacimy za zajęcia, których nie dostaje, a on jest bardzo rozczarowany. Co się dzieje??`],
     title:'Jak odpowiadasz?',
     text:'Jest 18:00. Właśnie zobaczyłeś/-aś wiadomość i nie rozmawiałeś/-aś jeszcze z liderem zespołu. Kliknij każdą odpowiedź, żeby zobaczyć, co się stanie.',
     opts:[
      {t:`„Dobry wieczór! Classroom zwykle działa dobrze, to pewnie Państwa internet. Proszę spróbować innej przeglądarki”.`, ok:false, fb:`Obwiniasz jednocześnie rodzinę i platformę, a do tego nie widać, że ci zależy. Rodzic odczyta to jako „to nie mój problem”.`},
      {t:`„Bardzo mi przykro — dwie stracone lekcje to nie w porządku i rozumiem, jak bardzo syn musi być rozczarowany. Widzę Pani wiadomość i już się tym zajmuję: jeszcze dziś zgłaszam to mojemu zespołowi ze wszystkimi szczegółami. Jutro rano napiszę do Pani z informacjami, a na następną lekcję dołączę wcześniej, żeby upewnić się, że syn wejdzie”.`, ok:true, fb:`To ta odpowiedź. Uznaje problem i emocje, pokazuje konkretny wysiłek, mówi, kiedy znowu napiszesz, i nie obiecuje niczego, o czym nie decydujesz.`},
      {t:`„Proszę się nie martwić, dam mu darmową dodatkową lekcję w ramach rekompensaty!”`, ok:false, fb:`Miłe, ale nie tobie to obiecywać: o dodatkowych lekcjach i rekompensatach decyduje się z liderem zespołu i Działem Obsługi Klienta. Jeśli potem się to nie uda, rodzina znowu straci zaufanie.`},
      {t:`Odpowiem jutro, kiedy będę mieć pełną odpowiedź.`, reply:`<i>(dziś wieczorem brak odpowiedzi…)</i>`, ok:false, fb:`Milczenie to najgorsza opcja. Rodzic już jest zdenerwowany; każda godzina bez odpowiedzi potwierdza, że nikomu nie zależy. Zawsze od razu potwierdź, że widzisz wiadomość.`}
     ]
   })}
   ${co('co-star','🌟',`<p><strong>Pamiętaj:</strong> awarię techniczną można wybaczyć. Poczucie, że się jest ignorowanym, wybacza się dużo trudniej. Twoja odpowiedź, to, że wracasz do sprawy, i twój wysiłek, żeby uczeń odzyskał dostęp i miał jak najlepszą lekcję, to rzeczy, które widzi wiele rodzin — i dzięki którym decydują się zostać.</p>`)}
  `}
 ],
 ix:{
  title:'Zgłaszaj dobrze i we właściwej kolejności',
  instr:'Wybierz ścieżkę, najlepszy komentarz i to, co powiesz. 70%, aby ukończyć ten moduł.',
  items:[
   {type:'sort', prompt:'Którą ścieżką idzie to zgłoszenie?', card:`Rodzina mówi, że z jej pakietu odjęto dwie lekcje, a odbyła się tylko jedna.`, zones:[{label:'1️⃣ Awaria Classroom lub platformy', fb:'Nie do końca — w Classroom nic nie zawiodło; chodzi o saldo lekcji.'},{label:'2️⃣ Konto i Dział Operacyjny', fb:'Zgadza się — saldo i odliczenia lekcji trafiają do lidera zespołu i Działu Obsługi Klienta, z komentarzem w BO. Sprawę sprawdza Dział Operacyjny.'},{label:'3️⃣ Stracona lekcja', fb:'Nie do końca — lekcja nie przepadła przez awarię; to kwestia salda lekcji.'}], correctZone:1},
   {type:'sort', prompt:'Którą ścieżką idzie to zgłoszenie?', card:`Tablica nadal jest widoczna po jej zamknięciu, a wyjście i ponowne dołączenie nie pomaga.`, zones:[{label:'1️⃣ Awaria Classroom lub platformy', fb:'Zgadza się — szybkie rozwiązania nie pomogły: zgłoś to (bot EU Request from Tutors) z komentarzem w BO.'},{label:'2️⃣ Konto i Dział Operacyjny', fb:'Nie do końca — nie ma to nic wspólnego z kontem ucznia.'},{label:'3️⃣ Stracona lekcja', fb:'Nie do końca — lekcja trwała dalej; to awaria Classroom.'}], correctZone:0},
   {type:'choice', prompt:`Który komentarz w BO jest najlepszy w tej samej sprawie?`, opts:[`„Nie mógł wejść, słabe połączenie”.`,`„3.11, lekcja 2. Nie mógł wejść: na ekranie przed dołączeniem baner »System not supported«. Windows 7, aktualny Chrome. Próbowano odświeżyć i dołączyć ponownie, 10 min; resztę lekcji śledził moją demonstrację. Zrzut ekranu w załączniku. Linki w BO do grupy i ucznia”.`,`„Platforma znowu nie działa, zawsze tak jest”.`], correct:1, fb:`Przydatny komentarz jest kompletny i neutralny: data, co nie zadziałało, baner, urządzenie, co próbowano zrobić, jak przebiegła dalsza część lekcji, zrzut ekranu i linki w BO.`},
   {type:'choice', prompt:`Uczeń stracił lekcję przez awarię platformy, a rodzina jest niezadowolona. Co najpierw?`, opts:[`Napisać do rodziny i zaproponować dodatkową lekcję`,`Poczekać, czy następna lekcja zadziała`,`Tego samego dnia porozmawiać z liderem zespołu, poprosić o dodatkową lekcję i uzgodnić z nim wiadomość do rodziny`], correct:2, fb:`Najpierw zespół, potem rodzina. Możesz poprosić o dodatkową lekcję; decyzję podejmuje lider zespołu i dopiero wtedy rodzina się o niej dowiaduje.`},
   {type:'choice', prompt:`Jest pora lekcji, a dołączył tylko jeden z sześciu uczniów. Co robisz?`, opts:[`Prowadzisz lekcję dla tego jednego ucznia`,`Prosisz lidera zespołu o przełożenie lekcji`,`Czekasz 30 minut, a potem odwołujesz lekcję`], correct:0, fb:`Jeśli przyjdzie tylko jeden uczeń, prowadzisz lekcję dla niego. Zmiana terminu jest tylko na sytuację, gdy nie ma absolutnie żadnej możliwości poprowadzenia lekcji albo nikt nie przyszedł.`},
   {type:'choice', prompt:`Rodzic pisze zdenerwowany: „To już drugi raz, kiedy mój syn nie mógł wejść”. Jest 18:00, a ty nie rozmawiałeś/-aś jeszcze z liderem zespołu. Co robisz najpierw?`, opts:[`Czekasz do jutra, rozmawiasz z liderem zespołu i odpowiadasz raz, ze wszystkimi odpowiedziami`,`Odpowiadasz od razu, krótko: przykro ci, widzisz wiadomość, zajmujesz się tym i napiszesz znowu, gdy będą informacje — a potem uzgadniasz sprawę z liderem zespołu`,`Wyjaśniasz, jak działa Classroom, żeby zrozumieli, że rzadko jest to wina platformy`], correct:1, fb:`Potwierdzenie zawsze jest dozwolone, a milczenie szkodzi bardziej niż sama awaria. Odpowiedz od razu, ciepło i z terminem kolejnej informacji; wyjaśnienia i możliwe rozwiązania czekają na lidera zespołu.`}
  ]
 }
},
{id:'checklist', numLabel:'Lista końcowa', emoji:'✅', color:'#FFD34D', art:'shield', learn:[['🛟','Jeśli istnieje wniosek o zwrot'],['🧭','Przed · w trakcie · po']],
 eyebrow:'Lista końcowa',
 title:'Lista kontrolna na koniec',
 desc:'Bez testu — tylko najważniejsze punkty tego miniszkolenia: przed lekcją, w jej trakcie i po niej.',
 obj:'Przejdź przez poniższą listę kontrolną. Ten moduł nie jest oceniany — przeczytaj go, a potem ukończ miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już istnieje', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiedziałem/-am się o wniosku, zostawiłem/-am komentarz w BO z datami, opisem tego, co nie zadziałało, komunikatem lub banerem, tym, co próbowałem/-am zrobić, i zrzutem ekranu, a także poinformowałem/-am lidera zespołu',
     'Moja następna lekcja z tym uczniem była technicznie niezawodna: 15 minut wcześniej, inne aplikacje zamknięte, plan B, konkretna uwaga i widoczny sukces',
     'Nigdy nie potwierdziłem/-am zatwierdzenia zwrotu, nie rozmawiałem/-am o kwotach i nie obwiniałem/-am platformy — użyłem/-am jednego bezpiecznego zdania'
   ])}
  `},
  {t:'🧭 Przed lekcją, w trakcie i po niej', html:`
   ${tabsBlock([
     {ic:'🧰', title:'Przed', html:`<div class="card">${numlist(['Aktualny Chrome na komputerze, inne aplikacje zamknięte','Mikrofon, kamera i ekran sprawdzone','BO: grupa, lista uczniów i link','Ostrzeżenia przed dołączeniem','Kurs 🟡 / 🔴: komputer sprawdzony przed 1. lekcją','Na 1. lekcji dołączam wcześniej'])}</div>`},
     {ic:'🛠️', title:'W trakcie', html:`<div class="card">${numlist(['Najpierw spokój','Odśwież, dołącz ponownie, zamknij aplikacje, sprawdź urządzenie','10 minut, potem przekazuję sprawę przez bota EU Request from Tutors','Nie działa narzędzie kursu? Demonstracja + odpowiedzi ustne albo zamiennik z kursu','Alternatywna platforma tylko wtedy, gdy lekcja jest zagrożona: z nagraniem i zgłoszeniem do lidera zespołu tego samego dnia','Jeśli problem dotyczy wielu osób, zgłaszam to od razu','Nie wykonuję zadania za ucznia'])}</div>`},
     {ic:'🏠', title:'Po', html:`<div class="card">${numlist(['Czy uczeń może wejść do zadania domowego?','Pomoc z programem po lekcji','Nagranie, plan nadrobienia i w razie potrzeby prośba do lidera zespołu o dodatkową lekcję','Zgłoszenie tego samego dnia z kompletem informacji','Odpowiadam rodzinie na czas i informuję ją na bieżąco, nawet gdy nie ma nowości','Sprawdzenie sytuacji po 24 godzinach','Zamykam sprawę z rodziną'])}</div>`}
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe miniszkolenie.</strong> Gdy będziesz gotowy/-a, przejdź dalej — a potem rozwiąż DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
