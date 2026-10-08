(function(){
  const cfgReady = window.TLM_SUPABASE_URL && !window.TLM_SUPABASE_URL.includes('YOUR-PROJECT') && window.TLM_SUPABASE_ANON_KEY && !window.TLM_SUPABASE_ANON_KEY.includes('YOUR_');
  window.tlmSupabase = cfgReady && window.supabase ? window.supabase.createClient(window.TLM_SUPABASE_URL, window.TLM_SUPABASE_ANON_KEY) : null;

  const menu=document.querySelector('.menu'), nav=document.querySelector('nav');
  menu?.addEventListener('click',()=>{ if(!nav)return; nav.classList.toggle('mobile-open'); });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));

  async function refreshAccountLink(){
    const link=document.getElementById('accountLink'); if(!link)return;
    if(!tlmSupabase){ link.textContent='LOGIN'; link.href='login.html'; return; }
    const {data:{user}}=await tlmSupabase.auth.getUser();
    link.textContent=user?'ACCOUNT':'LOGIN'; link.href=user?'profile.html':'login.html';
  }
  refreshAccountLink();
  window.tlmRequireConfig=()=>{ if(tlmSupabase)return true; alert('Supabase is not configured yet. Open supabase-config.js and add your project URL and anon key.'); return false; };
})();
