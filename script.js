const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '72px';
  nav.style.right = '5vw';
  nav.style.flexDirection = 'column';
  nav.style.background = '#080808';
  nav.style.padding = '20px';
  nav.style.border = '1px solid #252527';
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>{
    if(window.innerWidth<=750 && nav) nav.style.display='';
  });
});
