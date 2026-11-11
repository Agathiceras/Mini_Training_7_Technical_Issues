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
    heroIntro:"You've received this training because you have students whose families have requested a refund because of technical issues. Here you'll see what you can do before, during and after the lesson, which workarounds you can use, and where to get help so the problem is fixed in time.",
    heroCard1:"<b>At your own pace.</b> Your progress is saved in this browser.",
    heroCard2:"<b>Practice included.</b> You’ll report a technical issue in a Back Office simulation.",
    pbLabel:'modules complete',
    tapOpen:'Tap to open',
    tapFlip:'Tap to flip',
    lblSee:'What you see',
    lblDo:'What you do',
    lblSay:'What you can say',
    lblReport:'Where to report',
    lblAvoid:'Avoid',
    lblTip:'Tip',
    stepOf:'Step {i} of {n}',
    next:'Next',
    heroWork:"Work through 6 short modules. Each module check needs 70%+ to unlock the next. About 30–40 minutes total.",
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
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'#5DD39E', art:'lifebuoy', learn:[['📊','What the data shows'],['🔎','The problems this training covers'],['🧭','What is yours — and what isn’t'],['🛟','What to do if a refund request already exists'],['🎯','How to make your next lesson the recovery attempt']],
 eyebrow:'Introduction',
 title:'Why You’re Here',
 desc:'Why a technical issue in the first lessons can cost us a family, which part is yours — and what to do if a refund request already exists.',
 obj:'Understand why a technical issue in the first lessons can cost us a family, which part is yours, and what to do once a refund request already exists.',
 sections:[
  {t:'📊 What the data shows', html:`
   <div class="card"><p>A technical issue rarely comes alone. It shows up in the first lessons, while the family is still deciding whether Kodland is right for them — and sometimes before the child has seen a single lesson.</p></div>
   ${bigStat('≈ 1 in 20',`<p>refund requests has a <strong>real technical issue</strong> behind it. And that's a minimum: some of these cases arrive labelled with another reason.</p>`)}
   <p style="font-size:11.5px;color:var(--text-muted)">Based on the refund requests of the last 90 days across all regions; approximate figures.</p>
   ${co('co-idea','💡',`<p><strong>The first lessons are the narrowest window.</strong> A technical issue fixed the same day is usually saved; the same issue fixed late almost never is. That's why the first lessons count, and why the same day counts.</p>`)}
  `},
  {t:'🔎 The problems this training covers', html:`
   ${iconGrid([
     {ic:'🖥️', html:`<strong>Classroom and learning platforms.</strong> Broken or missing links, platform errors, black screens, audio and camera that stop working.`},
     {ic:'💻', html:`<strong>Computers that don't meet the course requirements</strong>`},
     {ic:'🧩', html:`<strong>Course tools that won't open or install:</strong> Blender, Roblox Studio, Krita and other programs.`}
   ])}
  `},
  {t:'🧭 What’s yours and what isn’t', html:`
   <div class="card"><p>You can't fix a platform bug, an enrolment or a schedule. But a lot is in your hands — and the most important part is <strong>letting the right people know, fast and well</strong>.</p>
   <div class="tbl-wrap"><table>
    <tr><th>✅ Fully yours</th><th>🔁 Yours to adapt and report</th><th>🚫 Out of your control</th></tr>
    <tr><td>Checking your own connection, device and Chrome before every lesson<br>Sending the family the login details you find in BO</td><td>A student who can't get in or connect: help with first aid and <strong>report it</strong></td><td>Fixing a Classroom or platform bug</td></tr>
    <tr><td>Staying calm and normalising the issue in front of the group</td><td>A lesson lost to a failure: adapt the next one and <strong>report it</strong></td><td>Enrolment, licences and lesson credits</td></tr>
    <tr><td>Muting and unmuting microphones with care</td><td>A computer that doesn't meet the requirements: keep the lesson useful and <strong>report it to your Team Leader</strong></td><td>Moving a student to another course, group or schedule</td></tr>
    <tr><td>Trying the known workarounds (refresh, rejoin, another tool for the course)</td><td>A technical issue that could make the family leave: <strong>request an extra lesson from your Team Leader</strong></td><td>Approving an extra lesson, a reschedule or any compensation</td></tr>
    <tr><td>Reporting the same day with complete details</td><td>A failure that affects several students: triage, <strong>report</strong> and a recovery plan</td><td>The family’s internet provider or home network</td></tr>
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
     {ic:'⏱️', html:`<strong>15 minutes before:</strong> desktop Chrome up to date, other apps closed; microphone, camera and screen sharing tested; group and student list checked in BO.`},
     {ic:'🅱️', html:`<strong>A plan B ready:</strong> what you'll do if the student can't get in, if the audio fails or if their course tool won't open (Modules 1 and 2).`},
     {ic:'👀', html:`<strong>Specific attention</strong> for that child — make them feel noticed for something concrete, not praised in general.`},
     {ic:'🏆', html:`<strong>An early, visible win.</strong> They should leave the lesson feeling capable, not behind.`}
   ])}
   ${co('co-danger','🚨',`<p><strong>If the failure happens again in that lesson, report it immediately</strong> in the Slack channel <em>#uk-tsm-and-tutors</em> — not at the end of the day.</p>`)}
  `},
  {t:'📮 Report the same day, and know the one safe line', html:`
   ${numlist([
     'Leave a comment in BO that same day with exactly what you saw: dates, what failed, the error message or banner, what you tried and a screenshot',
     'Include the family’s exact words, word for word, if you have them',
     'Let your Team Leader know that same day — this is also the moment to ask whether an extra lesson makes sense',
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
   {type:'sort', prompt:'Whose part is this?', card:`Approving an extra lesson for the family after the lost one.`, zones:[{label:'✅ Fully mine', fb:'Not quite — you can request it, but you don’t approve it or offer it.'},{label:'🔁 Mine to adapt and report', fb:'Not entirely — your part is reporting and requesting it from your Team Leader; the approval isn’t yours.'},{label:'🚫 Out of my control', fb:'Correct — your Team Leader approves it. Your part is to report the lost lesson and request it the same day.'}], correctZone:2},
   {type:'choice', prompt:`A parent writes: "We've already asked for a refund, the platform never worked." What do you do?`, opts:[`Explain that the platform works fine and it was probably their connection`,`Reply "Customer Service will help you with this", leave a BO comment with what you saw and their exact words, and tell your Team Leader the same day`,`Promise that everything will work next lesson and there's no need for the refund`], correct:1, fb:`You don't argue, you don't promise and you don't discuss the request. You use the safe line and give your team the details the same day.`},
   {type:'sort', prompt:'Treasure or trash? Is this a good line for the family?', card:`"It's the platform's fault, it happens to us all the time too."`, zones:[{label:'💎 Treasure', fb:'Not quite — blaming the platform erodes trust and solves nothing.'},{label:'🗑️ Trash', fb:'Correct — never blame the platform. Say you’re already looking into it with your team.'}], correctZone:1}
  ]
 }
},
{id:'before', numLabel:'Module 1', emoji:'🧰', color:'#7EA8FF', art:'clock', learn:[['⏱️','The 15 minutes before every lesson'],['🩺','What to do when access fails'],['💻','Is the device right for the course?'],['📮','Who to tell and what to say']],
 eyebrow:'Module 1 of 4',
 title:'Before the Lesson',
 desc:'The 15 minutes before every lesson, problems with access, enrolment, schedule and link, and how to tell whether the student’s device is right for their course.',
 obj:'Spot and report access problems before the family loses the lesson.',
 sections:[
  {t:'⏱️ The 15 minutes before', html:`
   <div class="card"><p>Most access problems can be seen <strong>before</strong> the lesson starts. These 15 minutes are your best insurance.</p></div>
   ${stepper([
     {ic:'🌐', title:'Open the lesson in desktop Chrome', html:`<p>Use <strong>desktop Google Chrome, up to date</strong>. It’s the only fully compatible browser; Safari and others aren’t fully compatible.</p>`},
     {ic:'🧹', title:'Close the other apps', html:`<p>Classroom slows down when other programs are running. Close everything you won’t use in the lesson.</p>`},
     {ic:'🎙️', title:'Test your microphone and camera', html:`<p>If the browser didn’t ask for permissions, turn them on manually: icon to the left of the URL → Camera and Microphone set to “Always allow”.</p>`},
     {ic:'📋', title:'Check the group and the link in BO', html:`<p>Check the group, the student list and that the lesson link works. Look out for <strong>warnings on the pre-join screen</strong> (for example, unsupported system requirements).</p>`},
     {ic:'👋', title:'In a new student’s first lesson, join early', html:`<p>Join early and wait. If they haven’t joined <strong>5 minutes after the start time</strong>, report it; don’t wait until the lesson ends.</p>`}
   ])}
   ${co('co-idea','📶',`<p><strong>A tip from mentor tutors:</strong> Classroom needs a strong connection. Remind students (and their families) to close the apps they aren't using and to make sure nobody else at home is using the Wi-Fi heavily during the lesson.</p>`)}
   ${doavoid(
     ['Join 15 minutes early and test everything','Use desktop Chrome, up to date, with other apps closed','Check the group and the link in BO before every lesson','Report right away if a new student doesn’t show up'],
     ['Opening the lesson at the last minute','Teaching from Safari or another browser','Waiting until the end of the lesson to say someone couldn’t get in','Assuming “they’ll join eventually”']
   )}
  `},
  {t:'🩺 Symptoms before the lesson', html:`
   <div class="card"><p>Tap each symptom. You’ll see <strong>what you do</strong>, <strong>what you can say</strong> and <strong>where to report</strong>. All your support contacts are in Module 4.</p></div>
   ${symCards([
     {ic:'🔗', title:`The lesson link is broken or missing`,
      do:`Refresh BO and check the link from the group page. If it’s still broken or missing, report it straight away so the Teaching team can fix it before the lesson starts.`,
      say:`<em>“I’m checking the lesson link with my team, I’ll send you an update in a few minutes.”</em>`,
      rep:`The Slack channel <em>#uk-tsm-and-tutors</em> + BO comment.`},
     {ic:'🚪', title:`The join button doesn’t appear`,
      do:`Refresh, check that you’re using Chrome and confirm in BO that the student is in the group. If nothing changes, report it with the BO links of the group and the student.`,
      say:`<em>“I’m checking the access with my team and I’ll write to you as soon as I have news.”</em>`,
      rep:`The Slack channel <em>#uk-tsm-and-tutors</em> + BO comment.`},
     {ic:'📋', title:`“I’m not registered”`,
      see:`The family says the child doesn’t appear as registered.`,
      do:`<strong>Don’t confirm or deny the registration.</strong> Check it in BO and let your Team Leader and Client Service know.`,
      say:`<em>“I’m checking your access with my team.”</em>`,
      rep:`Team Leader + Client Service + BO comment.`,
      avoid:`Telling the family <em>“he isn’t registered”</em>.`},
     {ic:'🕒', title:`The schedule isn’t the one the family asked for`,
      see:`The lesson is at another time, or a notification arrived with a different start date.`,
      do:`Don’t change anything yourself — tutors can’t reschedule lessons. Tell your Team Leader and Client Service the same day.`,
      say:`Acknowledge the inconvenience without explaining why it happened or promising a change: <em>“I understand it’s inconvenient. I’ve already shared it with my team so they can contact you.”</em>`,
      rep:`Team Leader + Client Service + BO comment.`},
     {ic:'🎟️', title:`Missing lesson credits or a lesson charged unfairly`,
      see:`The family says their lessons don’t add up, or that a lesson that didn’t happen was deducted.`,
      do:`Write down exactly what the family says and pass it to your Team Leader and Client Service the same day — Operations reviews it.`,
      say:`<em>“Customer Service will help you with this.”</em>`,
      rep:`Team Leader + Client Service + BO comment.`,
      avoid:`Explaining or promising anything about credits.`},
     {ic:'✉️', title:`The family didn’t get the link or the credentials`,
      do:`<strong>You have them in BO.</strong> In the student’s profile you’ll find the login link and the login and password. Send them to the family yourself, straight away. If they’re missing or don’t work, report it.`,
      say:`<em>“I’m sending you the access details now. Please try them and let me know if anything doesn’t work.”</em>`,
      rep:`Only if the details are missing in BO or don’t work: Team Leader + Client Service + BO comment.`,
      avoid:`Improvising links that don’t come from BO.`}
   ])}
   ${co('co-warn','🔗',`<p><strong>Zoom when someone can’t get in?</strong> Yes — it’s used so the lesson isn’t postponed, but always recorded and reported the same day (Module 2). Sending Zoom links lesson after lesson hides the problem: nobody fixes it because nobody finds out.</p>`)}
  `},
  {t:'💻 Before lesson 1: is the device right?', html:`
   <div class="card"><p>Refund cases caused by a device that isn't up to it are usually discovered <strong>in the first lesson</strong>. Each course needs something different:</p></div>
   ${patternCards([
     {ic:'🟢', title:'Easy', desc:'Python 1 / Python Pro', note:'Chrome is enough. <strong>Normal check before the lesson.</strong>'},
     {ic:'🟡', title:'Check', desc:'Digital Creativity · Graphic Design · Roblox · Minecraft', note:'They need specific tools, an installation, an account or a screen. <strong>Confirm the device before lesson 1.</strong>'},
     {ic:'🔴', title:'Demanding', desc:'3D Modelling', note:'8 GB of RAM, a specific system and hardware. <strong>Confirm the device before lesson 1.</strong>'}
   ],3)}   ${accItem('📋 See the requirements by course', `
    <p><strong>In general:</strong> up-to-date Chrome · at least 4 GB of RAM (8 GB for Blender) · 10 Mbps, ideally wired · 5 GB free. <strong>Don't use Safari</strong> (on Mac it has known issues with the platform).</p>
    <div class="tbl-wrap"><table>
     <tr><th>Course</th><th>Requirements</th><th>Level</th></tr>
     <tr><td>Python 1 / Python Pro</td><td>Chrome + a Google account (Google Colab).</td><td>🟢 Easy</td></tr>
     <tr><td>Digital Creativity</td><td>Chrome. Several online tools (Canva and others); backups for each tool are in the wiki / teacher notes.</td><td>🟡 Check</td></tr>
     <tr><td>Graphic Design</td><td>Chrome + Canva. Screen of at least 1280×768.</td><td>🟡 Check</td></tr>
     <tr><td>Roblox</td><td>Windows or Mac (no tablet, no Linux). 4 GB. <strong>Install Roblox Studio before lesson 1.</strong></td><td>🟡 Check</td></tr>
     <tr><td>Minecraft</td><td>Windows, Mac or Linux. Java Edition recommended. 4 GB. A Minecraft account is required.</td><td>🟡 Check</td></tr>
     <tr><td>3D Modelling</td><td>Blender. 8 GB. Mouse with a scroll wheel. Dedicated GPU recommended. Windows or Mac.</td><td>🔴 Demanding</td></tr>
    </table></div>`)}
   ${co('co-idea','📌',`<p><strong>The rule:</strong> if you see in BO that the student has a <strong>🟡 Check</strong> or <strong>🔴 Demanding</strong> course, confirm the device before lesson 1, with a message approved by your Team Leader.</p>`)}
   ${co('co-danger','💻',`<p><strong>If the computer can't run the course, it shouldn't have been sold that way — and it isn't yours to fix.</strong> Report it to your Team Leader; the Teaching and Sales teams decide together how and where the student continues. Never tell the family to buy a new computer or to change course yourself. Meanwhile, keep the lesson useful with the workarounds in Module 2.</p>`)}
  `}
 ],
 ix:{
  title:'Before the lesson starts',
  instr:'Pick the first action and what you would say. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'What’s your first action?', card:`The lesson starts in 10 minutes and a student says the join button doesn't appear.`, zones:[{label:'🔁 Refresh, check Chrome and confirm in BO that they’re in the group', fb:'Correct — quick first aid. If nothing changes, you report it with the BO links of the group and the student.'},{label:'🔗 Send them a Zoom link for that lesson', fb:'Not quite — Zoom is for when someone really can’t get in, after the quick checks. First aid comes first.'},{label:'⏳ Wait and see if they join later', fb:'Not quite — waiting in silence loses the lesson. Act now.'}], correctZone:0},
   {type:'sort', prompt:'What’s your first action?', card:`The student's course is 3D Modelling and BO shows their lesson 1 is on Thursday.`, zones:[{label:'⏳ Nothing — we’ll see in lesson 1', fb:'Not quite — in 3D Modelling, device problems are usually discovered in the first lesson, when it’s already too late.'},{label:'💻 Confirm the device before lesson 1, with a message approved by your Team Leader', fb:'Correct — 3D Modelling is a demanding course. Confirming the device beforehand avoids losing the first lesson.'},{label:'📝 Ask the family to buy a better computer', fb:'Not quite — you don’t ask for purchases. You confirm the device and, if it doesn’t meet the requirements, you report it.'}], correctZone:1},
   {type:'choice', prompt:`A mother writes: "My son doesn't appear as registered in the lesson." How do you reply?`, opts:[`"Your son isn't registered, you need to talk to sales."`,`"Yes, he's registered, it must be a mistake on your side."`,`"I'm checking your access with my team."`], correct:2, fb:`Don't confirm or deny the registration. You check it in BO and let your Team Leader and Client Service know.`},
   {type:'choice', prompt:`The family says the lesson ended up at a different time from the one they asked for. What do you do?`, opts:[`Acknowledge the inconvenience without promising a change, and tell your Team Leader the same day`,`Offer to move it yourself to whatever time they prefer`,`Explain that the schedule can no longer be changed`], correct:0, fb:`You don't change the schedule, and you don't rule out a change either. You acknowledge the inconvenience and tell your team the same day.`},
   {type:'choice', prompt:`A family says a lesson that never happened was deducted from their package. What do you do?`, opts:[`Tell them you'll give them the lesson back`,`Write down what they said, tell them "Customer Service will help you with this", and pass it to your Team Leader and Client Service the same day`,`Explain how lesson deductions work`], correct:1, fb:`Credits and deductions are reviewed by Operations. You don't promise or explain — you pass on exactly what the family said, the same day.`},
   {type:'choice', prompt:`In lesson 1 of a 3D Modelling course you see that the student's computer has 4 GB of RAM and Blender won't run. What's right?`, opts:[`Report it to your Team Leader — Teaching and Sales decide how the student continues — and keep this lesson useful in the meantime`,`Tell the family the course isn't for them and suggest another one`,`Ask the family to upgrade the computer before the next lesson`], correct:0, fb:`A computer that can't run the course shouldn't have been sold that way. It isn't yours to solve: you report it, and Teaching and Sales decide.`}
  ]
 }
},
{id:'during', numLabel:'Module 2', emoji:'🛠️', color:'#FFB44D', art:'micCam', learn:[['🧘','Stay calm first'],['🔧','Classroom fixes from mentor tutors'],['🧩','Workarounds for each course'],['🆘','When Zoom is allowed']],
 eyebrow:'Module 2 of 4',
 title:'During the Lesson',
 desc:'The first move is emotional, the 10-minute rule, Classroom fixes from mentor tutors, workarounds for each course, failures that hit several students, and when an alternative platform such as Zoom is allowed.',
 obj:'Solve what can be solved in 10 minutes, keep the lesson useful for every student and not lose the whole lesson to a technical issue.',
 sections:[
  {t:'🧘 The first move is emotional', html:`
   <div class="card"><p>Before touching anything, <strong>stay calm and normalise it out loud</strong>: <em>"This happens sometimes, we'll fix it together."</em> A calm adult tells the child that everything is fine, and the group takes its cue from you. Only then, fix it.</p></div>
  `},
  {t:'⏱️ The 10-minute rule', html:`
   <div class="card"><p>If you can't solve it in <strong>10 minutes</strong>, stop trying in silence.</p></div>
   ${stepFlow([
     {ic:'💬', label:'Communicate: to the student, the group and, if needed, your team'},
     {ic:'📝', label:'Document: what failed, the message, a screenshot, what you tried'},
     {ic:'📮', label:'Escalate: report it in the Slack channel #uk-tsm-and-tutors'}
   ])}
  `},
  {t:'🔧 Classroom fixes that work — from mentor tutors', html:`
   <div class="card"><p>Tutors who teach every day agree: <strong>most Classroom problems are solved by refreshing and lightening the load.</strong> Try these, in this order:</p></div>
   ${stepper([
     {ic:'🔄', title:'Refresh the page', html:`<p>Or ask the student to. It fixes most black screens, frozen video and sharing that won’t start.</p>`},
     {ic:'🧹', title:'Close the other apps', html:`<p>Yours and the students’. Classroom gets slow when other programs are running.</p>`},
     {ic:'🚪', title:'Rejoin the lesson', html:`<p>If your camera stops working, close the browser, reload and join again — sometimes it takes two tries.</p>`},
     {ic:'🎚️', title:'Check the selected device', html:`<p>A microphone can look “on” and still be blocked: in the settings, check that the right microphone and camera are selected.</p>`},
     {ic:'📶', title:'Lighten the connection', html:`<p>Ask students to turn their cameras off and to make sure nobody else at home is using the Wi-Fi.</p>`},
     {ic:'🌐', title:'Last resort: another browser', html:`<p>Rejoining from another browser sometimes gets you through the lesson. Report it afterwards: Chrome remains the supported browser.</p>`}
   ])}
   ${iconGrid([
     {ic:'👥', html:`<strong>Big groups (around 15 students).</strong> The lesson may restart, crash, freeze or turn everyone's camera off. Ask students to keep their cameras off from the start, and report it if it keeps happening.`},
     {ic:'📡', html:`<strong>Screen sharing stops again and again.</strong> It's usually the connection. Close apps, ask about other devices on the Wi-Fi, and share again.`},
     {ic:'🔄', html:`<strong>Students can't see your screen and nothing works.</strong> Ask one student to share their screen with the group instead — especially in group lessons, this often works better.`},
     {ic:'✏️', html:`<strong>Annotations don't work</strong> (you can't draw, drawings don't appear or appear in the wrong place). Turn annotations off, share your screen again and turn them back on.`}
   ])}
  `},
  {t:'⬛ Black screen when sharing — watch the procedure', html:`
   <div class="card"><p>This is the procedure the student and/or the tutor should follow when the screen goes black during screen sharing.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Black screen during screen sharing</div><div class="vslot-meta">Step by step · 19 seconds</div></div></div>
    <div class="vslot-frame" style="padding:0"><video src="Media/black_screen.mkv" controls preload="metadata" playsinline style="display:block;width:100%;max-height:420px;background:#000"></video></div>
    <div class="vslot-brief">If the screen is still black after following the steps, refresh the page (you or the student). If it keeps happening, report it with a screenshot.</div></div>
  `},
  {t:'🖥️ Classroom — more quick fixes', html:`
   <div class="card"><p>The full, up-to-date steps are in the Classroom team's <strong>"Classroom Issues Quick Fixes"</strong> guide. The most common ones:</p></div>
   ${accItem('▬ A black rectangle instead of your screen', `<p>Stop and resume sharing. For some, minimising and restoring the window works.</p>`)}
   ${accItem('🌫️ The shared screen is blurry', `<p>Share again and check the connection.</p>`)}
   ${accItem('🙈 The student can’t see your shared screen', `<p>If they're on a phone, they should use "desktop site". Check that they're using Chrome. If nothing works, ask another student to share their screen with the group.</p>`)}
   ${accItem('📱 The student can’t share their screen', `<p>From a mobile browser (iPad, tablet or phone) <strong>it isn't possible</strong>. They need a computer.</p>`)}
   ${accItem('🧾 The whiteboard stays visible after closing it', `<p>Ask them to leave and join again; report it with the group's BO link.</p>`)}
   ${accItem('🚪 Breakout rooms throw errors', `<p>Close all rooms and create them again. If screen sharing fails inside the rooms, report it.</p>`)}
   ${accItem('📄 The Assignments page shows up black', `<p>Turn off and clear the annotations, stop screen sharing and right-click → "Reload frame". If a student's screen went black because they were on the Assignments tab, stop and share again.</p>`)}
   ${accItem('⚠️ The student sees error banners', `<p>Ask them to <strong>read it out loud</strong> and explain what to do. <strong>Record</strong> whether there was a banner, the message, the pre-join warnings and the type of error. Report it with a screenshot.</p>`)}
   ${accItem('🖼️ The camera fails with virtual backgrounds', `<p>Turn on "Use graphics acceleration when available" in <em>chrome://settings/system</em>.</p>`)}
   ${accItem('🪟 Picture-in-Picture mode', `<p>It helps: right-click on the shared screen → Picture-in-Picture.</p>`)}
  `},
  {t:'🎙️ When a student’s microphone or camera doesn’t work', html:`
   ${stepFlow([
     {ic:'🔁', label:'Ask them to rejoin the lesson'},
     {ic:'🎚️', label:'Check the right microphone and camera are selected'},
     {ic:'📮', label:'Still not working: report it in the Slack channel #uk-tsm-and-tutors and ask tech support to test it within the week'}
   ])}
   ${co('co-ok','💬',`<p><strong>Meanwhile, the student keeps learning.</strong> They can attend without a camera and, as an exception, even without a microphone: you communicate through the chat and reactions. Nobody is left out of the lesson because of a device.</p>`)}
   ${co('co-danger','🔇',`<p><strong>If you mute a student, unmute them again.</strong> Leaving a child muted without noticing can cost us a family.</p>`)}
  `},
  {t:'🧩 When the course tool doesn’t work — workarounds by course', html:`
   <div class="card"><p>The course authors shared what you can do when a student can't open the course program or their computer struggles with it. Tap your course:</p></div>
   ${tabsBlock([
     {ic:'🎮', title:'Roblox', html:`${symCards([
       {ic:'🔑', title:`The student can’t log in, or the program won’t open`,
        do:`<ul><li><strong>They follow your demo:</strong> the student watches your screen and gives verbal answers about what is being done — they still take part in the lesson.</li><li><strong>After the lesson,</strong> go through the installation or login with them.</li><li><strong>Still not solved?</strong> Ask for tech support in the Slack channel <em>#uk-tsm-and-tutors</em>.</li></ul>`,
        avoid:`Spending the whole lesson installing while the rest of the group waits.`},
       {ic:'🧱', title:`Roblox Studio won’t download or install`,
        do:`Check the operating system and the free space (see the requirements in Module 1). Then the same as above: demo now, fix it after the lesson, tech support if needed.`}
     ])}`},
     {ic:'🧊', title:'3D Modelling', html:`${symCards([
       {ic:'⬇️', title:`Blender won’t run on the student’s computer`,
        do:`<ul><li><strong>Try an older version of Blender,</strong> downloaded from the official Blender website.</li><li><strong>If it still doesn’t work,</strong> the computer can’t run the course: report it to your Team Leader. Teaching and Sales decide how the student continues.</li></ul>`,
        avoid:`Promising a course change — that decision isn’t yours.`}
     ])}`},
     {ic:'🎨', title:'Digital Creativity', html:`${symCards([
       {ic:'📚', title:`One of the online tools doesn’t work`,
        do:`<ul><li><strong>Check the backups</strong> in the wiki / teacher notes — many tools have an alternative listed there.</li><li><strong>No backup listed?</strong> Find a similar service yourself, and send it through the feedback form so it’s added to the backup list for everyone.</li></ul>`},
       {ic:'🖌️', title:`Krita won’t open`,
        do:`Any online drawing program is fine — for example, <em>Kleki</em>.`}
     ])}`},
     {ic:'💻', title:'A computer that’s too weak', html:`${symCards([
       {ic:'🐢', title:`The computer doesn’t meet the course requirements at all`,
        see:`The app won’t open, freezes or closes, or the pre-join screen shows a requirements warning.`,
        do:`<ul><li><strong>Keep the lesson useful:</strong> a demo on your shared screen, a guided example, verbal answers.</li><li><strong>Report it to your Team Leader.</strong> The course shouldn’t have been sold for that computer; Teaching and Sales decide how and where the student continues.</li></ul>`,
        avoid:`Doing the task for the student, asking the family to buy anything or promising a course change.`}
     ])}`}
   ])}
  `},
  {t:'👥 When several students fail at once, or the lesson is lost', html:`
   ${doavoid(
     ['Triage: is it one student or many? If it’s many, it’s the platform — <strong>report it now</strong>, with the group’s BO link','Keep the lesson alive with those who are connected, and ask the others to follow in the chat','If the lesson was lost, send the recording and put together a recovery plan (Module 3)','Demonstrate, share the project file and plan a recovery session'],
     ['Spending the whole lesson helping students one by one while the rest get bored','Doing the task for the student when the technology fails','Promising an extra lesson to the family','Rescheduling the lesson on your own']
   )}
   ${co('co-danger','2️⃣',`<p><strong>When a technical issue compromises a lesson</strong> — or two in a row — <strong>talk to your Team Leader the same day.</strong> You can request an extra lesson; your Team Leader decides. Never promise it or rule it out to the family yourself.</p>`)}
  `},
  {t:'🆘 Can’t get into Classroom: when to use Zoom', html:`
   <div class="card"><p><strong>Classroom always comes first.</strong> It’s connected to everything — payment, recordings, attendance. <strong>Zoom is used when the student or you can’t get into the lesson,</strong> so the lesson isn’t postponed.</p></div>
   ${numlist(['Use Zoom only when someone really can’t get into Classroom, after the quick fixes','<strong>Record the session</strong>','Report it the same day to your Team Leader, with a BO comment explaining what failed in Classroom'])}
   ${co('co-warn','📝',`<p><strong>It’s the exception, never the routine.</strong> A lesson moved to Zoom without a recording and a same-day report can’t be counted.</p>`)}
  `}
 ],
 ix:{
  title:'The lesson goes on',
  instr:'Pick the first action in each case. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'What’s the first action?', card:`When you share your screen, the students only see black.`, zones:[{label:'🔁 Follow the black-screen procedure and refresh the page if needed', fb:'Correct — it’s the procedure in the video. If it keeps happening, you report it with a screenshot.'},{label:'🆘 Move the lesson to Zoom right away', fb:'Not quite — an alternative platform is an exception. The Classroom fix comes first.'},{label:'⏭️ Carry on explaining without the screen', fb:'Not quite — first try the fix; if it isn’t solved in 10 minutes, you report it.'}], correctZone:0},
   {type:'sort', prompt:'What’s the first action?', card:`A student's microphone shows as on, but nobody can hear them.`, zones:[{label:'📮 Report it to tech support straight away', fb:'Not quite — first try the quick steps: rejoin and check the selected microphone.'},{label:'🔁 Ask them to rejoin and check the right microphone is selected', fb:'Correct — a microphone can look “on” and still be blocked. If it still fails, they use the chat and you report it.'},{label:'🔇 Tell them to just listen this time', fb:'Not quite — first the quick fixes, and meanwhile they can take part through the chat and reactions.'}], correctZone:1},
   {type:'sort', prompt:'What’s the first action?', card:`A student on a tablet can't share their screen.`, zones:[{label:'🔁 Ask them to try again several times', fb:'Not quite — screen sharing isn’t possible from a tablet browser.'},{label:'📝 Ask them to switch browsers on the tablet', fb:'Not quite — on a phone or tablet it isn’t possible, whatever the browser.'},{label:'💻 Explain they need a computer to share their screen, and continue the lesson another way', fb:'Correct — it’s a known limitation. Adapt the activity and, if the course requires it, report it.'}], correctZone:2},
   {type:'choice', prompt:`In a Roblox lesson, a student can't log into Roblox Studio. What do you do during the lesson?`, opts:[`Spend the lesson helping them log in while the rest of the group waits`,`Let them follow your demo and answer out loud about what's being done; after the lesson, help them fix it and ask tech support if needed`,`Tell them to skip this lesson and come back when it works`], correct:1, fb:`The student keeps learning by following your demo. You fix the access after the lesson, and ask tech support if it's still not solved.`},
   {type:'choice', prompt:`In Digital Creativity, Krita won't open on a student's computer. What's a good workaround?`, opts:[`Use an online drawing program, such as Kleki`,`Report that the student can't take the course`,`Ask the family to buy a drawing tablet`], correct:0, fb:`Any online drawing program is fine. Check the wiki / teacher notes for backups, and suggest new ones through the feedback form.`},
   {type:'choice', prompt:`Five minutes in, three students can't get in and the other two are waiting. What do you do?`, opts:[`Help each one in turn until they're all in`,`Cancel the lesson and tell the families`,`Report it now (it's the platform), carry on with the two who are connected and ask the others to follow in the chat`], correct:2, fb:`If several fail, it's the platform: report it now. Keep the lesson alive with those who are connected and prepare the recovery plan afterwards.`},
   {type:'choice', prompt:`A student still can’t get into Classroom after the quick fixes. What must you do?`, opts:[`Move the lesson to Zoom, record the session, and report it to your Team Leader the same day with a BO comment`,`Move to Zoom and keep using it for the next lessons, since it works better`,`Use Zoom without recording, since the lesson is short`], correct:0, fb:`Zoom is there so the lesson isn’t postponed — but it’s the exception: recorded, reported to your Team Leader the same day and explained in BO. Without that, the lesson can’t be counted.`}
  ]
 }
},
{id:'after', numLabel:'Module 3', emoji:'🏠', color:'#B79DF2', art:'phoneDesk', learn:[['🔍','Spot “can’t” hiding behind “doesn’t”'],['📲','Know the phone and tablet limits'],['📼','Recover a lost lesson'],['🔁','Close the loop with the family']],
 eyebrow:'Module 3 of 4',
 title:'After the Lesson',
 desc:'Homework that isn’t handed in because they can’t get in, the platform on a phone or tablet, lost lessons and how to close the loop with the family.',
 obj:'Make sure a technical issue doesn’t leave a family without homework or without an answer, and spot it before mistaking it for “not handing in”.',
 sections:[
  {t:'🔍 When they don’t hand in, maybe they can’t', html:`
   <div class="card"><p>Before thinking about lack of motivation, check whether the student <strong>can get in</strong> to do the homework. Some families have complained that they couldn't open the homework and nobody gave them an option.</p></div>
   ${co('co-idea','❓',`<p><strong>Ask before assuming:</strong> <em>"Were you able to open the homework? Which device did you try it on?"</em></p>`)}
  `},
  {t:'🩺 Symptoms after the lesson', html:`
   ${symCards([
     {ic:'🔒', title:`They can’t get into the platform to do the homework`,
      do:`Confirm the browser (desktop Chrome), the device and the login details — you can find them in BO and send them again. If nothing changes, report it in the Slack channel <em>#uk-tsm-and-tutors</em> with the BO links of the student and the group, and <strong>follow up after 24 hours</strong>.`,
      say:`<em>“I’m looking into it with my team and I’ll write to you tomorrow.”</em>`},
     {ic:'🧩', title:`The course program didn’t open during the lesson`,
      do:`After the lesson, go through the installation or login with the student (and the workaround for their course from Module 2). If it still doesn’t work, ask for tech support in the Slack channel <em>#uk-tsm-and-tutors</em>.`},
     {ic:'🎙️', title:`Their microphone or camera didn’t work`,
      do:`If rejoining and checking the device didn’t help, report it in the Slack channel <em>#uk-tsm-and-tutors</em> and ask tech support to test it with the student within the following week. Until then, the student joins with chat and reactions.`},
     {ic:'📱', title:`They can only get in from a phone and it doesn’t display well`,
      do:`The platform is designed for computers: they should use “desktop site” or a computer. Don’t promise alternative access.`,
      say:`Explain the limitation warmly: <em>“Some parts don’t display well on a phone; on a computer, or with the desktop site, it works much better.”</em>`},
     {ic:'📲', title:`The platform doesn’t fully work on a phone or tablet`,
      do:`It’s a <strong>known limitation</strong> (for example, screen sharing isn’t possible from a phone). If the course requires it, report it.`},
     {ic:'🗂️', title:`The homework doesn’t show in the notebook or dashboard`,
      do:`Report it with a screenshot.`},
     {ic:'📼', title:`They lost a lesson to a failure`,
      do:`Send the recording and the essential part, put together a recovery plan, and talk to your Team Leader the same day — you can request an extra lesson.`,
      tip:`<strong>Sync with your Team Leader before writing to the family.</strong>`}
   ])}
  `},
  {t:'🔁 Close the loop', html:`
   <div class="card"><p>When the problem is solved, <strong>let the family know</strong>. An informed parent is a parent who stays.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>💬 A closing message you can use</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>"Hi [parent's name]. I'm writing to let you know that the access problem [student] had is now fixed. Thank you for your patience. If anything happens again, write to me and we'll look into it right away."</em></p></div>
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
{id:'report', numLabel:'Module 4', emoji:'📮', color:'#F58AC4', art:'report', learn:[['🆘','Where to get help and who to contact'],['🛣️','Choose the right lane'],['📅','Extra lessons and rescheduling'],['🧾','Write a complete report'],['💛','Reply to the family on time'],['🖥️','Practise in a BO simulation']],
 eyebrow:'Module 4 of 4',
 title:'Report and Escalate',
 desc:'Where to get help and who to contact in your region, who to tell depending on the problem, extra lessons and rescheduling, what a good report includes, how to answer the family on time, and a BO simulation to practise a technical report.',
 obj:'Know where to get help, who to tell, with what details and in what order — and keep the family informed on time. A problem that isn’t reported, or a family that isn’t answered, doesn’t exist for anyone else.',
 sections:[
  {t:'🆘 Where to get help and who to contact', html:`
   <div class="card"><p>When you can’t solve a technical issue yourself, write in the Slack channel <em>#uk-tsm-and-tutors</em>. TSMs (tech support managers) and tutors share it.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>👥 Who to contact</h4>
   <div class="tbl-wrap"><table>
    <tr><th>What happened</th><th>Who</th></tr>
    <tr><td>A technical issue you can’t solve (Classroom, links, platforms)</td><td>The Slack channel <em>#uk-tsm-and-tutors</em></td></tr>
    <tr><td>Missing lesson credits, a wrong schedule, an unfair lesson deduction</td><td>Your Team Leader + Client Service + BO comment (Operations: <strong>@Azzura Muzdalifa</strong>)</td></tr>
    <tr><td>An extra lesson, or a lesson that can’t take place</td><td>Your Team Leader</td></tr>
   </table></div></div>
  `},
  {t:'🛣️ Three lanes', html:`
   <div class="card"><p>Depending on the type of problem, the report goes down a different lane:</p>
   <div class="tbl-wrap"><table>
    <tr><th>Lane</th><th>When</th><th>Where</th></tr>
    <tr><td><strong>1. Classroom or platform failure</strong><br>(can’t get in / join button missing, black screen, audio, whiteboard, rooms, broken links)</td><td>The quick fixes didn't solve it</td><td>The Slack channel <em>#uk-tsm-and-tutors</em> + BO comment</td></tr>
    <tr><td><strong>2. Account and Operations</strong><br>(enrolment, credentials, schedule, licences, lesson credits, deductions)</td><td>The student can't get in because of an account problem: isn't registered, credentials don't work, the schedule is wrong, or lessons were deducted unfairly</td><td>Team Leader + Client Service + BO comment (Operations: @Azzura Muzdalifa)</td></tr>
    <tr><td><strong>3. Lost lesson</strong><br>(one or more lessons compromised)</td><td>Because of a platform failure, a cancellation or an absence</td><td><strong>Team Leader the same day</strong> (you can request an extra lesson) + Client Service if the family is upset + BO comment</td></tr>
   </table></div></div>
  `},
  {t:'📅 Extra lessons and rescheduling', html:`
   ${iconGrid([
     {ic:'➕', html:`<strong>Extra lesson: you request it, your Team Leader decides.</strong> You can request one when an issue could make the student leave — such as a technical problem — or to help a student catch up on the material.`},
     {ic:'🚫', html:`<strong>Never offer an extra lesson to the family</strong> before your Team Leader has approved it.`},
     {ic:'🎥', html:`<strong>Someone can’t get in?</strong> Zoom (recorded) is there precisely so the lesson isn’t postponed.`},
     {ic:'🕒', html:`<strong>You don’t reschedule a lesson on your own.</strong> If there’s really no way to give it, talk to your Team Leader.`}
   ])}
  `},
  {t:'🧾 What a report includes', html:`
   ${numlist([
     '<strong>BO links</strong> of the group and the student (mandatory)',
     'Was a <strong>banner</strong> shown to the student? What did it say?',
     '<strong>Warnings on the pre-join screen</strong> (for example, unsupported requirements)',
     '<strong>Type of error:</strong> black screen, no sound, can’t get in, program won’t open…',
     '<strong>Screenshot</strong>',
     'Device, operating system, browser and, if relevant, <strong>whether they use a VPN</strong> and from which country',
     'What you tried and for how long',
     'If an alternative platform was used: <strong>the recording</strong>'
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 What a useful BO comment looks like — copy and fill in</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Lesson:</strong> [date] · <strong>Group:</strong> [BO link] · <strong>Student:</strong> [BO link]<br>
   <strong>What failed:</strong> [e.g. couldn't get into the lesson; black screen when sharing]<br>
   <strong>Banner or message:</strong> [exact text, or "none"] · <strong>Pre-join warnings:</strong> [yes / no, which]<br>
   <strong>Device:</strong> [device, system, browser, VPN yes / no and country]<br>
   <strong>What I tried:</strong> [e.g. refresh, rejoin, closed apps, older Blender version — 10 minutes]<br>
   <strong>How the lesson continued:</strong> [e.g. followed my demo; alternative platform, recorded]<br>
   <strong>Screenshot:</strong> [attached] · <strong>Family's words:</strong> [word for word, if any]</p></div>
  `},
  {t:'🖥️ Practise: report a technical issue in BO', html:`
   <div class="card"><p>Now do it for real, in a replica of the Back Office. <strong>A student couldn’t get into today’s lesson because of a technical problem.</strong> Follow the 4-step walkthrough. In <strong>step 4</strong> choose the Problem Kind <strong>“Technical issue, please, get in touch with the student”</strong> and write your comment with the facts: what failed, when, the message or banner, what you tried and the family’s own words.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Report a technical issue</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Report a technical issue" loading="lazy"></iframe></div></div>
   ${co('co-idea','📝',`<p><strong>Use the template above.</strong> The more complete your comment is, the faster someone can get in touch with the family.</p>`)}
  `},
  {t:'🔢 The order matters', html:`
   ${iconGrid([
     {ic:'👥', html:`<strong>Team first, family second.</strong> When the problem involves more than your teaching (access, schedule, credits, a lost lesson), don't write anything else to the family before talking to your Team Leader. The exception: you can <strong>always acknowledge right away</strong> with a short message (<em>“I’m here and looking into it”</em>). Options, explanations, compensation or an extra lesson only come after you’ve talked to your Team Leader.`},
     {ic:'🎓', html:`<strong>You talk about the learning; you hand over the action.</strong> You can say what you tried in the lesson and that you're looking into it. The options (extra lesson, group or course change, compensation) come from your Team Leader and Client Service.`},
     {ic:'⚖️', html:`<strong>Never promise and never refuse.</strong> Neither <em>"we'll give you an extra lesson"</em> nor <em>"that's not possible"</em>. Do show that you care and that you're already on it.`},
     {ic:'📅', html:`<strong>Escalate once and follow up.</strong> Put a reminder in your calendar to follow up after 24 hours.`}
   ])}
   ${co('co-ok','💬',`<p><strong>A message you can send</strong> (once agreed with your Team Leader): <em>"Hi [parent's name]. I saw that [student] couldn't get into the lesson today. I've already reported it to my team with all the details, and Client Service will get in touch with you. In the meantime, I'm sending you the recording so nothing we covered is lost."</em></p>`)}
  `},
  {t:'💛 Reply on time: families notice your effort', html:`
   <div class="card"><p>A technical failure is rarely the only reason a family leaves. What decides it is what happens <strong>next</strong>: does someone answer, does the child get back in, does the family feel that somebody cares? When parents see that you are working so that everything runs — you reply quickly, you follow up, you make sure their child gets the best possible lesson — they notice. That effort is what makes many families <strong>give us a second chance</strong>. Silence tells them the opposite.</p></div>
   ${co('co-danger','🚨',`<p><strong>Don’t treat a technical problem as a small thing.</strong> For you it may be a black screen. For the family it’s a lesson they paid for, a disappointed child and a doubt: <em>“is this worth it?”</em> Take it seriously, even if it only lasted five minutes — and especially if the family has already shown they’re upset.</p>`)}
   ${rclock([
     {ic:'👀', when:'Right away', t:'Seen it, on it', d:'Acknowledge their message straight away, even if you don’t have the answer yet.'},
     {ic:'📮', when:'Same day', t:'Report and sync', d:'BO comment with all the details, Team Leader informed, and agree what you’ll tell the family.'},
     {ic:'💬', when:'Same day', t:'Update the family', d:'Tell them what you’ve done and when you’ll write next — and do it, even if there’s no news.'},
     {ic:'🚪', when:'Next lesson', t:'Make it work', d:'Join early, test everything and check that the student gets in. Then close the loop.'}
   ])}
   ${co('co-ok','💬',`<p><strong>Acknowledging is always allowed.</strong> A short, warm message — you’ve seen it, you care, you’re on it and when you’ll write again — needs nobody’s approval. What waits for your Team Leader is any explanation, any option and anything about compensation.</p>`)}
   ${chatMock({
     name:'Parent', sub:'online', avatar:'👩', time:'18:02',
     msgs:[`Good evening. This is the <strong>second time</strong> my son can’t get into the lesson. We’re paying for classes he isn’t getting and he’s very disappointed. What is going on??`],
     title:'How do you reply?',
     text:'It’s 6 pm. You’ve just seen the message and you haven’t talked to your Team Leader yet. Tap each reply to see what happens.',
     opts:[
      {t:`“Good evening! Classroom usually works fine, it’s probably your internet. Try another browser.”`, ok:false, fb:`You’ve blamed the family and the platform at the same time, and shown no sign that you care. The parent will read it as “not my problem”.`},
      {t:`“I’m very sorry — two lessons lost is not okay, and I understand how disappointed he must be. I’ve seen your message and I’m on it: I’m reporting it with all the details to my team today. I’ll write to you again tomorrow morning with news, and I’ll join early next lesson to make sure he gets in.”`, ok:true, fb:`This is the one. It acknowledges the problem and the feeling, shows concrete effort, says when you’ll write again and promises nothing that isn’t yours to decide.`},
      {t:`“Don’t worry, I’ll give him a free extra lesson to make up for it!”`, ok:false, fb:`Kind, but it isn’t yours to promise: extra lessons and compensation are decided with your Team Leader and Client Service. If it then can’t happen, the family loses trust again.`},
      {t:`I’ll reply tomorrow, once I have the full answer.`, reply:`<i>(no reply tonight…)</i>`, ok:false, fb:`Silence is the worst option. The parent is already upset; every hour without an answer confirms that nobody cares. Always acknowledge right away.`}
     ]
   })}
   ${co('co-star','🌟',`<p><strong>Remember:</strong> a technical failure can be forgiven. Feeling ignored is much harder to forgive. Your reply, your follow-up and your effort so that the student recovers access and has the best possible lesson are what many families see — and why they decide to stay.</p>`)}
  `}
 ],
 ix:{
  title:'Report well, and in order',
  instr:'Pick the lane, the best comment and what you would say. 70% to complete this module.',
  items:[
   {type:'sort', prompt:'Which lane does this report go down?', card:`A family says two lessons were deducted from their package, but only one took place.`, zones:[{label:'1️⃣ Classroom or platform failure', fb:'Not quite — nothing failed in Classroom; it’s about lesson credits.'},{label:'2️⃣ Account and Operations', fb:'Correct — credits and deductions go to your Team Leader and Client Service, with a BO comment. Operations reviews it.'},{label:'3️⃣ Lost lesson', fb:'Not quite — the lesson wasn’t lost to a failure; it’s a question of credits.'}], correctZone:1},
   {type:'sort', prompt:'Which lane does this report go down?', card:`The whiteboard stays visible after closing it, and leaving and joining again doesn't fix it.`, zones:[{label:'1️⃣ Classroom or platform failure', fb:'Correct — the quick fixes didn’t solve it: report it (Slack channel #uk-tsm-and-tutors) with a BO comment.'},{label:'2️⃣ Account and Operations', fb:'Not quite — it has nothing to do with the student’s account.'},{label:'3️⃣ Lost lesson', fb:'Not quite — the lesson went on; it’s a Classroom failure.'}], correctZone:0},
   {type:'choice', prompt:`Which is the best BO comment for the same case?`, opts:[`"Couldn't get in, bad connection."`,`"3/11, lesson 2. Couldn't get in: banner 'System not supported' on the pre-join screen. Windows 7, Chrome up to date. Tried refreshing and rejoining, 10 min; followed my demo for the rest of the lesson. Screenshot attached. BO links of the group and the student."`,`"The platform isn't working again, this always happens."`], correct:1, fb:`The useful comment is complete and neutral: date, what failed, the banner, the device, what you tried, how the lesson continued, the screenshot and the BO links.`},
   {type:'choice', prompt:`A student lost a lesson to a platform failure, and the family is unhappy. What comes first?`, opts:[`Write to the family and offer an extra lesson`,`Wait and see if the next lesson works`,`Talk to your Team Leader the same day, request an extra lesson and agree with them on the message to the family`], correct:2, fb:`Team first, family second. You can request the extra lesson; your Team Leader decides, and only then does the family hear about it.`},
   {type:'choice', prompt:`A student missed most of a lesson because of a technical issue and is now behind the group. What can you do?`, opts:[`Promise the family a free extra lesson`,`Request an extra lesson from your Team Leader — it’s there for issues that could make a student leave, or to help them catch up`,`Nothing — the student will catch up on their own`], correct:1, fb:`You can request it; your Team Leader decides. The family only hears about it once it’s approved.`},
   {type:'choice', prompt:`A parent writes, upset: “This is the second time my son couldn’t get in.” It’s 6 pm and you haven’t talked to your Team Leader yet. What do you do first?`, opts:[`Wait until tomorrow, talk to your Team Leader and reply once with all the answers`,`Reply now, briefly: you’re sorry, you’ve seen it, you’re on it and you’ll write again with news — then sync with your Team Leader`,`Explain how Classroom works so they understand it’s rarely the platform’s fault`], correct:1, fb:`Acknowledging is always allowed, and silence does more damage than the failure itself. Reply now with warmth and a time for the next update; the explanations and options wait for your Team Leader.`}
  ]
 }
},
{id:'checklist', numLabel:'Final checklist', emoji:'✅', color:'#FFD34D', art:'shield', learn:[['🛟','If a refund request exists'],['🧭','Before · during · after']],
 eyebrow:'Final checklist',
 title:'Final Checklist',
 desc:'No test here — just the essentials of this mini-training, before, during and after the lesson.',
 obj:'Go through the checklist below. This module isn’t graded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a BO comment the same day I found out about the request, with dates, what failed, the message or banner, what I tried and a screenshot, and I told my Team Leader',
     'My next lesson with this student was technically failure-proof: 15 minutes early, other apps closed, a plan B, specific attention and a visible win',
     'I never confirmed an approval, never talked about amounts and never blamed the platform — I used the one safe line'
   ])}
  `},
  {t:'🧭 Before, during and after', html:`
   ${tabsBlock([
     {ic:'🧰', title:'Before', html:`<div class="card">${numlist(['Desktop Chrome, up to date, other apps closed','Microphone, camera and screen tested','BO: group, student list and link','Pre-join warnings','🟡 / 🔴 course: computer checked before lesson 1','In lesson 1, I join early'])}</div>`},
     {ic:'🛠️', title:'During', html:`<div class="card">${numlist(['Calm first','Refresh, rejoin, close apps, check the device','10 minutes, then I escalate in the Slack channel #uk-tsm-and-tutors','No course tool? Demo + verbal answers, or the course backup','Zoom only when someone can’t get in: recorded and reported the same day','If many are affected, I report it now','I don’t do the task for the student'])}</div>`},
     {ic:'🏠', title:'After', html:`<div class="card">${numlist(['Can they get into the homework?','Help with the program after the lesson','Recording, recovery plan and, if needed, an extra lesson requested from my Team Leader','Same-day report with complete details','I answer the family on time and keep them updated, even with no news','Follow-up after 24 hours','I close the loop with the family'])}</div>`}
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
