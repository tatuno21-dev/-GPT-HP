const toggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('#company-mobile-nav');
document.querySelectorAll('[data-animate-chars]').forEach(el=>{const nodes=[...el.childNodes];let index=0;el.replaceChildren(...nodes.flatMap(node=>{if(node.nodeName==='BR')return[node];return[...node.textContent].map(char=>{const span=document.createElement('span');span.className='char';span.textContent=char===' '?'\u00a0':char;span.style.setProperty('--char-index',index++);return span})}))});
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','メニューを開く');mobileNav.hidden=true}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');mobileNav.hidden=!open});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();toggle.focus()}});
if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el)})}
