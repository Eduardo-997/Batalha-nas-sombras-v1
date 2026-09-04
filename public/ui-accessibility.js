(()=>{
  // Melhorias de acessibilidade sem interferir em regras ou estados do jogo.
  const labels={
    soundToggle:'Ativar ou desativar sons do jogo',
    reset:'Reiniciar partida',resetBtn:'Reiniciar partida',
    quickRulesBtn:'Abrir regras',rulesBtn:'Abrir regras da Arena',
    replayBtn:'Abrir replay'
  };
  for(const [id,label] of Object.entries(labels)){
    const el=document.getElementById(id); if(el && !el.getAttribute('aria-label')) el.setAttribute('aria-label',label);
  }
  const vol=document.getElementById('volumeControl'); if(vol && !vol.getAttribute('aria-label')) vol.setAttribute('aria-label','Volume dos sons do jogo');
  const room=document.getElementById('roomCode'); if(room && !room.getAttribute('aria-label')) room.setAttribute('aria-label','Código da sala');
  for(const id of ['status','phase','connectionStatus','readyStatus']){
    const el=document.getElementById(id); if(el){el.setAttribute('aria-live','polite');el.setAttribute('aria-atomic','true');}
  }
  // Os cards de escolha de modalidade da Arena também funcionam por teclado.
  for(const id of ['soloMode','onlineMode']){
    const el=document.getElementById(id); if(!el) continue;
    el.setAttribute('role','button'); el.setAttribute('tabindex','0');
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}});
  }

  // v1.15.26 — hotfix mobile: os controles não podem ficar presos sobre o tabuleiro.
  const mobileControlsFix=document.createElement('style');
  mobileControlsFix.id='v11526-mobile-controls-fix';
  mobileControlsFix.textContent='@media(max-width:980px){.controls{position:static!important;bottom:auto!important;z-index:auto!important;backdrop-filter:none!important}}';
  document.head.appendChild(mobileControlsFix);
})();
