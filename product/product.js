const b=document.querySelector('header button'),m=document.querySelector('#mobile');b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o});m.querySelectorAll('a').forEach(a=>a.onclick=()=>{m.hidden=true;b.setAttribute('aria-expanded','false')});

const motionQuery=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!motionQuery.matches){
  const revealItems=document.querySelectorAll('.section .label,.section .lead,.dual article,.steps article,.value,.screen,.uses article,.detail-gallery,.scene-head,.scene-card,.contact h2,.contact>p,.dss-guides h2');
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    });
  },{threshold:0.08,rootMargin:'0px 0px -35px 0px'});
  revealItems.forEach(item=>{item.classList.add('reveal');observer.observe(item)});
  document.documentElement.classList.add('js-motion');
}
