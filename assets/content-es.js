/* Mini_Training_7_Technical_Issues - contenido en español (todo el texto de la página).
   Para añadir un idioma: copia este archivo como content-xx.js, traduce los textos (conserva el código, las claves, las etiquetas HTML, las llamadas a funciones auxiliares y las rutas de imágenes/videos/simulaciones) y ajusta PAGE_LANG, flag y dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Problemas técnicos — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Cuando la <span class=\"h-pill\">tecnología</span> falla",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes cuyas familias han pedido un reembolso por problemas técnicos. Aquí verás qué puedes hacer antes, durante y después de la clase, qué alternativas puedes usar y dónde pedir ayuda para que el problema se resuelva a tiempo.",
    heroCard1:"<b>A tu ritmo.</b> Tu progreso se guarda en este navegador.",
    heroCard2:"<b>Práctica incluida.</b> Reportarás un problema técnico en una simulación del Back Office.",
    pbLabel:'módulos completados',
    tapOpen:'Toca para abrir',
    tapFlip:'Toca para girar',
    lblSee:'Lo que ves',
    lblDo:'Lo que haces',
    lblSay:'Lo que puedes decir',
    lblReport:'Dónde reportar',
    lblAvoid:'Evita',
    lblTip:'Consejo',
    stepOf:'Paso {i} de {n}',
    next:'Siguiente',
    heroWork:"Completa 6 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 30–40 minutos.",
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
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'#5DD39E', art:'lifebuoy', learn:[['📊','Lo que muestran los datos'],['🔎','Los problemas que cubre este entrenamiento'],['🧭','Qué es tuyo y qué no'],['🛟','Qué hacer si ya existe una solicitud de reembolso'],['🎯','Cómo hacer de tu próxima clase el intento de recuperación']],
 eyebrow:'Introducción',
 title:'Por qué estás aquí',
 desc:'Por qué un problema técnico en las primeras clases nos puede costar una familia, qué parte es tuya — y qué hacer si ya existe una solicitud de reembolso.',
 obj:'Entender por qué un problema técnico en las primeras clases nos puede costar una familia, qué parte es tuya y qué hacer cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'📊 Lo que muestran los datos', html:`
   <div class="card"><p>Un problema técnico casi nunca llega solo. Aparece en las primeras clases, cuando la familia todavía está decidiendo si Kodland es para ellos — y a veces antes de que el niño haya visto una sola clase.</p></div>
   ${bigStat('≈ 1 de cada 20',`<p>solicitudes de reembolso tiene detrás un <strong>problema técnico real</strong>. Y es un mínimo: algunos de estos casos llegan etiquetados con otro motivo.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Basado en las solicitudes de reembolso de los últimos 90 días en todas las regiones; cifras aproximadas.</p>
   ${co('co-idea','💡',`<p><strong>Las primeras clases son la ventana más estrecha.</strong> Un problema técnico resuelto el mismo día suele salvarse; el mismo problema resuelto tarde casi nunca. Por eso cuentan las primeras clases, y por eso cuenta el mismo día.</p>`)}
  `},
  {t:'🔎 Los problemas que cubre este entrenamiento', html:`
   ${iconGrid([
     {ic:'🖥️', html:`<strong>Classroom y las plataformas de aprendizaje.</strong> Enlaces rotos o que faltan, errores de la plataforma, pantallas negras, audio y cámara que dejan de funcionar.`},
     {ic:'💻', html:`<strong>Computadores que no cumplen los requisitos del curso</strong>`},
     {ic:'🧩', html:`<strong>Herramientas del curso que no abren o no se instalan:</strong> Blender, Roblox Studio, Krita y otros programas.`}
   ])}
  `},
  {t:'🧭 Qué es tuyo y qué no', html:`
   <div class="card"><p>No puedes arreglar un bug de la plataforma, una matrícula ni un horario. Pero hay mucho que sí está en tus manos — y lo más importante es <strong>avisar a las personas correctas, rápido y bien</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Totalmente tuyo</th><th>🔁 Tuyo para adaptar y reportar</th><th>🚫 Fuera de tu control</th></tr>
    <tr><td>Revisar tu propia conexión, tu equipo y Chrome antes de cada clase<br>Enviar a la familia los datos de acceso que encuentras en BO</td><td>Un estudiante que no puede entrar o conectarse: ayúdalo con los primeros auxilios y <strong>repórtalo</strong></td><td>Corregir un bug de Classroom o de la plataforma</td></tr>
    <tr><td>Mantener la calma y normalizar el problema delante del grupo</td><td>Una clase que se perdió por una falla: adapta la siguiente y <strong>repórtalo</strong></td><td>La matrícula, las licencias y el saldo de clases</td></tr>
    <tr><td>Silenciar y volver a activar micrófonos con cuidado</td><td>Un computador que no cumple los requisitos: mantén la clase útil y <strong>repórtalo a tu Team Leader</strong></td><td>Pasar a un estudiante a otro curso, grupo u horario</td></tr>
    <tr><td>Probar las alternativas conocidas (recargar, volver a entrar, otra herramienta para el curso)</td><td>Un problema técnico que podría hacer que la familia se vaya: <strong>pide una clase extra a tu Team Leader</strong></td><td>Aprobar una clase extra, un cambio de horario o cualquier compensación</td></tr>
    <tr><td>Reportar el mismo día con datos completos</td><td>Una falla que afecta a varios estudiantes: triage, <strong>reporte</strong> y plan de recuperación</td><td>El proveedor de internet o la red de la casa de la familia</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Tu parte tiene tres movimientos:</strong> primeros auxilios en la clase, ajustar la clase para que el daño sea el menor posible y <strong>reportar el mismo día</strong> con los datos completos.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>No esperes en silencio.</strong> Si en 10 minutos no se resuelve, deja de intentarlo por tu cuenta: comunica, documenta, escala.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso por un problema técnico', html:`
   <div class="card"><p>Todo lo anterior trata de prevenirlo. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> pidió un reembolso por un problema técnico. Lee primero estas reglas.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú.</strong> Te enteras por los comentarios de Servicio al Cliente en el perfil del estudiante en BO; no hay ningún aviso automático.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud</strong> — ni al niño ni a la familia — salvo que Servicio al Cliente te pida decir algo concreto. Si el niño la menciona, redirige con calidez y sigue enseñando.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Esa clase tiene que ser <strong>técnicamente a prueba de fallas</strong>. Una segunda falla después de la solicitud es el peor escenario posible.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 minutos antes:</strong> Chrome de escritorio actualizado y las demás aplicaciones cerradas; micrófono, cámara y compartir pantalla probados; grupo y lista de estudiantes revisados en BO.`},
     {ic:'🅱️', html:`<strong>Un plan B listo:</strong> qué harás si el estudiante no puede entrar, si falla el audio o si no abre la herramienta de su curso (Módulos 1 y 2).`},
     {ic:'👀', html:`<strong>Atención específica</strong> para ese niño — que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🏆', html:`<strong>Un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Si la falla se repite en esa clase, repórtala de inmediato</strong> en el <strong>canal de ayuda para tutores</strong> — no al final del día.</p>`)}
  `},
  {t:'📮 Reporta el mismo día y conoce la única frase segura', html:`
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que viste: fechas, qué falló, el mensaje de error o el banner, qué intentaste y una captura',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día — es también el momento de preguntar si tiene sentido una clase extra',
     'Nunca confirmes que un reembolso fue aprobado, nunca hables de montos y nunca culpes a la plataforma'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase que siempre es segura:</strong> <em>“Servicio al Cliente le ayudará con esto.”</em> Ahí termina tu parte de la conversación.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Aunque la solicitud se retire o el niño pase a otro grupo, sigue cuidando la parte técnica de sus clases durante las semanas siguientes: entra antes, prueba tu equipo y pregúntale si todo funciona. Una recuperación que dura una clase y luego vuelve en silencio a la normalidad muchas veces no se sostiene.</p></div>
  `}
 ],
 ix:{
  title:'Lo tuyo, lo que reportas y lo que no es tuyo',
  instr:'Clasifica cada situación y elige la mejor acción. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿De quién es esta parte?', card:`Una falla de Classroom hizo perder la mitad de la clase de ayer.`, zones:[{label:'✅ Totalmente mía', fb:'No exactamente — la falla no la puedes corregir tú. Lo que sí es tuyo es adaptar la clase siguiente y reportarlo.'},{label:'🔁 Mía para adaptar y reportar', fb:'Correcto — adaptas la clase siguiente para recuperar lo esencial y lo reportas el mismo día.'},{label:'🚫 Fuera de mi control', fb:'No del todo — corregir la falla no es tuyo, pero adaptar la clase siguiente y reportarlo sí lo es.'}], correctZone:1},
   {type:'sort', prompt:'¿De quién es esta parte?', card:`Aprobar una clase extra para la familia después de la clase perdida.`, zones:[{label:'✅ Totalmente mía', fb:'No exactamente — puedes pedirla, pero no la apruebas ni la ofreces.'},{label:'🔁 Mía para adaptar y reportar', fb:'No del todo — tu parte es reportarlo y pedírsela a tu Team Leader; la aprobación no es tuya.'},{label:'🚫 Fuera de mi control', fb:'Correcto — la aprueba tu Team Leader. Tu parte es reportar la clase perdida y pedirla el mismo día.'}], correctZone:2},
   {type:'choice', prompt:`Un padre te escribe: “Ya pedimos el reembolso, la plataforma nunca funcionó.” ¿Qué haces?`, opts:[`Le explicas que la plataforma funciona bien y que seguramente era su conexión`,`Le respondes “Servicio al Cliente le ayudará con esto”, dejas un comentario en BO con lo que viste y sus palabras exactas, y avisas a tu Team Leader el mismo día`,`Le prometes que en la próxima clase todo funcionará y que no hace falta el reembolso`], correct:1, fb:`No discutes, no prometes y no hablas de la solicitud. Usas la frase segura y le das a tu equipo los datos el mismo día.`},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es una buena frase para la familia?', card:`“Es culpa de la plataforma, a nosotros también nos pasa todo el tiempo.”`, zones:[{label:'💎 Tesoro', fb:'No exactamente — culpar a la plataforma quita confianza y no resuelve nada.'},{label:'🗑️ Basura', fb:'Correcto — nunca culpes a la plataforma. Di que ya lo estás revisando con tu equipo.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Módulo 1', emoji:'🧰', color:'#7EA8FF', art:'clock', learn:[['⏱️','Los 15 minutos antes de cada clase'],['🩺','Qué hacer cuando falla el acceso'],['💻','¿El equipo sirve para el curso?'],['📮','A quién avisar y qué decir']],
 eyebrow:'Módulo 1 de 4',
 title:'Antes de la clase',
 desc:'Los 15 minutos antes de cada clase, los problemas de acceso, matrícula, horario y enlace, y cómo saber si el equipo del estudiante sirve para su curso.',
 obj:'Detectar y reportar los problemas de acceso antes de que la familia pierda la clase.',
 sections:[
  {t:'⏱️ Los 15 minutos antes', html:`
   <div class="card"><p>La mayoría de los problemas de acceso se pueden ver <strong>antes</strong> de que empiece la clase. Estos 15 minutos son tu mejor seguro.</p></div>
   ${stepper([
     {ic:'🌐', title:'Abre la clase en Chrome de escritorio', html:`<p>Usa <strong>Google Chrome de escritorio, actualizado</strong>. Es el único navegador totalmente compatible; Safari y los demás no lo son del todo.</p>`},
     {ic:'🧹', title:'Cierra las demás aplicaciones', html:`<p>Classroom se pone lento cuando hay otros programas abiertos. Cierra todo lo que no vayas a usar en la clase.</p>`},
     {ic:'🎙️', title:'Prueba tu micrófono y tu cámara', html:`<p>Si el navegador no pidió permisos, actívalos a mano: ícono a la izquierda de la URL → Cámara y Micrófono en “Permitir siempre”.</p>`},
     {ic:'📋', title:'Revisa el grupo y el enlace en BO', html:`<p>Revisa el grupo, la lista de estudiantes y que el enlace de la clase funcione. Fíjate si hay <strong>advertencias en la pantalla previa a unirse</strong> (por ejemplo, requisitos del sistema no compatibles).</p>`},
     {ic:'👋', title:'En la primera clase de un estudiante nuevo, entra antes', html:`<p>Entra antes y espera. Si <strong>5 minutos después de la hora de inicio</strong> no ha entrado, repórtalo; no esperes a que termine la clase.</p>`}
   ])}
   ${co('co-idea','📶',`<p><strong>Un consejo de los tutores mentores:</strong> Classroom necesita una buena conexión. Recuérdales a los estudiantes (y a sus familias) que cierren las aplicaciones que no estén usando y que se aseguren de que nadie más en casa esté usando mucho el Wi-Fi durante la clase.</p>`)}
   ${doavoid(
     ['Entrar 15 minutos antes y probarlo todo','Usar Chrome de escritorio actualizado, con las demás aplicaciones cerradas','Revisar el grupo y el enlace en BO antes de cada clase','Reportar en el momento si un estudiante nuevo no aparece'],
     ['Abrir la clase en el último minuto','Dar clase desde Safari u otro navegador','Esperar hasta el final de la clase para avisar que alguien no pudo entrar','Suponer que “ya entrará”']
   )}
  `},
  {t:'🩺 Síntomas antes de la clase', html:`
   <div class="card"><p>Toca cada síntoma. Verás <strong>lo que haces</strong>, <strong>lo que puedes decir</strong> y <strong>dónde reportar</strong>. Todos tus contactos de apoyo están en el Módulo 4.</p></div>
   ${symCards([
     {ic:'🔗', title:`El enlace de la clase está roto o no aparece`,
      do:`Recarga BO y revisa el enlace desde la página del grupo. Si sigue roto o sin aparecer, repórtalo de inmediato para que el equipo de Teaching lo arregle antes de que empiece la clase.`,
      say:`<em>“Estoy revisando el enlace de la clase con mi equipo; te escribo con novedades en unos minutos.”</em>`,
      rep:`Canal de ayuda para tutores + comentario en BO.`},
     {ic:'🚪', title:`No aparece el botón para entrar`,
      do:`Recarga, revisa que estés usando Chrome y confirma en BO que el estudiante está en el grupo. Si sigue igual, repórtalo con los enlaces de BO del grupo y del estudiante.`,
      say:`<em>“Estoy revisando el acceso con mi equipo y te escribo en cuanto tenga novedades.”</em>`,
      rep:`Canal de ayuda para tutores + comentario en BO.`},
     {ic:'📋', title:`“No aparezco registrado”`,
      see:`La familia dice que el niño no aparece registrado.`,
      do:`<strong>No confirmes ni niegues el registro.</strong> Compruébalo en BO y avisa a tu Team Leader y a Servicio al Cliente.`,
      say:`<em>“Estoy revisando tu acceso con mi equipo.”</em>`,
      rep:`Team Leader + Servicio al Cliente + comentario en BO.`,
      avoid:`Decirle a la familia <em>“no está registrado”</em>.`},
     {ic:'🕒', title:`El horario no es el que pidió la familia`,
      see:`La clase está en otro horario, o llegó una notificación con una fecha de inicio distinta.`,
      do:`No cambies nada tú — los tutores no pueden reprogramar clases. Avisa a tu Team Leader y a Servicio al Cliente el mismo día.`,
      say:`Reconoce la molestia, sin explicar por qué ocurrió ni prometer un cambio: <em>“Entiendo que es incómodo. Ya lo compartí con mi equipo para que te contacten.”</em>`,
      rep:`Team Leader + Servicio al Cliente + comentario en BO.`},
     {ic:'🎟️', title:`Faltan clases en el saldo o se descontó una clase injustamente`,
      see:`La familia dice que sus clases no cuadran, o que se les descontó una clase que no se dio.`,
      do:`Anota exactamente lo que dice la familia y pásalo a tu Team Leader y a Servicio al Cliente el mismo día — Operaciones lo revisa.`,
      say:`<em>“Servicio al Cliente le ayudará con esto.”</em>`,
      rep:`Team Leader + Servicio al Cliente + comentario en BO.`,
      avoid:`Explicar o prometer cualquier cosa sobre el saldo de clases.`},
     {ic:'✉️', title:`La familia no recibió el enlace o las credenciales`,
      do:`<strong>Los tienes en BO.</strong> En el perfil del estudiante encuentras el enlace de acceso, el usuario y la contraseña. Envíaselos tú mismo a la familia, de inmediato. Si faltan o no funcionan, repórtalo.`,
      say:`<em>“Te estoy enviando los datos de acceso ahora. Pruébalos y avísame si algo no funciona.”</em>`,
      rep:`Solo si los datos faltan en BO o no funcionan: Team Leader + Servicio al Cliente + comentario en BO.`,
      avoid:`Improvisar enlaces que no salgan de BO.`}
   ])}
   ${co('co-warn','🔗',`<p><strong>Nada de enlaces de video alternativos.</strong> En tu región no se usa Zoom como alternativa a Classroom: genera problemas con los pagos y afecta la calidad de la clase. Si alguien no puede entrar, sigue los pasos de arriba y repórtalo el mismo día.</p>`)}
  `},
  {t:'💻 Antes de la clase 1: ¿el equipo sirve?', html:`
   <div class="card"><p>Los casos de reembolso por un equipo que no da la talla suelen descubrirse <strong>en la primera clase</strong>. Cada curso pide algo distinto:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Fácil', desc:'Funtech · Scratch · Python 1 / Python Pro · Web · Dibujo en papel', note:'Basta con Chrome (y VS Code para Web). <strong>Revisión normal antes de la clase.</strong>'},
     {ic:'🟡', title:'Revisar', desc:'Creatividad digital · Diseño gráfico · Ilustración · Roblox · Minecraft', note:'Necesitan herramientas concretas, una instalación, una cuenta o una pantalla determinada. <strong>Confirma el equipo antes de la clase 1.</strong>'},
     {ic:'🔴', title:'Exigente', desc:'Modelado 3D · Unity', note:'8 GB de RAM, un sistema y un hardware concretos. <strong>Confirma el equipo antes de la clase 1.</strong>'}
   ],3)}   ${accItem('📋 Ver los requisitos por curso', `
    <p><strong>En general:</strong> Chrome actualizado · mínimo 4 GB de RAM (8 GB para Blender o Unity) · 10 Mbps, idealmente por cable · 5 GB libres. <strong>No usar Safari</strong> (en Mac tiene fallas conocidas con la plataforma).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Curso</th><th>Requisitos</th><th>Nivel</th></tr>
     <tr><td>Funtech</td><td>Solo Chrome. No hay que instalar nada.</td><td>🟢 Fácil</td></tr>
     <tr><td>Scratch</td><td>Solo Chrome. Windows, Mac y tablet.</td><td>🟢 Fácil</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + una cuenta de Google (Google Colab).</td><td>🟢 Fácil</td></tr>
     <tr><td>Web</td><td>Chrome + VS Code. Windows, Mac o Linux.</td><td>🟢 Fácil</td></tr>
     <tr><td>Dibujo en papel</td><td>Solo Chrome, para ver la clase. Materiales físicos.</td><td>🟢 Fácil</td></tr>
     <tr><td>Creatividad digital</td><td>Chrome. Varias herramientas en línea (Canva y otras); las alternativas para cada herramienta están en la wiki / notas del profesor.</td><td>🟡 Revisar</td></tr>
     <tr><td>Diseño gráfico</td><td>Chrome + Canva. Pantalla de al menos 1280×768.</td><td>🟡 Revisar</td></tr>
     <tr><td>Ilustración</td><td>Chrome + cualquier programa de dibujo (Krita, o uno en línea como Kleki). Recomendado: tableta gráfica o pantalla táctil.</td><td>🟡 Revisar</td></tr>
     <tr><td>Roblox</td><td>Windows o Mac (ni tablet ni Linux). 4 GB. <strong>Instalar Roblox Studio antes de la clase 1.</strong></td><td>🟡 Revisar</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac o Linux. Se recomienda Java Edition. 4 GB. Se necesita una cuenta de Minecraft.</td><td>🟡 Revisar</td></tr>
     <tr><td>Modelado 3D</td><td>Blender. 8 GB. Mouse con rueda. Se recomienda GPU dedicada. Windows o Mac.</td><td>🔴 Exigente</td></tr>
     <tr><td>Unity</td><td>8 GB. 10 GB libres. Windows o Mac. No Chromebook.</td><td>🔴 Exigente</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>La regla:</strong> si ves en BO que el estudiante tiene un curso <strong>🟡 Revisar</strong> o <strong>🔴 Exigente</strong>, confirma el equipo antes de la clase 1, con un mensaje aprobado por tu Team Leader.</p>`)}
   ${co('co-danger','💻',`<p><strong>Si el computador no puede con el curso, no se debió vender así — y no te toca a ti resolverlo.</strong> Repórtalo a tu Team Leader; los equipos de Teaching y de Ventas deciden juntos cómo y dónde continúa el estudiante. Nunca le digas tú a la familia que compre un computador nuevo o que cambie de curso. Mientras tanto, mantén la clase útil con las alternativas del Módulo 2.</p>`)}
  `}
 ],
 ix:{
  title:'Antes de que empiece la clase',
  instr:'Elige la primera acción y lo que dirías. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Cuál es tu primera acción?', card:`Faltan 10 minutos para la clase y un estudiante dice que no le aparece el botón para entrar.`, zones:[{label:'🔁 Recargar, revisar Chrome y confirmar en BO que está en el grupo', fb:'Correcto — primeros auxilios rápidos. Si sigue igual, lo reportas con los enlaces de BO del grupo y del estudiante.'},{label:'🔗 Enviarle un enlace de Zoom para esa clase', fb:'No exactamente — en tu región no se usa Zoom. Primero van los primeros auxilios; si no funcionan, lo reportas.'},{label:'⏳ Esperar a ver si entra más tarde', fb:'No exactamente — esperar en silencio hace perder la clase. Actúa ahora.'}], correctZone:0},
   {type:'sort', prompt:'¿Cuál es tu primera acción?', card:`El curso del estudiante es Unity y en BO ves que su clase 1 es el jueves.`, zones:[{label:'⏳ Nada — ya lo veremos en la clase 1', fb:'No exactamente — en Unity, los problemas de equipo suelen descubrirse en la primera clase, cuando ya es demasiado tarde.'},{label:'💻 Confirmar el equipo antes de la clase 1, con un mensaje aprobado por tu Team Leader', fb:'Correcto — Unity es un curso exigente. Confirmar el equipo antes evita perder la primera clase.'},{label:'📝 Pedirle a la familia que compre un computador mejor', fb:'No exactamente — tú no pides compras. Confirmas el equipo y, si no cumple los requisitos, lo reportas.'}], correctZone:1},
   {type:'choice', prompt:`Una madre escribe: “Mi hijo no aparece registrado en la clase.” ¿Qué le respondes?`, opts:[`“Tu hijo no está registrado, tienes que hablar con ventas.”`,`“Sí, está registrado, seguramente es un error de ustedes.”`,`“Estoy revisando tu acceso con mi equipo.”`], correct:2, fb:`No confirmes ni niegues el registro. Lo compruebas en BO y avisas a tu Team Leader y a Servicio al Cliente.`},
   {type:'choice', prompt:`La familia dice que la clase quedó a otra hora de la que pidieron. ¿Qué haces?`, opts:[`Reconoces la molestia sin prometer un cambio y avisas a tu Team Leader el mismo día`,`Les ofreces cambiarla tú a la hora que prefieran`,`Les explicas que el horario ya no se puede cambiar`], correct:0, fb:`El horario no lo cambias tú, y tampoco descartas un cambio. Reconoces la molestia y avisas a tu equipo el mismo día.`},
   {type:'choice', prompt:`Una familia dice que les descontaron de su paquete una clase que nunca se dio. ¿Qué haces?`, opts:[`Les dices que les vas a devolver la clase`,`Anotas lo que dijeron, les dices “Servicio al Cliente le ayudará con esto” y se lo pasas a tu Team Leader y a Servicio al Cliente el mismo día`,`Les explicas cómo funcionan los descuentos de clases`], correct:1, fb:`El saldo de clases y los descuentos los revisa Operaciones. No prometes ni explicas — pasas exactamente lo que dijo la familia, el mismo día.`},
   {type:'choice', prompt:`En la clase 1 de un curso de Modelado 3D ves que el computador del estudiante tiene 4 GB de RAM y Blender no funciona. ¿Qué es lo correcto?`, opts:[`Reportarlo a tu Team Leader — Teaching y Ventas deciden cómo continúa el estudiante — y mientras tanto mantener útil esta clase`,`Decirle a la familia que el curso no es para ellos y sugerirles otro`,`Pedirle a la familia que mejore el computador antes de la próxima clase`], correct:0, fb:`Un computador que no puede con el curso no se debió vender así. No te toca resolverlo: lo reportas, y Teaching y Ventas deciden.`}
  ]
 }
},
{id:'during', numLabel:'Módulo 2', emoji:'🛠️', color:'#FFB44D', art:'micCam', learn:[['🧘','Primero, mantén la calma'],['🔧','Soluciones para Classroom de los tutores mentores'],['🧩','Alternativas para cada curso'],['🆘','Qué hacer cuando Classroom no funciona']],
 eyebrow:'Módulo 2 de 4',
 title:'Durante la clase',
 desc:'El primer movimiento es emocional, la regla de los 10 minutos, soluciones para Classroom de los tutores mentores, alternativas para cada curso, fallas que afectan a varios estudiantes y qué hacer cuando Classroom no funciona.',
 obj:'Resolver lo que se pueda en 10 minutos, mantener la clase útil para todos los estudiantes y no perder la clase entera por un problema técnico.',
 sections:[
  {t:'🧘 El primer movimiento es emocional', html:`
   <div class="card"><p>Antes de tocar nada, <strong>mantén la calma y normalízalo en voz alta</strong>: <em>“Esto pasa a veces, lo arreglamos juntos.”</em> Un adulto tranquilo le dice al niño que todo está bien, y el grupo sigue tu ejemplo. Solo después, resuélvelo.</p></div>
  `},
  {t:'⏱️ La regla de los 10 minutos', html:`
   <div class="card"><p>Si no lo resuelves en <strong>10 minutos</strong>, deja de intentarlo en silencio.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Comunica: al estudiante, al grupo y, si hace falta, a tu equipo'},
     {ic:'📝', label:'Documenta: qué falló, el mensaje, una captura, qué intentaste'},
     {ic:'📮', label:'Escala: repórtalo en el canal de ayuda para tutores'}
   ])}
  `},
  {t:'🔧 Soluciones para Classroom que funcionan — de los tutores mentores', html:`
   <div class="card"><p>Los tutores que dan clase todos los días coinciden: <strong>la mayoría de los problemas de Classroom se resuelven recargando y aligerando la carga.</strong> Prueba esto, en este orden:</p></div>
   ${stepper([
     {ic:'🔄', title:'Recarga la página', html:`<p>O pídele al estudiante que lo haga. Resuelve la mayoría de las pantallas negras, los videos congelados y las pantallas compartidas que no arrancan.</p>`},
     {ic:'🧹', title:'Cierra las demás aplicaciones', html:`<p>Las tuyas y las de los estudiantes. Classroom se pone lento cuando hay otros programas abiertos.</p>`},
     {ic:'🚪', title:'Vuelve a entrar a la clase', html:`<p>Si tu cámara deja de funcionar, cierra el navegador, recarga y vuelve a entrar — a veces hacen falta dos intentos.</p>`},
     {ic:'🎚️', title:'Revisa el dispositivo seleccionado', html:`<p>Un micrófono puede verse “encendido” y aun así estar bloqueado: en la configuración, revisa que estén seleccionados el micrófono y la cámara correctos.</p>`},
     {ic:'📶', title:'Aligera la conexión', html:`<p>Pide a los estudiantes que apaguen la cámara y que se aseguren de que nadie más en casa esté usando el Wi-Fi.</p>`},
     {ic:'🌐', title:'Último recurso: otro navegador', html:`<p>Volver a entrar desde otro navegador a veces permite terminar la clase. Repórtalo después: Chrome sigue siendo el navegador compatible.</p>`}
   ])}
   ${iconGrid([
     {ic:'👥', html:`<strong>Grupos grandes (unos 15 estudiantes).</strong> La clase puede reiniciarse, caerse, congelarse o apagar la cámara de todos. Pide a los estudiantes que tengan la cámara apagada desde el principio, y repórtalo si se repite.`},
     {ic:'📡', html:`<strong>La pantalla compartida se corta una y otra vez.</strong> Suele ser la conexión. Cierra aplicaciones, pregunta si hay otros dispositivos usando el Wi-Fi y vuelve a compartir.`},
     {ic:'🔄', html:`<strong>Los estudiantes no ven tu pantalla y nada funciona.</strong> Pide a un estudiante que comparta su pantalla con el grupo en tu lugar — sobre todo en las clases grupales, esto suele funcionar mejor.`},
     {ic:'✏️', html:`<strong>Las anotaciones no funcionan</strong> (no puedes dibujar, los dibujos no aparecen o aparecen en otro lugar). Desactiva las anotaciones, vuelve a compartir la pantalla y actívalas de nuevo.`}
   ])}
  `},
  {t:'⬛ Pantalla negra al compartir — mira el procedimiento', html:`
   <div class="card"><p>Este es el procedimiento que deben seguir el estudiante y/o el tutor cuando la pantalla se pone negra al compartir pantalla.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Pantalla negra al compartir pantalla</div><div class="vslot-meta">Paso a paso · 19 segundos</div></div></div>
    <div class="vslot-frame" style="padding:0"><video src="Media/black_screen.mkv" controls preload="metadata" playsinline style="display:block;width:100%;max-height:420px;background:#000"></video></div>
    <div class="vslot-brief">Si la pantalla sigue negra después de seguir los pasos, recarga la página (tú o el estudiante). Si se repite, repórtalo con una captura.</div></div>
  `},
  {t:'🖥️ Classroom — más soluciones rápidas', html:`
   <div class="card"><p>Los pasos completos y actualizados están en la guía <strong>“Classroom Issues Quick Fixes”</strong> del equipo de Classroom. Las más frecuentes:</p></div>
   ${accItem('▬ Un rectángulo negro en lugar de tu pantalla', `<p>Detén y reanuda la pantalla compartida. A algunos les funciona minimizar y restaurar la ventana.</p>`)}
   ${accItem('🌫️ La pantalla compartida se ve borrosa', `<p>Vuelve a compartir y revisa la conexión.</p>`)}
   ${accItem('🙈 El estudiante no ve tu pantalla compartida', `<p>Si está en el celular, que use el “sitio de escritorio”. Revisa que use Chrome. Si nada funciona, pide a otro estudiante que comparta su pantalla con el grupo.</p>`)}
   ${accItem('📱 El estudiante no puede compartir su pantalla', `<p>Desde el navegador de un celular o tablet (iPad, tablet o teléfono) <strong>no es posible</strong>. Necesita un computador.</p>`)}
   ${accItem('🧾 La pizarra sigue visible después de cerrarla', `<p>Pídeles que salgan y vuelvan a entrar; repórtalo con el enlace de BO del grupo.</p>`)}
   ${accItem('🚪 Las salas de grupos dan errores', `<p>Cierra todas las salas y créalas de nuevo. Si falla la pantalla compartida dentro de las salas, repórtalo.</p>`)}
   ${accItem('📄 La página de Assignments se ve negra', `<p>Desactiva y borra las anotaciones, detén la pantalla compartida y haz clic derecho → “Volver a cargar marco”. Si la pantalla de un estudiante se puso negra porque estaba en la pestaña de Assignments, detén y vuelve a compartir.</p>`)}
   ${accItem('⚠️ Al estudiante le aparecen banners de error', `<p>Pídele que <strong>lo lea en voz alta</strong> y explícale qué hacer. <strong>Registra</strong> si hubo banner, el mensaje, las advertencias previas a unirse y el tipo de error. Repórtalo con una captura.</p>`)}
   ${accItem('🖼️ La cámara falla con fondos virtuales', `<p>Activa “Usar aceleración de gráficos cuando esté disponible” en <em>chrome://settings/system</em>.</p>`)}
   ${accItem('🪟 El modo Picture-in-Picture', `<p>Ayuda: clic derecho sobre la pantalla compartida → Picture-in-Picture.</p>`)}
  `},
  {t:'🎙️ Cuando el micrófono o la cámara de un estudiante no funciona', html:`
   ${stepFlow([
     {ic:'🔁', label:'Pídele que vuelva a entrar a la clase'},
     {ic:'🎚️', label:'Revisa que estén seleccionados el micrófono y la cámara correctos'},
     {ic:'📮', label:'¿Sigue sin funcionar? Repórtalo y pide a soporte técnico que lo pruebe durante la semana'}
   ])}
   ${co('co-ok','💬',`<p><strong>Mientras tanto, el estudiante sigue aprendiendo.</strong> Puede asistir sin cámara y, de forma excepcional, incluso sin micrófono: se comunican por el chat y las reacciones. Nadie se queda fuera de la clase por un dispositivo.</p>`)}
   ${co('co-danger','🔇',`<p><strong>Si silencias a un estudiante, vuelve a activar su micrófono.</strong> Dejar a un niño silenciado sin darte cuenta nos puede costar una familia.</p>`)}
  `},
  {t:'🧩 Cuando la herramienta del curso no funciona — alternativas por curso', html:`
   <div class="card"><p>Los autores de los cursos compartieron lo que puedes hacer cuando un estudiante no puede abrir el programa del curso o su computador no da abasto. Toca tu curso:</p></div>
   ${tabsBlock([
     {ic:'🎮', title:'Roblox, Unity, cualquier plataforma', html:`${symCards([
       {ic:'🔑', title:`El estudiante no puede iniciar sesión o el programa no abre`,
        do:`<ul><li><strong>Sigue tu demostración:</strong> el estudiante mira tu pantalla y responde en voz alta sobre lo que se está haciendo — así sigue participando en la clase.</li><li><strong>Después de la clase,</strong> revisa con él la instalación o el inicio de sesión.</li><li><strong>¿Sigue sin resolverse?</strong> Pide soporte técnico en el <strong>canal de ayuda para tutores</strong>.</li></ul>`,
        avoid:`Pasar toda la clase instalando mientras el resto del grupo espera.`},
       {ic:'🧱', title:`Roblox Studio no se descarga o no se instala`,
        do:`Revisa el sistema operativo y el espacio libre (mira los requisitos en el Módulo 1). Luego, lo mismo que arriba: demostración ahora, solución después de la clase y soporte técnico si hace falta.`},
       {ic:'🐌', title:`Unity se congela durante la clase`,
        do:`Pídele que cierre otras pestañas y aplicaciones. Unity necesita 8 GB de RAM. Si sigue, repórtalo con el modelo y el sistema del equipo.`}
     ])}`},
     {ic:'🧊', title:'Modelado 3D', html:`${symCards([
       {ic:'⬇️', title:`Blender no funciona en el computador del estudiante`,
        do:`<ul><li><strong>Prueba una versión anterior de Blender,</strong> descargada del sitio oficial de Blender.</li><li><strong>Si aun así no funciona,</strong> el computador no puede con el curso: repórtalo a tu Team Leader. Teaching y Ventas deciden cómo continúa el estudiante.</li></ul>`,
        avoid:`Prometer un cambio de curso — esa decisión no es tuya.`}
     ])}`},
     {ic:'🎨', title:'Creatividad digital', html:`${symCards([
       {ic:'📚', title:`Una de las herramientas en línea no funciona`,
        do:`<ul><li><strong>Revisa las alternativas</strong> en la wiki / notas del profesor — muchas herramientas tienen ahí una alternativa.</li><li><strong>¿No hay ninguna alternativa?</strong> Busca tú un servicio similar y envíalo por el formulario de retroalimentación para que se agregue a la lista de alternativas para todos.</li></ul>`},
       {ic:'🖌️', title:`Krita no abre`,
        do:`Sirve cualquier programa de dibujo en línea — por ejemplo, <em>Kleki</em>.`}
     ])}`},
     {ic:'✏️', title:'Ilustración', html:`${symCards([
       {ic:'🖌️', title:`El programa de dibujo no funciona`,
        do:`<strong>Sirve cualquier programa de dibujo</strong> — también uno en línea. El curso trata de métodos de dibujo, no de las funciones de un programa.`,
        tip:`Mantén el foco en el método — composición, línea, color — y no en dónde está un botón.`}
     ])}`},
     {ic:'💻', title:'Un computador con poca potencia', html:`${symCards([
       {ic:'🐢', title:`El computador no cumple en absoluto los requisitos del curso`,
        see:`La aplicación no abre, se congela o se cierra, o la pantalla previa a unirse muestra una advertencia de requisitos.`,
        do:`<ul><li><strong>Mantén la clase útil:</strong> una demostración en tu pantalla compartida, un ejemplo guiado, respuestas en voz alta.</li><li><strong>Repórtalo a tu Team Leader.</strong> El curso no se debió vender para ese computador; Teaching y Ventas deciden cómo y dónde continúa el estudiante.</li></ul>`,
        avoid:`Hacer la tarea por el estudiante, pedirle a la familia que compre algo o prometer un cambio de curso.`}
     ])}`}
   ])}
  `},
  {t:'👥 Cuando varios estudiantes fallan a la vez, o la clase se pierde', html:`
   ${doavoid(
     ['Hacer triage: ¿falla uno o muchos? Si son muchos, es la plataforma — <strong>repórtalo ya</strong>, con el enlace de BO del grupo','Mantener viva la clase con quienes están conectados, y pedir a los demás que sigan por el chat','Si la clase se perdió, enviar la grabación y armar un plan de recuperación (Módulo 3)','Hacer una demostración, compartir el archivo del proyecto y planear una sesión de recuperación'],
     ['Pasar toda la clase ayudando a los estudiantes uno por uno mientras el resto se aburre','Hacer la tarea por el estudiante cuando la tecnología falla','Prometerle una clase extra a la familia','Reprogramar la clase por tu cuenta']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Cuando un problema técnico compromete una clase</strong> — o dos seguidas — <strong>habla con tu Team Leader el mismo día.</strong> Puedes pedir una clase extra; tu Team Leader decide. Nunca se la prometas ni se la descartes tú a la familia.</p>`)}
  `},
  {t:'🆘 Classroom no funciona: qué hacer', html:`
   <div class="card"><p><strong>Classroom siempre va primero.</strong> Está conectado con todo — pagos, grabaciones, asistencia. En tu región <strong>no se usa Zoom como alternativa</strong>: genera problemas con los pagos y afecta la calidad de la clase.</p></div>
   ${numlist(['Prueba las soluciones rápidas de arriba durante un máximo de 10 minutos','¿No se resuelve? Avisa de inmediato a tu Team Leader y escribe en el canal de ayuda para tutores','Mantén viva la clase con quien esté conectado, y envía a los demás la grabación y lo esencial','Repórtalo el mismo día con un comentario en BO — si la clase se perdió, puedes pedirle una clase extra a tu Team Leader'])}
  `}
 ],
 ix:{
  title:'La clase sigue',
  instr:'Elige la primera acción en cada caso. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Cuál es la primera acción?', card:`Cuando compartes tu pantalla, los estudiantes solo ven negro.`, zones:[{label:'🔁 Seguir el procedimiento de pantalla negra y recargar la página si hace falta', fb:'Correcto — es el procedimiento del video. Si se repite, lo reportas con una captura.'},{label:'🆘 Pasar la clase a Zoom de inmediato', fb:'No exactamente — en tu región no se usa Zoom. Primero va la solución de Classroom.'},{label:'⏭️ Seguir explicando sin la pantalla', fb:'No exactamente — primero prueba la solución; si no se resuelve en 10 minutos, lo reportas.'}], correctZone:0},
   {type:'sort', prompt:'¿Cuál es la primera acción?', card:`El micrófono de un estudiante aparece encendido, pero nadie lo escucha.`, zones:[{label:'📮 Reportarlo de inmediato a soporte técnico', fb:'No exactamente — primero prueba los pasos rápidos: volver a entrar y revisar el micrófono seleccionado.'},{label:'🔁 Pedirle que vuelva a entrar y revise que esté seleccionado el micrófono correcto', fb:'Correcto — un micrófono puede verse “encendido” y aun así estar bloqueado. Si sigue fallando, usa el chat y tú lo reportas.'},{label:'🔇 Decirle que esta vez solo escuche', fb:'No exactamente — primero las soluciones rápidas, y mientras tanto puede participar por el chat y las reacciones.'}], correctZone:1},
   {type:'sort', prompt:'¿Cuál es la primera acción?', card:`Un estudiante con tablet no puede compartir su pantalla.`, zones:[{label:'🔁 Pedirle que lo intente varias veces más', fb:'No exactamente — desde el navegador de una tablet no es posible compartir pantalla.'},{label:'📝 Pedirle que cambie de navegador en la tablet', fb:'No exactamente — en un celular o tablet no es posible, sea cual sea el navegador.'},{label:'💻 Explicarle que necesita un computador para compartir pantalla, y seguir la clase de otra forma', fb:'Correcto — es una limitación conocida. Adapta la actividad y, si el curso lo requiere, repórtalo.'}], correctZone:2},
   {type:'choice', prompt:`En una clase de Roblox, un estudiante no puede iniciar sesión en Roblox Studio. ¿Qué haces durante la clase?`, opts:[`Pasas la clase ayudándolo a iniciar sesión mientras el resto del grupo espera`,`Dejas que siga tu demostración y responda en voz alta sobre lo que se hace; después de la clase, lo ayudas a resolverlo y pides soporte técnico si hace falta`,`Le dices que se salte esta clase y vuelva cuando funcione`], correct:1, fb:`El estudiante sigue aprendiendo con tu demostración. El acceso lo resuelves después de la clase, y pides soporte técnico si sigue sin solucionarse.`},
   {type:'choice', prompt:`En Creatividad digital, Krita no abre en el computador de un estudiante. ¿Cuál es una buena alternativa?`, opts:[`Usar un programa de dibujo en línea, como Kleki`,`Reportar que el estudiante no puede hacer el curso`,`Pedirle a la familia que compre una tableta gráfica`], correct:0, fb:`Sirve cualquier programa de dibujo en línea. Revisa las alternativas en la wiki / notas del profesor, y sugiere nuevas por el formulario de retroalimentación.`},
   {type:'choice', prompt:`A los cinco minutos, tres estudiantes no pueden entrar y los otros dos están esperando. ¿Qué haces?`, opts:[`Ayudas a cada uno por turno hasta que entren todos`,`Cancelas la clase y avisas a las familias`,`Lo reportas ya (es la plataforma), sigues con los dos que están conectados y pides a los demás que sigan por el chat`], correct:2, fb:`Si fallan varios, es la plataforma: repórtalo ya. Mantén viva la clase con quienes están conectados y prepara después el plan de recuperación.`},
   {type:'choice', prompt:`Classroom no funciona para nadie del grupo. ¿Qué haces?`, opts:[`Envías a todos un enlace de Zoom para no perder la clase`,`Pruebas las soluciones rápidas; si no se resuelve en 10 minutos, avisas de inmediato a tu Team Leader y lo reportas el mismo día con un comentario en BO`,`Cancelas la clase y les dices a las familias que se reprogramará`], correct:1, fb:`En tu región no se usa Zoom, y no reprogramas por tu cuenta. Soluciones rápidas, luego tu Team Leader de inmediato y después el reporte el mismo día.`}
  ]
 }
},
{id:'after', numLabel:'Módulo 3', emoji:'🏠', color:'#B79DF2', art:'phoneDesk', learn:[['🔍','Detecta el “no puede” que se esconde detrás del “no lo hace”'],['📲','Conoce los límites del celular y la tablet'],['📼','Recupera una clase perdida'],['🔁','Cierra el ciclo con la familia']],
 eyebrow:'Módulo 3 de 4',
 title:'Después de la clase',
 desc:'Las tareas que no se entregan porque no se puede entrar, la plataforma en el celular o la tablet, las clases perdidas y cómo cerrar el ciclo con la familia.',
 obj:'Asegurarte de que un problema técnico no deje a una familia sin tareas ni sin respuesta, y detectarlo antes de confundirlo con una “no entrega”.',
 sections:[
  {t:'🔍 Cuando no entrega, quizá no puede', html:`
   <div class="card"><p>Antes de pensar en falta de motivación, comprueba si el estudiante <strong>puede entrar</strong> a hacer la tarea. Algunas familias se han quejado de que no podían abrir las tareas y nadie les dio una opción.</p></div>
   ${co('co-idea','❓',`<p><strong>Pregunta antes de suponer:</strong> <em>“¿Pudiste abrir la tarea? ¿Desde qué dispositivo lo intentaste?”</em></p>`)}
  `},
  {t:'🩺 Síntomas después de la clase', html:`
   ${symCards([
     {ic:'🔒', title:`No puede entrar a la plataforma para hacer la tarea`,
      do:`Confirma el navegador (Chrome de escritorio), el dispositivo y los datos de acceso — los encuentras en BO y puedes enviarlos de nuevo. Si no cambia nada, repórtalo con los enlaces de BO del estudiante y del grupo, y <strong>haz seguimiento a las 24 horas</strong>.`,
      say:`<em>“Lo estoy revisando con mi equipo y te escribo mañana.”</em>`},
     {ic:'🧩', title:`El programa del curso no abrió durante la clase`,
      do:`Después de la clase, revisa con el estudiante la instalación o el inicio de sesión (y la alternativa para su curso del Módulo 2). Si sigue sin funcionar, pide soporte técnico en el <strong>canal de ayuda para tutores</strong>.`},
     {ic:'🎙️', title:`Su micrófono o su cámara no funcionaron`,
      do:`Si volver a entrar y revisar el dispositivo no ayudó, repórtalo y pide a soporte técnico que lo pruebe con el estudiante durante la semana siguiente. Hasta entonces, el estudiante participa con el chat y las reacciones.`},
     {ic:'📱', title:`Solo puede entrar desde el celular y no se ve bien`,
      do:`La plataforma está pensada para computador: que use el “sitio de escritorio” o un computador. No prometas un acceso alternativo.`,
      say:`Explica la limitación con calidez: <em>“Algunas partes no se ven bien en el celular; en un computador, o con el sitio de escritorio, funciona mucho mejor.”</em>`},
     {ic:'📲', title:`La plataforma no funciona del todo en celular o tablet`,
      do:`Es una <strong>limitación conocida</strong> (por ejemplo, no se puede compartir pantalla desde el celular). Si el curso lo requiere, repórtalo.`},
     {ic:'🗂️', title:`La tarea no aparece en el cuaderno o el panel`,
      do:`Repórtalo con una captura.`},
     {ic:'📼', title:`Perdió una clase por una falla`,
      do:`Envía la grabación y lo esencial, arma un plan de recuperación y habla con tu Team Leader el mismo día — puedes pedir una clase extra.`,
      tip:`<strong>Sincroniza con tu Team Leader antes de escribirle a la familia.</strong>`}
   ])}
  `},
  {t:'🔁 Cierra el ciclo', html:`
   <div class="card"><p>Cuando el problema se resuelve, <strong>avísale a la familia</strong>. Un padre informado es un padre que se queda.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 Un mensaje de cierre que puedes usar</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Hola, [nombre del padre o la madre]. Te escribo para contarte que el problema de acceso que tuvo [estudiante] ya está resuelto. Gracias por tu paciencia. Si vuelve a pasar algo, escríbeme y lo revisamos enseguida.”</em></p></div>
  `}
 ],
 ix:{
  title:'Que nadie se quede sin respuesta',
  instr:'Elige la mejor acción o clasifica cada caso. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:`Una familia dice que su hijo solo puede entrar desde el celular y que la plataforma no se ve bien. ¿Qué haces?`, opts:[`Les prometes que vas a conseguirles un acceso especial para el celular`,`Les explicas con calidez que la plataforma está pensada para computador, les sugieres el sitio de escritorio o un computador, y lo reportas si el curso lo requiere`,`Les dices que así no puede seguir el curso`], correct:1, fb:`Explica la limitación con calidez, ofrece lo que sí funciona y no prometas un acceso alternativo.`},
   {type:'choice', prompt:`Un estudiante dice que la tarea no le aparece en el panel. ¿Qué haces?`, opts:[`Lo reportas con una captura`,`Le dices que lo intente otro día`,`Marcas la tarea como no entregada`], correct:0, fb:`Si la tarea no aparece, es un problema técnico: repórtalo con una captura.`},
   {type:'sort', prompt:'¿Lo resuelves tú o lo reportas?', card:`Un estudiante no entrega las tareas y, al preguntarle, dice que no puede entrar a la plataforma, ni siquiera desde Chrome en un computador.`, zones:[{label:'🧑‍🏫 Lo resuelvo yo', fb:'No exactamente — ya probaste lo básico (Chrome en un computador). Ahora toca reportarlo.'},{label:'📮 Lo reporto', fb:'Correcto — lo reportas con los enlaces de BO del estudiante y del grupo, y haces seguimiento a las 24 horas.'}], correctZone:1},
   {type:'choice', prompt:`Reportaste que un estudiante no puede entrar a las tareas. ¿Cuándo haces el seguimiento?`, opts:[`La semana siguiente`,`Solo si la familia vuelve a escribir`,`A las 24 horas`], correct:2, fb:`El seguimiento es a las 24 horas: así la familia no se queda sin respuesta.`}
  ]
 }
},
{id:'report', numLabel:'Módulo 4', emoji:'📮', color:'#F58AC4', art:'report', learn:[['🆘','Dónde pedir ayuda y a quién contactar'],['🛣️','Elige el carril correcto'],['📅','Clases extra y reprogramaciones'],['🧾','Escribe un reporte completo'],['💛','Responde a la familia a tiempo'],['🖥️','Practica en una simulación de BO']],
 eyebrow:'Módulo 4 de 4',
 title:'Reportar y escalar',
 desc:'Dónde pedir ayuda y a quién contactar en tu región, a quién avisar según el problema, clases extra y reprogramaciones, qué incluye un buen reporte, cómo responder a la familia a tiempo y una simulación de BO para practicar un reporte técnico.',
 obj:'Saber dónde pedir ayuda, a quién avisar, con qué datos y en qué orden — y mantener informada a la familia a tiempo. Un problema que no se reporta, o una familia a la que no se le responde, no existe para nadie más.',
 sections:[
  {t:'🆘 Dónde pedir ayuda y a quién contactar', html:`
   <div class="card"><p>Cuando no puedes resolver tú solo un problema técnico, pide ayuda:</p>
   ${numlist(['<strong>El canal de ayuda para tutores</strong> — para solicitudes y problemas técnicos; una persona responsable se encarga de ellos','<strong>Servicio al Cliente</strong> puede abrir una solicitud para contactar directamente a la familia cuando el problema está de su lado'])}</div>
   <div class="card" style="background:var(--surface2)"><h4>👥 A quién contactar</h4>
   <div class="tbl-wrap"><table>
    <tr><th>Qué pasó</th><th>A quién</th></tr>
    <tr><td>Un problema técnico que no puedes resolver (Classroom, enlaces, plataformas)</td><td>El canal de ayuda para tutores</td></tr>
    <tr><td>Faltan clases en el saldo, un horario equivocado, un descuento de clase injusto</td><td>Tu Team Leader + Operaciones: <strong>@David Marte</strong>, <strong>@Anna Hernandez</strong></td></tr>
    <tr><td>Hay que contactar a la familia</td><td>Servicio al Cliente — todo el equipo está en el canal de CS (el “canal verde”)</td></tr>
    <tr><td>Una clase extra, o una clase que no se puede dar</td><td>Tu Team Leader</td></tr>
   </table></div></div>
  `},
  {t:'🛣️ Tres carriles', html:`
   <div class="card"><p>Según el tipo de problema, el reporte va por un carril distinto:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Carril</th><th>Cuándo</th><th>Dónde</th></tr>
    <tr><td><strong>1. Falla de Classroom o de la plataforma</strong><br>(pantalla negra, audio, pizarra, salas, enlaces rotos)</td><td>Las soluciones rápidas no lo resolvieron</td><td>El canal de ayuda para tutores + comentario en BO</td></tr>
    <tr><td><strong>2. Cuenta y Operaciones</strong><br>(matrícula, credenciales, horario, licencias, saldo de clases, descuentos)</td><td>El estudiante no puede entrar, no está registrado, el horario está mal, las credenciales no funcionan o se descontaron clases injustamente</td><td>Team Leader + Servicio al Cliente + comentario en BO (Operaciones: @David Marte, @Anna Hernandez)</td></tr>
    <tr><td><strong>3. Clase perdida</strong><br>(una o más clases comprometidas)</td><td>Por una falla de la plataforma, una cancelación o una ausencia</td><td><strong>Team Leader el mismo día</strong> (puedes pedir una clase extra) + Servicio al Cliente si la familia está molesta + comentario en BO</td></tr>
   </table></div></div>
  `},
  {t:'📅 Clases extra y reprogramaciones', html:`
   ${iconGrid([
     {ic:'➕', html:`<strong>Clase extra: tú la pides, tu Team Leader decide.</strong> Cuando un problema técnico se repite y podría terminar en un reembolso, pídele una clase extra a tu Team Leader.`},
     {ic:'🚫', html:`<strong>Nunca le ofrezcas una clase extra a la familia</strong> antes de que tu Team Leader la haya aprobado.`},
     {ic:'🕒', html:`<strong>Los tutores no pueden reprogramar una clase.</strong> Si una clase no se puede dar, avísale a tu Team Leader.`}
   ])}
  `},
  {t:'🧾 Qué incluye un reporte', html:`
   ${numlist([
     '<strong>Enlaces de BO</strong> del grupo y del estudiante (obligatorios)',
     '¿Se le mostró un <strong>banner</strong> al estudiante? ¿Qué decía?',
     '<strong>Advertencias en la pantalla previa a unirse</strong> (por ejemplo, requisitos no compatibles)',
     '<strong>Tipo de error:</strong> pantalla negra, sin sonido, no puede entrar, el programa no abre…',
     '<strong>Captura de pantalla</strong>',
     'Dispositivo, sistema operativo, navegador y, si aplica, <strong>si usa VPN</strong> y desde qué país',
     'Qué intentaste y durante cuánto tiempo',
     'Si se usó una plataforma alternativa: <strong>la grabación</strong>'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Cómo es un comentario útil en BO — copia y completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Clase:</strong> [fecha] · <strong>Grupo:</strong> [enlace de BO] · <strong>Estudiante:</strong> [enlace de BO]<br>
   <strong>Qué falló:</strong> [p. ej., no pudo entrar a la clase; pantalla negra al compartir]<br>
   <strong>Banner o mensaje:</strong> [texto exacto, o “ninguno”] · <strong>Advertencias previas a unirse:</strong> [sí / no, cuáles]<br>
   <strong>Equipo:</strong> [dispositivo, sistema, navegador, VPN sí / no y país]<br>
   <strong>Qué intenté:</strong> [p. ej., recargar, volver a entrar, cerrar aplicaciones, versión anterior de Blender — 10 minutos]<br>
   <strong>Cómo siguió la clase:</strong> [p. ej., siguió mi demostración; plataforma alternativa, grabada]<br>
   <strong>Captura:</strong> [adjunta] · <strong>Palabras de la familia:</strong> [textuales, si las hay]</p></div>
  `},
  {t:'🖥️ Practica: reporta un problema técnico en BO', html:`
   <div class="card"><p>Ahora hazlo de verdad, en una réplica del Back Office. <strong>Un estudiante no pudo entrar a la clase de hoy por un problema técnico.</strong> Sigue el recorrido de 4 pasos. En el <strong>paso 4</strong> elige el Tipo de problema <strong>“Problema técnico, por favor, contacten al estudiante”</strong> y escribe tu comentario con los hechos: qué falló, cuándo, el mensaje o banner, qué intentaste y las palabras de la familia.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Reportar un problema técnico</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Reportar un problema técnico" loading="lazy"></iframe></div></div>
   ${co('co-idea','📝',`<p><strong>Usa la plantilla de arriba.</strong> Cuanto más completo sea tu comentario, más rápido podrá alguien contactar a la familia.</p>`)}
  `},
  {t:'🔢 El orden importa', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Primero el equipo, después la familia.</strong> Cuando el problema va más allá de tu enseñanza (acceso, horario, saldo de clases, una clase perdida), no le escribas a la familia antes de hablar con tu Team Leader.`},
     {ic:'🎓', html:`<strong>Tú hablas del aprendizaje; la acción la pasas a quien corresponde.</strong> Puedes contar qué intentaste en la clase y que lo estás revisando. Las opciones (clase extra, cambio de grupo o de curso, compensación) vienen de tu Team Leader y de Servicio al Cliente.`},
     {ic:'⚖️', html:`<strong>Nunca prometas y nunca rechaces.</strong> Ni <em>“te damos una clase extra”</em> ni <em>“eso no es posible”</em>. Lo que sí: muestra que te importa y que ya estás en ello.`},
     {ic:'📅', html:`<strong>Escala una vez y haz seguimiento.</strong> Pon un recordatorio en tu calendario para revisarlo en dos clases.`}
   ])}
   ${co('co-ok','💬',`<p><strong>Un mensaje que puedes enviar</strong> (una vez acordado con tu Team Leader): <em>“Hola, [nombre del padre o la madre]. Vi que hoy [estudiante] no pudo entrar a la clase. Ya lo reporté a mi equipo con todos los detalles, y Servicio al Cliente se pondrá en contacto contigo. Mientras tanto, te envío la grabación para que no se pierda nada de lo que vimos.”</em></p>`)}
  `},
  {t:'💛 Responde a tiempo: las familias notan tu esfuerzo', html:`
   <div class="card"><p>Una falla técnica casi nunca es la única razón por la que una familia se va. Lo que decide es lo que pasa <strong>después</strong>: ¿alguien responde?, ¿el niño vuelve a entrar?, ¿la familia siente que a alguien le importa? Cuando los padres ven que te esfuerzas para que todo funcione — respondes rápido, das seguimiento, te aseguras de que su hijo tenga la mejor clase posible — lo notan. Ese esfuerzo es lo que hace que muchas familias <strong>nos den una segunda oportunidad</strong>. El silencio les dice lo contrario.</p></div>
   ${co('co-danger','🚨',`<p><strong>No tomes un problema técnico como algo menor.</strong> Para ti puede ser una pantalla negra. Para la familia es una clase que pagaron, un niño decepcionado y una duda: <em>“¿vale la pena?”</em> Tómalo en serio, aunque solo haya durado cinco minutos — y más aún si la familia ya mostró que está molesta.</p>`)}
   ${rclock([
     {ic:'👀', when:'De inmediato', t:'Lo vi y estoy en eso', d:'Confirma que recibiste su mensaje al instante, aunque todavía no tengas la respuesta.'},
     {ic:'📮', when:'El mismo día', t:'Reporta y sincroniza', d:'Comentario en BO con todos los detalles, Team Leader informado y acuerdo sobre qué le dirás a la familia.'},
     {ic:'💬', when:'El mismo día', t:'Actualiza a la familia', d:'Cuéntales qué hiciste y cuándo les vas a volver a escribir — y cúmplelo, aunque no haya novedades.'},
     {ic:'🚪', when:'Próxima clase', t:'Haz que funcione', d:'Entra antes, prueba todo y comprueba que el estudiante entra. Después cierra el ciclo.'}
   ])}
   ${co('co-ok','💬',`<p><strong>Confirmar la recepción siempre está permitido.</strong> Un mensaje corto y cálido — lo viste, te importa, estás en ello y cuándo volverás a escribir — no necesita la aprobación de nadie. Lo que espera a tu Team Leader es cualquier explicación, cualquier opción y todo lo relacionado con compensaciones.</p>`)}
   ${chatMock({
     name:'Madre / padre', sub:'en línea', avatar:'👩', time:'18:02',
     msgs:[`Buenas noches. Es la <strong>segunda vez</strong> que mi hijo no puede entrar a la clase. Estamos pagando clases que no recibe y está muy decepcionado. ¿¿Qué está pasando??`],
     title:'¿Cómo respondes?',
     text:'Son las 6 p. m. Acabas de ver el mensaje y todavía no has hablado con tu Team Leader. Toca cada respuesta para ver qué pasa.',
     opts:[
      {t:`“¡Buenas noches! Classroom suele funcionar bien, seguramente es su internet. Prueben con otro navegador.”`, ok:false, fb:`Culpaste a la familia y a la plataforma a la vez, y no mostraste ninguna señal de que te importa. La familia lo leerá como “no es mi problema”.`},
      {t:`“Lo siento mucho — perder dos clases no está bien, y entiendo lo decepcionado que debe estar. Vi tu mensaje y estoy en eso: hoy mismo lo reporto con todos los detalles a mi equipo. Te escribo de nuevo mañana por la mañana con novedades, y en la próxima clase entro antes para asegurarme de que pueda entrar.”`, ok:true, fb:`Esta es la respuesta. Reconoce el problema y el sentimiento, muestra un esfuerzo concreto, dice cuándo volverás a escribir y no promete nada que no te corresponda decidir.`},
      {t:`“¡Tranquilos, le doy una clase extra gratis para compensar!”`, ok:false, fb:`Con buena intención, pero no te corresponde prometerlo: las clases extra y las compensaciones se deciden con tu Team Leader y Servicio al Cliente. Si después no se puede, la familia vuelve a perder la confianza.`},
      {t:`Respondo mañana, cuando tenga la respuesta completa.`, reply:`<i>(sin respuesta esta noche…)</i>`, ok:false, fb:`El silencio es la peor opción. La familia ya está molesta; cada hora sin respuesta confirma que a nadie le importa. Confirma siempre la recepción de inmediato.`}
     ]
   })}
   ${co('co-star','🌟',`<p><strong>Recuerda:</strong> una falla técnica se puede perdonar. Sentirse ignorado cuesta mucho más perdonarlo. Tu respuesta, tu seguimiento y tu esfuerzo para que el estudiante recupere el acceso y tenga la mejor clase posible es lo que muchas familias ven — y por lo que deciden quedarse.</p>`)}
  `}
 ],
 ix:{
  title:'Reporta bien, y en orden',
  instr:'Elige el carril, el mejor comentario y lo que dirías. 70 % para completar este módulo.',
  items:[
   {type:'sort', prompt:'¿Por qué carril va este reporte?', card:`Una familia dice que les descontaron dos clases de su paquete, pero solo se dio una.`, zones:[{label:'1️⃣ Falla de Classroom o de la plataforma', fb:'No exactamente — en Classroom no falló nada; se trata del saldo de clases.'},{label:'2️⃣ Cuenta y Operaciones', fb:'Correcto — el saldo de clases y los descuentos van a tu Team Leader y a Servicio al Cliente, con un comentario en BO. Operaciones lo revisa.'},{label:'3️⃣ Clase perdida', fb:'No exactamente — la clase no se perdió por una falla; es una cuestión del saldo de clases.'}], correctZone:1},
   {type:'sort', prompt:'¿Por qué carril va este reporte?', card:`La pizarra sigue visible después de cerrarla, y salir y volver a entrar no lo arregla.`, zones:[{label:'1️⃣ Falla de Classroom o de la plataforma', fb:'Correcto — las soluciones rápidas no lo resolvieron: repórtalo (canal de ayuda para tutores) con un comentario en BO.'},{label:'2️⃣ Cuenta y Operaciones', fb:'No exactamente — no tiene nada que ver con la cuenta del estudiante.'},{label:'3️⃣ Clase perdida', fb:'No exactamente — la clase siguió; es una falla de Classroom.'}], correctZone:0},
   {type:'choice', prompt:`¿Cuál es el mejor comentario de BO para el mismo caso?`, opts:[`“No pudo entrar, mala conexión.”`,`“3/11, clase 2. No pudo entrar: banner ‘Sistema no compatible’ en la pantalla previa a unirse. Windows 7, Chrome actualizado. Probé recargar y volver a entrar, 10 min; siguió mi demostración el resto de la clase. Captura adjunta. Enlaces de BO del grupo y del estudiante.”`,`“Otra vez la plataforma no funciona, esto pasa siempre.”`], correct:1, fb:`El comentario útil es completo y neutral: fecha, qué falló, el banner, el equipo, qué intentaste, cómo siguió la clase, la captura y los enlaces de BO.`},
   {type:'choice', prompt:`Un estudiante perdió una clase por una falla de la plataforma, y la familia está descontenta. ¿Qué va primero?`, opts:[`Escribirle a la familia y ofrecerle una clase extra`,`Esperar a ver si la próxima clase funciona`,`Hablar con tu Team Leader el mismo día, pedir una clase extra y acordar con él el mensaje para la familia`], correct:2, fb:`Primero el equipo, después la familia. Puedes pedir la clase extra; tu Team Leader decide, y solo entonces se entera la familia.`},
   {type:'choice', prompt:`Un problema técnico ha afectado tres clases seguidas y la familia menciona un reembolso. ¿Qué puedes hacer?`, opts:[`Ofrecerle tú a la familia una clase extra gratis`,`Cambiar tú las próximas clases a otro horario`,`Pedirle una clase extra a tu Team Leader, que es quien decide`], correct:2, fb:`No puedes reprogramar ni ofrecer nada por tu cuenta — pero sí puedes pedir una clase extra. Tu Team Leader decide.`},
   {type:'choice', prompt:`Una madre escribe, molesta: “Es la segunda vez que mi hijo no puede entrar.” Son las 6 p. m. y todavía no has hablado con tu Team Leader. ¿Qué haces primero?`, opts:[`Esperar a mañana, hablar con tu Team Leader y responder una sola vez con todas las respuestas`,`Responder ahora, brevemente: lo sientes, lo viste, estás en ello y volverás a escribir con novedades — y luego sincronizar con tu Team Leader`,`Explicarle cómo funciona Classroom para que entienda que rara vez es culpa de la plataforma`], correct:1, fb:`Confirmar la recepción siempre está permitido, y el silencio hace más daño que la falla en sí. Responde ahora con calidez y con una hora para la próxima novedad; las explicaciones y las opciones esperan a tu Team Leader.`}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'#FFD34D', art:'shield', learn:[['🛟','Si existe una solicitud de reembolso'],['🧭','Antes · durante · después']],
 eyebrow:'Lista de verificación final',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes, durante y después de la clase.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud, con fechas, qué falló, el mensaje o banner, qué intenté y una captura, y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue técnicamente a prueba de fallas: 15 minutos antes, las demás aplicaciones cerradas, un plan B, atención específica y un logro visible',
     'Nunca confirmé una aprobación, nunca hablé de montos y nunca culpé a la plataforma — usé la única frase segura'
   ])}
  `},
  {t:'🧭 Antes, durante y después', html:`
   ${tabsBlock([
     {ic:'🧰', title:'Antes', html:`<div class="card">${numlist(['Chrome de escritorio actualizado, las demás aplicaciones cerradas','Micrófono, cámara y pantalla probados','BO: grupo, lista de estudiantes y enlace','Advertencias previas a unirse','Curso 🟡 / 🔴: computador revisado antes de la clase 1','En la clase 1, entro antes'])}</div>`},
     {ic:'🛠️', title:'Durante', html:`<div class="card">${numlist(['Primero la calma','Recargar, volver a entrar, cerrar aplicaciones, revisar el dispositivo','10 minutos y luego escalo en el canal de ayuda para tutores','¿No funciona la herramienta del curso? Demostración + respuestas en voz alta, o la alternativa del curso','Sin Zoom en mi región: si Classroom falla, aviso de inmediato a mi Team Leader','Si hay muchos afectados, lo reporto ya','No hago la tarea por el estudiante'])}</div>`},
     {ic:'🏠', title:'Después', html:`<div class="card">${numlist(['¿Puede entrar a las tareas?','Ayuda con el programa después de la clase','Grabación, plan de recuperación y, si hace falta, una clase extra pedida a mi Team Leader','Reporte el mismo día con datos completos','Respondo a la familia a tiempo y la mantengo al tanto, aunque no haya novedades','Seguimiento a las 24 horas','Cierro el ciclo con la familia'])}</div>`}
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
