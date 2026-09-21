const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#mobile-nav');
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','メニューを開く');nav.hidden=true;}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');nav.hidden=!open;});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!nav.hidden){closeMenu();toggle.focus();}});
window.matchMedia('(min-width:1101px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
