/* Mini_Training_7_Technical_Issues - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Technical Issues — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"When <span class=\"h-pill\">Technology</span> Fails",
    heroIntro:"You've received this training because you have students whose families have requested a refund because of technical issues. Here you'll see what you can do before, during and after the lesson, and how to report it so it gets fixed in time.",
    heroWork:"Work through 6 short modules. Each module check needs 70%+ to unlock the next. About 25–35 minutes total.",
    startBtn:"🚀 Start Training",
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    finishBtn:'▶ Finish the mini-training',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resDone:"You've completed this mini-training.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resFinish:'Continue',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Mini-Training Complete',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed this mini-training.</strong>",
    doneP2:"You're all done here! Please return to the LMS training page where you accessed this mini-training to close out the assignment.",
    doneP3:"👉 <strong>If a check or assessment is listed directly below the training in the LMS, make sure to complete it and achieve a passing score</strong> — otherwise the assignment may remain incomplete.",
    doneP4:'Good luck! ❤️',
    doneP5:'',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:',
    cvSee:'What you see:',
    cvDo:'What you do:',
    dtExample:'Example from a real class',
    dtNext:'Next:',
    dtDone:"✅ That's all three levels.",
    tlVideoTitle:'{label} — a real class example',
    tlVideoMeta:'Watch how this phase looks in a real lesson'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'var(--coral)',
 title:'Why You’re Here',
 desc:'Why a technical issue in the first lessons can cost us a family, which part is yours — and what to do if a refund request already exists.',
 obj:'Understand why a technical issue in the first lessons can cost us a family, which part is yours, and what to do once a refund request already exists.',
 sections:[
  {t:'📊 What the data shows', html:`
   <div class="card"><p>A technical issue rarely comes alone. It shows up in the first lessons, while the family is still deciding whether Kodland is right for them — and sometimes before the child has seen a single lesson.</p></div>
   ${bigStat('≈ 1 in 20',`<p>refund requests has a <strong>real technical issue</strong> behind it. And that's a minimum: some of these cases arrive labelled with another reason.</p>`)}
   ${bigStat('6 in 10',`<p>of these cases appear <strong>by lesson 5</strong>, and <strong>1 in 7</strong> children never attended a single lesson.</p>`)}
   ${bigStat('1 in 4',`<p>is won back when the child <strong>never attended</strong>. In lessons 1–2, <strong>1 in 2</strong> is won back, and from lesson 3 on, <strong>3 in 4</strong>. The earlier the issue appears, the harder it is to win the family back.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Based on the refund requests of the last 90 days across all regions; approximate figures.</p>
   ${co('co-idea','💡',`<p><strong>The first lessons are the narrowest window.</strong> A technical issue fixed the same day is usually saved; the same issue fixed late almost never is. That's why the first lessons count, and why the same day counts.</p>`)}
  `},
  {t:'🧭 What’s yours and what isn’t', html:`
   <div class="card"><p>You can't fix a platform bug or an enrolment. But a lot is in your hands — and the most important part is <strong>letting the right people know, fast and well</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Fully yours</th><th>🔁 Yours to adapt and report</th><th>🚫 Out of your control</th></tr>
    <tr><td>Checking your own connection, device and Chrome before every lesson</td><td>A student who can't get in or connect: help with first aid and <strong>report it</strong></td><td>Fixing a Classroom or platform bug</td></tr>
    <tr><td>Staying calm and normalising the issue in front of the group</td><td>A lesson lost to a failure: adapt the next one and <strong>report it</strong></td><td>Enrolment, credentials and licences</td></tr>
    <tr><td>Muting and unmuting microphones with care</td><td>A device that doesn't meet the requirements: <strong>report it before lesson 1</strong></td><td>Whether an extra lesson, a group change or compensation is offered</td></tr>
    <tr><td>Reporting the same day with complete details</td><td>A failure that affects several students: triage, <strong>report</strong> and a recovery plan</td><td>VPN policy and country blocks</td></tr>
   </table></div></div>
   ${co('co-ok','✅',`<p><strong>Your part has three moves:</strong> first aid in the lesson, adjusting the lesson so the damage is as small as possible, and <strong>reporting the same day</strong> with complete details.</p>`)}
   ${co('co-danger','⏱️',`<p><strong>Don't wait in silence.</strong> If it isn't solved in 10 minutes, stop trying on your own: communicate, document, escalate.</p>`)}
  `},
  {t:'🛟 If a refund request for a technical issue already exists', html:`
   <div class="card"><p>Everything above is about preventing it. But you may be opening this training because a family <strong>has already</strong> requested a refund because of a technical issue. Read these rules first.</p></div>
   ${co('co-idea','💡',`<p><strong>The request is created by Client Service, not by you.</strong> You find out through Client Service's comments on the student's profile in BO; there's no automatic notification.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Say nothing about the request</strong> — not to the child, not to the family — unless Client Service asks you to say something specific. If the child brings it up, redirect warmly and keep teaching.</p>`)}
  `},
  {t:'🎯 Your next lesson is the recovery attempt', html:`
   <div class="card"><p>That lesson has to be <strong>technically failure-proof</strong>. A second failure after the request is the worst possible scenario.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>15 minutes before:</strong> desktop Chrome up to date; microphone, camera and screen sharing tested; group and student list checked in BO.`},
     {ic:'🅱️', html:`<strong>A plan B ready:</strong> what you'll do if the student can't get in or the audio fails (you'll see this in Modules 1 and 2).`},
     {ic:'👀', html:`<strong>Specific attention</strong> for that child — make them feel noticed for something concrete, not praised in general.`},
     {ic:'🏆', html:`<strong>An early, visible win.</strong> They should leave the lesson feeling capable, not behind.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>If the failure happens again in that lesson, report it immediately</strong> — not at the end of the day.</p>`)}
  `},
  {t:'📮 Report the same day, and know the one safe line', html:`
   ${numlist([
     'Leave a comment in BO that same day with exactly what you saw: dates, what failed, the error message or banner, what you tried and a screenshot',
     'Include the family’s exact words, word for word, if you have them',
     'Let your Team Leader know that same day',
     'Never confirm that a refund was approved, never talk about amounts and never blame the platform'
   ])}
   ${co('co-ok','✅',`<p><strong>The line that's always safe:</strong> <em>"Customer Service will help you with this."</em> That's where your part of the conversation ends.</p>`)}
  `},
  {t:'🌱 Keep up the effort afterwards', html:`
   <div class="card"><p>Even if the request is withdrawn or the child moves to another group, keep looking after the technical side of their lessons over the following weeks: join early, test your setup and ask them whether everything works. A recovery that lasts one lesson and then quietly goes back to normal often doesn't hold.</p></div>
  `}
 ],
 ix:{
  title:'Yours, yours to report, and not yours',
  instr:'Sort each situation and pick the best action. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'Whose part is this?', card:`A Classroom failure cost half of yesterday's lesson.`, zones:[{label:'✅ Fully mine', fb:'Not quite — you can’t fix the failure yourself. What is yours is adapting the next lesson and reporting it.'},{label:'🔁 Mine to adapt and report', fb:'Correct — you adapt the next lesson to recover the essentials and report it the same day.'},{label:'🚫 Out of my control', fb:'Not entirely — fixing the failure isn’t yours, but adapting the next lesson and reporting it are.'}], correctZone:1},
   {type:'sort', prompt:'Whose part is this?', card:`Deciding whether the family is offered an extra lesson for the lost one.`, zones:[{label:'✅ Fully mine', fb:'Not quite — you neither offer nor rule out an extra lesson.'},{label:'🔁 Mine to adapt and report', fb:'Not entirely — your part is reporting the lost lesson; the decision isn’t yours.'},{label:'🚫 Out of my control', fb:'Correct — your Team Leader and Client Service decide that. You report the lost lesson the same day.'}], correctZone:2},
   {type:'choice', prompt:`A parent writes: "We've already asked for a refund, the platform never worked." What do you do?`, opts:[`Explain that the platform works fine and it was probably their connection`,`Reply "Customer Service will help you with this", leave a BO comment with what you saw and their exact words, and tell your Team Leader the same day`,`Promise that everything will work next lesson and there's no need for the refund`], correct:1, fb:`You don't argue, you don't promise and you don't discuss the request. You use the safe line and give your team the details the same day.`},
   {type:'sort', prompt:'Treasure or trash? Is this a good line for the family?', card:`"It's the platform's fault, it happens to us all the time too."`, zones:[{label:'💎 Treasure', fb:'Not quite — blaming the platform erodes trust and solves nothing.'},{label:'🗑️ Trash', fb:'Correct — never blame the platform. Say you’re already looking into it with your team.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Module 1', emoji:'🧰', color:'var(--coral)',
 title:'Before the Lesson',
 desc:'The 15 minutes before every lesson, problems with access, enrolment, schedule and link, and how to tell whether the student’s device is right for their course.',
 obj:'Spot and report access problems before the family loses the lesson.',
 sections:[
  {t:'⏱️ The 15 minutes before', html:`
   <div class="card"><p>Most access problems can be seen <strong>before</strong> the lesson starts. These 15 minutes are your best insurance.</p></div>
   ${numlist([
     'Open the lesson in <strong>desktop Google Chrome, up to date</strong>. It’s the only fully compatible browser; Safari and others aren’t fully compatible.',
     'Test your microphone and camera. If the browser didn’t ask for permissions, turn them on manually: icon to the left of the URL → Camera and Microphone set to “Always allow”.',
     'Check the group and the student list in BO. Look out for <strong>warnings on the pre-join screen</strong> (for example, unsupported system requirements).',
     'In a <strong>new student’s first lesson</strong>, join early and wait. If they haven’t joined 5 minutes after the start time, report it; don’t wait until the lesson ends.'
   ])}
   ${doavoid(
     ['Join 15 minutes early and test everything','Use desktop Chrome, up to date','Check the group in BO before every lesson','Report right away if a new student doesn’t show up'],
     ['Opening the lesson at the last minute','Teaching from Safari or another browser','Waiting until the end of the lesson to say someone couldn’t get in','Assuming “they’ll join eventually”']
   )}
  `},
  {t:'🩺 Symptoms before the lesson', html:`
   <div class="card"><p>Open each symptom. Look at three things: <strong>what you do</strong>, <strong>what you can say</strong> and <strong>where to report</strong>.</p></div>
   ${accItem('🚪 The join button doesn’t appear', `
    <p><strong>🎯 What you do:</strong> refresh, check that you're using Chrome and confirm in BO that the student is in the group. If nothing changes, report it with the BO links of the group and the student.</p>
    <p><strong>💬 What you can say:</strong> <em>"I'm checking the access with my team and I'll write to you as soon as I have news."</em></p>
    <p><strong>📮 Where to report:</strong> Classroom technical support channel + BO comment.</p>`)}
   ${accItem('📋 “I’m not registered”', `
    <p><strong>🎯 What you do:</strong> <strong>don't confirm or deny the registration.</strong> Check it in BO and let your Team Leader and Client Service know.</p>
    <p><strong>💬 What you can say:</strong> <em>"I'm checking your access with my team."</em></p>
    <p><strong>📮 Where to report:</strong> Team Leader + Client Service + BO comment.</p>`)}
   ${accItem('🕒 The schedule isn’t the one the family asked for', `
    <p><strong>👀 What you see:</strong> the lesson is at another time, or a notification arrived with a different start date.</p>
    <p><strong>🎯 What you do:</strong> don't change anything yourself. Tell your Team Leader the same day.</p>
    <p><strong>💬 What you can say:</strong> acknowledge the inconvenience, without explaining why it happened or promising a change: <em>"I understand it's inconvenient. I've already shared it with my team so they can contact you."</em></p>
    <p><strong>📮 Where to report:</strong> Team Leader + Client Service + BO comment.</p>`)}
   ${accItem('✉️ The family says they didn’t get the link or the credentials', `
    <p><strong>🎯 What you do:</strong> check in BO what was sent and report it. Don't improvise links.</p>
    <p><strong>💬 What you can say:</strong> <em>"Customer Service will help you get it today."</em></p>
    <p><strong>📮 Where to report:</strong> Team Leader + Client Service + BO comment.</p>`)}
   ${accItem('🧑‍💼 You’re a TSM or TL and can’t get into the lesson', `
    <p><strong>🎯 What you do:</strong> follow the fix posted in the Classroom support channel; if it doesn't work, say so in that same channel.</p>`)}
   ${co('co-warn','🔗',`<p><strong>An alternative link when the student can't get in?</strong> Only in an emergency, <strong>once</strong>, and always with a same-day report. Sending alternative links lesson after lesson hides the problem: nobody fixes it because nobody finds out.</p>`)}
  `},
  {t:'💻 Before lesson 1: is the device right?', html:`
   <div class="card"><p>Refund cases caused by a device that isn't up to it are usually discovered <strong>in the first lesson</strong>. Each course needs something different:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Easy', desc:'Funtech · Scratch · Python 1 / Python Pro · Web · Paper Drawing', note:'Chrome is enough (plus VS Code for Web). <strong>Normal check before the lesson.</strong>'},
     {ic:'🟡', title:'Check', desc:'Digital Creativity · Graphic Design · Illustration · Roblox · Minecraft', note:'They need specific tools, an installation, an account or a screen. <strong>Confirm the device before lesson 1.</strong>'},
     {ic:'🔴', title:'Demanding', desc:'3D Modelling · Unity', note:'8 GB of RAM, a specific system and hardware. <strong>Confirm the device before lesson 1.</strong>'}
   ],3)}
   ${accItem('📋 See the requirements by course', `
    <p><strong>In general:</strong> up-to-date Chrome · at least 4 GB of RAM (8 GB for Blender or Unity) · 10 Mbps, ideally wired · 5 GB free. <strong>Don't use Safari</strong> (on Mac it has known issues with the platform).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Course</th><th>Requirements</th><th>Level</th></tr>
     <tr><td>Funtech</td><td>Chrome only. Nothing to install.</td><td>🟢 Easy</td></tr>
     <tr><td>Scratch</td><td>Chrome only. Windows, Mac and tablet.</td><td>🟢 Easy</td></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + a Google account (Google Colab).</td><td>🟢 Easy</td></tr>
     <tr><td>Web</td><td>Chrome + VS Code. Windows, Mac or Linux.</td><td>🟢 Easy</td></tr>
     <tr><td>Paper Drawing</td><td>Chrome only, to watch the lesson. Physical materials.</td><td>🟢 Easy</td></tr>
     <tr><td>Digital Creativity</td><td>Chrome. Online tools (Canva or others).</td><td>🟡 Check</td></tr>
     <tr><td>Graphic Design</td><td>Chrome + Canva. Screen of at least 1280×768.</td><td>🟡 Check</td></tr>
     <tr><td>Illustration</td><td>Chrome + Krita or an online tool. Recommended: a graphics tablet or touch screen.</td><td>🟡 Check</td></tr>
     <tr><td>Roblox</td><td>Windows or Mac (no tablet, no Linux). 4 GB. <strong>Install Roblox Studio before lesson 1.</strong></td><td>🟡 Check</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac or Linux. Java Edition recommended. 4 GB. A Minecraft account is required.</td><td>🟡 Check</td></tr>
     <tr><td>3D Modelling</td><td>8 GB. Mouse with a scroll wheel. Dedicated GPU recommended. Windows or Mac.</td><td>🔴 Demanding</td></tr>
     <tr><td>Unity</td><td>8 GB. 10 GB free. Windows or Mac. No Chromebook.</td><td>🔴 Demanding</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>The rule:</strong> if you see in BO that the student has a <strong>🟡 Check</strong> or <strong>🔴 Demanding</strong> course, confirm the device before lesson 1, with a message approved by your Team Leader. If the device doesn't meet the requirements, <strong>report it before lesson 1</strong>: what was sold and what the family was told isn't yours to fix, but a timely report does change what happens next.</p>`)}
  `}
 ],
 ix:{
  title:'Before the lesson starts',
  instr:'Pick the first action and what you would say. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'What’s your first action?', card:`The lesson starts in 10 minutes and a student says the join button doesn't appear.`, zones:[{label:'🔁 Refresh, check Chrome and confirm in BO that they’re in the group', fb:'Correct — quick first aid. If nothing changes, you report it with the BO links of the group and the student.'},{label:'🔗 Send them a Zoom link for that lesson', fb:'Not quite — an alternative link is for emergencies only, once and with a report. First aid comes first.'},{label:'⏳ Wait and see if they join later', fb:'Not quite — waiting in silence loses the lesson. Act now.'}], correctZone:0},
   {type:'sort', prompt:'What’s your first action?', card:`The student's course is Unity and BO shows their lesson 1 is on Thursday.`, zones:[{label:'⏳ Nothing — we’ll see in lesson 1', fb:'Not quite — in Unity, device problems are usually discovered in the first lesson, when it’s already too late.'},{label:'💻 Confirm the device before lesson 1, with a message approved by your Team Leader', fb:'Correct — Unity is a demanding course. Confirming the device beforehand avoids losing the first lesson.'},{label:'📝 Ask the family to buy a better computer', fb:'Not quite — you don’t ask for purchases. You confirm the device and, if it doesn’t meet the requirements, you report it.'}], correctZone:1},
   {type:'choice', prompt:`A mother writes: "My son doesn't appear as registered in the lesson." How do you reply?`, opts:[`"Your son isn't registered, you need to talk to sales."`,`"Yes, he's registered, it must be a mistake on your side."`,`"I'm checking your access with my team."`], correct:2, fb:`Don't confirm or deny the registration. You check it in BO and let your Team Leader and Client Service know.`},
   {type:'choice', prompt:`The family says the lesson ended up at a different time from the one they asked for. What do you do?`, opts:[`Acknowledge the inconvenience without promising a change, and tell your Team Leader the same day`,`Offer to move it yourself to whatever time they prefer`,`Explain that the schedule can no longer be changed`], correct:0, fb:`You don't change the schedule, and you don't rule out a change either. You acknowledge the inconvenience and tell your team the same day.`},
   {type:'sort', prompt:'Treasure or trash? Is this a good line for the family?', card:`"Your son isn't registered."`, zones:[{label:'💎 Treasure', fb:'Not quite — don’t confirm or deny the registration. Say: “I’m checking your access with my team.”'},{label:'🗑️ Trash', fb:'Correct — don’t confirm or deny the registration. Say: “I’m checking your access with my team.”'}], correctZone:1}
  ]
 }
},
{id:'during', numLabel:'Module 2', emoji:'🛠️', color:'var(--coral)',
 title:'During the Lesson',
 desc:'The first move is emotional, the 10-minute rule, and what to do about devices, Classroom, audio and camera, failures that hit several students, and emergency Zoom.',
 obj:'Solve what can be solved in 10 minutes, protect the group’s mood and not lose the whole lesson to a technical issue.',
 sections:[
  {t:'🧘 The first move is emotional', html:`
   <div class="card"><p>Before touching anything, <strong>stay calm and normalise it out loud</strong>: <em>"This happens sometimes, we'll fix it together."</em> A calm adult tells the child that everything is fine, and the group takes its cue from you. Only then, fix it.</p></div>
  `},
  {t:'⏱️ The 10-minute rule', html:`
   <div class="card"><p>If you can't solve it in <strong>10 minutes</strong>, stop trying in silence.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Communicate: to the student, the group and, if needed, your team'},
     {ic:'📝', label:'Document: what failed, the message, a screenshot, what you tried'},
     {ic:'📮', label:'Escalate: report it through the right channel'}
   ])}
  `},
  {t:'💻 Devices and software', html:`
   ${accItem('🐢 The computer doesn’t meet the minimum and the app doesn’t work', `
    <p><strong>🎯 What you do:</strong> change the activity so the child can still follow the lesson usefully (a demo on screen share, a guided example) and <strong>report</strong> that the device doesn't meet the requirement.</p>
    <p><strong>🚫 Avoid:</strong> promising a course change.</p>`)}
   ${accItem('🧱 They can’t download or install Roblox', `
    <p><strong>🎯 What you do:</strong> check the operating system and free space (see the requirements in Module 1). Don't spend the whole lesson installing: report it.</p>`)}
   ${accItem('🐌 Unity or Blender freeze while the lesson is on', `
    <p><strong>🎯 What you do:</strong> ask them to close other tabs and apps. Unity and Blender need 8 GB of RAM. If it continues, report it.</p>`)}
   ${accItem('🔥 Classroom uses a lot of resources', `
    <p><strong>🎯 What you do:</strong> close tabs and apps, and report it with the device's model and system.</p>`)}
   ${accItem('🌐 The VPN makes everything slow', `
    ${co('co-warn','🚧',`<p><strong>Content pending confirmation for your region.</strong></p>`)}`)}
  `},
  {t:'🖥️ Classroom', html:`
   <div class="card"><p>The most common quick fixes. The full, up-to-date steps are in the Classroom team's <strong>"Classroom Issues Quick Fixes"</strong> guide.</p></div>
   ${accItem('⬛ Black screen or camera', `<p>Stop and share again. If it happens because the student was on the Assignments tab, repeat it. Check that they're using Chrome. If it isn't fixed, report it.</p>`)}
   ${accItem('▬ A black rectangle instead of your screen', `<p>Stop and resume. For some, minimising and restoring the window works.</p>`)}
   ${accItem('🌫️ The shared screen is blurry', `<p>Share again and check the connection.</p>`)}
   ${accItem('🙈 The student can’t see your shared screen', `<p>If they're on a phone, they should use "desktop site". Check that they're using Chrome.</p>`)}
   ${accItem('📱 The student can’t share their screen', `<p>From a mobile browser (iPad, tablet or phone) <strong>it isn't possible</strong>. They need a computer.</p>`)}
   ${accItem('🧾 The whiteboard stays visible after closing it', `<p>Ask them to leave and join again; report it with the group's BO link.</p>`)}
   ${accItem('✏️ The pen doesn’t work', `<p>Share your screen again. Turn off annotations before switching tabs.</p>`)}
   ${accItem('🚪 Breakout rooms throw errors', `<p>Close all rooms and create them again. If screen sharing fails inside the rooms, report it.</p>`)}
   ${accItem('📄 The Assignments page shows up black', `<p>Turn off and clear the annotations, stop screen sharing and right-click → "Reload frame".</p>`)}
   ${accItem('⚠️ The student sees error banners', `<p>Ask them to <strong>read it out loud</strong> and explain what to do. <strong>Record</strong> whether there was a banner, the message, the pre-join warnings and the type of error. Report it with a screenshot.</p>`)}
   ${accItem('🪟 Picture-in-Picture mode', `<p>It helps: right-click on the shared screen → Picture-in-Picture.</p>`)}
  `},
  {t:'🎙️ Audio and camera', html:`
   ${iconGrid([
     {ic:'🔐', html:`<strong>Permissions.</strong> Icon to the left of the URL → "Always allow" for Camera and Microphone.`},
     {ic:'🖼️', html:`<strong>The camera fails with virtual backgrounds.</strong> Turn on "Use graphics acceleration when available" in <em>chrome://settings/system</em>.`},
     {ic:'🔇', html:`<strong>If you mute a student, unmute them again.</strong> Leaving a child muted without noticing can cost us a family.`},
     {ic:'📸', html:`<strong>The camera or microphone switches off by itself</strong> and you can't fix it in 10 minutes: report it with a screenshot.`}
   ])}
  `},
  {t:'👥 When several students fail at once, or the lesson is lost', html:`
   ${doavoid(
     ['Triage: is it one student or many? If it’s many, it’s the platform — <strong>report it now</strong>, with the group’s BO link','Keep the lesson alive with those who are connected, and ask the others to follow in the chat','If the lesson was lost, send the recording and put together a recovery plan (Module 3)','Demonstrate, share the project file and plan a recovery session'],
     ['Spending the whole lesson helping students one by one while the rest get bored','Doing the task for the student when the technology fails','Promising an extra lesson','Ruling out an extra lesson']
   )}
   ${co('co-danger','2️⃣',`<p><strong>Two compromised lessons</strong> (a platform failure, a cancellation or an absence): <strong>talk to your Team Leader the same day.</strong> That starts the conversation about an extra lesson. Never promise or rule it out yourself.</p>`)}
  `},
  {t:'🆘 Emergency Zoom — the exception', html:`
   <div class="card"><p><strong>Classroom is the default channel.</strong> Zoom is only for emergencies where Classroom doesn't work and can't be fixed with the steps above.</p></div>
   ${co('co-warn','🆘',`<p>If Classroom doesn't work for the whole lesson and can't be fixed, <strong>tell your Team Leader immediately.</strong> Zoom is the exception and is used with their approval. Afterwards, <strong>report it the same day</strong> anyway.</p>`)}
  `}
 ],
 ix:{
  title:'The lesson goes on',
  instr:'Pick the first action in each case. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'What’s the first action?', card:`A student's shared screen is black.`, zones:[{label:'🔁 Stop and share again, and check they’re using Chrome', fb:'Correct — it’s the first step in the guide. If it isn’t fixed, you report it.'},{label:'🆘 Switch to Zoom right away', fb:'Not quite — Zoom is the exception. The Classroom steps come first.'},{label:'⏭️ Carry on with the lesson without them', fb:'Not quite — first aid comes first; if it isn’t solved in 10 minutes, you report it.'}], correctZone:0},
   {type:'sort', prompt:'What’s the first action?', card:`A student on a tablet can't share their screen.`, zones:[{label:'🔁 Ask them to try again several times', fb:'Not quite — screen sharing isn’t possible from a tablet browser.'},{label:'📝 Ask them to switch browsers on the tablet', fb:'Not quite — on a phone or tablet it isn’t possible, whatever the browser.'},{label:'💻 Explain they need a computer to share their screen, and continue the lesson another way', fb:'Correct — it’s a known limitation. Adapt the activity and, if the course requires it, report it.'}], correctZone:2},
   {type:'sort', prompt:'What’s the first action?', card:`You muted a student a while ago because of background noise.`, zones:[{label:'🔊 Unmute them as soon as possible', fb:'Correct — if you mute someone, unmute them again. A child muted without realising it is left out of the lesson.'},{label:'🔇 Leave them muted until the end', fb:'Not quite — a child muted for the whole lesson stops taking part, and that can cost us a family.'}], correctZone:0},
   {type:'choice', prompt:`Five minutes in, three students can't get in and the other two are waiting. What do you do?`, opts:[`Help each one in turn until they're all in`,`Cancel the lesson and tell the families`,`Report it now (it's the platform), carry on with the two who are connected and ask the others to follow in the chat`], correct:2, fb:`If several fail, it's the platform: report it now. Keep the lesson alive with those who are connected and prepare the recovery plan afterwards.`},
   {type:'choice', prompt:`A student's computer doesn't meet the minimum and the course app won't open. What do you do?`, opts:[`Tell the family they have to change course`,`Change the activity so they can still follow the lesson usefully (a demo, a guided example) and report that the device doesn't meet the requirement`,`Do the task yourself on your screen and send it to them finished`], correct:1, fb:`You keep the lesson useful for the child and report it. You don't offer a course change, and you don't do the task for them.`},
   {type:'choice', prompt:`When is Zoom used?`, opts:[`Only when Classroom doesn't work for the whole lesson and can't be fixed, with your Team Leader's approval, and reported the same day`,`Whenever a student has trouble getting in`,`When it's more convenient for the family`], correct:0, fb:`Classroom is the default channel. Zoom is the exception: with your Team Leader's approval and always with a same-day report.`}
  ]
 }
},
{id:'after', numLabel:'Module 3', emoji:'🏠', color:'var(--coral)',
 title:'After the Lesson',
 desc:'Homework that isn’t handed in because they can’t get in, the platform on a phone or tablet, lost lessons and how to close the loop with the family.',
 obj:'Make sure a technical issue doesn’t leave a family without homework or without an answer, and spot it before mistaking it for “not handing in”.',
 sections:[
  {t:'🔍 When they don’t hand in, maybe they can’t', html:`
   <div class="card"><p>Before thinking about lack of motivation, check whether the student <strong>can get in</strong> to do the homework. Some families have complained that they couldn't open the homework and nobody gave them an option.</p></div>
   ${co('co-idea','❓',`<p><strong>Ask before assuming:</strong> <em>"Were you able to open the homework? Which device did you try it on?"</em></p>`)}
  `},
  {t:'🩺 Symptoms after the lesson', html:`
   ${accItem('🔒 They can’t get into the platform to do the homework', `
    <p><strong>🎯 What you do:</strong> confirm the browser (desktop Chrome) and the device. If nothing changes, report it with the BO links of the student and the group, and <strong>follow up after 24 hours</strong>.</p>
    <p><strong>💬 What you can say:</strong> <em>"I'm looking into it with my team and I'll write to you tomorrow."</em></p>`)}
   ${accItem('📱 They can only get in from a phone and it doesn’t display well', `
    <p><strong>🎯 What you do:</strong> the platform is designed for computers: they should use "desktop site" or a computer. Don't promise alternative access.</p>
    <p><strong>💬 What you can say:</strong> explain the limitation warmly: <em>"Some parts don't display well on a phone; on a computer, or with the desktop site, it works much better."</em></p>`)}
   ${accItem('📲 The platform doesn’t fully work on a phone or tablet', `
    <p><strong>🎯 What you do:</strong> it's a <strong>known limitation</strong> (for example, screen sharing isn't possible from a phone). If the course requires it, report it.</p>`)}
   ${accItem('🗂️ The homework doesn’t show in the notebook or dashboard', `
    <p><strong>🎯 What you do:</strong> report it with a screenshot.</p>`)}
   ${accItem('📼 They lost a lesson to a failure', `
    <p><strong>🎯 What you do:</strong> send the recording and the essential part, and put together a recovery plan.</p>
    <p><strong>💬 Before writing to the family:</strong> <strong>sync with your Team Leader.</strong></p>`)}
  `},
  {t:'🔁 Close the loop', html:`
   <div class="card"><p>When the problem is solved, <strong>let the family know</strong>. An informed parent is a parent who stays.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 A closing message you can use</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>"Hi [parent's name]. I'm writing to let you know that the access problem [student] had is now fixed. Thank you for your patience. If anything happens again, write to me and we'll look into it right away."</em></p></div>
   ${co('co-danger','🚫',`<p><strong>In no message</strong> should you promise compensation or an extra lesson. Acknowledge the problem, say it has been reported and who will come back with news.</p>`)}
  `}
 ],
 ix:{
  title:'Nobody left without an answer',
  instr:'Pick the best action or sort each case. 70% to unlock the next module.',
  items:[
   {type:'choice', prompt:`A family says their son can only get in from a phone and the platform doesn't display well. What do you do?`, opts:[`Promise you'll get them special access for the phone`,`Warmly explain that the platform is designed for computers, suggest the desktop site or a computer, and report it if the course requires it`,`Tell them he can't continue the course like this`], correct:1, fb:`Explain the limitation warmly, offer what does work and don't promise alternative access.`},
   {type:'choice', prompt:`A student says the homework doesn't appear on their dashboard. What do you do?`, opts:[`Report it with a screenshot`,`Tell them to try another day`,`Mark the homework as not handed in`], correct:0, fb:`If the homework doesn't show, it's a technical issue: report it with a screenshot.`},
   {type:'sort', prompt:'Do you solve it yourself or report it?', card:`A student isn't handing in homework and, when asked, says they can't get into the platform, not even from Chrome on a computer.`, zones:[{label:'🧑‍🏫 I solve it myself', fb:'Not quite — you’ve already tried the basics (Chrome on a computer). Now it’s time to report it.'},{label:'📮 I report it', fb:'Correct — you report it with the BO links of the student and the group, and follow up after 24 hours.'}], correctZone:1},
   {type:'choice', prompt:`You reported that a student can't get into the homework. When do you follow up?`, opts:[`The following week`,`Only if the family writes again`,`After 24 hours`], correct:2, fb:`The follow-up is after 24 hours: that way the family isn't left without an answer.`}
  ]
 }
},
{id:'report', numLabel:'Module 4', emoji:'📮', color:'var(--coral)',
 title:'Report and Escalate',
 desc:'Who to tell depending on the problem, what a good report includes, in what order to talk to your team and to the family, and what a good BO comment looks like.',
 obj:'Know who to tell, with what details and in what order. A problem that isn’t reported doesn’t exist for anyone else.',
 sections:[
  {t:'🛣️ Three lanes', html:`
   <div class="card"><p>Depending on the type of problem, the report goes down a different lane:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Lane</th><th>When</th><th>Where</th></tr>
    <tr><td><strong>1. Classroom failure</strong><br>(black screen, audio, whiteboard, rooms)</td><td>The steps in the guide didn't fix it</td><td>Classroom support channel in Slack + BO comment</td></tr>
    <tr><td><strong>2. Account, enrolment, credentials, schedule, licences</strong></td><td>The student can't get in, isn't registered, the schedule is wrong or the credentials don't work</td><td>Team Leader + Client Service + BO comment</td></tr>
    <tr><td><strong>3. Lost lesson or two compromised lessons</strong></td><td>Because of a platform failure, a cancellation or an absence</td><td><strong>Team Leader the same day</strong> + Client Service if the family is upset + BO comment</td></tr>
   </table></div></div>
  `},
  {t:'🧾 What a report includes', html:`
   ${numlist([
     '<strong>BO links</strong> of the group and the student (mandatory)',
     'Was a <strong>banner</strong> shown to the student? What did it say?',
     '<strong>Warnings on the pre-join screen</strong> (for example, unsupported requirements)',
     '<strong>Type of error:</strong> black screen, no sound, can’t get in…',
     '<strong>Screenshot</strong>',
     'Device, operating system, browser and, if relevant, <strong>whether they use a VPN</strong> and from which country',
     'What you tried and for how long'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 What a useful BO comment looks like — copy and fill in</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Lesson:</strong> [date] · <strong>Group:</strong> [BO link] · <strong>Student:</strong> [BO link]<br>
   <strong>What failed:</strong> [e.g. couldn't get into the lesson; black screen when sharing]<br>
   <strong>Banner or message:</strong> [exact text, or "none"] · <strong>Pre-join warnings:</strong> [yes / no, which]<br>
   <strong>Device:</strong> [device, system, browser, VPN yes / no and country]<br>
   <strong>What I tried:</strong> [e.g. refresh, Chrome, share again — 10 minutes]<br>
   <strong>Screenshot:</strong> [attached] · <strong>Family's words:</strong> [word for word, if any]</p></div>
  `},
  {t:'🔢 The order matters', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Team first, family second.</strong> When the problem involves more than your teaching (access, schedule, a lost lesson), don't write to the family before talking to your Team Leader.`},
     {ic:'🎓', html:`<strong>You talk about the learning; you hand over the action.</strong> You can say what you tried in the lesson and that you're looking into it. The options (extra lesson, group change, compensation) are offered by Client Service.`},
     {ic:'⚖️', html:`<strong>Never promise and never refuse.</strong> Neither <em>"we'll give you an extra lesson"</em> nor <em>"that's not possible"</em>. Do show that you care and that you're already on it.`},
     {ic:'📅', html:`<strong>Escalate once and follow up.</strong> Put a reminder in your calendar to check in two lessons.`}
   ])}
   ${co('co-ok','💬',`<p><strong>A message you can send</strong> (once agreed with your Team Leader): <em>"Hi [parent's name]. I saw that [student] couldn't get into the lesson today. I've already reported it to my team with all the details, and Client Service will get in touch with you. In the meantime, I'm sending you the recording so nothing we covered is lost."</em></p>`)}
  `}
 ],
 ix:{
  title:'Report well, and in order',
  instr:'Pick the lane, the best comment and what you would say. 70% to complete this module.',
  items:[
   {type:'sort', prompt:'Which lane does this report go down?', card:`The student's Minecraft credentials don't work.`, zones:[{label:'1️⃣ Classroom failure', fb:'Not quite — it isn’t a Classroom failure, it’s an account or licence.'},{label:'2️⃣ Account, enrolment, credentials, schedule, licences', fb:'Correct — it goes to your Team Leader and Client Service, with a BO comment.'},{label:'3️⃣ Lost lesson', fb:'Not quite — it isn’t a lost lesson yet: it’s a credentials problem.'}], correctZone:1},
   {type:'sort', prompt:'Which lane does this report go down?', card:`The whiteboard stays visible after closing it, and leaving and joining again doesn't fix it.`, zones:[{label:'1️⃣ Classroom failure', fb:'Correct — the steps in the guide didn’t fix it: Classroom support channel and a BO comment.'},{label:'2️⃣ Account, enrolment, credentials, schedule, licences', fb:'Not quite — it has nothing to do with the student’s account.'},{label:'3️⃣ Lost lesson', fb:'Not quite — the lesson went on; it’s a Classroom failure.'}], correctZone:0},
   {type:'choice', prompt:`Which is the best BO comment for the same case?`, opts:[`"Couldn't get in, bad connection."`,`"3/11, lesson 2. Couldn't get in: banner 'System not supported' on the pre-join screen. Windows 7, Chrome up to date. Tried refreshing and another browser, 10 min. Screenshot attached. BO links of the group and the student."`,`"The platform isn't working again, this always happens."`], correct:1, fb:`The useful comment is complete and neutral: date, what failed, the banner, the device, what you tried, the screenshot and the BO links.`},
   {type:'choice', prompt:`A student has lost their second lesson in a row to a failure. What comes first?`, opts:[`Write to the family and offer an extra lesson`,`Wait and see if the next lesson works`,`Talk to your Team Leader the same day, and agree with them on the message to the family`], correct:2, fb:`Two compromised lessons: Team Leader the same day. Team first, family second. You don't offer the extra lesson.`},
   {type:'choice', prompt:`This report is missing something: "Lesson 3, the student's audio couldn't be heard, tried permissions 10 min, Chrome, Windows 10, screenshot attached." What's missing?`, opts:[`The BO links of the group and the student`,`The tutor's opinion of the platform`,`The family's phone number`], correct:0, fb:`The BO links of the group and the student are mandatory in every report: without them the case can't be reviewed.`},
   {type:'sort', prompt:'Treasure or trash? Is this a good line for the family?', card:`"I've already reported it to my team with all the details, and Client Service will get in touch with you."`, zones:[{label:'💎 Treasure', fb:'Correct — it acknowledges the problem, says it’s been reported and who will come back, without promising anything.'},{label:'🗑️ Trash', fb:'Not quite — it’s exactly what you can say: acknowledge, report and say who will come back, without promising.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Final checklist', emoji:'✅', color:'var(--coral)',
 title:'Final Checklist',
 desc:'No test here — just the essentials of this mini-training, before, during and after the lesson.',
 obj:'Go through the checklist below. This module isn’t graded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a BO comment the same day I found out about the request, with dates, what failed, the message or banner, what I tried and a screenshot, and I told my Team Leader',
     'My next lesson with this student was technically failure-proof: 15 minutes early, a plan B, specific attention and a visible win',
     'I never confirmed an approval, never talked about amounts and never blamed the platform — I used the one safe line'
   ])}
  `},
  {t:'🧭 Before, during and after', html:`
   <div class="three-col">
    <div class="card"><h4>🧰 Before</h4>${numlist(['Desktop Chrome, up to date','Microphone, camera and screen tested','BO: group and student list','Pre-join warnings','In lesson 1, I join early'])}</div>
    <div class="card"><h4>🛠️ During</h4>${numlist(['Calm first','10 minutes, then I escalate','Banner: they read it out loud','If many are affected, I report it now','I don’t do the task for the student'])}</div>
    <div class="card"><h4>🏠 After</h4>${numlist(['Can they get into the homework?','Recording and recovery plan','Same-day report with complete details','Follow-up after 24 hours','I close the loop with the family'])}</div>
   </div>
  `},
  {t:'🃏 The five pocket rules', html:`
   ${iconGrid([
     {ic:'🔁', html:`<strong>Adapt first.</strong>`},
     {ic:'📮', html:`<strong>Reporting isn't optional.</strong>`},
     {ic:'👥', html:`<strong>Team before family.</strong>`},
     {ic:'⚖️', html:`<strong>Never promise, never refuse.</strong>`},
     {ic:'📅', html:`<strong>Escalate once and follow up.</strong>`}
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole mini-training.</strong> When you're ready, continue — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
