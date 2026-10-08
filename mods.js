const search = document.getElementById('modSearch');
const filter = document.getElementById('categoryFilter');
const grid = document.getElementById('modGrid');
const mods = window.TLM_MODS || [];

[...new Set(mods.map(m => m.category))].sort().forEach(category => {
  const option = document.createElement('option'); option.value = category; option.textContent = category; filter.appendChild(option);
});

function renderMods(){
  const term=(search.value||'').trim().toLowerCase(); const cat=filter.value;
  const filtered=mods.filter(m => (cat==='all'||m.category===cat) && [m.name,m.description,m.category].some(v=>v.toLowerCase().includes(term)));
  grid.innerHTML = filtered.length ? filtered.map((m,i)=>`
    <article class="mod-card"><div class="mod-card-top"><span>${m.id}</span><span>${m.category}</span></div><h2>${m.name}</h2><p>${m.description}</p><div class="mod-card-bottom"><span>${m.status==='available'?'AVAILABLE':'TEMPORARILY DOWN'}</span>${m.status==='available'?`<a class="btn primary" href="${m.url}" target="_blank" rel="noopener noreferrer">DOWNLOAD →</a>`:`<button class="btn ghost" disabled>UNAVAILABLE</button>`}</div></article>`).join('') : '<div class="empty-state"><strong>NO MATCHES</strong><p>TRY A DIFFERENT SEARCH.</p></div>';
}
search.addEventListener('input',renderMods); filter.addEventListener('change',renderMods); renderMods();
