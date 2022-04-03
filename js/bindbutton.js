function bindRedirection(btn, lien){
  btn.onclick = function() {
    document.location.href=lien;
  }
}

function bindInput(text, tab){
  text.addEventListener('keydown', (e) => {
    if(e['code'] == 'Enter'){
      let m = new manga(tab[0].value,tab[1].value,tab[2].value,tab[3].value,tab[4].value);
      createManga(m,'stock');

      tab[0].value = '';
      tab[1].value = '';
      tab[2].value = 0;
      tab[3].value = '';
      tab[4].value = '';
      popup();
    }
  });
}

function bindRegarde(btn, lien){
  btn.onclick = function() {
    //window.open(lien,'blank');
    navigator.clipboard.writeText(lien);
  }
}

function bindAjout(btn){
  btn.addEventListener('click', ajouter)
}

function bindListe(btn){
  btn.addEventListener('click', list)
}

function bindEnAttente(btn){
  btn.addEventListener('click', enAttente)
}

function bindFinit(btn){
  btn.addEventListener('click', finitf)
}

function bindTelechargement(btn) {
  btn.onclick = function () {
    telechargement();
  }
}
function bindSupp(btn,idManga){
  btn.onclick = function () {
    supprimerManga(idManga);
  };
}

function bindMettreEnAttente(btn,idManga){
  btn.onclick = function () {
    mettreEnAttenteManga(idManga);
  };
}

function bindEnleverEnAttente(btn, idManga){
  btn.onclick = function () {
    enleverEnAttente(idManga);
  };
}

function bindMettreFinit(btn,idManga){
  btn.onclick = function () {
    finitManga(idManga)
  }
}

function bindEnleverFinit(btn,idManga) {
  btn.onclick = function () {
    enleverFinitManga(idManga)
  }
}
//http://www.mavanimes.co/?__cf_chl_jschl_tk__=2269b446e8e27ab8200927a38da18131be0cc3fb-1597060006-0-ASoxcmkNun3LUFi6nCTvgW7HTI5ojrBJ0DBhKJlk-Sq9JGmWKRnx-EX8gF_XbOKJExka3TTRFuaozqJ6vZ32OExQuP3MWmRShhB4jijS8UQRkQiKHbbmd0BcDwXo0TUX-KTxahtceKjmm6p-ENumByAOmpI4kJs8OxmGYKhiXkEDh02ZSyVqQWwpRz-nkLxuNPfmOWDN3hxENyie3fQZ-410Y7IApnDnFZShN8pLrlOB8LudpW4fRopNH-KlSJWinziMpFM4iItuMKf-hPISqRg

