
(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var IMG='https://images.unsplash.com/';function P(n){return /^(https?:|data:)/.test(n)?n:'images/'+n+'.jpg'}
var TEL='+254712345678';
/* Safety net: one broken section can never blank the rest of the page */
function safe(f){try{f()}catch(e){if(window.console)console.error(e)}}
['NAV','Q','S','M','B','E','T','SER','GAL','LD','NW','IV','FQ'].forEach(function(k){if(typeof window[k]==='undefined')window[k]=[]});
if(typeof window.YT==='undefined')window.YT='#';
if(typeof window.WA==='undefined')window.WA='https://wa.me/254723456789?text=';
if(typeof window.MAPS==='undefined')window.MAPS='https://maps.google.com/search/';
if(typeof window.FB==='undefined')window.FB={};
if(typeof window.PAY==='undefined')window.PAY={};

/* render */
safe(function(){$('#nav').innerHTML=NAV.map(function(n){return'<li><a href="#'+n[0]+'">'+n[1]+'</a></li>'}).join('')+'<li><button class="btn btn-give" data-give>♥ Donate</button></li>';});
safe(function(){$('#menuLinks').innerHTML=NAV.map(function(n,i){return'<a class="ml" style="--i:'+i+'" href="#'+n[0]+'">'+n[1]+'</a>'}).join('');});
function rQuick(){$('#quick').innerHTML=Q.map(function(q){return'<button class="qitem rv" data-svc="'+q[2]+'"><h3>'+q[0]+'</h3><p>'+q[1]+'</p></button>'}).join('');}safe(rQuick);
function rSvc(){$('#svc').innerHTML=S.map(function(s,i){return'<button class="card svc rv" style="--d:'+(i%3)*.1+'s" data-svc="'+i+'"><div class="body"><div class="ico">'+s[0]+'</div><h3>'+s[1]+'</h3><div class="time">'+s[2]+'</div><p>'+s[3].split('. ')[0].replace(/\.$/,'')+'.</p><span class="more">Details</span></div></button>'}).join('');}safe(rSvc);
function rMin(){$('#min').innerHTML=M.map(function(m,i){return'<button class="card rv" style="--d:'+(i%3)*.1+'s" data-min="'+i+'"><div class="img"><img loading="lazy" src="'+P(m[0])+'" alt="'+m[1]+'"></div><div class="body"><h3>'+m[1]+'</h3><p>'+m[2]+'</p><span class="more">'+m[3]+'</span></div></button>'}).join('');}safe(rMin);
function rBra(){$('#bra').innerHTML=B.map(function(b,i){return'<button class="card bra rv" style="--d:'+(i%4)*.08+'s" data-bra="'+i+'"><div class="body"><h3>'+b[0]+'</h3><p>'+b[1]+'</p><span class="more">Visit &amp; directions</span></div></button>'}).join('');}safe(rBra);
function rEvt(){var g=$('#evt');if(!E.length){g.innerHTML='<p class="ss" style="grid-column:1/-1;margin:0">No upcoming events right now. Please check back soon.</p>';return}g.innerHTML=E.map(function(e,i){return'<button class="card ev rv" style="--d:'+(i%4)*.08+'s" data-evt="'+i+'"><div class="date"><span>'+e[0]+'</span><b>'+e[1]+'</b></div><div class="body"><h3>'+e[2]+'</h3><div class="t">'+e[3]+'</div><p>'+e[4].split('. ')[0].replace(/\.$/,'')+'.</p><span class="more">Event details</span></div></button>'}).join('');;observeRV()}safe(rEvt);
function rTl(){$('#tl').innerHTML=T.map(function(t){return'<div class="ti rv"><div class="ty">'+t[0]+'</div><div class="tc"><b>'+t[1]+'</b><h3>'+t[2]+'</h3><p>'+t[3]+'</p></div></div>'}).join('');}safe(rTl);
var FMIN=['Healing & Prayer','Sabbath Worship','Youth Ministry',"Women's Fellowship",'Community Care','Family Ministry'];
function rFmin(){$('#fmin').innerHTML=FMIN.map(function(x){return'<li><a href="#ministries">'+x+'</a></li>'}).join('');}safe(rFmin);
safe(function(){$('#yr').textContent=new Date().getFullYear();});

/* overlay engine */
var ov=$('#ov'),dlg=$('#dlg'),dc=$('#dc'),last=null,toastT;
function openOv(html){last=document.activeElement;dc.innerHTML=html;ov.classList.add('open');ov.setAttribute('aria-hidden','false');document.body.classList.add('lock');setTimeout(function(){dlg.focus()},50)}
function closeOv(){setTimeout(function(){if(!ov.classList.contains('open'))dc.innerHTML=''},450);ov.classList.remove('open');ov.setAttribute('aria-hidden','true');if(!$('#menu').classList.contains('open'))document.body.classList.remove('lock');if(last&&last.focus)last.focus()}
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('on')},2200)}
function head(k,t){return'<div class="k">'+k+'</div><h2 id="dt">'+t+'</h2>'}
function row(l,v){return'<div class="row"><div><small>'+l+'</small><strong>'+v+'</strong></div><button class="cp" data-copy="'+v.replace(/"/g,'&quot;')+'">Copy</button></div>'}
function visitBtns(){return'<div class="acts"><a class="btn btn-primary" href="#contact" data-close>Plan Your Visit</a><button class="btn btn-outline" data-give>♥ Give</button></div>'}

function giveOv(tab){
 tab=tab||'mpesa';
 var tabs=[['mpesa','M-Pesa'],['bank','Bank'],['paypal','PayPal']];
 openOv(head('Partner with us','Give to the Ministry')+'<p>Every gift supports healing, community care and our branches. Choose how you would like to give.</p>'+
 '<div class="tabs" role="tablist">'+tabs.map(function(t){return'<button role="tab" data-tab="'+t[0]+'" aria-selected="'+(t[0]===tab)+'">'+t[1]+'</button>'}).join('')+'</div>'+
 '<div class="pane" data-pane="mpesa">'+row('M-Pesa Paybill',PAY.paybill)+row('Account name',PAY.acc)+'<p class="note">Open M-Pesa → Lipa na M-Pesa → Pay Bill → enter the details above.</p></div>'+
 '<div class="pane" data-pane="bank">'+row('Bank',PAY.bank)+row('Account name',PAY.acc)+row('Account number',PAY.num)+row('Branch',PAY.br)+row('SWIFT code',PAY.swift)+'</div>'+
 '<div class="pane" data-pane="paypal"><p>Give securely by card or PayPal balance from anywhere in the world.</p><div class="acts"><a class="btn btn-primary" target="_blank" rel="noopener" href="'+PAY.pp+'">Donate via PayPal</a></div></div>'+
 '<p class="note" style="text-align:center;margin-top:1.2rem;font-style:italic">"God loves a cheerful giver." - 2 Corinthians 9:7</p>');
 setTab(tab);
}
function setTab(t){$$('[data-tab]',dc).forEach(function(b){b.setAttribute('aria-selected',b.dataset.tab===t)});$$('[data-pane]',dc).forEach(function(p){p.classList.toggle('on',p.dataset.pane===t)})}
function copy(v,btn){
 var done=function(){btn.textContent='Copied ✓';btn.classList.add('ok');toast('Copied: '+v);setTimeout(function(){btn.textContent='Copy';btn.classList.remove('ok')},1800)};
 if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(v).then(done,function(){fb()});else fb();
 function fb(){var a=document.createElement('textarea');a.value=v;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');done()}catch(e){toast('Press and hold to copy')}a.remove()}
}

/* menu */
var burger=$('#burger'),menu=$('#menu');
function menuToggle(f){var o=typeof f==='boolean'?f:!menu.classList.contains('open');menu.classList.toggle('open',o);menu.setAttribute('aria-hidden',!o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.classList.toggle('lock',o);document.body.classList.toggle('mo',o)}
burger.addEventListener('click',function(){menuToggle()});

/* delegated clicks */
document.addEventListener('click',function(e){
 var t=e.target;
 var g=t.closest('[data-give]');if(g){e.preventDefault();menuToggle(false);giveOv(g.dataset.give);return}
 if(t.closest('#scrim')){menuToggle(false);return}
 var cp=t.closest('[data-copy]');if(cp){copy(cp.dataset.copy,cp);return}
 var tb=t.closest('[data-tab]');if(tb){setTab(tb.dataset.tab);return}
 var s=t.closest('[data-svc]');if(s){var v=S[+s.dataset.svc];if(!v)return;openOv(head('Weekly gathering',v[1])+'<div class="time" style="font-size:1.15rem">'+v[2]+'</div><p>'+v[3]+'</p><p class="note">Everyone is welcome. Come as you are.</p>'+visitBtns());return}
 var m=t.closest('[data-min]');if(m){var n=M[+m.dataset.min];openOv('<img class="hd" src="'+P(n[0])+'" alt="">'+head('Ministry',n[1])+'<p>'+n[2]+'</p>'+'<div class="acts"><a class="btn btn-primary" href="'+WA+encodeURIComponent('Hello, I would like to join the '+n[1])+'" target="_blank" rel="noopener">'+n[3]+' on WhatsApp</a><a class="btn btn-outline" href="#contact" data-close>Contact Us</a></div>');return}
 var b=t.closest('[data-bra]');if(b){var r=B[+b.dataset.bra],nm=r[0].replace(' (Headquarters)','').replace(' Branch','');openOv(head('Church branch',r[0])+'<p>'+r[1]+'</p><p class="note">Sabbath service: Saturday 10:00 AM. Prayer &amp; healing: Wednesday 7:00 PM.</p><div class="acts"><a class="btn btn-primary" target="_blank" rel="noopener" href="'+MAPS+encodeURIComponent(nm+' Kenya')+'">Get Directions</a><a class="btn btn-outline" href="tel:'+TEL+'">Call HQ</a></div>');return}
 var ev=t.closest('[data-evt]');if(ev){var z=E[+ev.dataset.evt];openOv(head(z[0]+' '+z[1],z[2])+'<div class="time">'+z[3]+'</div><p>'+z[4]+'</p><div class="acts"><a class="btn btn-primary" target="_blank" rel="noopener" href="'+WA+encodeURIComponent('Hello, I would like details about: '+z[2])+'">Ask on WhatsApp</a><a class="btn btn-outline" href="#contact" data-close>Contact Us</a></div>');return}
 if(t.closest('[data-close]')){closeOv();menuToggle(false)}
 if(t===ov||t.closest('#x')){closeOv();return}
 var a=t.closest('a[href^="#"]');
 if(a&&a.getAttribute('href').length>1){var el=$(a.getAttribute('href'));if(el){e.preventDefault();menuToggle(false);el.scrollIntoView({behavior:'smooth',block:'start'})}}
});
$('#top').addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

/* keyboard + focus trap */
document.addEventListener('keydown',function(e){
 if(e.key==='Escape'){if(ov.classList.contains('open'))closeOv();else if(menu.classList.contains('open'))menuToggle(false)}
 if(e.key==='Tab'&&ov.classList.contains('open')){var f=$$('button,a[href],[tabindex="0"]',dlg).filter(function(x){return x.offsetParent});if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&(document.activeElement===a||document.activeElement===dlg)){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
});
/* swipe down to close (mobile sheet) */
var sy=null;dlg.addEventListener('touchstart',function(e){sy=dlg.scrollTop===0?e.touches[0].clientY:null},{passive:true});
dlg.addEventListener('touchend',function(e){if(sy!==null&&e.changedTouches[0].clientY-sy>110)closeOv();sy=null},{passive:true});

/* scroll effects (single rAF-throttled handler) */
var hdr=$('#hdr'),bar=$('#bar'),top=$('#top'),secs=$$('main section[id]'),links=$$('#nav a'),tick=false;
function onScroll(){tick=false;var y=window.pageYOffset,h=document.documentElement.scrollHeight-innerHeight;
 revealPass();hdr.classList.toggle('scrolled',y>40);bar.style.width=(h>0?y/h*100:0)+'%';top.classList.toggle('on',y>500);
 var cur='home';secs.forEach(function(s){if(y>=s.offsetTop-120)cur=s.id});
 links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+cur)});bnavActive(y)}
window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();

/* reveal on scroll (re-callable: runs after every render) */
var io;
function revealPass(){$$('.rv:not(.in)').forEach(function(el){if(el.getBoundingClientRect().top<innerHeight*.98)el.classList.add('in')})}
function observeRV(){var els=$$('.rv:not(.in)');revealPass();if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});return}
if(!io)io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08,rootMargin:'0px 0px -30px 0px'});
els.forEach(function(el){io.observe(el)});
setTimeout(function(){els.forEach(function(el){if(!el.classList.contains('in')){var r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)el.classList.add('in')}})},1500)}


function initials(n){var w=String(n).replace(/\b(Most|Right|Reverend|Rev|Pst|Pastor|Hon|Bishop|Dr|Mr|Mrs|Ms|Prof)\b\.?/gi,'').split(/\s+/).filter(Boolean);return w.length?(w[0].charAt(0)+(w.length>1?w[w.length-1].charAt(0):'')).toUpperCase():'?'}
function ytId(v){return /^[\w-]{11}$/.test(ytFrom(v))}
function thumb(s){return 'https://img.youtube.com/vi/'+ytFrom(s[2])+'/hqdefault.jpg'}
function poster(s,i){return ytId(s[2])?'<img loading="lazy" src="'+thumb(s)+'" alt="">':'<div class="poster p'+(i%4)+'" aria-hidden="true"><i></i></div>'}
function media(s){var v=(s[2]||'').trim();
if(/^https?:\/\/(www\.|m\.)?(facebook|fb)\./.test(v))return'<iframe src="https://www.facebook.com/plugins/video.php?href='+encodeURIComponent(v)+'&show_text=false&autoplay=true" allow="autoplay;encrypted-media;fullscreen" allowfullscreen></iframe>';
if(/\.(mp4|webm)$/i.test(v))return'<video controls autoplay playsinline src="'+esc(v)+'"></video>';
if(ytId(v))return'<iframe src="https://www.youtube-nocookie.com/embed/'+ytFrom(v)+'?autoplay=1&rel=0" allow="autoplay;encrypted-media;picture-in-picture;fullscreen" allowfullscreen></iframe>';
return'<div class="poster p0" aria-hidden="true"><i></i></div><div class="soon"><div><h3 style="margin-bottom:.4rem">Video coming soon</h3><p style="color:rgba(255,255,255,.85)">This message will be uploaded shortly. Meanwhile, watch our latest services on YouTube.</p></div></div>'}
var ytOK=function(){return YT&&YT!=='#'};
var STEP=window.matchMedia&&matchMedia('(max-width:699px)').matches?3:6,SERLIM=STEP,SERCAT='All';
function applyF(){var n=0;$$('.vid').forEach(function(v){var ok=SERCAT==='All'||v.dataset.cat===SERCAT;if(ok){n++;v.classList.toggle('hide',n>SERLIM)}else v.classList.add('hide')});
var m=$('#more');if(m){m.hidden=n<=SERLIM;m.textContent='Show more sermons ('+(n-SERLIM)+')'}observeRV();revealPass()}
function rSer(){var f=SER[0];
$$('.yt').forEach(function(a){if(ytOK()){a.href=YT;a.hidden=false}else a.hidden=true});
$('#feat').innerHTML=f?'<button class="fth" data-play="0" aria-label="Play '+f[0]+'">'+poster(f,0)+'<span class="fplay" aria-hidden="true"></span></button><div class="fi"><span class="kick"><i></i>Latest message</span><h3>'+f[0]+'</h3><div class="meta"><span>'+f[1]+'</span>'+(f[4]?'<span>'+f[4]+'</span>':'')+'</div><p>Missed a service? Watch the most recent message and be encouraged.</p><div class="acts"><button class="btn btn-gold" data-play="0">&#9654;&nbsp; Watch now</button>'+(ytOK()?'<a class="btn btn-outline light" href="'+YT+'" target="_blank" rel="noopener">YouTube channel</a>':'')+'</div></div>':'';
var rest=SER.slice(1),cats=rest.map(function(s){return s[1]}).filter(function(v,i,a){return a.indexOf(v)===i});
$('#chips').innerHTML=cats.length>1?['All'].concat(cats).map(function(c){var k=c==='All'?rest.length:rest.filter(function(s){return s[1]===c}).length;return'<button class="chip'+(c===SERCAT?' on':'')+'" data-f="'+c+'">'+c+'<em>'+k+'</em></button>'}).join(''):'';
$('#serm').innerHTML=rest.length?rest.map(function(s,i){return'<button class="vid rv" style="--d:'+(i%3)*.1+'s" data-cat="'+s[1]+'" data-play="'+(i+1)+'"><div class="th">'+poster(s,i+1)+'<span class="bd">'+s[1]+'</span></div><div class="vb"><h3>'+s[0]+'</h3><small>'+(s[4]||(ytId(s[2])?'Watch now':'Video coming soon'))+'</small></div></button>'}).join(''):(f?'':'<div class="empty"><h3>Sermons will be posted here soon</h3><p>Please check back after the next Sabbath service.</p></div>');
applyF()}safe(rSer);
function rGal(){$('#gal').innerHTML=GAL.map(function(g,i){return'<button class="gi '+g[2]+'" data-gal="'+i+'" aria-label="View '+g[1]+'"><img loading="lazy" src="'+P(g[0])+'" alt="'+g[1]+'"><span>'+g[1]+'</span></button>'}).join('');}safe(rGal);
function rNews(){$('#newsGrid').innerHTML=!NW.length?'<p class="ss" style="grid-column:1/-1;margin:0">No news right now. Please check back soon.</p>':NW.map(function(n,i){return'<button class="card news rv" style="--d:'+i*.1+'s" data-news="'+i+'"><div class="body"><span class="tag">'+n[0]+(n[3]?' &middot; '+n[3]:'')+'</span><h3>'+n[1]+'</h3><p>'+n[2]+'</p><span class="more">Read more</span></div></button>'}).join('');;observeRV()}safe(rNews);
function rLead(){$('#lead').innerHTML=LD.length?LD.map(function(l,i){var nm=l[1]||'',role=l[0]||'',ph=l[3]?'<img loading="lazy" src="'+P(l[3])+'" alt="'+(nm||role)+'">':'';return'<button class="lead rv" style="--d:'+(i%3)*.08+'s" data-lead="'+i+'"><div class="av">'+(nm?'<span class="mono">'+initials(nm)+'</span>':'<svg class="sil" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21c.6-4.6 4-7 8.5-7s7.9 2.4 8.5 7z"/></svg>')+ph+'</div><div class="li"><small>'+role+'</small><h3'+(nm?'':' class="tba"')+'>'+(nm||'To be announced')+'</h3>'+(l[2]?'<p>'+l[2]+'</p>':'')+'</div></button>'}).join(''):'<p class="ss" style="grid-column:1/-1">Our leadership team will be listed here soon.</p>'}safe(rLead);
function rInv(){$('#inv').innerHTML=IV.map(function(v,i){return'<button class="card inv rv" style="--d:'+i*.08+'s" data-inv="'+i+'"><span class="num">0'+(i+1)+'</span><div class="body"><div class="ico2">'+v[0]+'</div><h3>'+v[1]+'</h3><p>'+v[2]+'</p><span class="more">Get started</span></div></button>'}).join('')}safe(rInv);
function rFaq(){$('#faqList').innerHTML=FQ.map(function(q){return'<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('');}safe(rFaq);

/* sermon filter, player, news, involve */
document.addEventListener('click',function(e){
 var t=e.target,c=t.closest('[data-f]');
 if(c){SERCAT=c.dataset.f;SERLIM=STEP;$$('.chip').forEach(function(x){x.classList.toggle('on',x===c)});applyF();return}
 if(t.closest('#more')){SERLIM+=STEP;applyF();return}
 var p=t.closest('[data-play]');
 if(p){var s=SER[+p.dataset.play];openOv(head(s[1],s[0])+'<div class="player">'+media(s)+'</div><div class="acts">'+(ytOK()?'<a class="btn btn-primary" href="'+YT+'" target="_blank" rel="noopener">More on YouTube</a>':'')+'<button class="btn btn-outline" data-give>♥ Give</button></div>');return}
 var n=t.closest('[data-news]');
 if(n){var w=NW[+n.dataset.news];openOv(head(w[0],w[1])+'<p>'+w[2]+'</p><div class="acts"><a class="btn btn-primary" href="'+WA+encodeURIComponent('Hello, I would like to know more: '+w[1])+'" target="_blank" rel="noopener">Ask on WhatsApp</a></div>');return}
 var v=t.closest('[data-inv]');
 if(v){var q=IV[+v.dataset.inv];openOv(head('Get involved',q[1])+'<p>'+q[2]+'</p><p class="note">Send us a quick WhatsApp message and a church leader will get back to you.</p><div class="acts"><a class="btn btn-primary" href="'+WA+encodeURIComponent('Hello, '+q[3])+'" target="_blank" rel="noopener">Message us on WhatsApp</a><a class="btn btn-outline" href="#contact" data-close>Contact Form</a></div>')}
});

/* lightbox */
var lb=$('#lb'),li=0,lbi=$('#lbi');
function showLb(i){li=(i+GAL.length)%GAL.length;lbi.style.opacity=0;setTimeout(function(){lbi.src=P(GAL[li][0]);lbi.alt=GAL[li][1];$('#lbc').textContent=GAL[li][1]+'  ('+(li+1)+'/'+GAL.length+')';lbi.style.opacity=1},150)}
function openLb(i){lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.classList.add('lock');showLb(i)}
function closeLb(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.classList.remove('lock')}
document.addEventListener('click',function(e){var g=e.target.closest('[data-gal]');if(g)return openLb(+g.dataset.gal);if(e.target.closest('#lb .c')||e.target===lb)closeLb();if(e.target.closest('#lb .pv'))showLb(li-1);if(e.target.closest('#lb .nx'))showLb(li+1)});
document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')showLb(li-1);if(e.key==='ArrowRight')showLb(li+1)});
var lx=null;lb.addEventListener('touchstart',function(e){lx=e.touches[0].clientX},{passive:true});lb.addEventListener('touchend',function(e){if(lx===null)return;var d=e.changedTouches[0].clientX-lx;if(Math.abs(d)>50)showLb(li+(d<0?1:-1));lx=null},{passive:true});

/* contact form -> WhatsApp */
$('#cform').addEventListener('submit',function(e){e.preventDefault();var f=e.target;var m='Hello, I am '+f.n.value+(f.p.value?' ('+f.p.value+')':'')+'. '+f.m.value;window.open(WA+encodeURIComponent(m),'_blank','noopener');toast('Opening WhatsApp...');f.reset()});

document.addEventListener('click',function(e){var c=e.target.closest('[data-lead]');if(!c)return;var l=LD[+c.dataset.lead];openOv((l[3]?'<img class="hd" style="height:auto;max-height:55vh;object-fit:contain;background:#f3f3f3" src="'+P(l[3])+'" alt="">':'')+head(l[1]?l[0]:'Leadership',l[1]||l[0])+(l[2]?'<p>'+l[2]+'</p>':'')+'<div class="acts"><a class="btn btn-outline" href="#contact" data-close>Contact the office</a></div>')});
/* image fallback: missing photo -> temporary stand-in -> hidden */
function fixImg(im){var n=(im.getAttribute('src')||'').split('/').pop().replace('.jpg','');if(FB[n]&&!im.dataset.f){im.dataset.f=1;im.src=IMG+FB[n]+'?w=900&fit=crop'}else im.style.visibility='hidden'}
document.addEventListener('error',function(e){if(e.target.tagName==='IMG')fixImg(e.target)},true);
$$('img').forEach(function(im){if(im.complete&&im.naturalWidth===0)fixImg(im)});

/* ===== Admin-managed content (Firebase). Does nothing until FIREBASE_CONFIG is filled in data.js ===== */
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function ytFrom(v){v=(v||'').trim();var x=v.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);return x?x[1]:v}
function loadScript(u){return new Promise(function(ok,no){var s=document.createElement('script');s.src=u;s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
function nice(d){return d?new Date(d+'T00:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):''}
function ord(a){return a.slice().sort(function(x,y){return(x.order==null?1e9:x.order)-(y.order==null?1e9:y.order)})}
function digits(v){return String(v||'').replace(/\D/g,'')}
function applySet(c){
 if(c.annOn&&c.annText){var an=$('#ann'),key='gla-ann-'+c.annText,gone=false;try{gone=sessionStorage.getItem(key)}catch(e){}
  if(!gone){$('.annt',an).textContent=c.annText;var ab=$('.annb',an);if(c.annLink&&/^https?:/i.test(c.annLink)){ab.href=c.annLink;ab.textContent=c.annBtn||'Learn more';ab.hidden=false}else ab.hidden=true;an.hidden=false;requestAnimationFrame(function(){an.classList.add('on')});
   $('.annx',an).onclick=function(){an.classList.remove('on');setTimeout(function(){an.hidden=true},400);try{sessionStorage.setItem(key,1)}catch(e){}}}}
 if(c.yt){YT=c.yt;rSer()}
 var wd=digits(c.whatsapp);if(wd){WA='https://wa.me/'+wd+'?text=';$$('a[href*="wa.me/"]').forEach(function(a){a.href=a.href.replace(/wa\.me\/\d+/,'wa.me/'+wd)});$$('[data-x="waText"]').forEach(function(e){e.textContent='+'+wd})}
 if(c.phone){TEL='+'+digits(c.phone);$$('[data-x="phone"]').forEach(function(e){e.textContent=c.phone});$$('a[data-x-tel]').forEach(function(a){a.href='tel:'+TEL})}
 if(c.email){$$('[data-x="email"]').forEach(function(e){e.textContent=c.email});$$('a[data-x-mail]').forEach(function(a){a.href='mailto:'+c.email})}
 if(c.address)$$('[data-x="address"]').forEach(function(e){e.innerHTML=esc(c.address).replace(/\n/g,'<br>')});
 ['facebook','instagram','yt'].forEach(function(k){var v=c[k];$$('.social a[data-social="'+(k==='yt'?'youtube':k)+'"]').forEach(function(a){if(v&&/^https?:/i.test(v)){a.href=v;a.hidden=false}})});
 if(c.paybill)PAY.paybill=c.paybill;if(c.accName)PAY.acc=c.accName;if(c.bank)PAY.bank=c.bank;if(c.accNum)PAY.num=c.accNum;if(c.bankBranch)PAY.br=c.bankBranch;if(c.swift)PAY.swift=c.swift;if(c.paypal)PAY.pp=c.paypal}
function initCloud(){
$$('.social a[href="#"]').forEach(function(a){a.hidden=true});
if(!window.FIREBASE_CONFIG||!FIREBASE_CONFIG.apiKey)return;
var FBU='https://www.gstatic.com/firebasejs/10.12.2/';
loadScript(FBU+'firebase-app-compat.js').then(function(){return loadScript(FBU+'firebase-firestore-compat.js')}).then(function(){
firebase.initializeApp(FIREBASE_CONFIG);var db=firebase.firestore();
function get(c){return db.collection(c).get().then(function(s){return s.docs.map(function(d){return d.data()})})}
function done(){observeRV();revealPass()}
var t=new Date(),today=t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2);
/* dated content: shows exactly what the admin published */
get('events').then(function(a){E=a.filter(function(x){return x.date>=today}).sort(function(x,y){return x.date<y.date?-1:1}).map(function(x){var d=new Date(x.date+'T00:00:00');return[d.toLocaleString('en',{month:'short'}).toUpperCase(),''+d.getDate(),esc(x.title),esc(x.time),esc(x.desc)]});rEvt()}).catch(function(){});
get('news').then(function(a){NW=a.sort(function(x,y){return x.date<y.date?1:-1}).map(function(x){return[esc(x.tag||'News'),esc(x.title),esc(x.text),nice(x.date)]});rNews()}).catch(function(){});
get('sermons').then(function(a){SER=a.sort(function(x,y){return(x.date||'')<(y.date||'')?1:-1}).map(function(x){return[esc(x.title),esc(x.cat||'Sermon'),ytFrom(x.video),'',nice(x.date)]});SERCAT='All';SERLIM=STEP;rSer()}).catch(function(){});
/* list content: once the admin has published at least one item, the admin's list replaces the built-in one */
function list(col,fn){get(col).then(function(a){if(!a.length)return;fn(ord(a));done()}).catch(function(){})}
list('leaders',function(a){LD=a.map(function(x){return[esc(x.role),esc(x.name),esc(x.bio),esc(x.photo)]});rLead()});
list('gallery',function(a){GAL=a.map(function(x){return[esc(x.photo),esc(x.caption),esc(x.size)]});rGal()});
list('ministries',function(a){M=a.map(function(x){return[esc(x.photo),esc(x.title),esc(x.desc),esc(x.btn||'Learn more')]});FMIN=M.slice(0,6).map(function(x){return x[1]});rMin();rFmin()});
list('services',function(a){S=a.map(function(x){return[esc(x.icon||'🕊️'),esc(x.title),esc(x.time),esc(x.desc)]});Q=S.slice(0,4).map(function(x,i){return[x[1],x[2],i]});rSvc();rQuick()});
list('branches',function(a){B=a.map(function(x){return[esc(x.name),esc(x.desc)]});rBra()});
list('timeline',function(a){T=a.map(function(x){return[esc(x.when),esc(x.label||x.when),esc(x.title),esc(x.text)]});rTl()});
list('involve',function(a){IV=a.map(function(x){return[esc(x.icon||'🙋'),esc(x.title),esc(x.desc),esc(x.msg||'I would like to get involved')]});rInv()});
list('faq',function(a){FQ=a.map(function(x){return[esc(x.q),esc(x.a)]});rFaq()});
db.collection('settings').doc('site').get().then(function(d){if(d.exists)applySet(d.data())}).catch(function(){});
}).catch(function(){})}
initCloud();
observeRV();
window.addEventListener('resize',function(){revealPass()});
/* last-resort: never leave anything hidden */
setTimeout(function(){$$('.rv:not(.in)').forEach(function(el){el.classList.add('in')})},4500);

/* ===== Mobile experience ===== */
function bnavActive(y){var cs='home';secs.forEach(function(s){if(y>=s.offsetTop-120)cs=s.id});$$('#menuLinks a').forEach(function(l){l.classList.toggle('act',l.getAttribute('href')==='#'+cs)});var a=$$('#bnav a[data-s]'),cur=null;a.forEach(function(l){var s=document.getElementById(l.dataset.s),k=innerHeight*.45;if(s&&y>=s.offsetTop-k&&y<s.offsetTop+s.offsetHeight-k)cur=l});a.forEach(function(l){l.classList.toggle('on',l===cur)})}
/* swipe carousels get a slim progress indicator */
['#quick','#svc','#min','#evt','#newsGrid','#lead','#inv','#serm'].forEach(function(sel){safe(function(){var el=$(sel);if(!el)return;var p=document.createElement('div');p.className='cprog';p.innerHTML='<i></i>';el.parentNode.insertBefore(p,el.nextSibling);var th=p.firstChild;
 function up(){var max=el.scrollWidth-el.clientWidth;if(max<=4){p.style.visibility='hidden';return}p.style.visibility='visible';var w=Math.max(el.clientWidth/el.scrollWidth*100,14);th.style.width=w+'%';th.style.left=(el.scrollLeft/max)*(100-w)+'%'}
 el.addEventListener('scroll',up,{passive:true});window.addEventListener('resize',up);if(window.MutationObserver)new MutationObserver(up).observe(el,{childList:true});setTimeout(up,300);up()})});
/* legacy: read more */
safe(function(){var rm=$('#rm'),x=$('#xtra');if(!rm||!x)return;rm.addEventListener('click',function(){var o=x.classList.toggle('open');rm.setAttribute('aria-expanded',o);rm.textContent=o?'Show less':'Read more'})});


/* ministries: tap-to-expand accordion on phones (desktop keeps the pop-up) */
var MQ=window.matchMedia?matchMedia('(max-width:699px)'):{matches:false};
document.addEventListener('click',function(e){
 if(!MQ.matches)return;var c=e.target.closest('#min .card');if(!c)return;
 if(c.classList.contains('open')&&e.target.closest('.more'))return;
 e.stopPropagation();var o=!c.classList.contains('open');
 $$('#min .card.open').forEach(function(x){x.classList.remove('open');x.setAttribute('aria-expanded','false')});
 c.classList.toggle('open',o);c.setAttribute('aria-expanded',o);
 if(o)setTimeout(function(){var r=c.getBoundingClientRect();if(r.top<80||r.bottom>innerHeight-90)window.scrollTo({top:window.pageYOffset+r.top-90,behavior:'smooth'})},60)
},true);
/* "show all" buttons for long lists (phones only; CSS does the hiding) */
[['#lead',6,'leaders'],['#bra',4,'branches'],['#tl',3,'milestones']].forEach(function(c){safe(function(){var el=$(c[0]);if(!el)return;var b=document.createElement('button');b.type='button';b.className='xbtn';el.parentNode.insertBefore(b,el.nextSibling);var open=false;
 function up(){var n=el.children.length;b.hidden=n<=c[1];el.classList.toggle('clip',!open);b.textContent=open?'Show less':'Show all '+n+' '+c[2];b.setAttribute('aria-expanded',open)}
 b.addEventListener('click',function(){open=!open;up();if(!open){var s=el.closest('section');if(s)s.scrollIntoView({behavior:'smooth',block:'start'})}});
 if(window.MutationObserver)new MutationObserver(up).observe(el,{childList:true});up()})});
/* drawer: swipe right to close */
safe(function(){var sx=null;menu.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});menu.addEventListener('touchend',function(e){if(sx!==null&&e.changedTouches[0].clientX-sx>70)menuToggle(false);sx=null},{passive:true})});

})();
