(() => {
"use strict";
let language = "en";
const $ = id => document.getElementById(id);
const text = (en, om) => language === "en" ? en : om;
function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-om]").forEach(el => {
    const value = el.dataset[lang];
    if (value !== undefined) el.textContent = value;
  });
  $("languageBtn").textContent = lang === "en" ? "Afaan Oromoo" : "English";
  drawProjectile(); drawOptics(); drawLens(); renderQuiz();
}
$("languageBtn").addEventListener("click", () => setLanguage(language === "en" ? "om" : "en"));
function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === id));
  document.querySelectorAll("[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === id));
  if (id === "kinematics") drawProjectile();
  if (id === "optics") drawOptics();
  if (id === "lens") drawLens();
  window.scrollTo({top:0, behavior:"smooth"});
}
document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => showView(b.dataset.go)));
function ctxFor(id) { const c=$(id); const ctx=c.getContext("2d"); return {c,ctx,w:c.width,h:c.height}; }
function line(ctx,x1,y1,x2,y2,color="#82958c",width=1,dash=[]) {ctx.beginPath();ctx.setLineDash(dash);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.setLineDash([]);}
function arrow(ctx,x1,y1,x2,y2,color,width=3) {line(ctx,x1,y1,x2,y2,color,width);const a=Math.atan2(y2-y1,x2-x1),s=10;ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-s*Math.cos(a-.45),y2-s*Math.sin(a-.45));ctx.lineTo(x2-s*Math.cos(a+.45),y2-s*Math.sin(a+.45));ctx.closePath();ctx.fill();}
function label(ctx,str,x,y,color="#28483e",font="13px system-ui") {ctx.fillStyle=color;ctx.font=font;ctx.fillText(str,x,y);}
function roundedBackground(ctx,w,h) {ctx.fillStyle="#f8faf6";ctx.fillRect(0,0,w,h);}
const fmt=(n,d=1)=>Number.isFinite(n)?n.toFixed(d):"—";
["speed","angle","height","gravity"].forEach(id=>$(id).addEventListener("input",drawProjectile));
$("resetProjectile").addEventListener("click",()=>{ $("speed").value=20;$("angle").value=45;$("height").value=0;$("gravity").value=9.8;drawProjectile();});
function drawProjectile(){
 const {ctx,w,h}=ctxFor("projectileCanvas");roundedBackground(ctx,w,h);
 const v=+$("speed").value,a=+$("angle").value*Math.PI/180,h0=+$("height").value,g=+$("gravity").value;
 $("speedOut").textContent=v+" m/s";$("angleOut").textContent=$("angle").value+"°";$("heightOut").textContent=h0+" m";$("gravityOut").textContent=fmt(g,1)+" m/s²";
 const vy=v*Math.sin(a),vx=v*Math.cos(a),t=(vy+Math.sqrt(vy*vy+2*g*h0))/g,range=vx*t,maxH=h0+vy*vy/(2*g);
 $("rangeVal").textContent=fmt(range,1)+" m";$("maxHeightVal").textContent=fmt(maxH,1)+" m";$("flightVal").textContent=fmt(t,2)+" s";
 const left=48,right=24,top=28,bottom=45,plotW=w-left-right,plotH=h-top-bottom;
 const xmax=Math.max(10,range*1.12), ymax=Math.max(5,maxH*1.25), X=x=>left+x/xmax*plotW,Y=y=>h-bottom-y/ymax*plotH;
 ctx.strokeStyle="#e2eae0";ctx.lineWidth=1;
 for(let i=0;i<=5;i++){let x=left+i*plotW/5;line(ctx,x,top,x,h-bottom,"#e2eae0");label(ctx,fmt(i*xmax/5,0),x-8,h-19,"#6b7d73","11px system-ui");}
 for(let i=0;i<=4;i++){let y=top+i*plotH/4;line(ctx,left,y,w-right,y,"#e2eae0");label(ctx,fmt((4-i)*ymax/4,0),7,y+4,"#6b7d73","11px system-ui");}
 line(ctx,left,Y(0),w-right,Y(0),"#657b70",2);
 ctx.beginPath();ctx.strokeStyle="#1e8065";ctx.lineWidth=3;
 for(let i=0;i<=200;i++){let tt=t*i/200,x=vx*tt,y=h0+vy*tt-.5*g*tt*tt;if(i===0)ctx.moveTo(X(x),Y(y));else ctx.lineTo(X(x),Y(y));}ctx.stroke();
 const sx=X(0),sy=Y(h0);ctx.fillStyle="#f2a65a";ctx.beginPath();ctx.arc(sx,sy,6,0,Math.PI*2);ctx.fill();
 const tm=t*.5,px=X(vx*tm),py=Y(h0+vy*tm-.5*g*tm*tm);ctx.fillStyle="#1e8065";ctx.beginPath();ctx.arc(px,py,5,0,Math.PI*2);ctx.fill();
 label(ctx,text("Trajectory (ideal model)","Daandii (moodeela salphaa)"),left+9,19,"#174c40","bold 13px system-ui");
 $("kinNote").textContent = h0===0 && Math.abs(a-Math.PI/4)<.03 ? text("At 45° from level ground, range is maximum for a fixed launch speed in this ideal model.","Koonaa 45° fi lafa walqixa irratti, saffisa jalqabaa murtaaʼeef fageenyi guddaan argama.") : text("Compare the curve after changing one control. The maximum height and flight time depend on both the vertical launch component and gravity.","Tooʼannoo tokko jijjiirtee sarara madaali. Olkaʼiinsi guddaan fi yeroo balaliʼinsaa qaama saffisa ol-gadii fi harkisa lafaa irratti hundaaʼu.");
}
["incident","n1","n2"].forEach(id=>$(id).addEventListener("input",drawOptics));
function drawOptics(){
 const {ctx,w,h}=ctxFor("opticsCanvas");roundedBackground(ctx,w,h);
 const a=+$("incident").value*Math.PI/180,n1=+$("n1").value,n2=+$("n2").value;
 $("incidentOut").textContent=$("incident").value+"°";$("n1Out").textContent=fmt(n1,2);$("n2Out").textContent=fmt(n2,2);
 const cx=w/2,cy=h/2;
 ctx.fillStyle="#eaf3fa";ctx.fillRect(0,0,w,cy);ctx.fillStyle="#e4f0e8";ctx.fillRect(0,cy,w,h-cy);
 line(ctx,0,cy,w,cy,"#6f897b",2);line(ctx,cx,20,cx,h-20,"#8d9d93",1,[6,5]);
 label(ctx,text("Medium 1","Miidiyaa 1"),18,27,"#456f87","bold 13px system-ui");label(ctx,text("Medium 2","Miidiyaa 2"),18,h-17,"#47745b","bold 13px system-ui");label(ctx,text("normal","sarara dhaabbataa"),cx+8,cy-10,"#62756b","12px system-ui");
 const L=180,ix=cx-L*Math.sin(a),iy=cy-L*Math.cos(a);arrow(ctx,ix,iy,cx,cy,"#d78335",4);
 const sinB=n1/n2*Math.sin(a);let isTIR=sinB>1 && n1>n2;
 if(isTIR){
  const rx=cx+L*Math.sin(a),ry=cy-L*Math.cos(a);arrow(ctx,cx,cy,rx,ry,"#d78335",4);
 }else{
  const b=Math.asin(Math.max(-1,Math.min(1,sinB))),rx=cx+L*Math.sin(b),ry=cy+L*Math.cos(b);arrow(ctx,cx,cy,rx,ry,"#237db3",4);
 }
 ctx.fillStyle="#174c40";ctx.beginPath();ctx.arc(cx,cy,5,0,Math.PI*2);ctx.fill();
 const critical=n1>n2?Math.asin(n2/n1)*180/Math.PI:null;
 if(critical!==null){
   $("criticalFormula").textContent=text("Critical angle: θc = "+fmt(critical,1)+"°","Koonaa murteessaa: θc = "+fmt(critical,1)+"°");
 }else $("criticalFormula").textContent=text("No critical angle for light travelling from n₁ to n₂ here (n₁ ≤ n₂).","Ifni n₁ irraa gara n₂ yeroo darbu koonaan murteessaan hin jiru (n₁ ≤ n₂).");
 if(isTIR){$("opticsResult").textContent=text("Total internal reflection","Calaqqee guutuu keessaa");$("refractedAngle").textContent=text("No transmitted ray: θ₁ exceeds θc","Raayiin hin darbu: θ₁ koonaa θc caala");$("opticsNote").textContent=text("Total internal reflection occurs because n₁ > n₂ and the incident angle is greater than the critical angle.","Calaqqeen guutuu keessaa kan uumamu n₁ > n₂ fi koonaan seensaa koonaa murteessaa caaluu isaati.");}
 else {const b=Math.asin(Math.max(-1,Math.min(1,sinB)))*180/Math.PI;$("opticsResult").textContent=text("Refraction","Cabinsa ifaa");$("refractedAngle").textContent="θ₂ = "+fmt(b,1)+"°";$("opticsNote").textContent=n1<n2?text("The ray bends toward the normal when it enters the higher-index medium.","Raayiin miidiyaa indeeksii guddaa qabu seenuun gara sarara dhaabbataatti deebi'a."):n1>n2?text("The ray bends away from the normal when it enters the lower-index medium.","Raayiin miidiyaa indeeksii xiqqaa qabu seenuun sarara dhaabbataa irraa fagaata."):text("Because the refractive indices are equal, the ray continues without changing direction.","Indeeksiin cabinsaa walqixa waan ta'eef raayiin kallattii isaa hin jijjiiru.");}
 label(ctx,text("Incident ray","Raayii seensaa"),Math.max(8,ix-8),Math.max(18,iy-8),"#a86120","12px system-ui");label(ctx,isTIR?text("Reflected ray","Raayii calaqqisu"):text("Refracted ray","Raayii cabu"),cx+18,cy+(isTIR?-75:90),isTIR?"#a86120":"#237db3","12px system-ui");
}
["objectDistance","focalLength","objectHeight"].forEach(id=>$(id).addEventListener("input",drawLens));
function drawLens(){
 const {ctx,w,h}=ctxFor("lensCanvas");roundedBackground(ctx,w,h);
 const do_=+$("objectDistance").value,f=+$("focalLength").value,ho=+$("objectHeight").value;
 const di=1/(1/f-1/do_),m=-di/do_,hi=m*ho;
 $("objectDistanceOut").textContent=do_+" cm";$("focalLengthOut").textContent=f+" cm";$("objectHeightOut").textContent=ho+" cm";
 $("imageDistanceVal").textContent=Number.isFinite(di)?fmt(di,1)+" cm":"∞";
 $("imageType").textContent=do_>f?text("Real, inverted","Dhugaa, garagalchaa"):text("Virtual, upright","Yaadaa, sirrii");
 $("magnificationVal").textContent=Number.isFinite(m)?fmt(m,2)+"×":"∞";
 $("imageHeightVal").textContent=text("Image height: ","Olka'iinsa suuraa: ")+(Number.isFinite(hi)?fmt(hi,1)+" cm":"∞");
 const cx=w*.51,cy=h*.62,scale=Math.min((w-100)/Math.max(120,do_+Math.min(100,Math.abs(di)*.45)),2.6);
 const X=d=>cx+d*scale,Y=hh=>cy-hh*scale*8;
 line(ctx,25,cy,w-25,cy,"#60766b",2);
 // Lens symbol
 line(ctx,cx,45,cx,h-42,"#3583ad",4);arrow(ctx,cx,45,cx,62,"#3583ad",2);arrow(ctx,cx,h-42,cx,h-59,"#3583ad",2);
 label(ctx,text("Lens","Leensii"),cx+9,35,"#237db3","bold 13px system-ui");
 const fpx=f*scale;line(ctx,cx-fpx,cy-10,cx-fpx,cy+10,"#a3b1a7",2);line(ctx,cx+fpx,cy-10,cx+fpx,cy+10,"#a3b1a7",2);label(ctx,"F",cx-fpx-4,cy+25);label(ctx,"F",cx+fpx-4,cy+25);
 const ox=cx-do_*scale,oy=Y(ho);arrow(ctx,ox,cy,ox,oy,"#d78335",3);label(ctx,text("Object","Wanta"),Math.max(5,ox-20),oy-12,"#a86120","12px system-ui");
 if(Number.isFinite(di)&&Math.abs(di)<160){
   const ix=cx+di*scale,iy=Y(hi);
   if(ix>15&&ix<w-15&&iy>15&&iy<h-15){arrow(ctx,ix,cy,ix,iy,di>0?"#1e8065":"#9667bb",3);label(ctx,text("Image","Suuraa"),Math.min(w-60,ix+7),iy-10,di>0?"#1e8065":"#9667bb","12px system-ui");
    // principal rays, clipped visually to the diagram
    line(ctx,ox,oy,cx,oy,"#d7833580",1,[5,4]);line(ctx,cx,oy,ix,iy,"#1e806580",1,[5,4]);
   }
 }
 $("lensNote").textContent=Math.abs(do_-2*f)<1?text("At dₒ = 2f, the image forms at 2f on the other side and is the same size, real and inverted.","dₒ = 2f yeroo ta'u, suuraan gama biraatti 2f irratti uumama; guddinni walqixa, dhugaa fi garagalchaa dha."):do_>f?text("The object is beyond the focal point, so the ideal converging lens forms a real, inverted image.","Wantichi fookasii irraa fagoo jira; kanaaf leensiin walitti qabu suuraa dhugaa fi garagalchaa uuma."):text("The object is inside the focal length, so the image is virtual and upright on the object side.","Wantichi dheerina fookasii keessaa jira; kanaaf suuraan yaadaa fi sirrii ta'ee gama wantaa irratti uumama.");
}
const questions=[
 {en:"A ball is launched at 20 m/s at 30° above level ground. Ignoring air resistance, which component of its initial velocity is horizontal?",om:"Kubbiin 20 m/s fi koonaa 30° irratti lafa walqixa irraa darbatame. Mormii qilleensaa yoo dhiifne, qaamni saffisa jalqabaa dalgee kam?",opts:[["20 sin 30°","20 sin 30°"],["20 cos 30°","20 cos 30°"],["20 tan 30°","20 tan 30°"],["20 / cos 30°","20 / cos 30°"]],a:1,why:"The horizontal component is vₓ = v₀ cos θ, so it is 20 cos 30° ≈ 17.3 m/s."},
 {en:"Light travels from glass (n = 1.50) into air (n = 1.00). Approximately what is the critical angle?",om:"Ifni galaasa (n = 1.50) keessaa gara qilleensaatti (n = 1.00) darba. Koonaan murteessaan tilmaamaan meeqa?",opts:[["19.5°","19.5°"],["30.0°","30.0°"],["41.8°","41.8°"],["48.2°","48.2°"]],a:2,why:"sin θc = n₂/n₁ = 1.00/1.50, so θc ≈ 41.8°."},
 {en:"A converging lens has focal length 10 cm. An object is 30 cm away. Using 1/f = 1/do + 1/di, where is the image?",om:"Leensiin walitti qabuu dheerina fookasii 10 cm qaba. Wantichi 30 cm irraa jira. 1/f = 1/do + 1/di fayyadamuun suuraan eessa jira?",opts:[["7.5 cm","7.5 cm"],["10 cm","10 cm"],["15 cm","15 cm"],["30 cm","30 cm"]],a:2,why:"1/di = 1/10 − 1/30 = 2/30 = 1/15, so di = 15 cm."},
 {en:"Which condition is necessary for total internal reflection?",om:"Calaqqee guutuu keessaa uumamuuf haalli barbaachisaan kam?",opts:[["Light goes from lower n to higher n","Ifni n xiqqaa irraa gara n guddaatti darba"],["Incident angle is always 0°","Koonaan seensaa yeroo hunda 0°"],["Light goes from higher n to lower n and exceeds the critical angle","Ifni n guddaa irraa gara n xiqqaatti darba; koonaan koonaa murteessaa caala"],["The two media have equal refractive indices","Miidiyaawwan lamaan indeeksii walqixa qabu"]],a:2,why:"Both conditions matter: n₁ > n₂, and θ₁ must be greater than θc."},
 {en:"A projectile is launched and lands at its original height. Ignoring air resistance, which launch angle gives the greatest horizontal range for a fixed speed?",om:"Wanti tokko darbatamee olka'iinsa jalqabaa irratti bu'a. Mormii qilleensaa yoo dhiifne, saffisa murtaa'eef koonaan fageenya dalgee guddaa kennu kam?",opts:[["15°","15°"],["30°","30°"],["45°","45°"],["75°","75°"]],a:2,why:"For equal launch and landing heights, R = v₀² sin(2θ)/g. This is greatest when sin(2θ) = 1, so θ = 45°."}
];
let selected={};
function renderQuiz(){
 const box=$("quizContainer");box.innerHTML="";
 questions.forEach((q,i)=>{
  const el=document.createElement("div");el.className="quizq";
  const p=document.createElement("p");p.textContent=(i+1)+". "+q[language];el.appendChild(p);
  const answers=document.createElement("div");answers.className="answers";
  q.opts.forEach((op,j)=>{const b=document.createElement("button");b.textContent=String.fromCharCode(65+j)+". "+op[language === "en" ? 0 : 1];if(selected[i]!==undefined){if(j===q.a)b.classList.add("correct");else if(selected[i]===j)b.classList.add("wrong");b.disabled=true;}b.addEventListener("click",()=>{selected[i]=j;renderQuiz();});answers.appendChild(b);});
  el.appendChild(answers);
  const f=document.createElement("div");f.className="feedback";
  if(selected[i]!==undefined)f.textContent=(selected[i]===q.a?text("Correct. ","Sirrii. "):text("Not quite. ","Sirrii miti. "))+q.why;
  el.appendChild(f);box.appendChild(el);
 });
 const score=questions.filter((q,i)=>selected[i]===q.a).length;
 $("scorePill").textContent=text("Score: ","Qabxii: ")+score+" / "+questions.length;
}
$("resetQuiz").addEventListener("click",()=>{selected={};renderQuiz();});
renderQuiz();
drawProjectile();drawOptics();drawLens();
})();
