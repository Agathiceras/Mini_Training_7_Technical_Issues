/* Mini_Training_7_Technical_Issues - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Problemas técnicos — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Cuando la <span class=\"h-pill\">tecnología</span> falla",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes cuyas familias han pedido un reembolso por problemas técnicos. Aquí verás qué puedes hacer antes, durante y después de la clase, y cómo reportarlo para que se resuelva a tiempo.",
    heroWork:"Completa 6 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 25–35 minutos.",
    startBtn:"🚀 Comenzar el entrenamiento",
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la comprobación del módulo',
    finishBtn:'▶ Finalizar el mini-entrenamiento',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Comprobación del módulo — 70 % para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Comprobación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntuación hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es «{label}».',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Has desbloqueado el siguiente módulo.",
    resDone:"Has completado este mini-entrenamiento.",
    resNeed:'Necesitas un 70 % para desbloquear el siguiente módulo. Repasa la sección anterior y vuelve a intentar la comprobación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resFinish:'Continuar',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Mini-entrenamiento completado',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! Has completado este mini-entrenamiento.</strong>",
    doneP2:"¡Ya terminaste aquí! Por favor, vuelve a la página de capacitación del LMS desde la que accediste a este mini-entrenamiento para cerrar la tarea.",
    doneP3:"👉 <strong>Si debajo de la capacitación en el LMS aparece una comprobación o evaluación, asegúrate de completarla y obtener una puntuación aprobatoria</strong> — de lo contrario, la tarea podría quedar incompleta.",
    doneP4:'¡Mucho éxito! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos los módulos están ahora desbloqueados para revisión.',
    devOn:'🔓 Modo Dev activado — todos los módulos desbloqueados',
    devOff:'🔒 Modo Dev desactivado — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Ten en cuenta:',
    cvSee:'Lo que ves:',
    cvDo:'Lo que haces:',
    dtExample:'Ejemplo de una clase real',
    dtNext:'Siguiente:',
    dtDone:"✅ Eso es todo sobre los tres niveles.",
    tlVideoTitle:'{label} — un ejemplo de una clase real',
    tlVideoMeta:'Mira cómo se ve esta fase en una clase real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'var(--coral)',
 title:'Por qué estás aquí',
 desc:'Por qué un problema técnico en las primeras clases puede costar una familia, qué parte es tuya — y qué hacer si ya existe una solicitud de reembolso.',
 obj:'Entender por qué un problema técnico en las primeras clases puede costar una familia, qué parte es tuya, y qué hacer cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'📊 Lo que muestran los datos', html:`
   <div class="card"><p>Un problema técnico casi nunca llega solo. Llega en las primeras clases, cuando la familia todavía está decidiendo si Kodland es para ellos — y a veces antes de que el niño haya visto una sola clase.</p></div>
   ${bigStat('≈ 1 de 20',`<p>solicitudes de reembolso tiene detrás un <strong>problema técnico real</strong>. Y es un mínimo: parte de estos casos llegan etiquetados con otro motivo.</p>`)}
   ${bigStat('6 de 10',`<p>de estos casos aparecen <strong>hacia la clase 5</strong>, y <strong>1 de cada 7</strong> niños nunca llegó a asistir a una clase.</p>`)}
   ${bigStat('1 de 4',`<p>se recupera cuando el niño <strong>nunca llegó a asistir</strong>. En las clases 1–2 se recupera <strong>1 de cada 2</strong>, y desde la clase 3, <strong>3 de cada 4</strong>. Cuanto más temprano aparece el problema, más difícil es recuperarlo.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Basado en las solicitudes de reembolso de los últimos 90 días en todas las regiones; cifras aproximadas.</p>
   ${co('co-idea','💡',`<p><strong>Las primeras clases son la ventana más estrecha.</strong> Un problema técnico resuelto el mismo día suele salvarse; el mismo problema resuelto tarde casi nunca. Por eso cuentan las primeras clases y por eso cuenta el mismo día.</p>`)}
  `},
  {t:'🧭 Qué es tuyo y qué no', html:`
   <div class="card"><p>No puedes arreglar un bug de la plataforma ni una matrícula. Pero hay mucho que sí está en tus manos — y lo más importante es <strong>avisar rápido y bien</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Totalmente tuyo</th><th>🔁 Tuyo para adaptar y para reportar</th><th>🚫 Fuera de tu control</th></tr>
    <tr><td>Revisar tu propia conexión, tu equipo y Chrome antes de cada clase</td><td>Un estudiante que no puede entrar o conectarse: ayúdalo con los primeros auxilios y <strong>reporta</strong></td><td>Corregir un bug de Classroom o de la plataforma</td></tr>
    <tr><td>Mantener la calma y normalizar el problema delante del grupo</td><td>Una clase que se perdió por una falla: adapta la siguiente y <strong>reporta</strong></td><td>La matrícula, las credenciales y las licencias</td></tr>
    <tr><td>Silenciar y volver a activar micrófonos con cuidado</td><td>Un dispositivo que no cumple los requisitos: <strong>reporta antes de la clase 1</strong></td><td>Si se ofrece una clase extra, un cambio de grupo o una compensación</td></tr>
    <tr><td>Reportar el mismo día con datos completos</td><td>Una falla que afecta a varios estudiantes: triage, <strong>reporte</strong> y plan de recuperación</td><td>La política de VPN y los bloqueos por país</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Tu parte tiene tres movimientos:</strong> primeros auxilios en la clase, ajustar la clase para que el daño sea el menor posible, y <strong>reportar el mismo día</strong> con los datos completos.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>No esperes en silencio.</strong> Si en 10 minutos no se resuelve, deja de intentarlo a solas: comunica, documenta, escala.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso por un problema técnico', html:`
   <div class="card"><p>Todo lo anterior trata de prevenirlo. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso por un problema técnico. Lee primero estas reglas.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú.</strong> Te enteras por los comentarios de Servicio al Cliente en el perfil del estudiante en BO; no hay ningún aviso automático.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud</strong> — ni al niño ni a la familia — salvo que Servicio al Cliente te pida decir algo concreto. Si el niño la menciona, redirige con calidez y sigue enseñando.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Esa clase tiene que ser <strong>técnicamente a prueba de fallas</strong>. Una segunda falla después de la solicitud es el peor escenario posible.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 minutos antes:</strong> Chrome de escritorio actualizado; micrófono, cámara y compartir pantalla probados; grupo y lista de estudiantes revisados en BO.`},
     {ic:'🅱️', html:`<strong>Un plan B pensado:</strong> qué haces si el estudiante no entra o si el audio falla (lo verás en los Módulos 1 y 2).`},
     {ic:'👀', html:`<strong>Atención específica</strong> para ese niño — que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🏆', html:`<strong>Un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Si la falla se repite en esa clase, repórtala de inmediato</strong> — no al final del día.</p>`)}
  `},
  {t:'📮 Avisa el mismo día y conoce la única frase segura', html:`
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que viste: fechas, qué falló, el mensaje de error o el banner, qué intentaste y una captura',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día',
     'Nunca confirmes que un reembolso fue aprobado, no hables de montos y no culpes a la plataforma'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase que siempre es segura:</strong> <em>«Servicio al Cliente le ayudará con esto.»</em> Ahí termina tu parte de la conversación.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Aunque la solicitud se retire o el niño pase a otro grupo, sigue cuidando la parte técnica de sus clases durante las siguientes semanas: entra antes, prueba tu equipo y pregúntale si todo funciona. Una recuperación que dura una clase y luego vuelve en silencio a la normalidad muchas veces no se sostiene.</p></div>
  `}
 ],
 ix:{
  title:'Lo tuyo, lo que reportas y lo que no es tuyo',
  instr:'Clasifica cada situación y elige la mejor acción. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿De quién es esta parte?', card:`Una falla de Classroom hizo perder la mitad de la clase de ayer.`, zones:[{label:'✅ Totalmente mía', fb:'No exactamente — la falla no la puedes corregir tú. Lo que sí es tuyo es adaptar la clase siguiente y reportarlo.'},{label:'🔁 Mía para adaptar y reportar', fb:'Correcto — adaptas la clase siguiente para recuperar lo esencial y lo reportas el mismo día.'},{label:'🚫 Fuera de mi control', fb:'No del todo — corregir la falla no es tuyo, pero adaptar la clase siguiente y reportarlo sí lo es.'}], correctZone:1},
   {type:'sort', prompt:'¿De quién es esta parte?', card:`Decidir si a la familia se le ofrece una clase extra por la clase perdida.`, zones:[{label:'✅ Totalmente mía', fb:'No exactamente — tú no ofreces ni descartas una clase extra.'},{label:'🔁 Mía para adaptar y reportar', fb:'No del todo — tu parte es reportar la clase perdida; la decisión no es tuya.'},{label:'🚫 Fuera de mi control', fb:'Correcto — eso lo deciden tu Team Leader y Servicio al Cliente. Tú reportas la clase perdida el mismo día.'}], correctZone:2},
   {type:'choice', prompt:`Un padre te escribe: «Ya pedimos el reembolso, la plataforma nunca funcionó.» ¿Qué haces?`, opts:[`Le explicas que la plataforma funciona bien y que seguramente era su conexión`,`Le respondes «Servicio al Cliente le ayudará con esto», dejas un comentario en BO con lo que viste y sus palabras exactas, y avisas a tu Team Leader el mismo día`,`Le prometes que en la próxima clase todo funcionará y que no hace falta el reembolso`], correct:1, fb:`No discutes, no prometes y no hablas de la solicitud. Usas la frase segura y das a tu equipo los datos el mismo día.`},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es una buena frase para la familia?', card:`«Es culpa de la plataforma, a nosotros también nos pasa todo el tiempo.»`, zones:[{label:'💎 Tesoro', fb:'No exactamente — culpar a la plataforma quita confianza y no resuelve nada.'},{label:'🗑️ Basura', fb:'Correcto — nunca culpes a la plataforma. Di que ya lo estás revisando con tu equipo.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Módulo 1', emoji:'🧰', color:'var(--coral)',
 title:'Antes de la clase',
 desc:'Los 15 minutos antes de cada clase, los problemas de acceso, matrícula, horario y enlace, y cómo saber si el equipo del estudiante sirve para su curso.',
 obj:'Detectar y reportar los problemas de acceso antes de que la familia pierda la clase.',
 sections:[
  {t:'⏱️ Los 15 minutos antes', html:`
   <div class="card"><p>La mayoría de los problemas de acceso se pueden ver <strong>antes</strong> de que empiece la clase. Estos 15 minutos son tu mejor seguro.</p></div>
   ${numlist([
     'Abre la clase en <strong>Google Chrome de escritorio, actualizado</strong>. Es el único navegador plenamente compatible; Safari y otros no lo son del todo.',
     'Prueba el micrófono y la cámara. Si el navegador no pidió permisos, actívalos a mano: ícono a la izquierda de la URL → Cámara y Micrófono en «Permitir siempre».',
     'Revisa en BO el grupo y la lista de estudiantes. Fíjate si hay <strong>advertencias en la pantalla previa a unirse</strong> (por ejemplo, requisitos del sistema no compatibles).',
     'En la <strong>primera clase de un estudiante nuevo</strong>, entra antes y espera. Si a los 5 minutos de la hora no ha entrado, repórtalo; no esperes a que termine la clase.'
   ])}
   ${doavoid(
     ['Entrar 15 minutos antes y probarlo todo','Usar Chrome de escritorio actualizado','Revisar el grupo en BO antes de cada clase','Reportar en el momento si un estudiante nuevo no aparece'],
     ['Abrir la clase en el último minuto','Dar clase desde Safari u otro navegador','Esperar hasta el final de la clase para avisar que alguien no entró','Suponer que «ya entrará»']
   )}
  `},
  {t:'🩺 Síntomas antes de la clase', html:`
   <div class="card"><p>Abre cada síntoma. Fíjate en tres cosas: <strong>lo que haces</strong>, <strong>lo que puedes decir</strong> y <strong>dónde reportar</strong>.</p></div>
   ${accItem('🚪 No aparece el botón de acceso', `
    <p><strong>🎯 Lo que haces:</strong> recarga, revisa que uses Chrome y confirma en BO que el estudiante está en el grupo. Si sigue igual, repórtalo con el enlace de BO del grupo y del estudiante.</p>
    <p><strong>💬 Qué puedes decir:</strong> <em>«Estoy revisando el acceso con mi equipo y te escribo en cuanto tenga novedades.»</em></p>
    <p><strong>📮 Dónde reportar:</strong> canal de soporte técnico de Classroom + comentario en BO.</p>`)}
   ${accItem('📋 «No aparezco registrado»', `
    <p><strong>🎯 Lo que haces:</strong> <strong>no confirmes ni niegues el registro.</strong> Compruébalo en BO y avisa a tu Team Leader y a Servicio al Cliente.</p>
    <p><strong>💬 Qué puedes decir:</strong> <em>«Estoy verificando tu acceso con mi equipo.»</em></p>
    <p><strong>📮 Dónde reportar:</strong> Team Leader + Servicio al Cliente + comentario en BO.</p>`)}
   ${accItem('🕒 El horario no es el que pidió la familia', `
    <p><strong>👀 Lo que ves:</strong> la clase está a otra hora, o llegó una notificación con otra fecha de inicio.</p>
    <p><strong>🎯 Lo que haces:</strong> no cambies nada tú. Avisa a tu Team Leader el mismo día.</p>
    <p><strong>💬 Qué puedes decir:</strong> reconoce la molestia, sin explicar por qué ocurrió ni prometer un cambio: <em>«Entiendo que es incómodo. Ya lo compartí con mi equipo para que te contacten.»</em></p>
    <p><strong>📮 Dónde reportar:</strong> Team Leader + Servicio al Cliente + comentario en BO.</p>`)}
   ${accItem('✉️ La familia dice que no recibió el enlace o las credenciales', `
    <p><strong>🎯 Lo que haces:</strong> verifica en BO qué se envió y repórtalo. No improvises enlaces.</p>
    <p><strong>💬 Qué puedes decir:</strong> <em>«Servicio al Cliente le ayudará a recibirlo hoy.»</em></p>
    <p><strong>📮 Dónde reportar:</strong> Team Leader + Servicio al Cliente + comentario en BO.</p>`)}
   ${accItem('🧑‍💼 Eres TSM o TL y no puedes entrar a la clase', `
    <p><strong>🎯 Lo que haces:</strong> sigue la solución publicada en el canal de soporte de Classroom; si no funciona, avisa en ese mismo canal.</p>`)}
   ${co('co-warn','🔗',`<p><strong>¿Un enlace alternativo cuando el estudiante no puede entrar?</strong> Solo en una emergencia, <strong>una sola vez</strong>, y siempre con reporte el mismo día. Enviar enlaces alternativos clase tras clase esconde el problema: nadie lo arregla porque nadie se entera.</p>`)}
  `},
  {t:'💻 Antes de la clase 1: ¿el equipo sirve?', html:`
   <div class="card"><p>Los casos de reembolso por un equipo que no sirve suelen descubrirse <strong>en la primera clase</strong>. Cada curso pide algo distinto:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Fácil', desc:'Funtech · Scratch · Python 1 / Python Pro · Web · Dibujo en papel', note:'Basta con Chrome (y en Web, VS Code). <strong>Revisión normal antes de la clase.</strong>'},
     {ic:'🟡', title:'Revisar', desc:'Creatividad digital · Diseño gráfico · Ilustración · Roblox · Minecraft', note:'Piden herramientas, instalación, cuenta o pantalla concretas. <strong>Confirma el equipo antes de la clase 1.</strong>'},
     {ic:'🔴', title:'Exigente', desc:'Modelado 3D · Unity', note:'8 GB de RAM, sistema y hardware concretos. <strong>Confirma el equipo antes de la clase 1.</strong>'}
   ],3)}
   ${accItem('📋 Ver los requisitos por curso', `
    <p><strong>En general:</strong> Chrome actualizado · mínimo 4 GB de RAM (8 GB para Blender o Unity) · 10 Mbps, mejor por cable · 5 GB libres. <strong>No usar Safari</strong> (en Mac tiene fallas conocidas con la plataforma).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Curso</th><th>Requisitos</th><th>Nivel</th></tr>
     <tr><td>Funtech</td><td>Solo Chrome. Sin instalar nada.</td><td>🟢 Fácil</td></tr>
     <tr><td>Scratch</td><td>Solo Chrome. Windows, Mac y tablet.</td><td>🟢 Fácil</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + cuenta de Google (Google Colab).</td><td>🟢 Fácil</td></tr>
     <tr><td>Web</td><td>Chrome + VS Code. Windows, Mac o Linux.</td><td>🟢 Fácil</td></tr>
     <tr><td>Dibujo en papel</td><td>Solo Chrome para ver la clase. Materiales físicos.</td><td>🟢 Fácil</td></tr>
     <tr><td>Creatividad digital</td><td>Chrome. Herramientas en línea (Canva u otras).</td><td>🟡 Revisar</td></tr>
     <tr><td>Diseño gráfico</td><td>Chrome + Canva. Pantalla de al menos 1280×768.</td><td>🟡 Revisar</td></tr>
     <tr><td>Ilustración</td><td>Chrome + Krita o una herramienta en línea. Recomendado: tableta gráfica o pantalla táctil.</td><td>🟡 Revisar</td></tr>
     <tr><td>Roblox</td><td>Windows o Mac (no tablet, no Linux). 4 GB. <strong>Instalar Roblox Studio antes de la clase 1.</strong></td><td>🟡 Revisar</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac o Linux. Java Edition recomendada. 4 GB. Requiere cuenta de Minecraft.</td><td>🟡 Revisar</td></tr>
     <tr><td>Modelado 3D</td><td>8 GB. Mouse con rueda. GPU dedicada recomendada. Windows o Mac.</td><td>🔴 Exigente</td></tr>
     <tr><td>Unity</td><td>8 GB. 10 GB libres. Windows o Mac. No Chromebook.</td><td>🔴 Exigente</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>La regla:</strong> si ves en BO que el estudiante tiene un curso <strong>🟡 Revisar</strong> o <strong>🔴 Exigente</strong>, confirma el equipo antes de la clase 1, con un mensaje aprobado por tu Team Leader. Si el equipo no cumple, <strong>repórtalo antes de la clase 1</strong>: lo que se vendió y lo que se informó a la familia no lo arreglas tú, pero tu aviso a tiempo sí cambia lo que pasa después.</p>`)}
  `}
 ],
 ix:{
  title:'Antes de que empiece la clase',
  instr:'Elige la primera acción y lo que dirías. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Cuál es tu primera acción?', card:`Faltan 10 minutos para la clase y un estudiante dice que no le aparece el botón de acceso.`, zones:[{label:'🔁 Recargar, revisar Chrome y confirmar en BO que está en el grupo', fb:'Correcto — primeros auxilios rápidos. Si sigue igual, reportas con los enlaces de BO del grupo y del estudiante.'},{label:'🔗 Enviarle un enlace de Zoom para esa clase', fb:'No exactamente — un enlace alternativo es solo para emergencias, una vez y con reporte. Primero, los primeros auxilios.'},{label:'⏳ Esperar a ver si entra más tarde', fb:'No exactamente — esperar en silencio hace perder la clase. Actúa ahora.'}], correctZone:0},
   {type:'sort', prompt:'¿Cuál es tu primera acción?', card:`El curso del estudiante es Unity y en BO ves que su clase 1 es el jueves.`, zones:[{label:'⏳ Nada — lo veremos en la clase 1', fb:'No exactamente — en Unity, los problemas de equipo suelen descubrirse en la primera clase, cuando ya es tarde.'},{label:'💻 Confirmar el equipo antes de la clase 1, con un mensaje aprobado por tu Team Leader', fb:'Correcto — Unity es un curso exigente. Confirmar el equipo antes evita perder la primera clase.'},{label:'📝 Pedirle a la familia que compre un equipo mejor', fb:'No exactamente — tú no pides compras. Confirmas el equipo y, si no cumple, lo reportas.'}], correctZone:1},
   {type:'choice', prompt:`Una madre escribe: «Mi hijo no aparece registrado en la clase.» ¿Qué le respondes?`, opts:[`«Tu hijo no está registrado, tienes que hablar con ventas.»`,`«Sí, está registrado, seguramente es un error tuyo.»`,`«Estoy verificando tu acceso con mi equipo.»`], correct:2, fb:`No confirmes ni niegues el registro. Lo compruebas en BO y avisas a tu Team Leader y a Servicio al Cliente.`},
   {type:'choice', prompt:`La familia dice que la clase quedó a otra hora de la que pidieron. ¿Qué haces?`, opts:[`Reconoces la molestia sin prometer un cambio y avisas a tu Team Leader el mismo día`,`Les ofreces cambiarla tú a la hora que prefieran`,`Les explicas que el horario ya no se puede cambiar`], correct:0, fb:`El horario no lo cambias tú, y tampoco descartas un cambio. Reconoces la molestia y avisas a tu equipo el mismo día.`},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es una buena frase para la familia?', card:`«Tu hijo no está registrado.»`, zones:[{label:'💎 Tesoro', fb:'No exactamente — no confirmes ni niegues el registro. Di: «Estoy verificando tu acceso con mi equipo.»'},{label:'🗑️ Basura', fb:'Correcto — no confirmes ni niegues el registro. Di: «Estoy verificando tu acceso con mi equipo.»'}], correctZone:1}
  ]
 }
},
{id:'during', numLabel:'Módulo 2', emoji:'🛠️', color:'var(--coral)',
 title:'Durante la clase',
 desc:'El primer movimiento es emocional, la regla de los 10 minutos, y qué hacer con el equipo, Classroom, el audio y la cámara, las fallas de varios estudiantes y Zoom de emergencia.',
 obj:'Resolver lo que se pueda en 10 minutos, proteger el ánimo del grupo y no perder la clase entera por un problema técnico.',
 sections:[
  {t:'🧘 El primer movimiento es emocional', html:`
   <div class="card"><p>Antes de tocar nada, <strong>mantén la calma y normalízalo en voz alta</strong>: <em>«Esto pasa a veces, lo arreglamos juntos.»</em> Un adulto tranquilo le dice al niño que no pasa nada, y el grupo toma la señal de ti. Solo después, resuelve.</p></div>
  `},
  {t:'⏱️ La regla de los 10 minutos', html:`
   <div class="card"><p>Si no lo resuelves en <strong>10 minutos</strong>, deja de intentarlo en silencio.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Comunica: al estudiante, al grupo y, si hace falta, a tu equipo'},
     {ic:'📝', label:'Documenta: qué falló, el mensaje, una captura, qué intentaste'},
     {ic:'📮', label:'Escala: repórtalo por el canal que corresponde'}
   ])}
  `},
  {t:'💻 Equipo y software', html:`
   ${accItem('🐢 El computador no cumple los mínimos y la aplicación no funciona', `
    <p><strong>🎯 Lo que haces:</strong> cambia la actividad para que el niño siga la clase de forma útil (demostración por pantalla compartida, un ejemplo guiado) y <strong>reporta</strong> que el equipo no cumple el requisito.</p>
    <p><strong>🚫 Evita:</strong> prometer un cambio de curso.</p>`)}
   ${accItem('🧱 No puede descargar o instalar Roblox', `
    <p><strong>🎯 Lo que haces:</strong> revisa el sistema operativo y el espacio libre (ver los requisitos del Módulo 1). No uses la clase entera para instalar: reporta.</p>`)}
   ${accItem('🐌 Unity o Blender se traban mientras se ve la clase', `
    <p><strong>🎯 Lo que haces:</strong> pide cerrar otras pestañas y aplicaciones. Unity y Blender piden 8 GB de RAM. Si sigue, reporta.</p>`)}
   ${accItem('🔥 Classroom consume mucho', `
    <p><strong>🎯 Lo que haces:</strong> cierra pestañas y aplicaciones, y reporta con el modelo y el sistema del equipo.</p>`)}
   ${accItem('🌐 La VPN lo vuelve todo lento', `
    ${co('co-warn','🚧',`<p><strong>Contenido pendiente de confirmación por tu región.</strong></p>`)}`)}
  `},
  {t:'🖥️ Classroom', html:`
   <div class="card"><p>Las soluciones rápidas más frecuentes. Los pasos completos y actualizados están en la guía <strong>«Classroom Issues Quick Fixes»</strong> del equipo de Classroom.</p></div>
   ${accItem('⬛ Pantalla o cámara negra', `<p>Detén y vuelve a compartir. Si pasa porque el estudiante estaba en la pestaña de Assignments, repítelo. Verifica que use Chrome. Si no se arregla, reporta.</p>`)}
   ${accItem('▬ Un rectángulo negro en lugar de tu pantalla', `<p>Detén y reanuda. A algunos les funciona minimizar y restaurar la ventana.</p>`)}
   ${accItem('🌫️ La pantalla compartida se ve borrosa', `<p>Vuelve a compartir y revisa la conexión.</p>`)}
   ${accItem('🙈 El estudiante no ve tu pantalla compartida', `<p>Si está en el móvil, que use «sitio de escritorio». Verifica que use Chrome.</p>`)}
   ${accItem('📱 El estudiante no puede compartir su pantalla', `<p>Desde el navegador de un móvil (iPad, tablet o teléfono) <strong>no es posible</strong>. Necesita un computador.</p>`)}
   ${accItem('🧾 La pizarra sigue visible después de cerrarla', `<p>Pídele que salga y vuelva a entrar; reporta con el enlace de BO del grupo.</p>`)}
   ${accItem('✏️ El lápiz no funciona', `<p>Vuelve a compartir pantalla. Desactiva las anotaciones antes de cambiar de pestaña.</p>`)}
   ${accItem('🚪 Las salas de grupos dan errores', `<p>Cierra todas las salas y créalas de nuevo. Si falla compartir pantalla dentro de las salas, reporta.</p>`)}
   ${accItem('📄 La página de Assignments sale negra', `<p>Desactiva y borra las anotaciones, detén la pantalla compartida y haz clic derecho → «Recargar marco».</p>`)}
   ${accItem('⚠️ Al estudiante le aparecen banners de error', `<p>Pídele que <strong>lo lea en voz alta</strong> y explícale qué hacer. <strong>Registra</strong> si hubo banner, el mensaje, las advertencias previas a unirse y el tipo de error. Reporta con una captura.</p>`)}
   ${accItem('🪟 El modo Picture-in-Picture', `<p>Es una ayuda: clic derecho sobre la pantalla compartida → Picture-in-Picture.</p>`)}
  `},
  {t:'🎙️ Audio y cámara', html:`
   ${iconGrid([
     {ic:'🔐', html:`<strong>Permisos.</strong> Ícono a la izquierda de la URL → «Permitir siempre» para Cámara y Micrófono.`},
     {ic:'🖼️', html:`<strong>La cámara falla con fondos virtuales.</strong> Activa «Usar aceleración gráfica cuando esté disponible» en <em>chrome://settings/system</em>.`},
     {ic:'🔇', html:`<strong>Si silencias a un estudiante, vuelve a activar su micrófono.</strong> Dejar a un niño silenciado sin darte cuenta puede costar una familia.`},
     {ic:'📸', html:`<strong>La cámara o el micrófono se apagan solos</strong> y no lo resuelves en 10 minutos: reporta con una captura.`}
   ])}
  `},
  {t:'👥 Cuando varios estudiantes fallan a la vez, o la clase se pierde', html:`
   ${doavoid(
     ['Hacer triage: ¿falla de uno o de muchos? Si es de muchos, es de plataforma — <strong>reporta ya</strong>, con el enlace de BO del grupo','Mantener viva la clase con quienes sí están conectados, y pedir a los demás que sigan por el chat','Si la clase se perdió, enviar la grabación y armar un plan de recuperación (Módulo 3)','Demostrar, compartir el archivo del proyecto y planear una sesión de recuperación'],
     ['Pasar la clase entera ayudando uno por uno mientras el resto se aburre','Hacer la tarea por el estudiante cuando la tecnología falla','Prometer una clase extra','Descartar una clase extra']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Dos clases comprometidas</strong> (por una falla de plataforma, una cancelación o una ausencia): <strong>habla con tu Team Leader el mismo día.</strong> Eso inicia la conversación sobre una clase extra. Nunca la prometas ni la descartes tú.</p>`)}
  `},
  {t:'🆘 Zoom de emergencia — la excepción', html:`
   <div class="card"><p><strong>Classroom es el canal por defecto.</strong> Zoom es solo para emergencias en las que Classroom no funciona y no se resuelve con los pasos de arriba.</p></div>
   ${co('co-warn','🆘',`<p>Si Classroom no funciona para toda la clase y no se resuelve, <strong>avisa de inmediato a tu Team Leader.</strong> Zoom es la excepción y se usa con su aprobación. Después, <strong>reporta el mismo día</strong> igualmente.</p>`)}
  `}
 ],
 ix:{
  title:'La clase sigue',
  instr:'Elige la primera acción en cada caso. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Cuál es la primera acción?', card:`La pantalla compartida de un estudiante se ve negra.`, zones:[{label:'🔁 Detener y volver a compartir, y revisar que use Chrome', fb:'Correcto — es el primer paso de la guía. Si no se arregla, reportas.'},{label:'🆘 Pasar a Zoom de inmediato', fb:'No exactamente — Zoom es la excepción. Primero los pasos de Classroom.'},{label:'⏭️ Seguir la clase sin él', fb:'No exactamente — primero los primeros auxilios; si no se resuelve en 10 minutos, reportas.'}], correctZone:0},
   {type:'sort', prompt:'¿Cuál es la primera acción?', card:`Un estudiante con tablet no puede compartir su pantalla.`, zones:[{label:'🔁 Que vuelva a intentarlo varias veces', fb:'No exactamente — desde el navegador de una tablet no es posible compartir pantalla.'},{label:'📝 Que cambie de navegador en la tablet', fb:'No exactamente — en un móvil o tablet no es posible, sea cual sea el navegador.'},{label:'💻 Explicar que necesita un computador para compartir pantalla, y seguir la clase de otra forma', fb:'Correcto — es una limitación conocida. Adapta la actividad y, si el curso lo requiere, repórtalo.'}], correctZone:2},
   {type:'sort', prompt:'¿Cuál es la primera acción?', card:`Silenciaste a un estudiante hace un rato por ruido de fondo.`, zones:[{label:'🔊 Volver a activar su micrófono en cuanto sea posible', fb:'Correcto — si silencias a alguien, vuelve a activarlo. Un niño silenciado sin darse cuenta se queda fuera de la clase.'},{label:'🔇 Dejarlo silenciado hasta el final', fb:'No exactamente — un niño silenciado toda la clase deja de participar, y eso puede costar una familia.'}], correctZone:0},
   {type:'choice', prompt:`A los 5 minutos de empezar, tres estudiantes no pueden entrar y los otros dos esperan. ¿Qué haces?`, opts:[`Ayudas a cada uno por turno hasta que entren todos`,`Cancelas la clase y avisas a las familias`,`Reportas ya (es de plataforma), sigues la clase con los dos conectados y pides a los demás que sigan por el chat`], correct:2, fb:`Si fallan varios, es de plataforma: se reporta ya. Mantén viva la clase con quienes están conectados y prepara después el plan de recuperación.`},
   {type:'choice', prompt:`El computador de un estudiante no cumple los mínimos y la aplicación del curso no abre. ¿Qué haces?`, opts:[`Le dices a la familia que tiene que cambiar de curso`,`Cambias la actividad para que siga la clase de forma útil (demostración, ejemplo guiado) y reportas que el equipo no cumple`,`Haces tú la tarea en tu pantalla y se la envías terminada`], correct:1, fb:`Mantienes la clase útil para el niño y lo reportas. El cambio de curso no lo ofreces tú, y la tarea no la haces por él.`},
   {type:'choice', prompt:`¿Cuándo se usa Zoom?`, opts:[`Solo cuando Classroom no funciona para toda la clase y no se resuelve, con la aprobación de tu Team Leader, y reportándolo el mismo día`,`Siempre que un estudiante tenga un problema para entrar`,`Cuando a la familia le resulta más cómodo`], correct:0, fb:`Classroom es el canal por defecto. Zoom es la excepción: con aprobación de tu Team Leader y siempre con reporte el mismo día.`}
  ]
 }
},
{id:'after', numLabel:'Módulo 3', emoji:'🏠', color:'var(--coral)',
 title:'Después de la clase',
 desc:'Las tareas que no se entregan porque no se puede entrar, la plataforma en el celular o la tablet, las clases perdidas y cómo cerrar el ciclo con la familia.',
 obj:'Que un problema técnico no deje a una familia sin tareas ni sin respuesta, y detectarlo antes de confundirlo con una «no entrega».',
 sections:[
  {t:'🔍 Cuando no entrega, quizá no puede', html:`
   <div class="card"><p>Antes de pensar en desmotivación, comprueba si el estudiante <strong>puede entrar</strong> a hacer la tarea. Hay familias que se quejaron de que no podían abrir las tareas y nadie les dio una opción.</p></div>
   ${co('co-idea','❓',`<p><strong>Pregunta antes de suponer:</strong> <em>«¿Pudiste abrir la tarea? ¿Desde qué dispositivo lo intentaste?»</em></p>`)}
  `},
  {t:'🩺 Síntomas después de la clase', html:`
   ${accItem('🔒 No puede entrar a la plataforma a hacer las tareas', `
    <p><strong>🎯 Lo que haces:</strong> confirma el navegador (Chrome de escritorio) y el dispositivo. Si sigue igual, reporta con los enlaces de BO del estudiante y del grupo, y haz <strong>seguimiento a las 24 horas</strong>.</p>
    <p><strong>💬 Qué puedes decir:</strong> <em>«Lo estoy revisando con mi equipo y te escribo mañana.»</em></p>`)}
   ${accItem('📱 Solo puede entrar desde el celular y no se ve bien', `
    <p><strong>🎯 Lo que haces:</strong> la plataforma está pensada para computador: que use «sitio de escritorio» o un computador. No prometas un acceso alternativo.</p>
    <p><strong>💬 Qué puedes decir:</strong> explica la limitación con calidez: <em>«Desde el celular algunas partes no se ven bien; con un computador, o con el sitio de escritorio, funciona mucho mejor.»</em></p>`)}
   ${accItem('📲 La plataforma no funciona del todo en celular o tablet', `
    <p><strong>🎯 Lo que haces:</strong> es una <strong>limitación conocida</strong> (por ejemplo, no se puede compartir pantalla desde el móvil). Si el curso lo requiere, repórtalo.</p>`)}
   ${accItem('🗂️ Las tareas no se muestran en el cuaderno o en el panel', `
    <p><strong>🎯 Lo que haces:</strong> repórtalo con una captura.</p>`)}
   ${accItem('📼 Perdió una clase por una falla', `
    <p><strong>🎯 Lo que haces:</strong> envía la grabación y la parte esencial, y arma un plan de recuperación.</p>
    <p><strong>💬 Antes de escribir a la familia:</strong> <strong>sincroniza con tu Team Leader.</strong></p>`)}
  `},
  {t:'🔁 Cerrar el ciclo', html:`
   <div class="card"><p>Cuando el problema se resuelve, <strong>avísale a la familia</strong>. Un padre informado es un padre que se queda.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 Un mensaje de cierre que puedes usar</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>«Hola, [nombre del padre o la madre]. Te escribo para contarte que el problema de acceso que tuvo [estudiante] ya está resuelto. Gracias por la paciencia. Si vuelve a pasar algo, escríbeme y lo revisamos enseguida.»</em></p></div>
   ${co('co-danger','🚫',`<p><strong>En ningún mensaje</strong> prometas una compensación ni una clase extra. Reconoce el problema, di que ya está reportado y quién volverá con novedades.</p>`)}
  `}
 ],
 ix:{
  title:'Que nadie se quede sin respuesta',
  instr:'Elige la mejor acción o clasifica cada caso. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:`Una familia dice que su hijo solo puede entrar desde el celular y que la plataforma no se ve bien. ¿Qué haces?`, opts:[`Les prometes que vas a conseguir un acceso especial para el celular`,`Les explicas con calidez que la plataforma está pensada para computador, que prueben el sitio de escritorio o un computador, y lo reportas si el curso lo requiere`,`Les dices que así no puede seguir el curso`], correct:1, fb:`Explica la limitación con calidez, ofrece lo que sí funciona y no prometas un acceso alternativo.`},
   {type:'choice', prompt:`Un estudiante dice que las tareas no le aparecen en el panel. ¿Qué haces?`, opts:[`Lo reportas con una captura`,`Le dices que lo intente otro día`,`Le marcas la tarea como no entregada`], correct:0, fb:`Si no se muestran las tareas, es un problema técnico: se reporta con una captura.`},
   {type:'sort', prompt:'¿Lo resuelves tú o lo reportas?', card:`Un estudiante no entrega las tareas y al preguntarle dice que no consigue entrar a la plataforma, ni siquiera desde Chrome en el computador.`, zones:[{label:'🧑‍🏫 Lo resuelvo yo', fb:'No exactamente — ya probaste lo básico (Chrome en el computador). Ahora toca reportar.'},{label:'📮 Lo reporto', fb:'Correcto — reportas con los enlaces de BO del estudiante y del grupo, y haces seguimiento a las 24 horas.'}], correctZone:1},
   {type:'choice', prompt:`Reportaste que un estudiante no puede entrar a las tareas. ¿Cuándo haces el seguimiento?`, opts:[`A la semana siguiente`,`Solo si la familia vuelve a escribir`,`A las 24 horas`], correct:2, fb:`El seguimiento es a las 24 horas: así la familia no se queda sin respuesta.`}
  ]
 }
},
{id:'report', numLabel:'Módulo 4', emoji:'📮', color:'var(--coral)',
 title:'Reportar y escalar',
 desc:'A quién avisar según el problema, qué datos lleva un buen reporte, en qué orden hablar con tu equipo y con la familia, y cómo se ve un buen comentario en BO.',
 obj:'Saber a quién avisar, con qué datos y en qué orden. Un problema que no se reporta no existe para nadie más.',
 sections:[
  {t:'🛣️ Tres carriles', html:`
   <div class="card"><p>Según el tipo de problema, el reporte va por un carril distinto:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Carril</th><th>Cuándo</th><th>Por dónde</th></tr>
    <tr><td><strong>1. Falla de Classroom</strong><br>(pantalla negra, audio, pizarra, salas)</td><td>Los pasos de la guía no la resolvieron</td><td>Canal de soporte de Classroom en Slack + comentario en BO</td></tr>
    <tr><td><strong>2. Cuenta, matrícula, credenciales, horario, licencias</strong></td><td>El estudiante no entra, no está registrado, el horario está mal o las credenciales no funcionan</td><td>Team Leader + Servicio al Cliente + comentario en BO</td></tr>
    <tr><td><strong>3. Clase perdida o dos clases comprometidas</strong></td><td>Por una falla de plataforma, una cancelación o una ausencia</td><td><strong>Team Leader el mismo día</strong> + Servicio al Cliente si la familia está molesta + comentario en BO</td></tr>
   </table></div></div>
  `},
  {t:'🧾 Qué datos lleva un reporte', html:`
   ${numlist([
     '<strong>Enlaces de BO</strong> del grupo y del estudiante (obligatorios)',
     '¿Se mostró un <strong>banner</strong> al estudiante? ¿Qué decía?',
     '<strong>Advertencias en la pantalla previa a unirse</strong> (por ejemplo, requisitos no compatibles)',
     '<strong>Tipo de error:</strong> pantalla negra, sin sonido, no puede entrar…',
     '<strong>Captura de pantalla</strong>',
     'Dispositivo, sistema operativo, navegador y, si aplica, <strong>si usa VPN</strong> y desde qué país',
     'Qué intentaste y durante cuánto tiempo'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Cómo es un comentario útil en BO — copia y completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Clase:</strong> [fecha] · <strong>Grupo:</strong> [enlace de BO] · <strong>Estudiante:</strong> [enlace de BO]<br>
   <strong>Qué falló:</strong> [p. ej. no pudo entrar a la clase; pantalla negra al compartir]<br>
   <strong>Banner o mensaje:</strong> [texto exacto, o «ninguno»] · <strong>Advertencias previas a unirse:</strong> [sí / no, cuáles]<br>
   <strong>Equipo:</strong> [dispositivo, sistema, navegador, VPN sí / no y país]<br>
   <strong>Qué intenté:</strong> [p. ej. recargar, Chrome, volver a compartir — 10 minutos]<br>
   <strong>Captura:</strong> [adjunta] · <strong>Palabras de la familia:</strong> [textuales, si las hay]</p></div>
  `},
  {t:'🔢 El orden importa', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Equipo primero, familia después.</strong> Cuando el problema involucra algo más que tu enseñanza (acceso, horario, una clase perdida), no escribas a la familia antes de hablar con tu Team Leader.`},
     {ic:'🎓', html:`<strong>Hablas del aprendizaje; entregas la acción.</strong> Puedes contar qué intentaste en la clase y que lo estás revisando. Las opciones (clase extra, cambio de grupo, compensación) las ofrece Servicio al Cliente.`},
     {ic:'⚖️', html:`<strong>Nunca prometas y nunca rechaces.</strong> Ni <em>«te damos una clase extra»</em> ni <em>«eso no es posible»</em>. Sí muestra que te importa y que ya estás en ello.`},
     {ic:'📅', html:`<strong>Escala una vez y haz seguimiento.</strong> Anota en tu calendario revisarlo en dos clases.`}
   ])}
   ${co('co-ok','💬',`<p><strong>Un mensaje que sí puedes enviar</strong> (una vez acordado con tu Team Leader): <em>«Hola, [nombre del padre o la madre]. Vi que hoy [estudiante] no pudo entrar a la clase. Ya lo reporté a mi equipo con todos los datos y Servicio al Cliente se pondrá en contacto contigo. Mientras tanto, te envío la grabación para que no se pierda lo que vimos.»</em></p>`)}
  `}
 ],
 ix:{
  title:'Avisa bien, y en orden',
  instr:'Elige el carril, el mejor comentario y lo que dirías. 70 % para completar este módulo.',
  items:[
   {type:'sort', prompt:'¿Por qué carril va este reporte?', card:`Las credenciales de Minecraft del estudiante no funcionan.`, zones:[{label:'1️⃣ Falla de Classroom', fb:'No exactamente — no es una falla de Classroom, es una cuenta o licencia.'},{label:'2️⃣ Cuenta, matrícula, credenciales, horario, licencias', fb:'Correcto — va a tu Team Leader y a Servicio al Cliente, con un comentario en BO.'},{label:'3️⃣ Clase perdida', fb:'No exactamente — todavía no es una clase perdida: es un problema de credenciales.'}], correctZone:1},
   {type:'sort', prompt:'¿Por qué carril va este reporte?', card:`La pizarra sigue visible después de cerrarla y salir y volver a entrar no lo arregla.`, zones:[{label:'1️⃣ Falla de Classroom', fb:'Correcto — los pasos de la guía no la resolvieron: canal de soporte de Classroom y comentario en BO.'},{label:'2️⃣ Cuenta, matrícula, credenciales, horario, licencias', fb:'No exactamente — no tiene que ver con la cuenta del estudiante.'},{label:'3️⃣ Clase perdida', fb:'No exactamente — la clase siguió; es una falla de Classroom.'}], correctZone:0},
   {type:'choice', prompt:`¿Cuál es el mejor comentario de BO para el mismo caso?`, opts:[`«No pudo entrar, mala conexión.»`,`«3/11, clase 2. No pudo entrar: banner "Sistema no compatible" en la pantalla previa a unirse. Windows 7, Chrome actualizado. Probé recargar y otro navegador, 10 min. Captura adjunta. Enlaces de BO del grupo y del estudiante.»`,`«Otra vez la plataforma no funciona, esto pasa siempre.»`], correct:1, fb:`El comentario útil es completo y neutral: fecha, qué falló, el banner, el equipo, qué intentaste, la captura y los enlaces de BO.`},
   {type:'choice', prompt:`Un estudiante perdió su segunda clase seguida por una falla. ¿Qué es lo primero?`, opts:[`Escribir a la familia y ofrecerle una clase extra`,`Esperar a ver si la próxima clase funciona`,`Hablar con tu Team Leader el mismo día, y acordar con él el mensaje a la familia`], correct:2, fb:`Dos clases comprometidas: Team Leader el mismo día. Equipo primero, familia después. La clase extra no la ofreces tú.`},
   {type:'choice', prompt:`A este reporte le falta algo: «Clase 3, no se oía el audio del estudiante, probé permisos 10 min, Chrome, Windows 10, captura adjunta.» ¿Qué falta?`, opts:[`Los enlaces de BO del grupo y del estudiante`,`La opinión del tutor sobre la plataforma`,`El número de teléfono de la familia`], correct:0, fb:`Los enlaces de BO del grupo y del estudiante son obligatorios en todo reporte: sin ellos no se puede revisar el caso.`},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es una buena frase para la familia?', card:`«Ya lo reporté a mi equipo con todos los datos y Servicio al Cliente se pondrá en contacto contigo.»`, zones:[{label:'💎 Tesoro', fb:'Correcto — reconoce el problema, dice que ya está reportado y quién volverá, sin prometer nada.'},{label:'🗑️ Basura', fb:'No exactamente — es justo lo que se puede decir: reconocer, reportar y decir quién volverá, sin prometer.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes, durante y después de la clase.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud, con fechas, qué falló, el mensaje o banner, qué intenté y una captura, y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue técnicamente a prueba de fallas: 15 minutos antes, un plan B, atención específica y un logro visible',
     'Nunca confirmé una aprobación, no hablé de montos ni culpé a la plataforma — usé la única frase segura'
   ])}
  `},
  {t:'🧭 Antes, durante y después', html:`
   <div class="three-col">
    <div class="card"><h4>🧰 Antes</h4>${numlist(['Chrome de escritorio actualizado','Micrófono, cámara y pantalla probados','BO: grupo y lista de estudiantes','Advertencias previas a unirse','En la clase 1, entro antes'])}</div>
    <div class="card"><h4>🛠️ Durante</h4>${numlist(['Primero la calma','10 minutos y escalo','Banner: que lo lea en voz alta','Si hay muchos afectados, reporto ya','No hago la tarea por el estudiante'])}</div>
    <div class="card"><h4>🏠 Después</h4>${numlist(['¿Puede entrar a las tareas?','Grabación y plan de recuperación','Reporte el mismo día con datos completos','Seguimiento a las 24 horas','Cierro el ciclo con la familia'])}</div>
   </div>
  `},
  {t:'🃏 Las cinco reglas de bolsillo', html:`
   ${iconGrid([
     {ic:'🔁', html:`<strong>Adapta primero.</strong>`},
     {ic:'📮', html:`<strong>Avisar no es opcional.</strong>`},
     {ic:'👥', html:`<strong>Equipo antes que familia.</strong>`},
     {ic:'⚖️', html:`<strong>Nunca prometas ni rechaces.</strong>`},
     {ic:'📅', html:`<strong>Escala una vez y haz seguimiento.</strong>`}
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eso es todo el mini-entrenamiento.</strong> Cuando estés listo, continúa — y luego completa el DST en el LMS para cerrar la tarea.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
