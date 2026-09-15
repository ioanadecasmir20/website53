document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const form=document.querySelector('#contactForm');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(form);const subject=encodeURIComponent('Website enquiry - '+(f.get('service')||'Guarnest Security'));const body=encodeURIComponent(`Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\n\n${f.get('message')}`);document.querySelector('.notice').classList.add('show');window.location.href=`mailto:info@guarnestsecurity.co.uk?subject=${subject}&body=${body}`;});}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});