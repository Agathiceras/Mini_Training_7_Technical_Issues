/* Mini_Training_7_Technical_Issues - contenuti in italiano (tutto il testo della pagina).
   Per aggiungere una lingua: copia questo file in content-xx.js, traduci i testi (mantieni il codice, le chiavi, i tag HTML, le chiamate agli helper e i percorsi di immagini/video/simulazioni), imposta PAGE_LANG, flag e dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:"Mini-training · Problemi tecnici — Formazione tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Quando la <span class=\"h-pill\">tecnologia</span> non funziona",
    heroIntro:"Ricevi questa formazione perché alcune famiglie dei tuoi studenti hanno chiesto un rimborso a causa di problemi tecnici. Qui vedrai cosa puoi fare prima, durante e dopo la lezione, quali soluzioni alternative puoi usare e a chi chiedere aiuto perché il problema venga risolto in tempo.",
    heroCard1:"<b>Al tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser.",
    heroCard2:"<b>Pratica inclusa.</b> Segnalerai un problema tecnico in una simulazione del Back Office.",
    pbLabel:'moduli completati',
    tapOpen:'Tocca per aprire',
    tapFlip:'Tocca per girare',
    lblSee:'Cosa vedi',
    lblDo:'Cosa fai',
    lblSay:'Cosa puoi dire',
    lblReport:'Dove segnalarlo',
    lblAvoid:'Da evitare',
    lblTip:'Consiglio',
    stepOf:'Passo {i} di {n}',
    next:'Avanti',
    heroWork:"Completa 6 brevi moduli. Per sbloccare il modulo successivo devi ottenere almeno il 70% nella verifica di ciascun modulo. Circa 30–40 minuti in tutto.",
    startBtn:"🚀 Inizia la formazione",
    pathLabel:'Il tuo percorso di apprendimento',
    devTitle:'Dev: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    finishBtn:'▶ Concludi il mini-training',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta giusta è «{label}».',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora del tutto',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resDone:"Hai completato questo mini-training.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rivedi la sezione qui sopra e riprova la verifica.',
    resContinue:'Continua al percorso di apprendimento',
    resFinish:'Continua',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Mini-training completato',
    doneTitle:'🎉 Congratulazioni!',
    doneP1:"🎉 <strong>Congratulazioni! Hai completato questo mini-training.</strong>",
    doneP2:"Hai finito! Torna alla pagina della formazione sull’LMS da cui hai aperto questo mini-training per chiudere l’assegnazione.",
    doneP3:"👉 <strong>Se nell’LMS, subito sotto la formazione, è presente una verifica o un test, assicurati di completarlo e di raggiungere il punteggio minimo</strong> — altrimenti l’assegnazione potrebbe risultare incompleta.",
    doneP4:'Buona fortuna! ❤️',
    doneP5:'',
    devUnlockAlert:'Modalità dev: ora tutti i moduli sono sbloccati per la revisione.',
    devOn:'🔓 Modalità dev ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità dev DISATTIVATA — progressi cancellati',
    devBadge:'🔓 MODALITÀ DEV',
    doLabel:'✅ Da fare',
    avoidLabel:'🚫 Da evitare',
    noticeLabel:'Nota:',
    cvSee:'Cosa vedi:',
    cvDo:'Cosa fai:',
    dtExample:'Esempio da una lezione reale',
    dtNext:'Avanti:',
    dtDone:"✅ Ecco tutti e tre i livelli.",
    tlVideoTitle:'{label} — un esempio da una lezione reale',
    tlVideoMeta:'Guarda come si presenta questa fase in una lezione reale'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'🧩', color:'#5DD39E', art:'lifebuoy', learn:[['📊','Cosa dicono i dati'],['🔎','I problemi trattati in questa formazione'],['🧭','Cosa dipende da te — e cosa no'],['🛟','Cosa fare se esiste già una richiesta di rimborso'],['🎯','Come fare della prossima lezione il tentativo di recupero']],
 eyebrow:'Introduzione',
 title:'Perché sei qui',
 desc:'Perché un problema tecnico nelle prime lezioni può costarci una famiglia, qual è la tua parte — e cosa fare se esiste già una richiesta di rimborso.',
 obj:'Capire perché un problema tecnico nelle prime lezioni può costarci una famiglia, qual è la tua parte e cosa fare quando esiste già una richiesta di rimborso.',
 sections:[
  {t:'📊 Cosa dicono i dati', html:`
   <div class="card"><p>Un problema tecnico raramente arriva da solo. Si presenta nelle prime lezioni, mentre la famiglia sta ancora decidendo se Kodland fa per lei — e a volte prima ancora che il bambino abbia visto una sola lezione.</p></div>
   ${bigStat('≈ 1 su 20',`<p>richieste di rimborso ha dietro un <strong>vero problema tecnico</strong>. Ed è un minimo: alcuni di questi casi arrivano registrati con un altro motivo.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Basato sulle richieste di rimborso degli ultimi 90 giorni in tutte le regioni; dati approssimativi.</p>
   ${co('co-idea','💡',`<p><strong>Le prime lezioni sono la finestra più stretta.</strong> Un problema tecnico risolto il giorno stesso di solito si recupera; lo stesso problema risolto in ritardo quasi mai. Ecco perché contano le prime lezioni, e perché conta il giorno stesso.</p>`)}
  `},
  {t:'🔎 I problemi trattati in questa formazione', html:`
   ${iconGrid([
     {ic:'🖥️', html:`<strong>Classroom e piattaforme di apprendimento.</strong> Link non funzionanti o mancanti, errori della piattaforma, schermi neri, audio e videocamera che smettono di funzionare.`},
     {ic:'💻', html:`<strong>Computer che non soddisfano i requisiti del corso</strong>`},
     {ic:'🧩', html:`<strong>Strumenti del corso che non si aprono o non si installano:</strong> Blender, Roblox Studio, Unity, Krita e altri programmi.`}
   ])}
  `},
  {t:'🧭 Cosa dipende da te e cosa no', html:`
   <div class="card"><p>Non puoi correggere un bug della piattaforma, un’iscrizione o un orario. Ma molto è nelle tue mani — e la parte più importante è <strong>avvisare le persone giuste, in fretta e bene</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Dipende interamente da te</th><th>🔁 Sta a te adattare e segnalare</th><th>🚫 Fuori dal tuo controllo</th></tr>
    <tr><td>Controllare la tua connessione, il tuo dispositivo e Chrome prima di ogni lezione<br>Inviare alla famiglia i dati di accesso che trovi in BO</td><td>Uno studente che non riesce a entrare o a collegarsi: aiutalo con un primo intervento e <strong>segnalalo</strong></td><td>Correggere un bug di Classroom o della piattaforma</td></tr>
    <tr><td>Mantenere la calma e normalizzare il problema davanti al gruppo</td><td>Una lezione persa per un guasto: adatta la successiva e <strong>segnalalo</strong></td><td>Iscrizioni, licenze e crediti delle lezioni</td></tr>
    <tr><td>Disattivare e riattivare i microfoni con attenzione</td><td>Un computer che non soddisfa i requisiti: rendi comunque utile la lezione e <strong>segnalalo al tuo Team Leader</strong></td><td>Spostare uno studente in un altro corso, gruppo o orario</td></tr>
    <tr><td>Provare le soluzioni note (aggiornare la pagina, rientrare, un altro strumento per il corso)</td><td>Un problema tecnico che potrebbe far andare via la famiglia: <strong>chiedi una lezione extra al tuo Team Leader</strong></td><td>Approvare una lezione extra, uno spostamento o qualsiasi compensazione</td></tr>
    <tr><td>Segnalare il giorno stesso con tutti i dettagli</td><td>Un guasto che colpisce più studenti: valutazione rapida, <strong>segnalazione</strong> e un piano di recupero</td><td>Il fornitore internet o la rete di casa della famiglia</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>La tua parte si fa in tre mosse:</strong> primo intervento durante la lezione, adattare la lezione perché il danno sia il più piccolo possibile e <strong>segnalare il giorno stesso</strong> con tutti i dettagli.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>Non aspettare in silenzio.</strong> Se non si risolve in 10 minuti, smetti di provarci da solo: comunica, documenta, inoltra.</p>`)}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso per un problema tecnico', html:`
   <div class="card"><p>Tutto quello che hai visto finora serve a prevenirla. Ma forse stai aprendo questa formazione perché una famiglia <strong>ha già</strong> chiesto un rimborso per un problema tecnico. Leggi prima queste regole.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta la crea il Client Service, non tu.</strong> Lo scopri dai commenti del Client Service sul profilo dello studente in BO; non arriva nessuna notifica automatica.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla della richiesta</strong> — né al bambino, né alla famiglia — a meno che il Client Service non ti chieda di dire qualcosa di preciso. Se è il bambino a parlarne, cambia argomento con gentilezza e continua la lezione.</p>`)}
  `},
  {t:'🎯 La tua prossima lezione è il tentativo di recupero', html:`
   <div class="card"><p>Quella lezione deve essere <strong>a prova di guasto tecnico</strong>. Un secondo guasto dopo la richiesta è lo scenario peggiore possibile.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 minuti prima:</strong> Chrome per desktop aggiornato, altre app chiuse; microfono, videocamera e condivisione dello schermo testati; gruppo ed elenco studenti controllati in BO.`},
     {ic:'🅱️', html:`<strong>Un piano B pronto:</strong> cosa farai se lo studente non riesce a entrare, se l’audio non funziona o se lo strumento del suo corso non si apre (Moduli 1 e 2).`},
     {ic:'👀', html:`<strong>Un’attenzione specifica</strong> per quel bambino — fallo sentire notato per qualcosa di concreto, non lodato in modo generico.`},
     {ic:'🏆', html:`<strong>Un successo visibile, e presto.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Se in quella lezione il guasto si ripete, segnalalo subito</strong> tramite il bot <strong>EU Request from Tutors</strong> — non a fine giornata.</p>`)}
  `},
  {t:'📮 Avvisa il giorno stesso, e conosci l’unica frase sicura', html:`
   ${numlist([
     'Lascia un commento in BO il giorno stesso riportando esattamente ciò che hai visto: date, cosa non ha funzionato, il messaggio di errore o il banner, cosa hai provato e uno screenshot',
     'Riporta le parole esatte della famiglia, parola per parola, se le hai',
     'Avvisa il tuo Team Leader il giorno stesso — è anche il momento di chiedere se ha senso una lezione extra',
     'Non confermare mai che un rimborso è stato approvato, non parlare mai di importi e non dare mai la colpa alla piattaforma'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che puoi sempre dire senza rischi:</strong> <em>“Su questo vi aiuterà il Servizio Clienti.”</em> Lì finisce la tua parte della conversazione.</p>`)}
  `},
  {t:'🌱 Continua a impegnarti anche dopo', html:`
   <div class="card"><p>Anche se la richiesta viene ritirata o il bambino passa a un altro gruppo, continua a curare l’aspetto tecnico delle sue lezioni nelle settimane successive: entra in anticipo, testa la tua configurazione e chiedigli se funziona tutto. Un recupero che dura una lezione e poi torna in silenzio alla normalità spesso non regge.</p></div>
  `}
 ],
 ix:{
  title:'Tuo, tuo da segnalare, non tuo',
  instr:'Classifica ogni situazione e scegli l’azione migliore. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Di chi è questa parte?', card:`Un guasto di Classroom ha fatto perdere metà della lezione di ieri.`, zones:[{label:'✅ Dipende interamente da me', fb:'Non proprio — il guasto non puoi risolverlo tu. Quello che è tuo è adattare la lezione successiva e segnalarlo.'},{label:'🔁 Sta a me adattare e segnalare', fb:'Esatto — adatti la lezione successiva per recuperare l’essenziale e lo segnali il giorno stesso.'},{label:'🚫 Fuori dal mio controllo', fb:'Non del tutto — risolvere il guasto non spetta a te, ma adattare la lezione successiva e segnalarlo sì.'}], correctZone:1},
   {type:'sort', prompt:'Di chi è questa parte?', card:`Approvare una lezione extra per la famiglia dopo quella persa.`, zones:[{label:'✅ Dipende interamente da me', fb:'Non proprio — puoi richiederla, ma non sei tu ad approvarla o a offrirla.'},{label:'🔁 Sta a me adattare e segnalare', fb:'Non del tutto — la tua parte è segnalarlo e richiederla al tuo Team Leader; l’approvazione non spetta a te.'},{label:'🚫 Fuori dal mio controllo', fb:'Esatto — la approva il tuo Team Leader. La tua parte è segnalare la lezione persa e richiederla il giorno stesso.'}], correctZone:2},
   {type:'choice', prompt:`Un genitore scrive: “Abbiamo già chiesto il rimborso, la piattaforma non ha mai funzionato.” Cosa fai?`, opts:[`Spieghi che la piattaforma funziona bene e che probabilmente era la loro connessione`,`Rispondi “Su questo vi aiuterà il Servizio Clienti”, lasci un commento in BO con ciò che hai visto e le loro parole esatte e avvisi il tuo Team Leader il giorno stesso`,`Prometti che alla prossima lezione funzionerà tutto e che non c’è bisogno del rimborso`], correct:1, fb:`Non discuti, non prometti e non parli della richiesta. Usi la frase sicura e dai al tuo team i dettagli il giorno stesso.`},
   {type:'sort', prompt:'Tesoro o spazzatura? È una buona frase per la famiglia?', card:`“È colpa della piattaforma, succede di continuo anche a noi.”`, zones:[{label:'💎 Tesoro', fb:'Non proprio — dare la colpa alla piattaforma fa perdere fiducia e non risolve nulla.'},{label:'🗑️ Spazzatura', fb:'Esatto — non dare mai la colpa alla piattaforma. Di’ che te ne stai già occupando con il tuo team.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Modulo 1', emoji:'🧰', color:'#7EA8FF', art:'clock', learn:[['⏱️','I 15 minuti prima di ogni lezione'],['🩺','Cosa fare quando l’accesso non funziona'],['💻','Il dispositivo è adatto al corso?'],['📮','Chi avvisare e cosa dire']],
 eyebrow:'Modulo 1 di 4',
 title:'Prima della lezione',
 desc:'I 15 minuti prima di ogni lezione, i problemi di accesso, iscrizione, orario e link, e come capire se il dispositivo dello studente è adatto al suo corso.',
 obj:'Individuare e segnalare i problemi di accesso prima che la famiglia perda la lezione.',
 sections:[
  {t:'⏱️ I 15 minuti prima', html:`
   <div class="card"><p>La maggior parte dei problemi di accesso si vede <strong>prima</strong> che la lezione inizi. Questi 15 minuti sono la tua migliore assicurazione.</p></div>
   ${stepper([
     {ic:'🌐', title:'Apri la lezione in Chrome per desktop', html:`<p>Usa <strong>Google Chrome per desktop, aggiornato</strong>. È l’unico browser pienamente compatibile; Safari e gli altri non lo sono del tutto.</p>`},
     {ic:'🧹', title:'Chiudi le altre app', html:`<p>Classroom rallenta quando ci sono altri programmi aperti. Chiudi tutto ciò che non userai durante la lezione.</p>`},
     {ic:'🎙️', title:'Testa microfono e videocamera', html:`<p>Se il browser non ha chiesto i permessi, attivali manualmente: icona a sinistra dell’URL → Videocamera e Microfono su “Consenti sempre”.</p>`},
     {ic:'📋', title:'Controlla il gruppo e il link in BO', html:`<p>Controlla il gruppo, l’elenco degli studenti e che il link della lezione funzioni. Fai attenzione agli <strong>avvisi nella schermata di pre-accesso</strong> (per esempio, requisiti di sistema non supportati).</p>`},
     {ic:'👋', title:'Alla prima lezione di un nuovo studente, entra in anticipo', html:`<p>Entra in anticipo e aspetta. Se non si è collegato <strong>5 minuti dopo l’orario di inizio</strong>, segnalalo; non aspettare la fine della lezione.</p>`}
   ])}
   ${co('co-idea','📶',`<p><strong>Un consiglio dei tutor mentor:</strong> Classroom ha bisogno di una connessione stabile. Ricorda agli studenti (e alle loro famiglie) di chiudere le app che non usano e di assicurarsi che durante la lezione nessun altro in casa stia usando molto il Wi-Fi.</p>`)}
   ${doavoid(
     ['Entrare 15 minuti prima e testare tutto','Usare Chrome per desktop, aggiornato, con le altre app chiuse','Controllare il gruppo e il link in BO prima di ogni lezione','Segnalare subito se un nuovo studente non si presenta'],
     ['Aprire la lezione all’ultimo minuto','Insegnare da Safari o da un altro browser','Aspettare la fine della lezione per dire che qualcuno non è riuscito a entrare','Dare per scontato che “prima o poi entrerà”']
   )}
  `},
  {t:'🩺 Sintomi prima della lezione', html:`
   <div class="card"><p>Tocca ogni sintomo. Vedrai <strong>cosa fai</strong>, <strong>cosa puoi dire</strong> e <strong>dove segnalarlo</strong>. Tutti i tuoi contatti di supporto sono nel Modulo 4.</p></div>
   ${symCards([
     {ic:'🔗', title:`Il link della lezione non funziona o manca`,
      do:`Aggiorna BO e controlla il link dalla pagina del gruppo. Se continua a non funzionare o a mancare, segnalalo subito, così il team Teaching può sistemarlo prima che la lezione inizi.`,
      say:`<em>“Sto verificando il link della lezione con il mio team, ti aggiorno tra pochi minuti.”</em>`,
      rep:`Il bot EU Request from Tutors + commento in BO.`},
     {ic:'🚪', title:`Il pulsante per entrare non compare`,
      do:`Aggiorna la pagina, controlla di usare Chrome e verifica in BO che lo studente sia nel gruppo. Se non cambia nulla, segnalalo con i link BO del gruppo e dello studente.`,
      say:`<em>“Sto verificando l’accesso con il mio team e ti scrivo appena ho notizie.”</em>`,
      rep:`Il bot EU Request from Tutors + commento in BO.`},
     {ic:'📋', title:`“Non risulto iscritto”`,
      see:`La famiglia dice che il bambino non risulta iscritto.`,
      do:`<strong>Non confermare e non smentire l’iscrizione.</strong> Controllala in BO e avvisa il tuo Team Leader e il Client Service.`,
      say:`<em>“Sto verificando il vostro accesso con il mio team.”</em>`,
      rep:`Team Leader + Client Service + commento in BO.`,
      avoid:`Dire alla famiglia <em>“non è iscritto”</em>.`},
     {ic:'🕒', title:`L’orario non è quello che la famiglia aveva chiesto`,
      see:`La lezione è a un altro orario, oppure è arrivata una notifica con una data di inizio diversa.`,
      do:`Non cambiare nulla da solo — i tutor non possono spostare le lezioni. Avvisa il tuo Team Leader e il Client Service il giorno stesso.`,
      say:`Riconosci il disagio senza spiegare perché è successo e senza promettere un cambiamento: <em>“Capisco che sia scomodo. L’ho già segnalato al mio team, così potranno contattarvi.”</em>`,
      rep:`Team Leader + Client Service + commento in BO.`},
     {ic:'🎟️', title:`Crediti delle lezioni mancanti o una lezione scalata ingiustamente`,
      see:`La famiglia dice che i conti delle lezioni non tornano, o che è stata scalata una lezione che non si è tenuta.`,
      do:`Annota esattamente ciò che dice la famiglia e passalo al tuo Team Leader e al Client Service il giorno stesso — lo verifica il team Operations.`,
      say:`<em>“Su questo vi aiuterà il Servizio Clienti.”</em>`,
      rep:`Team Leader + Client Service + commento in BO.`,
      avoid:`Spiegare o promettere qualsiasi cosa sui crediti.`},
     {ic:'✉️', title:`La famiglia non ha ricevuto il link o le credenziali`,
      do:`<strong>Li trovi in BO.</strong> Nel profilo dello studente ci sono il link di accesso, il login e la password. Inviali tu stesso alla famiglia, subito. Se mancano o non funzionano, segnalalo.`,
      say:`<em>“Vi invio subito i dati di accesso. Provateli e fatemi sapere se qualcosa non funziona.”</em>`,
      rep:`Solo se i dati mancano in BO o non funzionano: Team Leader + Client Service + commento in BO.`,
      avoid:`Improvvisare link che non provengono da BO.`}
   ])}
   ${co('co-warn','🔗',`<p><strong>Un link video alternativo quando qualcuno non riesce a entrare?</strong> Solo quando un problema di Classroom o di accesso mette a rischio la lezione — sempre registrando la lezione e segnalandolo al tuo Team Leader il giorno stesso (Modulo 2). Inviare link alternativi una lezione dopo l’altra nasconde il problema: nessuno lo risolve perché nessuno lo viene a sapere.</p>`)}
  `},
  {t:'💻 Prima della lezione 1: il dispositivo è adatto?', html:`
   <div class="card"><p>I casi di rimborso causati da un dispositivo non all’altezza di solito emergono <strong>alla prima lezione</strong>. Ogni corso ha bisogno di qualcosa di diverso:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Facile', desc:'Funtech · Python 1 / Python Pro', note:'Basta Chrome. <strong>Normale controllo prima della lezione.</strong>'},
     {ic:'🟡', title:'Da verificare', desc:'Creatività digitale · Roblox · Minecraft', note:'Richiedono strumenti specifici, un’installazione, un account o uno schermo adeguato. <strong>Verifica il dispositivo prima della lezione 1.</strong>'},
     {ic:'🔴', title:'Impegnativo', desc:'Modellazione 3D · Unity', note:'8 GB di RAM, un sistema e un hardware specifici. <strong>Verifica il dispositivo prima della lezione 1.</strong>'}
   ],3)}   ${accItem('📋 Vedi i requisiti per corso', `
    <p><strong>In generale:</strong> Chrome aggiornato · almeno 4 GB di RAM (8 GB per Blender o Unity) · 10 Mbps, meglio se via cavo · 5 GB liberi. <strong>Non usare Safari</strong> (su Mac ha problemi noti con la piattaforma).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Corso</th><th>Requisiti</th><th>Livello</th></tr>
     <tr><td>Funtech</td><td>Solo Chrome. Niente da installare.</td><td>🟢 Facile</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + un account Google (Google Colab).</td><td>🟢 Facile</td></tr>
     <tr><td>Creatività digitale</td><td>Chrome. Diversi strumenti online (Canva e altri); le alternative per ogni strumento sono nella wiki / nelle note per l’insegnante.</td><td>🟡 Da verificare</td></tr>
     <tr><td>Roblox</td><td>Windows o Mac (niente tablet, niente Linux). 4 GB. <strong>Installare Roblox Studio prima della lezione 1.</strong></td><td>🟡 Da verificare</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac o Linux. Consigliata la Java Edition. 4 GB. Serve un account Minecraft.</td><td>🟡 Da verificare</td></tr>
     <tr><td>Modellazione 3D</td><td>Blender. 8 GB. Mouse con rotellina. Scheda grafica dedicata consigliata. Windows o Mac.</td><td>🔴 Impegnativo</td></tr>
     <tr><td>Unity</td><td>8 GB. 10 GB liberi. Windows o Mac. Niente Chromebook.</td><td>🔴 Impegnativo</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>La regola:</strong> se in BO vedi che lo studente ha un corso <strong>🟡 Da verificare</strong> o <strong>🔴 Impegnativo</strong>, verifica il dispositivo prima della lezione 1, con un messaggio approvato dal tuo Team Leader.</p>`)}
   ${co('co-danger','💻',`<p><strong>Se il computer non regge il corso, il corso non doveva essere venduto così — e non spetta a te risolverlo.</strong> Segnalalo al tuo Team Leader; i team Teaching e Sales decidono insieme come e dove lo studente prosegue. Non dire mai di tua iniziativa alla famiglia di comprare un nuovo computer o di cambiare corso. Nel frattempo, rendi utile la lezione con le soluzioni alternative del Modulo 2.</p>`)}
  `}
 ],
 ix:{
  title:'Prima che inizi la lezione',
  instr:'Scegli la prima azione e cosa diresti. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Qual è la tua prima azione?', card:`La lezione inizia tra 10 minuti e uno studente dice che il pulsante per entrare non compare.`, zones:[{label:'🔁 Aggiornare la pagina, controllare Chrome e verificare in BO che sia nel gruppo', fb:'Esatto — un rapido primo intervento. Se non cambia nulla, lo segnali con i link BO del gruppo e dello studente.'},{label:'🔗 Inviargli un link Zoom per quella lezione', fb:'Non proprio — una piattaforma alternativa serve solo quando la lezione è davvero a rischio. Prima viene il primo intervento.'},{label:'⏳ Aspettare e vedere se entra più tardi', fb:'Non proprio — aspettare in silenzio fa perdere la lezione. Agisci ora.'}], correctZone:0},
   {type:'sort', prompt:'Qual è la tua prima azione?', card:`Il corso dello studente è Unity e in BO la sua lezione 1 risulta giovedì.`, zones:[{label:'⏳ Niente — vedremo alla lezione 1', fb:'Non proprio — in Unity i problemi del dispositivo di solito emergono alla prima lezione, quando ormai è troppo tardi.'},{label:'💻 Verificare il dispositivo prima della lezione 1, con un messaggio approvato dal tuo Team Leader', fb:'Esatto — Unity è un corso impegnativo. Verificare prima il dispositivo evita di perdere la prima lezione.'},{label:'📝 Chiedere alla famiglia di comprare un computer migliore', fb:'Non proprio — non chiedi acquisti. Verifichi il dispositivo e, se non soddisfa i requisiti, lo segnali.'}], correctZone:1},
   {type:'choice', prompt:`Una mamma scrive: “Mio figlio non risulta iscritto alla lezione.” Come rispondi?`, opts:[`“Suo figlio non è iscritto, deve parlare con l’ufficio vendite.”`,`“Sì, è iscritto, sarà un errore da parte vostra.”`,`“Sto verificando il vostro accesso con il mio team.”`], correct:2, fb:`Non confermare e non smentire l’iscrizione. La controlli in BO e avvisi il tuo Team Leader e il Client Service.`},
   {type:'choice', prompt:`La famiglia dice che la lezione è stata fissata a un orario diverso da quello che avevano chiesto. Cosa fai?`, opts:[`Riconosci il disagio senza promettere un cambiamento e avvisi il tuo Team Leader il giorno stesso`,`Ti offri di spostarla tu all’orario che preferiscono`,`Spieghi che l’orario non si può più cambiare`], correct:0, fb:`Non cambi l’orario, ma non escludi nemmeno un cambiamento. Riconosci il disagio e avvisi il tuo team il giorno stesso.`},
   {type:'choice', prompt:`Una famiglia dice che dal pacchetto è stata scalata una lezione che non si è mai tenuta. Cosa fai?`, opts:[`Dici che gli restituirai la lezione`,`Annoti ciò che hanno detto, rispondi “Su questo vi aiuterà il Servizio Clienti” e lo passi al tuo Team Leader e al Client Service il giorno stesso`,`Spieghi come funziona lo scalare delle lezioni`], correct:1, fb:`Crediti e lezioni scalate li verifica il team Operations. Non prometti e non spieghi — riporti esattamente ciò che ha detto la famiglia, il giorno stesso.`},
   {type:'choice', prompt:`Alla lezione 1 di un corso di Modellazione 3D vedi che il computer dello studente ha 4 GB di RAM e Blender non parte. Cosa è corretto?`, opts:[`Segnalarlo al tuo Team Leader — Teaching e Sales decidono come prosegue lo studente — e intanto rendere utile questa lezione`,`Dire alla famiglia che il corso non fa per loro e suggerirne un altro`,`Chiedere alla famiglia di potenziare il computer prima della prossima lezione`], correct:0, fb:`Il corso non doveva essere venduto così per un computer che non lo regge. Non spetta a te risolverlo: lo segnali, e decidono Teaching e Sales.`}
  ]
 }
},
{id:'during', numLabel:'Modulo 2', emoji:'🛠️', color:'#FFB44D', art:'micCam', learn:[['🧘','Prima di tutto, la calma'],['🔧','Soluzioni per Classroom dai tutor mentor'],['🧩','Soluzioni alternative per ogni corso'],['🆘','Quando si può usare Zoom']],
 eyebrow:'Modulo 2 di 4',
 title:'Durante la lezione',
 desc:'La prima mossa è emotiva, la regola dei 10 minuti, le soluzioni per Classroom dai tutor mentor, le alternative per ogni corso, i guasti che colpiscono più studenti e quando è consentita una piattaforma alternativa come Zoom.',
 obj:'Risolvere ciò che si può risolvere in 10 minuti, mantenere la lezione utile per ogni studente e non perdere l’intera lezione per un problema tecnico.',
 sections:[
  {t:'🧘 La prima mossa è emotiva', html:`
   <div class="card"><p>Prima di toccare qualsiasi cosa, <strong>mantieni la calma e normalizza il problema ad alta voce</strong>: <em>“Ogni tanto succede, lo risolviamo insieme.”</em> Un adulto calmo dice al bambino che va tutto bene, e il gruppo segue il tuo esempio. Solo dopo, risolvi.</p></div>
  `},
  {t:'⏱️ La regola dei 10 minuti', html:`
   <div class="card"><p>Se non riesci a risolverlo in <strong>10 minuti</strong>, smetti di provarci in silenzio.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Comunica: allo studente, al gruppo e, se serve, al tuo team'},
     {ic:'📝', label:'Documenta: cosa non ha funzionato, il messaggio, uno screenshot, cosa hai provato'},
     {ic:'📮', label:'Inoltra: segnalalo tramite il bot EU Request from Tutors'}
   ])}
  `},
  {t:'🔧 Soluzioni per Classroom che funzionano — dai tutor mentor', html:`
   <div class="card"><p>I tutor che insegnano ogni giorno sono d’accordo: <strong>la maggior parte dei problemi di Classroom si risolve aggiornando la pagina e alleggerendo il carico.</strong> Prova questi passaggi, in quest’ordine:</p></div>
   ${stepper([
     {ic:'🔄', title:'Aggiorna la pagina', html:`<p>Oppure chiedi allo studente di farlo. Risolve la maggior parte degli schermi neri, dei video bloccati e delle condivisioni che non partono.</p>`},
     {ic:'🧹', title:'Chiudi le altre app', html:`<p>Le tue e quelle degli studenti. Classroom rallenta quando ci sono altri programmi aperti.</p>`},
     {ic:'🚪', title:'Rientra nella lezione', html:`<p>Se la tua videocamera smette di funzionare, chiudi il browser, ricarica e rientra — a volte servono due tentativi.</p>`},
     {ic:'🎚️', title:'Controlla il dispositivo selezionato', html:`<p>Un microfono può sembrare “attivo” ed essere comunque bloccato: nelle impostazioni, controlla che siano selezionati il microfono e la videocamera giusti.</p>`},
     {ic:'📶', title:'Alleggerisci la connessione', html:`<p>Chiedi agli studenti di spegnere la videocamera e di assicurarsi che nessun altro in casa stia usando il Wi-Fi.</p>`},
     {ic:'🌐', title:'Ultima risorsa: un altro browser', html:`<p>Rientrare da un altro browser a volte permette di arrivare alla fine della lezione. Segnalalo dopo: il browser supportato resta Chrome.</p>`}
   ])}
   ${iconGrid([
     {ic:'👥', html:`<strong>Gruppi numerosi (circa 15 studenti).</strong> La lezione può riavviarsi, bloccarsi, chiudersi o spegnere la videocamera a tutti. Chiedi agli studenti di tenere la videocamera spenta fin dall’inizio, e segnalalo se continua a succedere.`},
     {ic:'📡', html:`<strong>La condivisione dello schermo si interrompe di continuo.</strong> Di solito è la connessione. Chiudi le app, chiedi se ci sono altri dispositivi collegati al Wi-Fi e condividi di nuovo.`},
     {ic:'🔄', html:`<strong>Gli studenti non vedono il tuo schermo e non funziona nulla.</strong> Chiedi a uno studente di condividere lui il suo schermo con il gruppo — soprattutto nelle lezioni di gruppo, spesso funziona meglio.`},
     {ic:'✏️', html:`<strong>Le annotazioni non funzionano</strong> (non riesci a disegnare, i disegni non compaiono o compaiono nel punto sbagliato). Disattiva le annotazioni, condividi di nuovo lo schermo e riattivale.`}
   ])}
  `},
  {t:'⬛ Schermo nero durante la condivisione — guarda la procedura', html:`
   <div class="card"><p>Questa è la procedura che lo studente e/o il tutor devono seguire quando lo schermo diventa nero durante la condivisione.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Schermo nero durante la condivisione dello schermo</div><div class="vslot-meta">Passo dopo passo · 19 secondi</div></div></div>
    <div class="vslot-frame" style="padding:0"><video src="Media/black_screen.mkv" controls preload="metadata" playsinline style="display:block;width:100%;max-height:420px;background:#000"></video></div>
    <div class="vslot-brief">Se lo schermo resta nero dopo aver seguito i passaggi, aggiorna la pagina (tu o lo studente). Se continua a succedere, segnalalo con uno screenshot.</div></div>
  `},
  {t:'🖥️ Classroom — altre soluzioni rapide', html:`
   <div class="card"><p>I passaggi completi e aggiornati sono nella guida <strong>“Classroom Issues Quick Fixes”</strong> del team Classroom. Le più comuni:</p></div>
   ${accItem('▬ Un rettangolo nero al posto del tuo schermo', `<p>Interrompi e riprendi la condivisione. Ad alcuni funziona ridurre a icona la finestra e poi ripristinarla.</p>`)}
   ${accItem('🌫️ Lo schermo condiviso è sfocato', `<p>Condividi di nuovo e controlla la connessione.</p>`)}
   ${accItem('🙈 Lo studente non vede il tuo schermo condiviso', `<p>Se è su un telefono, deve usare la “versione desktop” del sito. Controlla che stia usando Chrome. Se non funziona nulla, chiedi a un altro studente di condividere il suo schermo con il gruppo.</p>`)}
   ${accItem('📱 Lo studente non riesce a condividere il suo schermo', `<p>Da un browser mobile (iPad, tablet o telefono) <strong>non è possibile</strong>. Serve un computer.</p>`)}
   ${accItem('🧾 La lavagna resta visibile dopo averla chiusa', `<p>Chiedi di uscire e rientrare; segnalalo con il link BO del gruppo.</p>`)}
   ${accItem('🚪 Le breakout room danno errori', `<p>Chiudi tutte le stanze e creale di nuovo. Se la condivisione dello schermo non funziona dentro le stanze, segnalalo.</p>`)}
   ${accItem('📄 La pagina Assignments appare nera', `<p>Disattiva e cancella le annotazioni, interrompi la condivisione dello schermo e fai clic destro → “Ricarica frame”. Se lo schermo di uno studente è diventato nero perché era sulla scheda Assignments, interrompi e condividi di nuovo.</p>`)}
   ${accItem('⚠️ Lo studente vede dei banner di errore', `<p>Chiedigli di <strong>leggerlo ad alta voce</strong> e spiegagli cosa fare. <strong>Annota</strong> se c’era un banner, il messaggio, gli avvisi del pre-accesso e il tipo di errore. Segnalalo con uno screenshot.</p>`)}
   ${accItem('🖼️ La videocamera non funziona con gli sfondi virtuali', `<p>Attiva “Usa accelerazione grafica se disponibile” in <em>chrome://settings/system</em>.</p>`)}
   ${accItem('🪟 Modalità Picture-in-Picture', `<p>Aiuta: clic destro sullo schermo condiviso → Picture-in-Picture.</p>`)}
  `},
  {t:'🎙️ Quando il microfono o la videocamera di uno studente non funzionano', html:`
   ${stepFlow([
     {ic:'🔁', label:'Chiedigli di rientrare nella lezione'},
     {ic:'🎚️', label:'Controlla che siano selezionati il microfono e la videocamera giusti'},
     {ic:'📮', label:'Ancora niente: segnalalo e chiedi al supporto tecnico di testarlo entro la settimana'}
   ])}
   ${co('co-ok','💬',`<p><strong>Nel frattempo, lo studente continua a imparare.</strong> Può partecipare senza videocamera e, in via eccezionale, anche senza microfono: comunicate tramite la chat e le reazioni. Nessuno resta fuori dalla lezione per colpa di un dispositivo.</p>`)}
   ${co('co-danger','🔇',`<p><strong>Se disattivi il microfono a uno studente, riattivalo.</strong> Lasciare un bambino silenziato senza accorgersene può costarci una famiglia.</p>`)}
  `},
  {t:'🧩 Quando lo strumento del corso non funziona — alternative per corso', html:`
   <div class="card"><p>Gli autori dei corsi hanno condiviso cosa puoi fare quando uno studente non riesce ad aprire il programma del corso o il suo computer fa fatica a farlo girare. Tocca il tuo corso:</p></div>
   ${tabsBlock([
     {ic:'🎮', title:'Roblox, Unity, qualsiasi piattaforma', html:`${symCards([
       {ic:'🔑', title:`Lo studente non riesce ad accedere, o il programma non si apre`,
        do:`<ul><li><strong>Segue la tua dimostrazione:</strong> lo studente guarda il tuo schermo e risponde a voce su ciò che si sta facendo — così partecipa comunque alla lezione.</li><li><strong>Dopo la lezione,</strong> rifai con lui l’installazione o l’accesso.</li><li><strong>Ancora non risolto?</strong> Chiedi supporto tecnico tramite il bot <strong>EU Request from Tutors</strong>.</li></ul>`,
        avoid:`Passare tutta la lezione a installare mentre il resto del gruppo aspetta.`},
       {ic:'🧱', title:`Roblox Studio non si scarica o non si installa`,
        do:`Controlla il sistema operativo e lo spazio libero (vedi i requisiti nel Modulo 1). Poi come sopra: dimostrazione adesso, soluzione dopo la lezione, supporto tecnico se serve.`},
       {ic:'🐌', title:`Unity si blocca durante la lezione`,
        do:`Chiedigli di chiudere le altre schede e app. Unity ha bisogno di 8 GB di RAM. Se continua, segnalalo indicando il modello e il sistema del dispositivo.`}
     ])}`},
     {ic:'🧊', title:'Modellazione 3D', html:`${symCards([
       {ic:'⬇️', title:`Blender non parte sul computer dello studente`,
        do:`<ul><li><strong>Prova una versione precedente di Blender,</strong> scaricata dal sito ufficiale di Blender.</li><li><strong>Se continua a non funzionare,</strong> il computer non regge il corso: segnalalo al tuo Team Leader. Teaching e Sales decidono come prosegue lo studente.</li></ul>`,
        avoid:`Promettere un cambio di corso — quella decisione non spetta a te.`}
     ])}`},
     {ic:'🎨', title:'Creatività digitale', html:`${symCards([
       {ic:'📚', title:`Uno degli strumenti online non funziona`,
        do:`<ul><li><strong>Controlla le alternative</strong> nella wiki / nelle note per l’insegnante — per molti strumenti lì è indicata un’alternativa.</li><li><strong>Nessuna alternativa indicata?</strong> Trova tu un servizio simile e invialo tramite il modulo di feedback, così viene aggiunto all’elenco delle alternative per tutti.</li></ul>`},
       {ic:'🖌️', title:`Krita non si apre`,
        do:`Va bene qualsiasi programma di disegno online — per esempio <em>Kleki</em>.`}
     ])}`},
     {ic:'💻', title:'Un computer troppo debole', html:`${symCards([
       {ic:'🐢', title:`Il computer non soddisfa per niente i requisiti del corso`,
        see:`L’app non si apre, si blocca o si chiude, oppure la schermata di pre-accesso mostra un avviso sui requisiti.`,
        do:`<ul><li><strong>Rendi comunque utile la lezione:</strong> una dimostrazione sul tuo schermo condiviso, un esempio guidato, risposte a voce.</li><li><strong>Segnalalo al tuo Team Leader.</strong> Il corso non doveva essere venduto per quel computer; Teaching e Sales decidono come e dove prosegue lo studente.</li></ul>`,
        avoid:`Fare l’attività al posto dello studente, chiedere alla famiglia di comprare qualcosa o promettere un cambio di corso.`}
     ])}`}
   ])}
  `},
  {t:'👥 Quando più studenti hanno problemi insieme, o la lezione è persa', html:`
   ${doavoid(
     ['Valuta: è uno studente o sono molti? Se sono molti, è la piattaforma — <strong>segnalalo subito</strong>, con il link BO del gruppo','Porta avanti la lezione con chi è collegato e chiedi agli altri di seguire nella chat','Se la lezione è andata persa, invia la registrazione e prepara un piano di recupero (Modulo 3)','Fai una dimostrazione, condividi il file del progetto e pianifica una sessione di recupero'],
     ['Passare tutta la lezione ad aiutare gli studenti uno per uno mentre gli altri si annoiano','Fare l’attività al posto dello studente quando la tecnologia non funziona','Promettere una lezione extra alla famiglia','Spostare la lezione di tua iniziativa']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Quando un problema tecnico compromette una lezione</strong> — o due di fila — <strong>parlane con il tuo Team Leader il giorno stesso.</strong> Puoi chiedere una lezione extra; decide il tuo Team Leader. Non prometterla e non escluderla mai tu alla famiglia.</p>`)}
  `},
  {t:'🆘 Classroom non funziona: quando è consentita una piattaforma alternativa', html:`
   <div class="card"><p><strong>Classroom viene sempre per prima.</strong> È il modo previsto per fare lezione ed è collegata a tutto — pagamenti, registrazioni, presenze. Una piattaforma video alternativa (come Zoom) è <strong>consentita solo quando un problema di Classroom o di accesso mette a rischio la lezione</strong>.</p></div>
   ${numlist(['Usa una piattaforma video alternativa solo se la lezione non può proseguire in Classroom','<strong>Registra l’intera sessione</strong> — la registrazione è la prova che la lezione si è svolta','Avvisa il tuo Team Leader il giorno stesso, così la lezione può essere valutata e considerata per il pagamento','Lascia un commento in BO spiegando cosa non ha funzionato in Classroom'])}
   ${co('co-warn','📝',`<p><strong>È l’eccezione, mai la routine.</strong> Una lezione spostata fuori da Classroom senza registrazione e senza segnalazione il giorno stesso non può essere conteggiata.</p>`)}
  `}
 ],
 ix:{
  title:'La lezione continua',
  instr:'Scegli la prima azione in ogni caso. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Qual è la prima azione?', card:`Quando condividi lo schermo, gli studenti vedono solo nero.`, zones:[{label:'🔁 Seguire la procedura per lo schermo nero e, se serve, aggiornare la pagina', fb:'Esatto — è la procedura del video. Se continua a succedere, lo segnali con uno screenshot.'},{label:'🆘 Spostare subito la lezione su Zoom', fb:'Non proprio — una piattaforma alternativa è un’eccezione. Prima viene la soluzione in Classroom.'},{label:'⏭️ Continuare a spiegare senza lo schermo', fb:'Non proprio — prima prova la soluzione; se non si risolve in 10 minuti, lo segnali.'}], correctZone:0},
   {type:'sort', prompt:'Qual è la prima azione?', card:`Il microfono di uno studente risulta attivo, ma nessuno lo sente.`, zones:[{label:'📮 Segnalarlo subito al supporto tecnico', fb:'Non proprio — prima prova i passaggi rapidi: rientrare e controllare il microfono selezionato.'},{label:'🔁 Chiedergli di rientrare e di controllare che sia selezionato il microfono giusto', fb:'Esatto — un microfono può sembrare “attivo” ed essere comunque bloccato. Se continua a non funzionare, usa la chat e tu lo segnali.'},{label:'🔇 Dirgli di limitarsi ad ascoltare per questa volta', fb:'Non proprio — prima le soluzioni rapide, e nel frattempo può partecipare tramite la chat e le reazioni.'}], correctZone:1},
   {type:'sort', prompt:'Qual è la prima azione?', card:`Uno studente su un tablet non riesce a condividere il suo schermo.`, zones:[{label:'🔁 Chiedergli di riprovare più volte', fb:'Non proprio — dal browser di un tablet la condivisione dello schermo non è possibile.'},{label:'📝 Chiedergli di cambiare browser sul tablet', fb:'Non proprio — su telefono o tablet non è possibile, qualunque sia il browser.'},{label:'💻 Spiegare che per condividere lo schermo serve un computer, e proseguire la lezione in un altro modo', fb:'Esatto — è un limite noto. Adatta l’attività e, se il corso lo richiede, segnalalo.'}], correctZone:2},
   {type:'choice', prompt:`In una lezione di Roblox, uno studente non riesce ad accedere a Roblox Studio. Cosa fai durante la lezione?`, opts:[`Passi la lezione ad aiutarlo ad accedere mentre il resto del gruppo aspetta`,`Gli fai seguire la tua dimostrazione e rispondere a voce su ciò che si sta facendo; dopo la lezione lo aiuti a risolvere e, se serve, chiedi supporto tecnico`,`Gli dici di saltare questa lezione e di tornare quando funziona`], correct:1, fb:`Lo studente continua a imparare seguendo la tua dimostrazione. L’accesso lo sistemi dopo la lezione, e chiedi supporto tecnico se il problema non è ancora risolto.`},
   {type:'choice', prompt:`In Creatività digitale, Krita non si apre sul computer di uno studente. Qual è una buona alternativa?`, opts:[`Usare un programma di disegno online, come Kleki`,`Segnalare che lo studente non può seguire il corso`,`Chiedere alla famiglia di comprare una tavoletta grafica`], correct:0, fb:`Va bene qualsiasi programma di disegno online. Controlla le alternative nella wiki / nelle note per l’insegnante e proponine di nuove tramite il modulo di feedback.`},
   {type:'choice', prompt:`Dopo cinque minuti, tre studenti non riescono a entrare e gli altri due aspettano. Cosa fai?`, opts:[`Aiuti ciascuno a turno finché non sono entrati tutti`,`Annulli la lezione e avvisi le famiglie`,`Lo segnali subito (è la piattaforma), prosegui con i due collegati e chiedi agli altri di seguire nella chat`], correct:2, fb:`Se più studenti hanno problemi, è la piattaforma: segnalalo subito. Porta avanti la lezione con chi è collegato e prepara poi il piano di recupero.`},
   {type:'choice', prompt:`Classroom non funziona per nessuno e la lezione è a rischio. Cosa devi fare?`, opts:[`Usare una piattaforma alternativa, registrare l’intera sessione e avvisare il tuo Team Leader il giorno stesso, con un commento in BO`,`Usarla e continuare a usarla anche nelle lezioni successive, visto che funziona meglio`,`Usarla senza registrare, visto che la lezione è breve`], correct:0, fb:`È l’eccezione, non la routine: registrata, segnalata al tuo Team Leader il giorno stesso e spiegata in BO. Altrimenti la lezione non può essere conteggiata.`}
  ]
 }
},
{id:'after', numLabel:'Modulo 3', emoji:'🏠', color:'#B79DF2', art:'phoneDesk', learn:[['🔍','Riconoscere un “non può” dietro un “non lo fa”'],['📲','Conoscere i limiti di telefono e tablet'],['📼','Recuperare una lezione persa'],['🔁','Chiudere il cerchio con la famiglia']],
 eyebrow:'Modulo 3 di 4',
 title:'Dopo la lezione',
 desc:'Compiti non consegnati perché non si riesce ad accedere, la piattaforma su telefono o tablet, le lezioni perse e come chiudere il cerchio con la famiglia.',
 obj:'Fare in modo che un problema tecnico non lasci una famiglia senza compiti o senza una risposta, e riconoscerlo prima di scambiarlo per una “mancata consegna”.',
 sections:[
  {t:'🔍 Quando non consegnano, forse non possono', html:`
   <div class="card"><p>Prima di pensare a una mancanza di motivazione, verifica se lo studente <strong>riesce ad accedere</strong> per fare i compiti. Alcune famiglie si sono lamentate di non essere riuscite ad aprire i compiti senza che nessuno offrisse loro un’alternativa.</p></div>
   ${co('co-idea','❓',`<p><strong>Chiedi prima di dare per scontato:</strong> <em>“Sei riuscito ad aprire i compiti? Da quale dispositivo hai provato?”</em></p>`)}
  `},
  {t:'🩺 Sintomi dopo la lezione', html:`
   ${symCards([
     {ic:'🔒', title:`Non riescono ad accedere alla piattaforma per fare i compiti`,
      do:`Verifica il browser (Chrome per desktop), il dispositivo e i dati di accesso — li trovi in BO e puoi inviarli di nuovo. Se non cambia nulla, segnalalo con i link BO dello studente e del gruppo e <strong>ricontrolla dopo 24 ore</strong>.`,
      say:`<em>“Me ne sto occupando con il mio team e vi scrivo domani.”</em>`},
     {ic:'🧩', title:`Il programma del corso non si è aperto durante la lezione`,
      do:`Dopo la lezione, rifai con lo studente l’installazione o l’accesso (e l’alternativa per il suo corso del Modulo 2). Se continua a non funzionare, chiedi supporto tecnico tramite il bot <strong>EU Request from Tutors</strong>.`},
     {ic:'🎙️', title:`Il microfono o la videocamera non hanno funzionato`,
      do:`Se rientrare e controllare il dispositivo non è servito, segnalalo e chiedi al supporto tecnico di fare una prova con lo studente entro la settimana successiva. Fino ad allora, lo studente partecipa con chat e reazioni.`},
     {ic:'📱', title:`Riescono ad accedere solo dal telefono e non si vede bene`,
      do:`La piattaforma è pensata per il computer: devono usare la “versione desktop” del sito o un computer. Non promettere un accesso alternativo.`,
      say:`Spiega il limite con gentilezza: <em>“Alcune parti non si vedono bene dal telefono; dal computer, o con la versione desktop del sito, funziona molto meglio.”</em>`},
     {ic:'📲', title:`La piattaforma non funziona del tutto su telefono o tablet`,
      do:`È un <strong>limite noto</strong> (per esempio, dal telefono non è possibile condividere lo schermo). Se il corso lo richiede, segnalalo.`},
     {ic:'🗂️', title:`I compiti non compaiono nel notebook o nella dashboard`,
      do:`Segnalalo con uno screenshot.`},
     {ic:'📼', title:`Hanno perso una lezione per un guasto`,
      do:`Invia la registrazione e la parte essenziale, prepara un piano di recupero e parlane con il tuo Team Leader il giorno stesso — puoi chiedere una lezione extra.`,
      tip:`<strong>Allineati con il tuo Team Leader prima di scrivere alla famiglia.</strong>`}
   ])}
  `},
  {t:'🔁 Chiudi il cerchio', html:`
   <div class="card"><p>Quando il problema è risolto, <strong>fallo sapere alla famiglia</strong>. Un genitore informato è un genitore che resta.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 Un messaggio di chiusura che puoi usare</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Buongiorno [nome del genitore]. Le scrivo per farle sapere che il problema di accesso che aveva [studente] è stato risolto. Grazie per la pazienza. Se dovesse succedere di nuovo, mi scriva e ce ne occuperemo subito.”</em></p></div>
  `}
 ],
 ix:{
  title:'Nessuno senza risposta',
  instr:'Scegli l’azione migliore o classifica ogni caso. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'choice', prompt:`Una famiglia dice che il figlio riesce ad accedere solo dal telefono e la piattaforma non si vede bene. Cosa fai?`, opts:[`Prometti di procurargli un accesso speciale per il telefono`,`Spieghi con gentilezza che la piattaforma è pensata per il computer, suggerisci la versione desktop del sito o un computer e lo segnali se il corso lo richiede`,`Dici che così non può continuare il corso`], correct:1, fb:`Spiega il limite con gentilezza, proponi ciò che funziona e non promettere un accesso alternativo.`},
   {type:'choice', prompt:`Uno studente dice che i compiti non compaiono nella sua dashboard. Cosa fai?`, opts:[`Lo segnali con uno screenshot`,`Gli dici di riprovare un altro giorno`,`Segni i compiti come non consegnati`], correct:0, fb:`Se i compiti non compaiono, è un problema tecnico: segnalalo con uno screenshot.`},
   {type:'sort', prompt:'Lo risolvi tu o lo segnali?', card:`Uno studente non consegna i compiti e, quando glielo chiedi, dice che non riesce ad accedere alla piattaforma, nemmeno da Chrome su un computer.`, zones:[{label:'🧑‍🏫 Lo risolvo io', fb:'Non proprio — hai già provato le basi (Chrome su un computer). Ora è il momento di segnalarlo.'},{label:'📮 Lo segnalo', fb:'Esatto — lo segnali con i link BO dello studente e del gruppo, e ricontrolli dopo 24 ore.'}], correctZone:1},
   {type:'choice', prompt:`Hai segnalato che uno studente non riesce ad accedere ai compiti. Quando ricontrolli?`, opts:[`La settimana successiva`,`Solo se la famiglia scrive di nuovo`,`Dopo 24 ore`], correct:2, fb:`Si ricontrolla dopo 24 ore: così la famiglia non resta senza risposta.`}
  ]
 }
},
{id:'report', numLabel:'Modulo 4', emoji:'📮', color:'#F58AC4', art:'report', learn:[['🆘','Dove chiedere aiuto e chi contattare'],['🛣️','Scegliere il canale giusto'],['📅','Lezioni extra e spostamenti'],['🧾','Scrivere una segnalazione completa'],['💛','Rispondere alla famiglia in tempo'],['🖥️','Esercitarsi in una simulazione del BO']],
 eyebrow:'Modulo 4 di 4',
 title:'Segnalare e inoltrare',
 desc:'Dove chiedere aiuto e chi contattare nella tua regione, chi avvisare a seconda del problema, lezioni extra e spostamenti, cosa deve contenere una buona segnalazione, come rispondere alla famiglia in tempo e una simulazione del BO per esercitarti a segnalare un problema tecnico.',
 obj:'Sapere dove chiedere aiuto, chi avvisare, con quali dettagli e in quale ordine — e tenere informata la famiglia in tempo. Un problema non segnalato, o una famiglia senza risposta, per gli altri non esiste.',
 sections:[
  {t:'🆘 Dove chiedere aiuto e chi contattare', html:`
   <div class="card"><p>Non esiste un canale dedicato al supporto tecnico. Segnala i problemi qui:</p>
   ${numlist(['<strong>Il bot EU Request from Tutors</strong> — per i problemi di BO o di Classroom, come un link che non funziona','<strong>Il canale del corso</strong> — per i problemi legati a un corso o a un programma specifico'])}</div>
   <div class="card" style="background:var(--surface2)"><h4>👥 Chi contattare</h4>
   <div class="tbl-wrap"><table>
    <tr><th>Cosa è successo</th><th>Chi</th></tr>
    <tr><td>Un link di BO o di Classroom che non funziona, un problema di Classroom</td><td>Il bot EU Request from Tutors</td></tr>
    <tr><td>Un problema con un corso o un programma specifico</td><td>Il canale del corso</td></tr>
    <tr><td>Crediti delle lezioni mancanti, un orario sbagliato, una lezione scalata ingiustamente</td><td>Il tuo Team Leader + Operations / Client Service: <strong>@Erika Ietro</strong>, <strong>@Katarzyna Traczyk</strong></td></tr>
    <tr><td>Una lezione extra, o una lezione che non può svolgersi</td><td>Il tuo Team Leader</td></tr>
   </table></div></div>
  `},
  {t:'🛣️ Tre canali', html:`
   <div class="card"><p>A seconda del tipo di problema, la segnalazione segue un canale diverso:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Canale</th><th>Quando</th><th>Dove</th></tr>
    <tr><td><strong>1. Guasto di Classroom o della piattaforma</strong><br>(schermo nero, audio, lavagna, stanze, link non funzionanti)</td><td>Le soluzioni rapide non hanno risolto</td><td>Il bot EU Request from Tutors + commento in BO</td></tr>
    <tr><td><strong>2. Account e Operations</strong><br>(iscrizione, credenziali, orario, licenze, crediti delle lezioni, lezioni scalate)</td><td>Lo studente non riesce a entrare, non risulta iscritto, l’orario è sbagliato, le credenziali non funzionano o sono state scalate lezioni ingiustamente</td><td>Team Leader + Client Service + commento in BO (Operations: @Erika Ietro, @Katarzyna Traczyk)</td></tr>
    <tr><td><strong>3. Lezione persa</strong><br>(una o più lezioni compromesse)</td><td>Per un guasto della piattaforma, un annullamento o un’assenza</td><td><strong>Team Leader il giorno stesso</strong> (puoi chiedere una lezione extra) + Client Service se la famiglia è scontenta + commento in BO</td></tr>
   </table></div></div>
  `},
  {t:'📅 Lezioni extra e spostamenti', html:`
   ${iconGrid([
     {ic:'➕', html:`<strong>Lezione extra: prima parlane con il tuo Team Leader.</strong> Porta i tuoi dubbi e le tue proposte al tuo Team Leader prima di suggerire una lezione extra. Decide il tuo Team Leader.`},
     {ic:'🚫', html:`<strong>Non offrire mai una lezione extra alla famiglia</strong> prima che il tuo Team Leader l’abbia approvata.`},
     {ic:'🕒', html:`<strong>In generale, non puoi spostare una lezione.</strong>`},
     {ic:'1️⃣', html:`<strong>Si è presentato un solo studente?</strong> Fai la lezione a quello studente.`},
     {ic:'🧑‍🏫', html:`<strong>Il problema tecnico è dalla tua parte?</strong> Trova una soluzione alternativa o un tutor sostituto, così la lezione si svolge in orario.`},
     {ic:'📞', html:`<strong>Non c’è assolutamente modo di fare la lezione,</strong> oppure non si è presentato nessuno studente? Allora contatta il tuo Team Leader per chiedere uno spostamento.`}
   ])}
  `},
  {t:'🧾 Cosa contiene una segnalazione', html:`
   ${numlist([
     '<strong>Link BO</strong> del gruppo e dello studente (obbligatori)',
     'Allo studente è comparso un <strong>banner</strong>? Cosa diceva?',
     '<strong>Avvisi nella schermata di pre-accesso</strong> (per esempio, requisiti non supportati)',
     '<strong>Tipo di errore:</strong> schermo nero, niente audio, non riesce a entrare, il programma non si apre…',
     '<strong>Screenshot</strong>',
     'Dispositivo, sistema operativo, browser e, se rilevante, <strong>se usa una VPN</strong> e da quale paese',
     'Cosa hai provato e per quanto tempo',
     'Se è stata usata una piattaforma alternativa: <strong>la registrazione</strong>'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Com’è un commento utile in BO — copia e compila</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Lezione:</strong> [data] · <strong>Gruppo:</strong> [link BO] · <strong>Studente:</strong> [link BO]<br>
   <strong>Cosa non ha funzionato:</strong> [es. non è riuscito a entrare nella lezione; schermo nero durante la condivisione]<br>
   <strong>Banner o messaggio:</strong> [testo esatto, oppure “nessuno”] · <strong>Avvisi di pre-accesso:</strong> [sì / no, quali]<br>
   <strong>Dispositivo:</strong> [dispositivo, sistema, browser, VPN sì / no e paese]<br>
   <strong>Cosa ho provato:</strong> [es. aggiornare la pagina, rientrare, chiudere le app, versione precedente di Blender — 10 minuti]<br>
   <strong>Come è proseguita la lezione:</strong> [es. ha seguito la mia dimostrazione; piattaforma alternativa, registrata]<br>
   <strong>Screenshot:</strong> [allegato] · <strong>Parole della famiglia:</strong> [parola per parola, se ci sono]</p></div>
  `},
  {t:'🖥️ Esercitati: segnala un problema tecnico in BO', html:`
   <div class="card"><p>Ora fallo davvero, in una replica del Back Office. <strong>Uno studente non è riuscito a entrare nella lezione di oggi a causa di un problema tecnico.</strong> Segui il percorso guidato in 4 passi. Al <strong>passo 4</strong> scegli il Tipo di problema <strong>“Problema tecnico, per favore contattate lo studente”</strong> e scrivi il tuo commento con i fatti: cosa non ha funzionato, quando, il messaggio o il banner, cosa hai provato e le parole della famiglia.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Segnala un problema tecnico</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Segnala un problema tecnico" loading="lazy"></iframe></div></div>
   ${co('co-idea','📝',`<p><strong>Usa il modello qui sopra.</strong> Più il tuo commento è completo, prima qualcuno potrà contattare la famiglia.</p>`)}
  `},
  {t:'🔢 L’ordine conta', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Prima il team, poi la famiglia.</strong> Quando il problema va oltre il tuo insegnamento (accesso, orario, crediti, una lezione persa), non scrivere alla famiglia prima di aver parlato con il tuo Team Leader.`},
     {ic:'🎓', html:`<strong>Tu parli dell’apprendimento; l’azione la passi ad altri.</strong> Puoi dire cosa hai provato durante la lezione e che te ne stai occupando. Le opzioni (lezione extra, cambio di gruppo o di corso, compensazione) arrivano dal tuo Team Leader e dal Client Service.`},
     {ic:'⚖️', html:`<strong>Non promettere mai e non rifiutare mai.</strong> Né <em>“vi daremo una lezione extra”</em> né <em>“non è possibile”</em>. Mostra invece che ti importa e che te ne stai già occupando.`},
     {ic:'📅', html:`<strong>Inoltra una volta e ricontrolla.</strong> Metti un promemoria nel calendario per verificare dopo due lezioni.`}
   ])}
   ${co('co-ok','💬',`<p><strong>Un messaggio che puoi inviare</strong> (dopo averlo concordato con il tuo Team Leader): <em>“Buongiorno [nome del genitore]. Ho visto che oggi [studente] non è riuscito a entrare nella lezione. L’ho già segnalato al mio team con tutti i dettagli, e il Servizio Clienti la contatterà. Nel frattempo le invio la registrazione, così non si perde nulla di ciò che abbiamo visto.”</em></p>`)}
  `},
  {t:'💛 Rispondi in tempo: le famiglie notano il tuo impegno', html:`
   <div class="card"><p>Un guasto tecnico è raramente l’unico motivo per cui una famiglia se ne va. A fare la differenza è ciò che succede <strong>dopo</strong>: qualcuno risponde? Il bambino riesce a rientrare? La famiglia sente che a qualcuno importa? Quando i genitori vedono che ti stai impegnando perché tutto funzioni — rispondi in fretta, ricontrolli, ti assicuri che il loro figlio abbia la migliore lezione possibile — se ne accorgono. È questo impegno che porta molte famiglie a <strong>darci una seconda possibilità</strong>. Il silenzio comunica il contrario.</p></div>
   ${co('co-danger','🚨',`<p><strong>Non trattare un problema tecnico come una cosa da poco.</strong> Per te può essere uno schermo nero. Per la famiglia è una lezione pagata, un bambino deluso e un dubbio: <em>“ne vale la pena?”</em> Prendilo sul serio, anche se è durato cinque minuti — e soprattutto se la famiglia ha già mostrato di essere scontenta.</p>`)}
   ${rclock([
     {ic:'👀', when:'Subito', t:'Visto, me ne occupo', d:'Conferma subito di aver ricevuto il messaggio, anche se non hai ancora la risposta.'},
     {ic:'📮', when:'Il giorno stesso', t:'Segnala e allineati', d:'Commento in BO con tutti i dettagli, Team Leader informato, e accordo su cosa dire alla famiglia.'},
     {ic:'💬', when:'Il giorno stesso', t:'Aggiorna la famiglia', d:'Di’ cosa hai fatto e quando scriverai di nuovo — e fallo, anche se non ci sono novità.'},
     {ic:'🚪', when:'Lezione successiva', t:'Fai in modo che funzioni', d:'Entra in anticipo, testa tutto e verifica che lo studente riesca a entrare. Poi chiudi il cerchio.'}
   ])}
   ${co('co-ok','💬',`<p><strong>Confermare di aver ricevuto il messaggio è sempre consentito.</strong> Un messaggio breve e gentile — hai visto, ti importa, te ne stai occupando e quando scriverai di nuovo — non ha bisogno dell’approvazione di nessuno. Ciò che aspetta il tuo Team Leader è qualsiasi spiegazione, qualsiasi opzione e tutto ciò che riguarda le compensazioni.</p>`)}
   ${chatMock({
     name:'Genitore', sub:'online', avatar:'👩', time:'18:02',
     msgs:[`Buonasera. È la <strong>seconda volta</strong> che mio figlio non riesce a entrare nella lezione. Paghiamo lezioni che non riceve ed è molto deluso. Cosa sta succedendo??`],
     title:'Come rispondi?',
     text:'Sono le 18. Hai appena visto il messaggio e non hai ancora parlato con il tuo Team Leader. Tocca ogni risposta per vedere cosa succede.',
     opts:[
      {t:`“Buonasera! Di solito Classroom funziona bene, probabilmente è la vostra connessione. Provate un altro browser.”`, ok:false, fb:`Hai dato la colpa alla famiglia e alla piattaforma nello stesso momento, senza mostrare che ti importa. Il genitore lo leggerà come “non è un mio problema”.`},
      {t:`“Mi dispiace molto — due lezioni perse non vanno bene, e capisco quanto sia deluso. Ho visto il suo messaggio e me ne sto occupando: oggi stesso lo segnalo al mio team con tutti i dettagli. Le riscrivo domattina con aggiornamenti, e alla prossima lezione entrerò in anticipo per assicurarmi che riesca a entrare.”`, ok:true, fb:`È questa. Riconosce il problema e il sentimento, mostra un impegno concreto, dice quando scriverai di nuovo e non promette nulla che non spetti a te decidere.`},
      {t:`“Non si preoccupi, gli darò una lezione extra gratuita per recuperare!”`, ok:false, fb:`Gentile, ma non spetta a te prometterlo: lezioni extra e compensazioni si decidono con il tuo Team Leader e il Client Service. Se poi non si può fare, la famiglia perde di nuovo fiducia.`},
      {t:`Rispondo domani, quando avrò la risposta completa.`, reply:`<i>(nessuna risposta stasera…)</i>`, ok:false, fb:`Il silenzio è l’opzione peggiore. Il genitore è già scontento; ogni ora senza risposta conferma che a nessuno importa. Conferma sempre subito di aver ricevuto il messaggio.`}
     ]
   })}
   ${co('co-star','🌟',`<p><strong>Ricorda:</strong> un guasto tecnico si può perdonare. Sentirsi ignorati è molto più difficile da perdonare. La tua risposta, il tuo follow-up e il tuo impegno perché lo studente recuperi l’accesso e abbia la migliore lezione possibile sono ciò che molte famiglie vedono — ed è per questo che decidono di restare.</p>`)}
  `}
 ],
 ix:{
  title:'Segnala bene, e nell’ordine giusto',
  instr:'Scegli il canale, il commento migliore e cosa diresti. 70% per completare questo modulo.',
  items:[
   {type:'sort', prompt:'Quale canale segue questa segnalazione?', card:`Una famiglia dice che dal pacchetto sono state scalate due lezioni, ma se n’è svolta solo una.`, zones:[{label:'1️⃣ Guasto di Classroom o della piattaforma', fb:'Non proprio — in Classroom non si è guastato nulla; si tratta di crediti delle lezioni.'},{label:'2️⃣ Account e Operations', fb:'Esatto — crediti e lezioni scalate vanno al tuo Team Leader e al Client Service, con un commento in BO. Li verifica il team Operations.'},{label:'3️⃣ Lezione persa', fb:'Non proprio — la lezione non è andata persa per un guasto; è una questione di crediti.'}], correctZone:1},
   {type:'sort', prompt:'Quale canale segue questa segnalazione?', card:`La lavagna resta visibile dopo averla chiusa, e uscire e rientrare non risolve.`, zones:[{label:'1️⃣ Guasto di Classroom o della piattaforma', fb:'Esatto — le soluzioni rapide non hanno risolto: segnalalo (bot EU Request from Tutors) con un commento in BO.'},{label:'2️⃣ Account e Operations', fb:'Non proprio — non ha nulla a che fare con l’account dello studente.'},{label:'3️⃣ Lezione persa', fb:'Non proprio — la lezione è andata avanti; è un guasto di Classroom.'}], correctZone:0},
   {type:'choice', prompt:`Qual è il commento in BO migliore per lo stesso caso?`, opts:[`“Non è riuscito a entrare, connessione scarsa.”`,`“3/11, lezione 2. Non è riuscito a entrare: banner ‘System not supported’ nella schermata di pre-accesso. Windows 7, Chrome aggiornato. Provato ad aggiornare la pagina e a rientrare, 10 min; per il resto della lezione ha seguito la mia dimostrazione. Screenshot allegato. Link BO del gruppo e dello studente.”`,`“La piattaforma di nuovo non funziona, succede sempre.”`], correct:1, fb:`Il commento utile è completo e neutro: data, cosa non ha funzionato, il banner, il dispositivo, cosa hai provato, come è proseguita la lezione, lo screenshot e i link BO.`},
   {type:'choice', prompt:`Uno studente ha perso una lezione per un guasto della piattaforma e la famiglia è scontenta. Cosa viene prima?`, opts:[`Scrivere alla famiglia e offrire una lezione extra`,`Aspettare e vedere se la prossima lezione funziona`,`Parlare con il tuo Team Leader il giorno stesso, chiedere una lezione extra e concordare con lui il messaggio per la famiglia`], correct:2, fb:`Prima il team, poi la famiglia. Puoi chiedere la lezione extra; decide il tuo Team Leader, e solo dopo la famiglia ne viene a conoscenza.`},
   {type:'choice', prompt:`È l’ora della lezione ed è entrato solo uno dei sei studenti. Cosa fai?`, opts:[`Fai la lezione a quell’unico studente`,`Chiedi al tuo Team Leader di spostare la lezione`,`Aspetti 30 minuti e poi annulli`], correct:0, fb:`Se si presenta un solo studente, fai la lezione a quello studente. Lo spostamento è solo per quando non c’è assolutamente modo di fare la lezione, o non si presenta nessuno.`},
   {type:'choice', prompt:`Un genitore scrive, arrabbiato: “È la seconda volta che mio figlio non riesce a entrare.” Sono le 18 e non hai ancora parlato con il tuo Team Leader. Cosa fai per prima cosa?`, opts:[`Aspetti domani, parli con il tuo Team Leader e rispondi una volta sola con tutte le risposte`,`Rispondi subito, in breve: ti dispiace, hai visto, te ne stai occupando e riscriverai con aggiornamenti — poi ti allinei con il tuo Team Leader`,`Spieghi come funziona Classroom, così capiscono che raramente è colpa della piattaforma`], correct:1, fb:`Confermare di aver ricevuto il messaggio è sempre consentito, e il silenzio fa più danni del guasto stesso. Rispondi subito con calore e indicando quando arriverà il prossimo aggiornamento; spiegazioni e opzioni aspettano il tuo Team Leader.`}
  ]
 }
},
{id:'checklist', numLabel:'Checklist finale', emoji:'✅', color:'#FFD34D', art:'shield', learn:[['🛟','Se esiste una richiesta di rimborso'],['🧭','Prima · durante · dopo']],
 eyebrow:'Checklist finale',
 title:'Checklist finale',
 desc:'Niente verifica qui — solo l’essenziale di questo mini-training, prima, durante e dopo la lezione.',
 obj:'Scorri la checklist qui sotto. Questo modulo non ha voto — leggilo, poi concludi il mini-training.',
 sections:[
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   ${numlist([
     'Ho lasciato un commento in BO il giorno stesso in cui ho saputo della richiesta, con date, cosa non ha funzionato, il messaggio o il banner, cosa ho provato e uno screenshot, e ho avvisato il mio Team Leader',
     'La mia lezione successiva con questo studente era a prova di guasto tecnico: 15 minuti in anticipo, altre app chiuse, un piano B, un’attenzione specifica e un successo visibile',
     'Non ho mai confermato un’approvazione, non ho mai parlato di importi e non ho mai dato la colpa alla piattaforma — ho usato l’unica frase sicura'
   ])}
  `},
  {t:'🧭 Prima, durante e dopo', html:`
   ${tabsBlock([
     {ic:'🧰', title:'Prima', html:`<div class="card">${numlist(['Chrome per desktop, aggiornato, altre app chiuse','Microfono, videocamera e schermo testati','BO: gruppo, elenco studenti e link','Avvisi del pre-accesso','Corso 🟡 / 🔴: computer verificato prima della lezione 1','Alla lezione 1 entro in anticipo'])}</div>`},
     {ic:'🛠️', title:'Durante', html:`<div class="card">${numlist(['Prima la calma','Aggiornare la pagina, rientrare, chiudere le app, controllare il dispositivo','10 minuti, poi inoltro tramite il bot EU Request from Tutors','Lo strumento del corso non funziona? Dimostrazione + risposte a voce, oppure l’alternativa del corso','Piattaforma alternativa solo se la lezione è a rischio: registrata e segnalata al mio Team Leader il giorno stesso','Se il problema riguarda molti, lo segnalo subito','Non faccio l’attività al posto dello studente'])}</div>`},
     {ic:'🏠', title:'Dopo', html:`<div class="card">${numlist(['Riesce ad accedere ai compiti?','Aiuto con il programma dopo la lezione','Registrazione, piano di recupero e, se serve, una lezione extra chiesta al mio Team Leader','Segnalazione il giorno stesso con tutti i dettagli','Rispondo alla famiglia in tempo e la tengo aggiornata, anche senza novità','Ricontrollo dopo 24 ore','Chiudo il cerchio con la famiglia'])}</div>`}
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Il mini-training è tutto qui.</strong> Quando sei pronto, continua, poi completa il DST nell’LMS per chiudere l’assegnazione.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
