/* Mini_Training_7_Technical_Issues - Portuguese content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:"Minitreinamento · Problemas Técnicos — Treinamento para Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Quando a <span class=\"h-pill\">Tecnologia</span> Falha",
    heroIntro:"Você recebeu este treinamento porque tem alunos cujas famílias pediram reembolso por causa de problemas técnicos. Aqui você vai ver o que pode fazer antes, durante e depois da aula, quais alternativas usar e onde pedir ajuda para que o problema seja resolvido a tempo.",
    heroCard1:"<b>No seu ritmo.</b> Seu progresso fica salvo neste navegador.",
    heroCard2:"<b>Com prática.</b> Você vai relatar um problema técnico em uma simulação do Back Office.",
    pbLabel:'módulos concluídos',
    tapOpen:'Toque para abrir',
    tapFlip:'Toque para virar',
    lblSee:'O que você vê',
    lblDo:'O que você faz',
    lblSay:'O que você pode dizer',
    lblReport:'Onde relatar',
    lblAvoid:'Evite',
    lblTip:'Dica',
    stepOf:'Passo {i} de {n}',
    next:'Próximo',
    heroWork:"Complete 6 módulos curtos. Acerte pelo menos 70% em cada verificação para liberar o próximo módulo. Levará cerca de 30 a 40 minutos no total.",
    startBtn:"🚀 Começar o treinamento",
    pathLabel:'Seu caminho de aprendizado',
    devTitle:'Dev: desbloquear todos os módulos para revisão',
    backToPath:'Voltar ao caminho',
    modulesPassed:'{done} / {total} módulos concluídos',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Começar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Iniciar a verificação do módulo',
    finishBtn:'▶ Concluir o minitreinamento',
    doneBack:'✓ Pronto — voltar ao caminho',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — item {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Não foi dessa vez — a resposta certa é “{label}”.',
    resPassed:'Módulo concluído!',
    resFailed:'Ainda não foi dessa vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resDone:"Você concluiu este minitreinamento.",
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e faça a verificação novamente.',
    resContinue:'Continuar para o caminho de aprendizado',
    resFinish:'Continuar',
    resBack:'Voltar ao caminho',
    resReview:'Revisar este módulo',
    doneEyebrow:'Minitreinamento concluído',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu este minitreinamento.</strong>",
    doneP2:"Está tudo pronto por aqui! Volte à página de treinamento do LMS por onde você acessou este minitreinamento para encerrar a atividade.",
    doneP3:"👉 <strong>Se houver uma verificação ou avaliação listada logo abaixo do treinamento no LMS, não deixe de fazê-la e de alcançar a nota de aprovação</strong> — caso contrário, a atividade pode continuar incompleta.",
    doneP4:'Boa sorte! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo dev: todos os módulos estão desbloqueados para revisão.',
    devOn:'🔓 Modo dev ATIVADO — todos os módulos desbloqueados',
    devOff:'🔒 Modo dev DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Atenção:',
    cvSee:'O que você vê:',
    cvDo:'O que você faz:',
    dtExample:'Exemplo de uma aula real',
    dtNext:'A seguir:',
    dtDone:"✅ Esses são os três níveis.",
    tlVideoTitle:'{label} — exemplo de uma aula real',
    tlVideoMeta:'Veja como essa fase acontece em uma aula real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'🧩', color:'#5DD39E', art:'lifebuoy', learn:[['📊','O que os dados mostram'],['🔎','Os problemas que este treinamento aborda'],['🧭','O que é seu — e o que não é'],['🛟','O que fazer se já existe um pedido de reembolso'],['🎯','Como fazer da próxima aula a tentativa de recuperação']],
 eyebrow:'Introdução',
 title:'Por que você está aqui',
 desc:'Por que um problema técnico nas primeiras aulas pode nos custar uma família, qual parte é sua — e o que fazer se já existe um pedido de reembolso.',
 obj:'Entender por que um problema técnico nas primeiras aulas pode nos custar uma família, qual parte é sua e o que fazer quando já existe um pedido de reembolso.',
 sections:[
  {t:'📊 O que os dados mostram', html:`
   <div class="card"><p>Um problema técnico raramente vem sozinho. Ele aparece nas primeiras aulas, enquanto a família ainda está decidindo se a Kodland é a escolha certa — e às vezes antes de a criança ter assistido a uma única aula.</p></div>
   ${bigStat('≈ 1 em 20',`<p>pedidos de reembolso tem um <strong>problema técnico real</strong> por trás. E isso é o mínimo: alguns desses casos chegam registrados com outro motivo.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Com base nos pedidos de reembolso dos últimos 90 dias em todas as regiões; números aproximados.</p>
   ${co('co-idea','💡',`<p><strong>As primeiras aulas são a janela mais estreita.</strong> Um problema técnico resolvido no mesmo dia normalmente é revertido; o mesmo problema resolvido tarde quase nunca é. Por isso as primeiras aulas contam, e por isso o mesmo dia conta.</p>`)}
  `},
  {t:'🔎 Os problemas que este treinamento aborda', html:`
   ${iconGrid([
     {ic:'🖥️', html:`<strong>Classroom e plataformas de aprendizagem.</strong> Links quebrados ou ausentes, erros na plataforma, telas pretas, áudio e câmera que param de funcionar.`},
     {ic:'💻', html:`<strong>Computadores que não atendem aos requisitos do curso</strong>`},
     {ic:'🧩', html:`<strong>Ferramentas do curso que não abrem ou não instalam:</strong> Roblox Studio, Krita e outros programas.`}
   ])}
  `},
  {t:'🧭 O que é seu e o que não é', html:`
   <div class="card"><p>Você não pode corrigir um bug da plataforma, uma matrícula ou um horário. Mas muita coisa está nas suas mãos — e a parte mais importante é <strong>avisar as pessoas certas, rápido e bem</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Totalmente seu</th><th>🔁 Seu para adaptar e relatar</th><th>🚫 Fora do seu controle</th></tr>
    <tr><td>Verificar sua conexão, seu dispositivo e o Chrome antes de cada aula<br>Enviar à família os dados de acesso que você encontra no BO</td><td>Um aluno que não consegue entrar ou se conectar: ajude com os primeiros socorros e <strong>relate</strong></td><td>Corrigir um bug do Classroom ou da plataforma</td></tr>
    <tr><td>Manter a calma e tratar o problema com naturalidade diante do grupo</td><td>Uma aula perdida por uma falha: adapte a próxima e <strong>relate</strong></td><td>Matrículas, licenças e créditos de aula</td></tr>
    <tr><td>Silenciar e reativar microfones com cuidado</td><td>Um computador que não atende aos requisitos: mantenha a aula útil e <strong>relate ao seu Team Leader</strong></td><td>Transferir um aluno para outro curso, grupo ou horário</td></tr>
    <tr><td>Testar as alternativas conhecidas (atualizar, entrar de novo, outra ferramenta para o curso)</td><td>Um problema técnico que pode fazer a família desistir: <strong>solicite uma aula extra ao seu Team Leader</strong></td><td>Aprovar uma aula extra, uma remarcação ou qualquer compensação</td></tr>
    <tr><td>Relatar no mesmo dia com todos os detalhes</td><td>Uma falha que afeta vários alunos: triagem, <strong>relato</strong> e um plano de recuperação</td><td>O provedor de internet ou a rede doméstica da família</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>A sua parte tem três movimentos:</strong> primeiros socorros na aula, ajustar a aula para que o prejuízo seja o menor possível e <strong>relatar no mesmo dia</strong> com todos os detalhes.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>Não espere em silêncio.</strong> Se não resolver em 10 minutos, pare de tentar sozinho: comunique, documente, escale.</p>`)}
  `},
  {t:'🛟 Se já existe um pedido de reembolso por problema técnico', html:`
   <div class="card"><p>Tudo o que vimos acima é sobre prevenção. Mas talvez você esteja abrindo este treinamento porque uma família <strong>já</strong> pediu reembolso por causa de um problema técnico. Leia estas regras primeiro.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido é criado pelo Client Service, não por você.</strong> Você fica sabendo pelos comentários do Client Service no perfil do aluno, no BO; não há nenhuma notificação automática.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido</strong> — nem para a criança, nem para a família — a menos que o Client Service peça que você diga algo específico. Se a criança tocar no assunto, redirecione com carinho e continue a aula.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de recuperação', html:`
   <div class="card"><p>Essa aula precisa ser <strong>tecnicamente à prova de falhas</strong>. Uma segunda falha depois do pedido é o pior cenário possível.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 minutos antes:</strong> Chrome para computador atualizado, outros aplicativos fechados; microfone, câmera e compartilhamento de tela testados; grupo e lista de alunos conferidos no BO.`},
     {ic:'🅱️', html:`<strong>Um plano B pronto:</strong> o que você vai fazer se o aluno não conseguir entrar, se o áudio falhar ou se a ferramenta do curso não abrir (Módulos 1 e 2).`},
     {ic:'👀', html:`<strong>Atenção específica</strong> para essa criança — faça com que ela se sinta notada por algo concreto, e não elogiada de forma genérica.`},
     {ic:'🏆', html:`<strong>Uma conquista cedo e visível.</strong> Ela deve sair da aula se sentindo capaz, e não atrasada.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>Se a falha se repetir nessa aula, relate imediatamente</strong> pelo <strong>bot EU Request from Tutors</strong> — não no fim do dia.</p>`)}
  `},
  {t:'📮 Relate no mesmo dia e conheça a única frase segura', html:`
   ${numlist([
     'Deixe um comentário no BO no mesmo dia, com exatamente o que você viu: datas, o que falhou, a mensagem de erro ou o banner, o que você tentou e uma captura de tela',
     'Inclua as palavras exatas da família, ao pé da letra, se você as tiver',
     'Avise seu Team Leader no mesmo dia — também é o momento de perguntar se uma aula extra faz sentido',
     'Nunca confirme que um reembolso foi aprovado, nunca fale de valores e nunca culpe a plataforma'
   ])}
   ${co('co-ok','✅',`<p><strong>A frase que é sempre segura:</strong> <em>“O departamento de Atendimento ao Cliente vai ajudar você com isso.”</em> É aí que termina a sua parte na conversa.</p>`)}
  `},
  {t:'🌱 Mantenha o esforço depois', html:`
   <div class="card"><p>Mesmo que o pedido seja retirado ou que a criança mude de grupo, continue cuidando do lado técnico das aulas dela nas semanas seguintes: entre mais cedo, teste sua configuração e pergunte se está tudo funcionando. Uma recuperação que dura uma aula e depois volta silenciosamente ao normal muitas vezes não se sustenta.</p></div>
  `}
 ],
 ix:{
  title:'Seu, seu para relatar, e não é seu',
  instr:'Classifique cada situação e escolha a melhor ação. 70% para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'De quem é esta parte?', card:`Uma falha do Classroom tomou metade da aula de ontem.`, zones:[{label:'✅ Totalmente minha', fb:'Não exatamente — você não consegue corrigir a falha sozinho. O que é seu é adaptar a próxima aula e relatar.'},{label:'🔁 Minha para adaptar e relatar', fb:'Correto — você adapta a próxima aula para recuperar o essencial e relata no mesmo dia.'},{label:'🚫 Fora do meu controle', fb:'Não totalmente — corrigir a falha não é com você, mas adaptar a próxima aula e relatar, sim.'}], correctZone:1},
   {type:'sort', prompt:'De quem é esta parte?', card:`Aprovar uma aula extra para a família depois da aula perdida.`, zones:[{label:'✅ Totalmente minha', fb:'Não exatamente — você pode solicitar, mas não aprova nem oferece.'},{label:'🔁 Minha para adaptar e relatar', fb:'Não totalmente — a sua parte é relatar e solicitar ao seu Team Leader; a aprovação não é sua.'},{label:'🚫 Fora do meu controle', fb:'Correto — quem aprova é o seu Team Leader. A sua parte é relatar a aula perdida e solicitar no mesmo dia.'}], correctZone:2},
   {type:'choice', prompt:`Um responsável escreve: “Já pedimos reembolso, a plataforma nunca funcionou.” O que você faz?`, opts:[`Explica que a plataforma funciona bem e que provavelmente foi a conexão deles`,`Responde “O departamento de Atendimento ao Cliente vai ajudar você com isso”, deixa um comentário no BO com o que você viu e as palavras exatas deles, e avisa seu Team Leader no mesmo dia`,`Promete que tudo vai funcionar na próxima aula e que não há necessidade do reembolso`], correct:1, fb:`Você não discute, não promete e não fala sobre o pedido. Usa a frase segura e passa os detalhes para a sua equipe no mesmo dia.`},
   {type:'sort', prompt:'Tesouro ou lixo? Esta é uma boa frase para a família?', card:`“A culpa é da plataforma, acontece com a gente o tempo todo também.”`, zones:[{label:'💎 Tesouro', fb:'Não exatamente — culpar a plataforma abala a confiança e não resolve nada.'},{label:'🗑️ Lixo', fb:'Correto — nunca culpe a plataforma. Diga que você já está verificando com a sua equipe.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Módulo 1', emoji:'🧰', color:'#7EA8FF', art:'clock', learn:[['⏱️','Os 15 minutos antes de cada aula'],['🩺','O que fazer quando o acesso falha'],['💻','O dispositivo serve para o curso?'],['📮','Quem avisar e o que dizer']],
 eyebrow:'Módulo 1 de 4',
 title:'Antes da aula',
 desc:'Os 15 minutos antes de cada aula, problemas de acesso, matrícula, horário e link, e como saber se o dispositivo do aluno serve para o curso dele.',
 obj:'Identificar e relatar problemas de acesso antes que a família perca a aula.',
 sections:[
  {t:'⏱️ Os 15 minutos antes', html:`
   <div class="card"><p>A maioria dos problemas de acesso pode ser vista <strong>antes</strong> de a aula começar. Esses 15 minutos são o seu melhor seguro.</p></div>
   ${stepper([
     {ic:'🌐', title:'Abra a aula no Chrome para computador', html:`<p>Use o <strong>Google Chrome para computador, atualizado</strong>. É o único navegador totalmente compatível; o Safari e os outros não são totalmente compatíveis.</p>`},
     {ic:'🧹', title:'Feche os outros aplicativos', html:`<p>O Classroom fica lento quando há outros programas abertos. Feche tudo o que você não vai usar na aula.</p>`},
     {ic:'🎙️', title:'Teste seu microfone e sua câmera', html:`<p>Se o navegador não pediu as permissões, ative-as manualmente: ícone à esquerda da URL → Câmera e Microfone em “Sempre permitir”.</p>`},
     {ic:'📋', title:'Confira o grupo e o link no BO', html:`<p>Confira o grupo, a lista de alunos e se o link da aula funciona. Fique atento aos <strong>avisos na tela de pré-entrada</strong> (por exemplo, requisitos de sistema não compatíveis).</p>`},
     {ic:'👋', title:'Na primeira aula de um aluno novo, entre mais cedo', html:`<p>Entre mais cedo e espere. Se o aluno não tiver entrado <strong>5 minutos depois do horário de início</strong>, relate; não espere a aula terminar.</p>`}
   ])}
   ${co('co-idea','📶',`<p><strong>Uma dica dos tutores mentores:</strong> o Classroom precisa de uma conexão forte. Lembre os alunos (e as famílias) de fechar os aplicativos que não estão usando e de garantir que ninguém mais em casa esteja usando muito o Wi-Fi durante a aula.</p>`)}
   ${doavoid(
     ['Entrar 15 minutos antes e testar tudo','Usar o Chrome para computador, atualizado, com os outros aplicativos fechados','Conferir o grupo e o link no BO antes de cada aula','Relatar na hora se um aluno novo não aparecer'],
     ['Abrir a aula no último minuto','Dar aula pelo Safari ou por outro navegador','Esperar o fim da aula para dizer que alguém não conseguiu entrar','Achar que “uma hora ele entra”']
   )}
  `},
  {t:'🩺 Sintomas antes da aula', html:`
   <div class="card"><p>Toque em cada sintoma. Você vai ver <strong>o que fazer</strong>, <strong>o que você pode dizer</strong> e <strong>onde relatar</strong>. Todos os seus contatos de suporte estão no Módulo 4.</p></div>
   ${symCards([
     {ic:'🔗', title:`O link da aula está quebrado ou não aparece`,
      do:`Atualize o BO e verifique o link na página do grupo. Se continuar quebrado ou ausente, relate imediatamente para que a equipe de Ensino possa corrigir antes de a aula começar.`,
      say:`<em>“Estou verificando o link da aula com a minha equipe, já te mando uma atualização em alguns minutos.”</em>`,
      rep:`O bot EU Request from Tutors + comentário no BO.`},
     {ic:'🚪', title:`O botão de entrar não aparece`,
      do:`Atualize, confirme que está usando o Chrome e verifique no BO se o aluno está no grupo. Se nada mudar, relate com os links do BO do grupo e do aluno.`,
      say:`<em>“Estou verificando o acesso com a minha equipe e te escrevo assim que tiver novidades.”</em>`,
      rep:`O bot EU Request from Tutors + comentário no BO.`},
     {ic:'📋', title:`“Não estou matriculado”`,
      see:`A família diz que a criança não aparece como matriculada.`,
      do:`<strong>Não confirme nem negue a matrícula.</strong> Verifique no BO e avise seu Team Leader e o Client Service.`,
      say:`<em>“Estou verificando o seu acesso com a minha equipe.”</em>`,
      rep:`Team Leader + Client Service + comentário no BO.`,
      avoid:`Dizer à família <em>“ele não está matriculado”</em>.`},
     {ic:'🕒', title:`O horário não é o que a família pediu`,
      see:`A aula está em outro horário, ou chegou uma notificação com outra data de início.`,
      do:`Não mude nada por conta própria — tutores não podem remarcar aulas. Avise seu Team Leader e o Client Service no mesmo dia.`,
      say:`Reconheça o transtorno sem explicar por que aconteceu nem prometer mudança: <em>“Entendo que é um transtorno. Já passei isso para a minha equipe para que entrem em contato com vocês.”</em>`,
      rep:`Team Leader + Client Service + comentário no BO.`},
     {ic:'🎟️', title:`Créditos de aula faltando ou uma aula descontada indevidamente`,
      see:`A família diz que as aulas não batem, ou que foi descontada uma aula que não aconteceu.`,
      do:`Anote exatamente o que a família diz e passe para seu Team Leader e o Client Service no mesmo dia — quem analisa é Operações.`,
      say:`<em>“O departamento de Atendimento ao Cliente vai ajudar você com isso.”</em>`,
      rep:`Team Leader + Client Service + comentário no BO.`,
      avoid:`Explicar ou prometer qualquer coisa sobre créditos.`},
     {ic:'✉️', title:`A família não recebeu o link ou as credenciais`,
      do:`<strong>Você tem esses dados no BO.</strong> No perfil do aluno estão o link de login e o login e a senha. Envie você mesmo para a família, na hora. Se estiverem faltando ou não funcionarem, relate.`,
      say:`<em>“Estou te enviando os dados de acesso agora. Por favor, teste e me avise se algo não funcionar.”</em>`,
      rep:`Somente se os dados estiverem faltando no BO ou não funcionarem: Team Leader + Client Service + comentário no BO.`,
      avoid:`Improvisar links que não vêm do BO.`}
   ])}
   ${co('co-warn','🔗',`<p><strong>Um link de vídeo alternativo quando alguém não consegue entrar?</strong> Só quando um problema do Classroom ou de acesso coloca a aula em risco — sempre gravado e relatado ao seu Team Leader no mesmo dia (Módulo 2). Enviar links alternativos aula após aula esconde o problema: ninguém corrige porque ninguém fica sabendo.</p>`)}
  `},
  {t:'💻 Antes da aula 1: o dispositivo serve?', html:`
   <div class="card"><p>Os casos de reembolso causados por um dispositivo que não dá conta costumam ser descobertos <strong>na primeira aula</strong>. Cada curso precisa de algo diferente:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Fácil', desc:'Funtech · Scratch · Python 1 / Python Pro', note:'O Chrome basta. <strong>Verificação normal antes da aula.</strong>'},
     {ic:'🟡', title:'Verificar', desc:'Criatividade Digital · Design Gráfico · Roblox · Minecraft', note:'Precisam de ferramentas específicas, instalação, conta ou tela. <strong>Confirme o dispositivo antes da aula 1.</strong>'}
   ],2)}
   ${accItem('📋 Veja os requisitos por curso', `
    <p><strong>Em geral:</strong> Chrome atualizado · pelo menos 4 GB de RAM · 10 Mbps, de preferência por cabo · 5 GB livres. <strong>Não use o Safari</strong> (no Mac ele tem problemas conhecidos com a plataforma).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Curso</th><th>Requisitos</th><th>Nível</th></tr>
     <tr><td>Funtech</td><td>Só o Chrome. Nada para instalar.</td><td>🟢 Fácil</td></tr>
     <tr><td>Scratch</td><td>Só o Chrome. Windows, Mac e tablet.</td><td>🟢 Fácil</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + uma conta Google (Google Colab).</td><td>🟢 Fácil</td></tr>
     <tr><td>Criatividade Digital</td><td>Chrome. Várias ferramentas online (Canva e outras); as alternativas para cada ferramenta estão na wiki / nas notas do professor.</td><td>🟡 Verificar</td></tr>
     <tr><td>Design Gráfico</td><td>Chrome + Canva. Tela de pelo menos 1280×768.</td><td>🟡 Verificar</td></tr>
     <tr><td>Roblox</td><td>Windows ou Mac (sem tablet, sem Linux). 4 GB. <strong>Instalar o Roblox Studio antes da aula 1.</strong></td><td>🟡 Verificar</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac ou Linux. Java Edition recomendada. 4 GB. É necessária uma conta do Minecraft.</td><td>🟡 Verificar</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>A regra:</strong> se você vir no BO que o aluno tem um curso <strong>🟡 Verificar</strong>, confirme o dispositivo antes da aula 1, com uma mensagem aprovada pelo seu Team Leader.</p>`)}
   ${co('co-danger','💻',`<p><strong>Se o computador não roda o curso, ele não deveria ter sido vendido assim — e não cabe a você resolver.</strong> Relate ao seu Team Leader; as equipes de Ensino e de Vendas decidem juntas como e onde o aluno continua. Nunca diga à família que compre um computador novo nem que troque de curso por conta própria. Enquanto isso, mantenha a aula útil com as alternativas do Módulo 2.</p>`)}
  `}
 ],
 ix:{
  title:'Antes de a aula começar',
  instr:'Escolha a primeira ação e o que você diria. 70% para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'Qual é a sua primeira ação?', card:`A aula começa em 10 minutos e um aluno diz que o botão de entrar não aparece.`, zones:[{label:'🔁 Atualizar, conferir o Chrome e confirmar no BO que ele está no grupo', fb:'Correto — primeiros socorros rápidos. Se nada mudar, você relata com os links do BO do grupo e do aluno.'},{label:'🔗 Mandar um link do Zoom para essa aula', fb:'Não exatamente — uma plataforma alternativa é só para quando a aula está realmente em risco. Os primeiros socorros vêm antes.'},{label:'⏳ Esperar para ver se ele entra mais tarde', fb:'Não exatamente — esperar em silêncio faz perder a aula. Aja agora.'}], correctZone:0},
   {type:'sort', prompt:'Qual é a sua primeira ação?', card:`O curso do aluno é Roblox e o BO mostra que a aula 1 dele é na quinta-feira.`, zones:[{label:'⏳ Nada — veremos na aula 1', fb:'Não exatamente — em Roblox, os problemas de dispositivo (um tablet, o Roblox Studio não instalado) costumam ser descobertos na primeira aula, quando já é tarde demais.'},{label:'💻 Confirmar o dispositivo antes da aula 1, com uma mensagem aprovada pelo seu Team Leader', fb:'Correto — Roblox precisa de um computador e do Roblox Studio instalado. Confirmar o dispositivo antes evita perder a primeira aula.'},{label:'📝 Pedir à família que compre um computador melhor', fb:'Não exatamente — você não pede compras. Você confirma o dispositivo e, se não atender aos requisitos, relata.'}], correctZone:1},
   {type:'choice', prompt:`Uma mãe escreve: “Meu filho não aparece como matriculado na aula.” Como você responde?`, opts:[`“Seu filho não está matriculado, você precisa falar com vendas.”`,`“Sim, ele está matriculado, deve ser um erro do seu lado.”`,`“Estou verificando o seu acesso com a minha equipe.”`], correct:2, fb:`Não confirme nem negue a matrícula. Você verifica no BO e avisa seu Team Leader e o Client Service.`},
   {type:'choice', prompt:`A família diz que a aula ficou em um horário diferente do que pediram. O que você faz?`, opts:[`Reconhece o transtorno sem prometer mudança e avisa seu Team Leader no mesmo dia`,`Se oferece para mudar você mesmo para o horário que preferirem`,`Explica que o horário já não pode ser alterado`], correct:0, fb:`Você não muda o horário, mas também não descarta uma mudança. Reconhece o transtorno e avisa sua equipe no mesmo dia.`},
   {type:'choice', prompt:`Uma família diz que foi descontada do pacote uma aula que nunca aconteceu. O que você faz?`, opts:[`Diz que vai devolver a aula`,`Anota o que disseram, responde “O departamento de Atendimento ao Cliente vai ajudar você com isso” e passa para seu Team Leader e o Client Service no mesmo dia`,`Explica como funcionam os descontos de aulas`], correct:1, fb:`Créditos e descontos são analisados por Operações. Você não promete nem explica — repassa exatamente o que a família disse, no mesmo dia.`},
   {type:'choice', prompt:`Na aula 1 de um curso de Roblox, você percebe que o computador do aluno não consegue rodar o Roblox Studio. O que é certo?`, opts:[`Relatar ao seu Team Leader — Ensino e Vendas decidem como o aluno continua — e manter esta aula útil enquanto isso`,`Dizer à família que o curso não é para eles e sugerir outro`,`Pedir à família que melhore o computador antes da próxima aula`], correct:0, fb:`Um computador que não roda o curso não deveria ter sido vendido assim. Não cabe a você resolver: você relata, e Ensino e Vendas decidem.`}
  ]
 }
},
{id:'during', numLabel:'Módulo 2', emoji:'🛠️', color:'#FFB44D', art:'micCam', learn:[['🧘','Primeiro, mantenha a calma'],['🔧','Soluções para o Classroom dos tutores mentores'],['🧩','Alternativas para cada curso'],['🆘','Quando o Zoom é permitido']],
 eyebrow:'Módulo 2 de 4',
 title:'Durante a aula',
 desc:'O primeiro movimento é emocional, a regra dos 10 minutos, soluções para o Classroom dos tutores mentores, alternativas para cada curso, falhas que atingem vários alunos e quando uma plataforma alternativa como o Zoom é permitida.',
 obj:'Resolver o que dá para resolver em 10 minutos, manter a aula útil para todos os alunos e não perder a aula inteira por um problema técnico.',
 sections:[
  {t:'🧘 O primeiro movimento é emocional', html:`
   <div class="card"><p>Antes de mexer em qualquer coisa, <strong>mantenha a calma e trate o problema com naturalidade, em voz alta</strong>: <em>“Isso acontece às vezes, vamos resolver juntos.”</em> Um adulto calmo mostra para a criança que está tudo bem, e o grupo segue o seu exemplo. Só então, resolva.</p></div>
  `},
  {t:'⏱️ A regra dos 10 minutos', html:`
   <div class="card"><p>Se você não conseguir resolver em <strong>10 minutos</strong>, pare de tentar em silêncio.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Comunique: ao aluno, ao grupo e, se necessário, à sua equipe'},
     {ic:'📝', label:'Documente: o que falhou, a mensagem, uma captura de tela, o que você tentou'},
     {ic:'📮', label:'Escale: relate pelo bot EU Request from Tutors'}
   ])}
  `},
  {t:'🔧 Soluções para o Classroom que funcionam — dos tutores mentores', html:`
   <div class="card"><p>Os tutores que dão aula todos os dias concordam: <strong>a maioria dos problemas do Classroom se resolve atualizando e aliviando a carga.</strong> Tente estes passos, nesta ordem:</p></div>
   ${stepper([
     {ic:'🔄', title:'Atualize a página', html:`<p>Ou peça ao aluno que atualize. Isso resolve a maioria das telas pretas, vídeos congelados e compartilhamentos que não começam.</p>`},
     {ic:'🧹', title:'Feche os outros aplicativos', html:`<p>Os seus e os dos alunos. O Classroom fica lento quando há outros programas abertos.</p>`},
     {ic:'🚪', title:'Entre de novo na aula', html:`<p>Se a sua câmera parar de funcionar, feche o navegador, recarregue e entre de novo — às vezes são necessárias duas tentativas.</p>`},
     {ic:'🎚️', title:'Verifique o dispositivo selecionado', html:`<p>Um microfone pode parecer “ligado” e mesmo assim estar bloqueado: nas configurações, verifique se o microfone e a câmera corretos estão selecionados.</p>`},
     {ic:'📶', title:'Alivie a conexão', html:`<p>Peça aos alunos que desliguem as câmeras e que garantam que ninguém mais em casa esteja usando o Wi-Fi.</p>`},
     {ic:'🌐', title:'Último recurso: outro navegador', html:`<p>Entrar de novo por outro navegador às vezes salva a aula. Relate depois: o Chrome continua sendo o navegador compatível.</p>`}
   ])}
   ${iconGrid([
     {ic:'👥', html:`<strong>Grupos grandes (cerca de 15 alunos).</strong> A aula pode reiniciar, travar, congelar ou desligar a câmera de todos. Peça aos alunos que deixem as câmeras desligadas desde o início, e relate se continuar acontecendo.`},
     {ic:'📡', html:`<strong>O compartilhamento de tela para várias vezes.</strong> Normalmente é a conexão. Feche aplicativos, pergunte sobre outros dispositivos no Wi-Fi e compartilhe de novo.`},
     {ic:'🔄', html:`<strong>Os alunos não veem a sua tela e nada funciona.</strong> Peça a um aluno que compartilhe a tela dele com o grupo — principalmente em aulas em grupo, isso costuma funcionar melhor.`},
     {ic:'✏️', html:`<strong>As anotações não funcionam</strong> (você não consegue desenhar, os desenhos não aparecem ou aparecem no lugar errado). Desative as anotações, compartilhe a tela de novo e ative-as outra vez.`}
   ])}
  `},
  {t:'⬛ Tela preta ao compartilhar — veja o procedimento', html:`
   <div class="card"><p>Este é o procedimento que o aluno e/ou o tutor devem seguir quando a tela fica preta durante o compartilhamento.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Tela preta durante o compartilhamento de tela</div><div class="vslot-meta">Passo a passo · 19 segundos</div></div></div>
    <div class="vslot-frame" style="padding:0"><video src="Media/black_screen.mkv" controls preload="metadata" playsinline style="display:block;width:100%;max-height:420px;background:#000"></video></div>
    <div class="vslot-brief">Se a tela continuar preta depois de seguir os passos, atualize a página (você ou o aluno). Se continuar acontecendo, relate com uma captura de tela.</div></div>
  `},
  {t:'🖥️ Classroom — mais soluções rápidas', html:`
   <div class="card"><p>Os passos completos e atualizados estão no guia <strong>“Classroom Issues Quick Fixes”</strong> da equipe do Classroom. Os mais comuns:</p></div>
   ${accItem('▬ Um retângulo preto no lugar da sua tela', `<p>Pare e retome o compartilhamento. Para algumas pessoas, minimizar e restaurar a janela funciona.</p>`)}
   ${accItem('🌫️ A tela compartilhada está borrada', `<p>Compartilhe de novo e verifique a conexão.</p>`)}
   ${accItem('🙈 O aluno não vê a sua tela compartilhada', `<p>Se ele estiver no celular, deve usar o “site para computador”. Verifique se está usando o Chrome. Se nada funcionar, peça a outro aluno que compartilhe a tela com o grupo.</p>`)}
   ${accItem('📱 O aluno não consegue compartilhar a tela', `<p>Pelo navegador de um dispositivo móvel (iPad, tablet ou celular) <strong>não é possível</strong>. Ele precisa de um computador.</p>`)}
   ${accItem('🧾 O quadro branco continua visível depois de fechado', `<p>Peça que saiam e entrem de novo; relate com o link do grupo no BO.</p>`)}
   ${accItem('🚪 As salas simultâneas dão erro', `<p>Feche todas as salas e crie-as de novo. Se o compartilhamento de tela falhar dentro das salas, relate.</p>`)}
   ${accItem('📄 A página de Tarefas aparece preta', `<p>Desative e apague as anotações, pare o compartilhamento de tela e clique com o botão direito → “Recarregar frame”. Se a tela de um aluno ficou preta porque ele estava na aba de Tarefas, pare e compartilhe de novo.</p>`)}
   ${accItem('⚠️ O aluno vê banners de erro', `<p>Peça que ele <strong>leia em voz alta</strong> e explique o que fazer. <strong>Registre</strong> se houve banner, a mensagem, os avisos da tela de pré-entrada e o tipo de erro. Relate com uma captura de tela.</p>`)}
   ${accItem('🖼️ A câmera falha com fundos virtuais', `<p>Ative “Usar aceleração gráfica quando disponível” em <em>chrome://settings/system</em>.</p>`)}
   ${accItem('🪟 Modo Picture-in-Picture', `<p>Ajuda: clique com o botão direito na tela compartilhada → Picture-in-Picture.</p>`)}
  `},
  {t:'🎙️ Quando o microfone ou a câmera de um aluno não funciona', html:`
   ${stepFlow([
     {ic:'🔁', label:'Peça que ele entre de novo na aula'},
     {ic:'🎚️', label:'Verifique se o microfone e a câmera corretos estão selecionados'},
     {ic:'📮', label:'Continua sem funcionar: relate e peça ao suporte técnico que teste ainda nesta semana'}
   ])}
   ${co('co-ok','💬',`<p><strong>Enquanto isso, o aluno continua aprendendo.</strong> Ele pode assistir sem câmera e, excepcionalmente, até sem microfone: vocês se comunicam pelo chat e pelas reações. Ninguém fica de fora da aula por causa de um dispositivo.</p>`)}
   ${co('co-danger','🔇',`<p><strong>Se você silenciar um aluno, reative o microfone dele depois.</strong> Deixar uma criança silenciada sem perceber pode nos custar uma família.</p>`)}
  `},
  {t:'🧩 Quando a ferramenta do curso não funciona — alternativas por curso', html:`
   <div class="card"><p>Os autores dos cursos compartilharam o que você pode fazer quando um aluno não consegue abrir o programa do curso ou quando o computador dele tem dificuldade para rodá-lo. Toque no seu curso:</p></div>
   ${tabsBlock([
     {ic:'🎮', title:'Roblox, qualquer plataforma', html:`${symCards([
       {ic:'🔑', title:`O aluno não consegue fazer login, ou o programa não abre`,
        do:`<ul><li><strong>Ele acompanha a sua demonstração:</strong> o aluno observa a sua tela e responde em voz alta sobre o que está sendo feito — e continua participando da aula.</li><li><strong>Depois da aula,</strong> faça a instalação ou o login junto com ele.</li><li><strong>Ainda não resolveu?</strong> Peça suporte técnico pelo <strong>bot EU Request from Tutors</strong>.</li></ul>`,
        avoid:`Passar a aula inteira instalando enquanto o resto do grupo espera.`},
       {ic:'🧱', title:`O Roblox Studio não baixa ou não instala`,
        do:`Verifique o sistema operacional e o espaço livre (veja os requisitos no Módulo 1). Depois, o mesmo de cima: demonstração agora, solução depois da aula, suporte técnico se necessário.`}
     ])}`},
     {ic:'🎨', title:'Criatividade Digital', html:`${symCards([
       {ic:'📚', title:`Uma das ferramentas online não funciona`,
        do:`<ul><li><strong>Confira as alternativas</strong> na wiki / nas notas do professor — muitas ferramentas têm uma alternativa listada ali.</li><li><strong>Não há alternativa listada?</strong> Encontre você mesmo um serviço parecido e envie pelo formulário de feedback para que ele entre na lista de alternativas para todos.</li></ul>`},
       {ic:'🖌️', title:`O Krita não abre`,
        do:`Qualquer programa de desenho online serve — por exemplo, o <em>Kleki</em>.`}
     ])}`},
     {ic:'💻', title:'Um computador fraco demais', html:`${symCards([
       {ic:'🐢', title:`O computador não atende de jeito nenhum aos requisitos do curso`,
        see:`O aplicativo não abre, trava ou fecha, ou a tela de pré-entrada mostra um aviso de requisitos.`,
        do:`<ul><li><strong>Mantenha a aula útil:</strong> uma demonstração na sua tela compartilhada, um exemplo guiado, respostas em voz alta.</li><li><strong>Relate ao seu Team Leader.</strong> O curso não deveria ter sido vendido para esse computador; Ensino e Vendas decidem como e onde o aluno continua.</li></ul>`,
        avoid:`Fazer a tarefa pelo aluno, pedir à família que compre qualquer coisa ou prometer uma mudança de curso.`}
     ])}`}
   ])}
  `},
  {t:'👥 Quando vários alunos falham ao mesmo tempo, ou a aula é perdida', html:`
   ${doavoid(
     ['Triagem: é um aluno ou são muitos? Se são muitos, é a plataforma — <strong>relate agora</strong>, com o link do grupo no BO','Manter a aula viva com quem está conectado e pedir aos outros que acompanhem pelo chat','Se a aula foi perdida, enviar a gravação e montar um plano de recuperação (Módulo 3)','Demonstrar, compartilhar o arquivo do projeto e planejar uma sessão de recuperação'],
     ['Passar a aula inteira ajudando os alunos um por um enquanto os outros se entediam','Fazer a tarefa pelo aluno quando a tecnologia falha','Prometer uma aula extra à família','Remarcar a aula por conta própria']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Quando um problema técnico compromete uma aula</strong> — ou duas seguidas — <strong>fale com seu Team Leader no mesmo dia.</strong> Você pode solicitar uma aula extra; quem decide é o seu Team Leader. Nunca prometa nem descarte isso para a família por conta própria.</p>`)}
  `},
  {t:'🆘 O Classroom caiu: quando uma plataforma alternativa é permitida', html:`
   <div class="card"><p><strong>O Classroom sempre vem em primeiro lugar.</strong> É o meio previsto para dar as aulas e está conectado a tudo — pagamento, gravações, frequência. Uma plataforma de vídeo alternativa (como o Zoom) é <strong>permitida somente quando um problema do Classroom ou de acesso coloca a aula em risco</strong>.</p></div>
   ${numlist(['Use uma plataforma de vídeo alternativa somente se a aula não puder continuar no Classroom','<strong>Grave a sessão inteira</strong> — a gravação é a prova de que a aula aconteceu','Avise seu Team Leader no mesmo dia, para que a aula possa ser avaliada e considerada para pagamento','Deixe um comentário no BO explicando o que falhou no Classroom'])}
   ${co('co-warn','📝',`<p><strong>É a exceção, nunca a rotina.</strong> Uma aula levada para fora do Classroom sem gravação e sem relato no mesmo dia não pode ser contabilizada.</p>`)}
  `}
 ],
 ix:{
  title:'A aula continua',
  instr:'Escolha a primeira ação em cada caso. 70% para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'Qual é a primeira ação?', card:`Quando você compartilha a tela, os alunos só veem preto.`, zones:[{label:'🔁 Seguir o procedimento da tela preta e atualizar a página se necessário', fb:'Correto — é o procedimento do vídeo. Se continuar acontecendo, você relata com uma captura de tela.'},{label:'🆘 Levar a aula para o Zoom imediatamente', fb:'Não exatamente — uma plataforma alternativa é uma exceção. A solução no Classroom vem primeiro.'},{label:'⏭️ Continuar explicando sem a tela', fb:'Não exatamente — primeiro tente a solução; se não resolver em 10 minutos, você relata.'}], correctZone:0},
   {type:'sort', prompt:'Qual é a primeira ação?', card:`O microfone de um aluno aparece como ligado, mas ninguém consegue ouvi-lo.`, zones:[{label:'📮 Relatar ao suporte técnico imediatamente', fb:'Não exatamente — primeiro tente os passos rápidos: entrar de novo e verificar o microfone selecionado.'},{label:'🔁 Pedir que ele entre de novo e verifique se o microfone correto está selecionado', fb:'Correto — um microfone pode parecer “ligado” e mesmo assim estar bloqueado. Se continuar falhando, ele usa o chat e você relata.'},{label:'🔇 Dizer que desta vez ele só escute', fb:'Não exatamente — primeiro as soluções rápidas, e enquanto isso ele pode participar pelo chat e pelas reações.'}], correctZone:1},
   {type:'sort', prompt:'Qual é a primeira ação?', card:`Um aluno no tablet não consegue compartilhar a tela.`, zones:[{label:'🔁 Pedir que tente de novo várias vezes', fb:'Não exatamente — não é possível compartilhar a tela pelo navegador de um tablet.'},{label:'📝 Pedir que troque de navegador no tablet', fb:'Não exatamente — no celular ou no tablet não é possível, seja qual for o navegador.'},{label:'💻 Explicar que ele precisa de um computador para compartilhar a tela e continuar a aula de outro jeito', fb:'Correto — é uma limitação conhecida. Adapte a atividade e, se o curso exigir, relate.'}], correctZone:2},
   {type:'choice', prompt:`Em uma aula de Roblox, um aluno não consegue entrar no Roblox Studio. O que você faz durante a aula?`, opts:[`Passa a aula ajudando o aluno a fazer login enquanto o resto do grupo espera`,`Deixa que ele acompanhe a sua demonstração e responda em voz alta sobre o que está sendo feito; depois da aula, ajuda a resolver e pede suporte técnico se necessário`,`Diz que ele pule esta aula e volte quando estiver funcionando`], correct:1, fb:`O aluno continua aprendendo ao acompanhar a sua demonstração. Você resolve o acesso depois da aula e pede suporte técnico se ainda não estiver resolvido.`},
   {type:'choice', prompt:`Em Criatividade Digital, o Krita não abre no computador de um aluno. Qual é uma boa alternativa?`, opts:[`Usar um programa de desenho online, como o Kleki`,`Relatar que o aluno não pode fazer o curso`,`Pedir à família que compre uma mesa digitalizadora`], correct:0, fb:`Qualquer programa de desenho online serve. Confira as alternativas na wiki / nas notas do professor e sugira novas pelo formulário de feedback.`},
   {type:'choice', prompt:`Cinco minutos depois do início, três alunos não conseguem entrar e os outros dois estão esperando. O que você faz?`, opts:[`Ajuda cada um, um de cada vez, até todos entrarem`,`Cancela a aula e avisa as famílias`,`Relata agora (é a plataforma), continua com os dois que estão conectados e pede aos outros que acompanhem pelo chat`], correct:2, fb:`Se vários falham, é a plataforma: relate agora. Mantenha a aula viva com quem está conectado e prepare o plano de recuperação depois.`},
   {type:'choice', prompt:`O Classroom não funciona para ninguém e a aula está em risco. O que você precisa fazer?`, opts:[`Usar uma plataforma alternativa, gravar a sessão inteira e avisar seu Team Leader no mesmo dia, com um comentário no BO`,`Usar a plataforma alternativa e continuar usando nas próximas aulas, já que funciona melhor`,`Usar sem gravar, já que a aula é curta`], correct:0, fb:`É a exceção, não a rotina: gravada, relatada ao seu Team Leader no mesmo dia e explicada no BO. Sem isso, a aula não pode ser contabilizada.`}
  ]
 }
},
{id:'after', numLabel:'Módulo 3', emoji:'🏠', color:'#B79DF2', art:'phoneDesk', learn:[['🔍','Perceber o “não consegue” por trás do “não entrega”'],['📲','Conhecer os limites do celular e do tablet'],['📼','Recuperar uma aula perdida'],['🔁','Fechar o ciclo com a família']],
 eyebrow:'Módulo 3 de 4',
 title:'Depois da aula',
 desc:'Lição de casa que não é entregue porque o aluno não consegue entrar, a plataforma no celular ou no tablet, aulas perdidas e como fechar o ciclo com a família.',
 obj:'Garantir que um problema técnico não deixe uma família sem lição de casa ou sem resposta, e identificá-lo antes de confundi-lo com “não entregar”.',
 sections:[
  {t:'🔍 Quando não entregam, talvez não consigam', html:`
   <div class="card"><p>Antes de pensar em falta de motivação, verifique se o aluno <strong>consegue entrar</strong> para fazer a lição de casa. Algumas famílias reclamaram que não conseguiam abrir a lição e que ninguém lhes deu uma opção.</p></div>
   ${co('co-idea','❓',`<p><strong>Pergunte antes de supor:</strong> <em>“Você conseguiu abrir a lição de casa? Em qual dispositivo você tentou?”</em></p>`)}
  `},
  {t:'🩺 Sintomas depois da aula', html:`
   ${symCards([
     {ic:'🔒', title:`Não conseguem entrar na plataforma para fazer a lição de casa`,
      do:`Confirme o navegador (Chrome para computador), o dispositivo e os dados de login — você os encontra no BO e pode enviá-los de novo. Se nada mudar, relate com os links do BO do aluno e do grupo, e <strong>acompanhe depois de 24 horas</strong>.`,
      say:`<em>“Estou verificando com a minha equipe e te escrevo amanhã.”</em>`},
     {ic:'🧩', title:`O programa do curso não abriu durante a aula`,
      do:`Depois da aula, faça a instalação ou o login junto com o aluno (e a alternativa para o curso dele do Módulo 2). Se ainda não funcionar, peça suporte técnico pelo <strong>bot EU Request from Tutors</strong>.`},
     {ic:'🎙️', title:`O microfone ou a câmera não funcionou`,
      do:`Se entrar de novo e verificar o dispositivo não ajudou, relate e peça ao suporte técnico que faça um teste com o aluno ao longo da semana seguinte. Até lá, o aluno participa pelo chat e pelas reações.`},
     {ic:'📱', title:`Só conseguem entrar pelo celular e a plataforma não aparece bem`,
      do:`A plataforma foi feita para computadores: devem usar o “site para computador” ou um computador. Não prometa um acesso alternativo.`,
      say:`Explique a limitação com carinho: <em>“Algumas partes não aparecem bem no celular; no computador, ou com o site para computador, funciona muito melhor.”</em>`},
     {ic:'📲', title:`A plataforma não funciona totalmente no celular ou no tablet`,
      do:`É uma <strong>limitação conhecida</strong> (por exemplo, não é possível compartilhar a tela pelo celular). Se o curso exigir, relate.`},
     {ic:'🗂️', title:`A lição de casa não aparece no caderno ou no painel`,
      do:`Relate com uma captura de tela.`},
     {ic:'📼', title:`Perderam uma aula por causa de uma falha`,
      do:`Envie a gravação e a parte essencial, monte um plano de recuperação e fale com seu Team Leader no mesmo dia — você pode solicitar uma aula extra.`,
      tip:`<strong>Alinhe com seu Team Leader antes de escrever para a família.</strong>`}
   ])}
  `},
  {t:'🔁 Feche o ciclo', html:`
   <div class="card"><p>Quando o problema estiver resolvido, <strong>avise a família</strong>. Um responsável bem informado é um responsável que fica.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 Uma mensagem de encerramento que você pode usar</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Olá, [nome do responsável]. Estou escrevendo para avisar que o problema de acesso que o(a) [aluno] teve já foi resolvido. Obrigado(a) pela paciência. Se acontecer algo de novo, me escreva e vamos verificar na hora.”</em></p></div>
  `}
 ],
 ix:{
  title:'Ninguém fica sem resposta',
  instr:'Escolha a melhor ação ou classifique cada caso. 70% para liberar o próximo módulo.',
  items:[
   {type:'choice', prompt:`Uma família diz que o filho só consegue entrar pelo celular e que a plataforma não aparece bem. O que você faz?`, opts:[`Promete que vai conseguir um acesso especial para o celular`,`Explica com carinho que a plataforma foi feita para computadores, sugere o site para computador ou um computador e relata se o curso exigir`,`Diz que ele não pode continuar o curso assim`], correct:1, fb:`Explique a limitação com carinho, ofereça o que funciona e não prometa um acesso alternativo.`},
   {type:'choice', prompt:`Um aluno diz que a lição de casa não aparece no painel dele. O que você faz?`, opts:[`Relata com uma captura de tela`,`Diz que ele tente outro dia`,`Marca a lição como não entregue`], correct:0, fb:`Se a lição de casa não aparece, é um problema técnico: relate com uma captura de tela.`},
   {type:'sort', prompt:'Você resolve sozinho ou relata?', card:`Um aluno não está entregando a lição de casa e, quando você pergunta, diz que não consegue entrar na plataforma, nem pelo Chrome no computador.`, zones:[{label:'🧑‍🏫 Resolvo sozinho', fb:'Não exatamente — o básico já foi tentado (Chrome no computador). Agora é hora de relatar.'},{label:'📮 Relato', fb:'Correto — você relata com os links do BO do aluno e do grupo, e acompanha depois de 24 horas.'}], correctZone:1},
   {type:'choice', prompt:`Você relatou que um aluno não consegue entrar na lição de casa. Quando você acompanha?`, opts:[`Na semana seguinte`,`Só se a família escrever de novo`,`Depois de 24 horas`], correct:2, fb:`O acompanhamento é depois de 24 horas: assim a família não fica sem resposta.`}
  ]
 }
},
{id:'report', numLabel:'Módulo 4', emoji:'📮', color:'#F58AC4', art:'report', learn:[['🆘','Onde pedir ajuda e com quem falar'],['🛣️','Escolha a via certa'],['📅','Aulas extras e remarcações'],['🧾','Escreva um relato completo'],['💛','Responda à família a tempo'],['🖥️','Pratique em uma simulação do BO']],
 eyebrow:'Módulo 4 de 4',
 title:'Relatar e escalar',
 desc:'Onde pedir ajuda e com quem falar na sua região, quem avisar conforme o problema, aulas extras e remarcações, o que um bom relato inclui, como responder à família a tempo e uma simulação do BO para praticar um relato técnico.',
 obj:'Saber onde pedir ajuda, quem avisar, com quais detalhes e em que ordem — e manter a família informada a tempo. Um problema que não é relatado, ou uma família que não recebe resposta, não existe para mais ninguém.',
 sections:[
  {t:'🆘 Onde pedir ajuda e com quem falar', html:`
   <div class="card"><p>Não existe uma equipe de suporte técnico dedicada. Em vez disso, use:</p>
   ${numlist(['<strong>Bot EU Request from Tutors</strong> — chega imediatamente à equipe de Ensino, por exemplo quando um link do BO ou do Classroom está quebrado','<strong>Canais globais</strong>, como os canais do Classroom e do Kodland Launcher','<strong>Canais dos cursos</strong> — para perguntar aos colegas sobre um curso ou programa específico'])}</div>
   <div class="card" style="background:var(--surface2)"><h4>👥 Com quem falar</h4>
   <div class="tbl-wrap"><table>
    <tr><th>O que aconteceu</th><th>Quem</th></tr>
    <tr><td>Um link do BO ou do Classroom quebrado, um problema no Classroom</td><td>Bot EU Request from Tutors</td></tr>
    <tr><td>Um problema com um curso ou programa específico</td><td>O canal do curso</td></tr>
    <tr><td>Créditos de aula faltando, horário errado, uma aula descontada indevidamente</td><td>Seu Team Leader + Operações: <strong>@Yana</strong>, <strong>@Flavia</strong> · Client Service: <strong>@Carlos Tamaoki</strong></td></tr>
    <tr><td>Uma aula extra, ou uma aula que não pode acontecer</td><td>Seu Team Leader</td></tr>
   </table></div></div>
  `},
  {t:'🛣️ Três vias', html:`
   <div class="card"><p>Dependendo do tipo de problema, o relato segue por uma via diferente:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Via</th><th>Quando</th><th>Onde</th></tr>
    <tr><td><strong>1. Falha do Classroom ou da plataforma</strong><br>(tela preta, áudio, quadro branco, salas, links quebrados)</td><td>As soluções rápidas não resolveram</td><td>O bot EU Request from Tutors + comentário no BO</td></tr>
    <tr><td><strong>2. Conta e Operações</strong><br>(matrícula, credenciais, horário, licenças, créditos de aula, descontos)</td><td>O aluno não consegue entrar, não está matriculado, o horário está errado, as credenciais não funcionam ou aulas foram descontadas indevidamente</td><td>Team Leader + Client Service + comentário no BO (Operações: @Yana, @Flavia · Client Service: @Carlos Tamaoki)</td></tr>
    <tr><td><strong>3. Aula perdida</strong><br>(uma ou mais aulas comprometidas)</td><td>Por causa de uma falha da plataforma, um cancelamento ou uma ausência</td><td><strong>Team Leader no mesmo dia</strong> (você pode solicitar uma aula extra) + Client Service se a família estiver chateada + comentário no BO</td></tr>
   </table></div></div>
  `},
  {t:'📅 Aulas extras e remarcações', html:`
   ${iconGrid([
     {ic:'➕', html:`<strong>Aula extra: fale primeiro com seu Team Leader.</strong> Leve suas preocupações e sugestões ao seu Team Leader antes de sugerir uma aula extra. Quem decide é o seu Team Leader.`},
     {ic:'🚫', html:`<strong>Nunca ofereça uma aula extra à família</strong> antes de o seu Team Leader aprovar.`},
     {ic:'🕒', html:`<strong>Em geral, você não pode remarcar uma aula.</strong>`},
     {ic:'1️⃣', html:`<strong>Só um aluno apareceu?</strong> Dê a aula para esse aluno.`},
     {ic:'🧑‍🏫', html:`<strong>O problema técnico é do seu lado?</strong> Encontre uma alternativa ou um tutor substituto, para que a aula aconteça no horário.`},
     {ic:'📞', html:`<strong>Não há absolutamente nenhuma forma de dar a aula,</strong> ou nenhum aluno apareceu? Aí sim, fale com seu Team Leader para pedir uma remarcação.`}
   ])}
  `},
  {t:'🧾 O que um relato inclui', html:`
   ${numlist([
     '<strong>Links do BO</strong> do grupo e do aluno (obrigatório)',
     'Apareceu algum <strong>banner</strong> para o aluno? O que dizia?',
     '<strong>Avisos na tela de pré-entrada</strong> (por exemplo, requisitos não compatíveis)',
     '<strong>Tipo de erro:</strong> tela preta, sem som, não consegue entrar, o programa não abre…',
     '<strong>Captura de tela</strong>',
     'Dispositivo, sistema operacional, navegador e, se for relevante, <strong>se usa VPN</strong> e de qual país',
     'O que você tentou e por quanto tempo',
     'Se foi usada uma plataforma alternativa: <strong>a gravação</strong>'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Como é um comentário útil no BO — copie e preencha</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Aula:</strong> [data] · <strong>Grupo:</strong> [link do BO] · <strong>Aluno:</strong> [link do BO]<br>
   <strong>O que falhou:</strong> [ex.: não conseguiu entrar na aula; tela preta ao compartilhar]<br>
   <strong>Banner ou mensagem:</strong> [texto exato, ou “nenhum”] · <strong>Avisos de pré-entrada:</strong> [sim / não, quais]<br>
   <strong>Dispositivo:</strong> [dispositivo, sistema, navegador, VPN sim / não e país]<br>
   <strong>O que eu tentei:</strong> [ex.: atualizar, entrar de novo, fechar aplicativos, reinstalar o Roblox Studio — 10 minutos]<br>
   <strong>Como a aula continuou:</strong> [ex.: acompanhou a minha demonstração; plataforma alternativa, gravada]<br>
   <strong>Captura de tela:</strong> [anexada] · <strong>Palavras da família:</strong> [ao pé da letra, se houver]</p></div>
  `},
  {t:'🖥️ Pratique: relate um problema técnico no BO', html:`
   <div class="card"><p>Agora faça de verdade, em uma réplica do Back Office. <strong>Um aluno não conseguiu entrar na aula de hoje por causa de um problema técnico.</strong> Siga o passo a passo de 4 etapas. No <strong>passo 4</strong>, escolha o Tipo de Problema <strong>“Problema técnico, por favor, entrem em contato com o aluno”</strong> e escreva seu comentário com os fatos: o que falhou, quando, a mensagem ou o banner, o que você tentou e as palavras da própria família.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Relatar um problema técnico</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Relatar um problema técnico" loading="lazy"></iframe></div></div>
   ${co('co-idea','📝',`<p><strong>Use o modelo acima.</strong> Quanto mais completo for o seu comentário, mais rápido alguém consegue entrar em contato com a família.</p>`)}
  `},
  {t:'🔢 A ordem importa', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Primeiro a equipe, depois a família.</strong> Quando o problema envolve mais do que a sua aula (acesso, horário, créditos, uma aula perdida), não escreva para a família antes de falar com seu Team Leader.`},
     {ic:'🎓', html:`<strong>Você fala sobre o aprendizado; a ação você repassa.</strong> Você pode dizer o que tentou na aula e que está verificando. As opções (aula extra, mudança de grupo ou de curso, compensação) vêm do seu Team Leader e do Client Service.`},
     {ic:'⚖️', html:`<strong>Nunca prometa e nunca recuse.</strong> Nem <em>“vamos te dar uma aula extra”</em> nem <em>“isso não é possível”</em>. Mostre, sim, que você se importa e que já está cuidando disso.`},
     {ic:'📅', html:`<strong>Escale uma vez e acompanhe.</strong> Coloque um lembrete na sua agenda para verificar daqui a duas aulas.`}
   ])}
   ${co('co-ok','💬',`<p><strong>Uma mensagem que você pode enviar</strong> (depois de alinhar com seu Team Leader): <em>“Olá, [nome do responsável]. Vi que o(a) [aluno] não conseguiu entrar na aula de hoje. Já relatei para a minha equipe com todos os detalhes, e o Client Service vai entrar em contato com vocês. Enquanto isso, estou enviando a gravação para que nada do que vimos se perca.”</em></p>`)}
  `},
  {t:'💛 Responda a tempo: as famílias percebem o seu esforço', html:`
   <div class="card"><p>Uma falha técnica raramente é o único motivo de uma família desistir. O que decide é o que acontece <strong>depois</strong>: alguém responde, a criança volta a conseguir entrar, a família sente que alguém se importa? Quando os pais veem que você está se esforçando para que tudo funcione — responde rápido, acompanha, garante que o filho tenha a melhor aula possível — eles percebem. Esse esforço é o que faz muitas famílias <strong>nos darem uma segunda chance</strong>. O silêncio diz o contrário.</p></div>
   ${co('co-danger','🚨',`<p><strong>Não trate um problema técnico como algo pequeno.</strong> Para você, pode ser uma tela preta. Para a família, é uma aula pela qual pagaram, uma criança decepcionada e uma dúvida: <em>“será que vale a pena?”</em> Leve a sério, mesmo que tenha durado só cinco minutos — e principalmente se a família já demonstrou que está chateada.</p>`)}
   ${rclock([
     {ic:'👀', when:'Na hora', t:'Vi e estou cuidando', d:'Confirme que recebeu a mensagem na hora, mesmo que ainda não tenha a resposta.'},
     {ic:'📮', when:'No mesmo dia', t:'Relate e alinhe', d:'Comentário no BO com todos os detalhes, Team Leader informado e combinado o que você vai dizer à família.'},
     {ic:'💬', when:'No mesmo dia', t:'Atualize a família', d:'Conte o que você fez e quando vai escrever de novo — e cumpra, mesmo que não haja novidades.'},
     {ic:'🚪', when:'Próxima aula', t:'Faça funcionar', d:'Entre mais cedo, teste tudo e confirme que o aluno consegue entrar. Depois, feche o ciclo.'}
   ])}
   ${co('co-ok','💬',`<p><strong>Confirmar o recebimento é sempre permitido.</strong> Uma mensagem curta e acolhedora — você viu, você se importa, está cuidando disso e quando vai escrever de novo — não precisa da aprovação de ninguém. O que espera pelo seu Team Leader é qualquer explicação, qualquer opção e qualquer coisa sobre compensação.</p>`)}
   ${chatMock({
     name:'Responsável', sub:'online', avatar:'👩', time:'18:02',
     msgs:[`Boa noite. É a <strong>segunda vez</strong> que meu filho não consegue entrar na aula. Estamos pagando por aulas que ele não está recebendo e ele está muito decepcionado. O que está acontecendo??`],
     title:'Como você responde?',
     text:'São 18h. Você acabou de ver a mensagem e ainda não falou com seu Team Leader. Toque em cada resposta para ver o que acontece.',
     opts:[
      {t:`“Boa noite! O Classroom costuma funcionar bem, provavelmente é a sua internet. Tente outro navegador.”`, ok:false, fb:`Você culpou a família e a plataforma ao mesmo tempo, e não demonstrou nenhum sinal de que se importa. O responsável vai entender como “não é problema meu”.`},
      {t:`“Sinto muito — perder duas aulas não está certo, e entendo como ele deve estar decepcionado. Vi a sua mensagem e já estou cuidando disso: hoje mesmo vou relatar o caso com todos os detalhes para a minha equipe. Amanhã de manhã te escrevo de novo com novidades, e na próxima aula vou entrar mais cedo para garantir que ele consiga entrar.”`, ok:true, fb:`É esta. Reconhece o problema e o sentimento, mostra um esforço concreto, diz quando você vai escrever de novo e não promete nada que não cabe a você decidir.`},
      {t:`“Não se preocupe, vou dar a ele uma aula extra gratuita para compensar!”`, ok:false, fb:`Gentil, mas não cabe a você prometer: aulas extras e compensações são decididas com seu Team Leader e o Client Service. Se depois não puder acontecer, a família perde a confiança de novo.`},
      {t:`Vou responder amanhã, quando tiver a resposta completa.`, reply:`<i>(nenhuma resposta esta noite…)</i>`, ok:false, fb:`O silêncio é a pior opção. O responsável já está chateado; cada hora sem resposta confirma que ninguém se importa. Confirme o recebimento sempre na hora.`}
     ]
   })}
   ${co('co-star','🌟',`<p><strong>Lembre-se:</strong> uma falha técnica pode ser perdoada. Sentir-se ignorado é muito mais difícil de perdoar. Sua resposta, seu acompanhamento e seu esforço para que o aluno recupere o acesso e tenha a melhor aula possível são o que muitas famílias veem — e o motivo pelo qual decidem ficar.</p>`)}
  `}
 ],
 ix:{
  title:'Relate bem, e na ordem certa',
  instr:'Escolha a via, o melhor comentário e o que você diria. 70% para concluir este módulo.',
  items:[
   {type:'sort', prompt:'Por qual via este relato segue?', card:`Uma família diz que foram descontadas duas aulas do pacote, mas só uma aconteceu.`, zones:[{label:'1️⃣ Falha do Classroom ou da plataforma', fb:'Não exatamente — nada falhou no Classroom; é uma questão de créditos de aula.'},{label:'2️⃣ Conta e Operações', fb:'Correto — créditos e descontos vão para seu Team Leader e o Client Service, com um comentário no BO. Quem analisa é Operações.'},{label:'3️⃣ Aula perdida', fb:'Não exatamente — a aula não foi perdida por uma falha; é uma questão de créditos.'}], correctZone:1},
   {type:'sort', prompt:'Por qual via este relato segue?', card:`O quadro branco continua visível depois de fechado, e sair e entrar de novo não resolve.`, zones:[{label:'1️⃣ Falha do Classroom ou da plataforma', fb:'Correto — as soluções rápidas não resolveram: relate (bot EU Request from Tutors) com um comentário no BO.'},{label:'2️⃣ Conta e Operações', fb:'Não exatamente — não tem nada a ver com a conta do aluno.'},{label:'3️⃣ Aula perdida', fb:'Não exatamente — a aula continuou; é uma falha do Classroom.'}], correctZone:0},
   {type:'choice', prompt:`Qual é o melhor comentário no BO para o mesmo caso?`, opts:[`“Não conseguiu entrar, conexão ruim.”`,`“3/11, aula 2. Não conseguiu entrar: banner ‘Sistema não compatível’ na tela de pré-entrada. Windows 7, Chrome atualizado. Tentei atualizar e entrar de novo, 10 min; acompanhou a minha demonstração no resto da aula. Captura de tela anexada. Links do BO do grupo e do aluno.”`,`“A plataforma não está funcionando de novo, isso sempre acontece.”`], correct:1, fb:`O comentário útil é completo e neutro: data, o que falhou, o banner, o dispositivo, o que você tentou, como a aula continuou, a captura de tela e os links do BO.`},
   {type:'choice', prompt:`Um aluno perdeu uma aula por uma falha da plataforma, e a família está insatisfeita. O que vem primeiro?`, opts:[`Escrever para a família e oferecer uma aula extra`,`Esperar para ver se a próxima aula funciona`,`Falar com seu Team Leader no mesmo dia, solicitar uma aula extra e combinar com ele a mensagem para a família`], correct:2, fb:`Primeiro a equipe, depois a família. Você pode solicitar a aula extra; quem decide é o seu Team Leader, e só então a família fica sabendo.`},
   {type:'choice', prompt:`É hora da aula e só um dos seis alunos entrou. O que você faz?`, opts:[`Dá a aula para esse único aluno`,`Pede ao seu Team Leader que remarque a aula`,`Espera 30 minutos e depois cancela`], correct:0, fb:`Se só um aluno aparece, você dá a aula para ele. A remarcação é só para quando não há absolutamente nenhuma forma de dar a aula, ou quando ninguém aparece.`},
   {type:'choice', prompt:`Um responsável escreve, chateado: “É a segunda vez que meu filho não consegue entrar.” São 18h e você ainda não falou com seu Team Leader. O que você faz primeiro?`, opts:[`Espera até amanhã, fala com seu Team Leader e responde uma única vez com todas as respostas`,`Responde agora, brevemente: sente muito, viu a mensagem, está cuidando disso e vai escrever de novo com novidades — depois alinha com seu Team Leader`,`Explica como o Classroom funciona para que entendam que raramente a culpa é da plataforma`], correct:1, fb:`Confirmar o recebimento é sempre permitido, e o silêncio causa mais dano do que a própria falha. Responda agora com carinho e um horário para a próxima atualização; as explicações e as opções esperam pelo seu Team Leader.`}
  ]
 }
},
{id:'checklist', numLabel:'Checklist final', emoji:'✅', color:'#FFD34D', art:'shield', learn:[['🛟','Se existe um pedido de reembolso'],['🧭','Antes · durante · depois']],
 eyebrow:'Checklist final',
 title:'Checklist final',
 desc:'Sem quiz aqui — apenas o essencial deste minitreinamento, antes, durante e depois da aula.',
 obj:'Revise o checklist abaixo. Este módulo não tem avaliação — leia os itens e, em seguida, conclua o minitreinamento.',
 sections:[
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   ${numlist([
     'Deixei um comentário no BO no mesmo dia em que soube do pedido, com datas, o que falhou, a mensagem ou o banner, o que tentei e uma captura de tela, e avisei meu Team Leader',
     'Minha próxima aula com esse aluno foi tecnicamente à prova de falhas: 15 minutos antes, outros aplicativos fechados, um plano B, atenção específica e uma conquista visível',
     'Nunca confirmei uma aprovação, nunca falei de valores e nunca culpei a plataforma — usei a única frase segura'
   ])}
  `},
  {t:'🧭 Antes, durante e depois', html:`
   ${tabsBlock([
     {ic:'🧰', title:'Antes', html:`<div class="card">${numlist(['Chrome para computador, atualizado, outros aplicativos fechados','Microfone, câmera e tela testados','BO: grupo, lista de alunos e link','Avisos de pré-entrada','Curso 🟡: computador verificado antes da aula 1','Na aula 1, entro mais cedo'])}</div>`},
     {ic:'🛠️', title:'Durante', html:`<div class="card">${numlist(['Primeiro, calma','Atualizar, entrar de novo, fechar aplicativos, verificar o dispositivo','10 minutos, depois escalo pelo bot EU Request from Tutors','Sem a ferramenta do curso? Demonstração + respostas em voz alta, ou a alternativa do curso','Plataforma alternativa só se a aula estiver em risco: gravada e relatada ao meu Team Leader no mesmo dia','Se muitos forem afetados, relato agora','Não faço a tarefa pelo aluno'])}</div>`},
     {ic:'🏠', title:'Depois', html:`<div class="card">${numlist(['Ele consegue entrar na lição de casa?','Ajuda com o programa depois da aula','Gravação, plano de recuperação e, se necessário, uma aula extra solicitada ao meu Team Leader','Relato no mesmo dia com todos os detalhes','Respondo à família a tempo e a mantenho atualizada, mesmo sem novidades','Acompanhamento depois de 24 horas','Fecho o ciclo com a família'])}</div>`}
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Esse é todo o minitreinamento.</strong> Quando estiver pronto, continue — depois faça a DST no LMS para encerrar a atividade.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
